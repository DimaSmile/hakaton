<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\{User, Event, UserActivites ,Vacation};


class PagesController extends Controller
{
    private $validatedRules = [
        'dashboard' => [
            'token' => 'required',
        ],
        'trackTime' => [
            'token'         => 'required',
            'user_id'       => 'required',
            'button_status' => 'required',
        ],
        'team' => [
            'token' => 'required',
        ],
        'vacation' => [
            'token' => 'required',
        ],
    ];

    public function dashboard(Request $request)
    {
        $validated    = Validator::make($request->all(), $this->validatedRules['dashboard']);
        $result       = [];

        if($validated->fails())
        {
            $response = ['success'=>false, 'data'=>'Token is not found'];
            return response()->json($response, 201);
        }

        $closestEvent = Event::where('start', '>', date("Y-m-d H:i:s"))->select('name', 'start')->orderBy('start', 'asc')->first();
        $userData     = User::where('auth_token', $request->token)->select('vacation_days','sick_days', 'id')->first();

        $userData['event_name']         = $closestEvent->name;
        $userData['start_event_date']   = $closestEvent->start;
        $userData['graphics_info']      = $this->getUserActivites($userData->id);
        
        $response = ['success'=>true, 'data'=> $userData];
        

        return response()->json($response, 201);
    }

    public function trackTime(Request $request) {
        $validated    = Validator::make($request->all(), $this->validatedRules['trackTime']);
        $result       = [];
        
        if($validated->fails())
        {
            $response = ['success'=>false, 'data'=>'Token is not found'];
            return response()->json($response, 201);
        }

        if ($request->button_status) 
        {
            $date = date("Y-m-d H:i:s");
            //$this->dd($date);exit;
            $payload = [
                'user_id' => $request->user_id,
                'start' => $date
            ];
            $tracker = new UserActivites($payload);
            $tracker->save();

            $startTracker = User::find($request->user_id);
            $startTracker->update(['tracker_status' => 1]);
            $startTracker->save();
            // $this->dd($startTracker->tracker_status);
        }
        else
        {
            $date = date("Y-m-d H:i:s");
            $trackStatus = UserActivites::where([
                     ['user_id', '=', $request->user_id],
                     ['end', '=',  null]
                     ])->first();
            $trackStatus->end = $date;
            $trackStatus->save();

            $endTracker = User::find($request->user_id);
            $endTracker->update(['tracker_status' => 0]);
            $endTracker->save();

        }
        // $this->dd($trackStatus);
    }

    public function getUserActivites($user_id) {
        $userActivites = UserActivites::where('user_id', $user_id)->where('start', '>', Carbon::now()->subDays(7))->get()->toArray();
        $res = [];
        foreach ($userActivites as $key=>$date) {
            $res[date("Y-m-d" , strtotime($date['start']))][] = [
                'start' => $date['start'],
                'end' => $date['end']
            ];
        }

        $response = [];
        foreach ($res as $key=>$data) {
            foreach ($data as $val) {
                if ($key == date("Y-m-d" , strtotime($val['start']))) {
                    $response[$key] = Carbon::parse($val['start'])->diffInMinutes($val['end'])/60;
                }
            }
        }
        return $response;
    }

    public function team(Request $request) {
        $validated    = Validator::make($request->all(), $this->validatedRules['team']);

        if($validated->fails())
        {
            $response = ['success'=>false, 'data'=>['messages' => 'The given data was invalid.', 'errors' => $validated->errors()]];

            return response()->json($response, 201);
        }

        $response = ['success'=>true, 'data'=>User::select('name', 'position', 'image', 'start_working', 'birthday', 'role_id')->get()];

        return response()->json($response, 201);
    }

    public function teamCalendar(Request $request) {
        $validated    = Validator::make($request->all(), $this->validatedRules['team']);

        if($validated->fails())
        {
            $response = ['success'=>false, 'data'=>['messages' => 'The given data was invalid.', 'errors' => $validated->errors()]];

            return response()->json($response, 201);
        }

        $response = [
            'success'       => true,
            'user_data'     => User::select('name', 'position', 'image', 'start_working', 'birthday', 'role_id')->get(),
            'vacation_data' => Vacation::select('user_id','start','end'),
            'team_data'     => Event::select('name','start','end','description', 'user_id'),
        ];

        return response()->json($response, 201);
    }

    public function setVacation(Request $request) {
        $validated    = Validator::make($request->all(), $this->validatedRules['vacation']);

        if($validated->fails())
        {
            $response = ['success'=>false, 'data'=>['messages' => 'The given data was invalid.', 'errors' => $validated->errors()]];

            return response()->json($response, 201);
        }
        $payload = [
            'user_id'   => $request->id,
            'start'     => Carbon::parse($request->start)->format('Y-m-d H:i:s'),
            'end'       => Carbon::parse($request->end)->format('Y-m-d H:i:s'),
        ];

        $vacation = new Vacation($payload);

        $vacation->save();

        $response = ['success'=>true, 'data'=>['start' => $vacation->start, 'end' => $vacation->end, 'user_id' => $vacation->user_id]];

        return response()->json($response, 201);
    }

    private function dd($data) {
        echo "<pre>";
        var_dump($data);
        echo "</pre>"; exit;
    }
}
