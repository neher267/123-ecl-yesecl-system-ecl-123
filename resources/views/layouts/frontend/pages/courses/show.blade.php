@extends('layouts.frontend.master')

@section('content')

<iframe src="{{url('courses-details/'.$course->slug)}}" style="width: 100%; height: 100%"></iframe>

@endsection