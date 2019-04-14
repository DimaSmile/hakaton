<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\User::class, 10)->create();
        factory(App\User::class, 'admin', 1)->create();
        factory(App\Event::class, 10)->create();
        factory(App\Vacation::class, 10)->create();
        factory(App\UserActivites::class, 10)->create();
        

        for ($i = 1; $i <= 10; $i++ ) {
            DB::table('user_vacation')->insert([
                'user_id'     => rand(1, 10),
                'vacation_id' => rand(1, 10)
            ]);
        }
        DB::table('roles')->insert([
            [
                'role_name' => "admin",
            ],
            [
                'role_name' => "manager",
            ],
            [
                'role_name' => "employee",
            ],
        ]);
    }
}
