<?php

use Illuminate\Http\Request;
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('user/list', function(Request $request){

        $user = App\User::where('auth_token', $request->token)->first();
        //$user = App\User::where('birthday','!=', null) ->orderBy('birthday', 'asc')->get();

        $response = ['success'=>true, 'data'=>$user];
        return response()->json($response, 201);
    });

    Route::get('users/list', function(Request $request){

        $users = App\User::where('birthday','!=', null)->get();
        $new_users = [];
        foreach ($users as $user) {
            $new_users[] = '2019-' . Carbon::parse($user->birthday)->format('m-d');
            $new_users[] = '2020-' . Carbon::parse($user->birthday)->format('m-d');
        }
        asort($new_users);

        $response = ['success' => true, 'data' => $new_users];
        return response()->json($response, 201);
    });
});
Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
    Route::post('user/save-profile', 'UserController@saveProfile');
});