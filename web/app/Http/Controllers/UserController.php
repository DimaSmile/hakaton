<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\User;
use JWTAuth;
use App\Events\UserOnline;
use App\Events\UserOffline;
// use App\Vacation;
use App\Events\CheckUser;
use JWTAuthException;

class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function login(Request $request)
    {
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->is_active = true;
            $user->save();
            event(new UserOnline($user));
            $response = [
                'success' => true,
                'data'    =>
                    [
                        'id'            => $user->id,
                        'auth_token'    => $user->auth_token,
                        'name'          => $user->name,
                        'email'         => $user->email,
                        'image'         => $user->image,
                        'birthday'      => $user->birthday,
                        'start_working' => $user->start_working,
                        'vacation_days' => $user->vacation_days
                    ]
            ];
        }
        else 
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
      
        return response()->json($response, 201);
    }
    public function register(Request $request)
    { 
        //Define your validation rules here.
        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required'
        ];
        //Create a validator, unlike $this->validate(), this does not automatically redirect on failure, leaving the final control to you :)
        $validated = \Illuminate\Support\Facades\Validator::make($request->all(), $rules);

        //Check if the validation failed, return your custom formatted code here.
        if($validated->fails())
        {
            return response()->json(['status' => 'error', 'messages' => 'The given data was invalid.', 'errors' => $validated->errors()]);
        }

        if (!is_object($request->all())) {
            $payload = [
                'password'=>\Hash::make($request['password']),
                'email'=>$request['email'],
                'name'=>$request['name'],
                'auth_token'=> ''
            ];
        } else {
            $payload = [
                'password'=>\Hash::make($request->password),
                'email'=>$request->email,
                'name'=>$request->name,
                'auth_token'=> ''
            ];
        }
        
        $user = new \App\User($payload);
        if ($user->save())
        {
            
            $token = self::getToken($request->email, $request->password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\User::where('email', $request->email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        
        return response()->json($response, 201);
    }


    public function saveProfile(Request $request)
    {
        //Define your validation rules here.
        $rules = [
            'userName' => 'required',
            'birthdayDate' => 'required',
            'startDate' => 'required'
        ];
        //Create a validator, unlike $this->validate(), this does not automatically redirect on failure, leaving the final control to you :)
        $validated = \Illuminate\Support\Facades\Validator::make($request->all(), $rules);

        //Check if the validation failed, return your custom formatted code here.
        if($validated->fails())
        {
            return response()->json(['status' => 'error', 'messages' => 'The given data was invalid.', 'errors' => $validated->errors()]);
        }

        $user = \App\User::find($request->id);
        $date = Carbon::now();

        if (!is_object($request->all())) {
            $payload = [
                'name'          => $request['userName'],
                'birthday'      => Carbon::parse($request['birthdayDate'])->format('Y-m-d'),
                'start_working' => Carbon::parse($request['startDate'])->format('Y-m-d'),
                'vacation_days' => Carbon::parse($request['startDate'])->diffInMonths($date),

            ];
            if($request->get('avatar'))
            {
                $image = $request->get('avatar');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                $imagePath = \Image::make($request->get('avatar'))->save(public_path('images/').$name)->basename;
                $payload['image'] = env('APP_URL'). '/images/'.$imagePath;
            }
            if($request['password']){
                $payload['password'] = \Hash::make($request['password']);
            }
        } else {
            $payload = [
                'name'          => $request->userName,
                'birthday'      => Carbon::parse($request->birthdayDate)->format('Y-m-d H:i:s'),
                'start_working' => Carbon::parse($request->startDate)->format('Y-m-d H:i:s'),
                'vacation_days' => Carbon::parse($request->startDate)->diffInMonths($date)
            ];
            if($request->get('avatar'))
            {
                $image = $request->get('avatar');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                $imagePath = \Image::make($request->get('avatar'))->save(public_path('images/').$name)->basename;
                $payload['image'] = env('APP_URL'). '/images/'.$imagePath;
            }
            if($request->password){
                $payload['password'] = \Hash::make($request->password);
            }
        }

        $user->update($payload);
        if ($user->save())
        {
            $response = [
                'success'=>true,
                'data'=>
                    [
                        'name'          => $user->name,
                        'id'            => $user->id,
                        'email'         => $user->email,
                        'auth_token'    => $user->auth_token,
                        'image'         => $user->image,
                        'birthday'      => $user->birthday,
                        'start_working' => $user->start_working,
                        'vacation_days' => $user->vacation_days
                    ]
            ];
        }
        else {
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        }


        return response()->json($response, 201);
    }

}
