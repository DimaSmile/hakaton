<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['id', 'name', 'start', 'end', 'description', 'user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
