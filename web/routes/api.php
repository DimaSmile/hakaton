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
        $usersData = [];

        $allUsersBirthdays = [];
        foreach ($users as $user) {
            $userData = [
                'current_birthday'  => '2019-' . Carbon::parse($user->birthday)->format('m-d'),
                'user_name'         => $user->name,
                'avatar'            => $user->image
            ];
            $usersData[] = (object)$userData;
            $userData = [
                'current_birthday'  => '2020-' . Carbon::parse($user->birthday)->format('m-d'),
                'user_name'         => $user->name,
                'avatar'            => $user->image
            ];
            $usersData[] = (object)$userData;

            if(Carbon::parse($user->birthday)->format('m-d') > Carbon::now()->format('m-d')){
                $allUsersBirthdays[$user->id] = Carbon::parse($user->birthday)->format('m-d');
            }
        }
        asort($allUsersBirthdays);
        asort($usersData);
        reset($allUsersBirthdays);

        $closestBirthdayUserId = key($allUsersBirthdays);

        $closestBirthdayUser = App\User::where('id',$closestBirthdayUserId)->first();

        $closestUserData = [
            'current_birthday'  => '2019-' . Carbon::parse($closestBirthdayUser->birthday)->format('m-d'),
            'user_name'         => $closestBirthdayUser->name,
            'avatar'            => $closestBirthdayUser->image
        ];
        $usersData['closest_birthday'] = (object)$closestUserData;

        $response = ['success' => true, 'data' => $usersData];
        return response()->json($response, 201);
    });

    Route::post('get-dashboad-info', 'PagesController@dashboard');
    Route::post('get-team-info', 'PagesController@team');
});
Route::group(['middleware' => 'api-header'], function () {

    // The registration and login requests doesn't come with tokens
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
    Route::post('user/save-profile', 'UserController@saveProfile');
    //Route::get('get-dashboad-info', 'DashBoardController@index');

});

