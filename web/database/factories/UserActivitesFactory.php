<?php

use Faker\Generator as Faker;
use App\UserActivites;

$factory->define(UserActivites::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 10),
        'start'   => $faker->dateTimeBetween('-1 days', '+1 days'),
        'end'     => $faker->dateTimeBetween('-1 days', '+1 days'),
    ];
});
