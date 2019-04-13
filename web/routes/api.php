<?php

use Illuminate\Http\Request;

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
    Route::get('users/list', function(Request $request){

        $user = App\User::where('auth_token', $request->token)->first();
        
        $response = ['success'=>true, 'data'=>$user];
        return response()->json($response, 201);
    });

    Route::post('get-dashboad-info', 'PagesController@dashboard');
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

