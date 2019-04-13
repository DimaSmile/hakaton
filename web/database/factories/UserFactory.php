<?php

use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Carbon\Carbon;


/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {

    $start_working = $faker->dateTimeBetween('-2 years', '-1 years')->format('Y-m-d');
    $start_working = (array)($start_working);
    $vacation_days = Carbon::parse($start_working[0])->diffInMonths(date("Y-m-d"));

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => \Hash::make(111111),
        'remember_token' => Str::random(10),
        'auth_token' => '',
        'birsday' => $faker->dateTimeBetween('-30 years', '-15 years')->format('Y-m-d'),
        'start_working' => $start_working[0],
        'vacation_days' => floor($vacation_days),
        'sick_days' => 5
    ];
});

$factory->defineAs(User::class, 'admin', function (Faker $faker) {
    $start_working = $faker->dateTimeBetween('-2 years', '-1 years')->format('Y-m-d');
    $start_working = (array)($start_working);
    $vacation_days = Carbon::parse($start_working[0])->diffInMonths(date("Y-m-d"));

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => \Hash::make(111111),
        'remember_token' => Str::random(10),
        'auth_token' => '',
        'role_id' => 1,
        'birsday' => $faker->dateTimeBetween('-50 years', '-40 years')->format('Y-m-d'),
        'start_working' => $start_working[0],
        'vacation_days' => floor($vacation_days),
        'sick_days' => 5
    ];
});
