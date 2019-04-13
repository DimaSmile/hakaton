<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function($table) {
            $table->integer('role_id')->unsigned()->default(3);
            $table->string('image')->nullable();
            $table->date('birthday')->nullable();
            $table->date('start_working')->nullable();
            $table->integer('vacation_days')->nullable();
            $table->integer('sick_days')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function($table) {
            $table->dropColumn('role_id');
            $table->dropColumn('image');
            $table->dropColumn('birthday');
            $table->dropColumn('start_working');
            $table->dropColumn('vacation_days');
            $table->dropColumn('sick_days');
        });
    }
}
