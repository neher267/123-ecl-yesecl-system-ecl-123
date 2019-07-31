<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->string('name', 191);
            $table->decimal('order', 5,0)->default(0);
            $table->string('title', 191);
            $table->string('slug', 191)->unique();
            $table->boolean('hands_on'); // training type
            $table->text('summary');
            $table->longText('about');
            $table->text('learning');
            $table->text('enroll'); // who can enroll?
            $table->text('job_opp'); //  job oppentunities
            $table->string('thumnail', 100);
            $table->string('background', 100); // background image 
            $table->string('referance', 100)->nullable(); // refenence book image
            $table->decimal('duration', 5,2);
            $table->decimal('fee', 7,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
