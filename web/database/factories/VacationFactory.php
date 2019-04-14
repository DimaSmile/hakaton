<?php
use App\Vacation;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Vacation::class, function (Faker $faker) {
    return [
        'start'    => $faker->dateTimeBetween('-30 days', '+30 days'),
        'end'      => $faker->dateTimeBetween('+30 days', '+60 days'),
        'approved' => $faker->numberBetween(0, 1),
    ];
});

