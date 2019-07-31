@extends('layouts.frontend.master')

@section('content')
<section class="page-section">
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <form  action="{{url('course-registration')}}" method="post">
                    {{csrf_field()}}

                    <h2 class="text-center details-heading" style="margin-top: 20px;">Course Registration Form</h2>
                        <div class="form-group">
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </div>

                        <div class="details-fonts">   
                            <div style="padding-bottom:5px;">
                                <select class="form-control details-fonts" name="course_id" required style="width:100%; margin-left: 5px; height: 40px">
                                    <option value="">Select a course</option>
                                    @foreach($courses as $course)
                                    <option value="{{$course->id}}" {{old('course_id') == $course->id ? 'selected':''}}>{{$course->title}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div style="padding-bottom:5px;">
                                <input value="{{ old('name') }}" name="name" type="text" id="" placeholder="Your Name" style="width:100%" required  class="form-row form-row-last" />
                            </div>

                            <div style="padding-bottom:5px;">
                                <input value="{{ old('mobile') }}" name="mobile" type="text" id="" placeholder="Your Phone" style="width:100%" required  class="form-row form-row-last" />
                            </div>

                            <div style="padding-bottom:5px;">
                                <input value="{{ old('email') }}" name="email" type="text" id="" placeholder="If Your have a mail ID" style="width:100%" class="form-row form-row-last" />
                            </div>                           

                            <div style="padding-bottom:5px;">
                                <input value="{{ old('current_institute') }}" name="current_institute" type="text" id="" placeholder="Current Institute: Ex-BUET" style="width:100%" required  class="form-row form-row-last" />
                            </div>  

                            
                            <div style="padding-bottom:5px; margin-left: 5px; margin-right: 3px">
                                <textarea name="qualifications" rows="4" style="width:101%;" id="Pagebody_message" placeholder="Your Qualifications. Ex- B.Sc in CSE" aria-invalid="false" required >{{ old('qualifications') }}</textarea>
                            </div>


                            <input type="submit" value="Register" id="Pagebody_btnSend" class="cws-button border-radius pull-right" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection