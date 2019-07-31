<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentInfoRequest as Request;

use App\StudentInfo;

class StudentCouseRegistrationController extends Controller
{
    public function store(Request $request)
    {
    	$data = new StudentInfo;
        $data->name = $request->name;
        $data->course_id = $request->course_id;
        $data->mobile = $request->mobile;
        $data->email = $request->email;
        $data->current_institute = $request->current_institute;
        $data->qualifications = $request->qualifications;
        $data->created_by = 1;
        $data->save();

        return redirect('/')->withSuccess("Thank you for your registration. We will contact you soon..");
    }
}
