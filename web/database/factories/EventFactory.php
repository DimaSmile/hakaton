<?php

use App\Event;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return [
        'name'          => $faker->catchPhrase,
        'start'         => $faker->dateTimeBetween('-30 days', '+30 days'),
        'end'           => $faker->dateTimeBetween('+30 days', '+60 days'),
        'description'   => "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        'user_id'       => $faker->numberBetween(1, 10),
    ];
});
