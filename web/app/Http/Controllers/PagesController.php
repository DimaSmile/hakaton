<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\{User, Event};

class PagesController extends Controller
{
    private $validatedRules = [
        'dashboard' => [
            'token' => 'required',
        ]
    ];

    public function dashboard(Request $request) 
    {
        $validated    = Validator::make($request->all(), $this->validatedRules['dashboard']);
        $result       = [];
        
        if($validated->fails())
        {
            return ['success'=>false, 'data'=>'Token is not found'];
        }

        $closestEvent = Event::where('start', '>', date("Y-m-d H:i:s"))->select('name', 'start')->orderBy('start', 'asc')->first();
        $userData     = User::where('auth_token', $request->token)->select('vacation_days','sick_days')->first();

        $userData['event_name']       = $closestEvent->name;
        $userData['start_event_date'] = $closestEvent->start;
        
        return ['success'=>true, 'data'=> $userData];
    }

    private function dd($data) {
        echo "<pre>";
        var_dump($data);
        echo "</pre>"; exit;
    }
}
