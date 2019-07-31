<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_student', function (Blueprint $table) {
            $table->primary(['course_id', 'student_id']);
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('student_id');
            $table->decimal('course_fee',7,2)->unsigned()->default(0);
            $table->decimal('after_discunt',7,2)->unsigned()->default(0);
            $table->tinyInteger('active');
            $table->tinyInteger('payment_status')->default(0);//0=unpaid; 1=pai
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('student_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('course_student');
    }
}
