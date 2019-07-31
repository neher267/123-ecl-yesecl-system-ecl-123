<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Training\Course;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_info_id','name','gender', 'address', 'designation', 'email', 'password', 'role', 'about', 'image' 
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class,'course_student', 'student_id', 'course_id')
        ->withTimestamps()
        ->withPivot('course_fee', 'after_discunt', 'discount_per', 'active', 'payment_status');
    }

    public function active_courses()
    {
        return $this->belongsToMany(Course::class,'course_student', 'student_id', 'course_id')->wherePivot('active', 1);
    }

    public function paid_courses()
    {
        return $this->belongsToMany(Course::class,'course_student', 'student_id', 'course_id')->wherePivot('payment_status', 1);
    }

    public function unpaid_courses()
    {
        return $this->belongsToMany(Course::class,'course_student', 'student_id', 'course_id')->wherePivot('payment_status', 0);
    }

    public function payable_course($id)
    {
        return $this->belongsToMany(Course::class,'course_student', 'student_id', 'course_id')
        ->where('course_id', $id)
        ->withPivot('after_discunt');
    }

    public function account()
    {
        return $this->hasOne(Account::class);
    }

    public function transactions()
    {
        return $this->hasMany(StudentTransaction::class);
    }

    

    
}
