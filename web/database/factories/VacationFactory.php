<?php
use App\Vacation;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Vacation::class, function (Faker $faker) {
    return [
        'user_id'  => $faker->numberBetween(1, 10),
        'start'    => $faker->dateTimeBetween('-5 days', '+5 days'),
        'end'      => $faker->dateTimeBetween('+5 days', '+10 days'),
        'approved' => $faker->numberBetween(0, 1),
    ];
});

