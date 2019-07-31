<?php

namespace App\Models\Training;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Course extends Model
{
    public function getRouteKeyName()
    {
    	return 'slug';
    }

    public function students()
    {
    	return $this->belongsToMany(User::class,'course_student', 'course_id', 'student_id')->withTimestamps();
    }

    public function active_students()
    {
    	return $this->belongsToMany(User::class,'course_student', 'course_id', 'student_id')->wherePivot('active', 1);
    }

    
}
