@extends('layouts.frontend.master')

@section('content')

    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/bootstrap.min.css')}}">
    <link href="{{asset('public/themes/liveware/css/bootstrap-3.3.6.css')}}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.css">  
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:100,300,300i,400,400i,500,700,900" rel="stylesheet">
    <!-- Stylesheets -->
  
    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/all.css')}}">

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <div id="content" class="archive-portfolio">

        <!-- .container -->
        <div class="container">
            <nav class="isotope-menu">
                <a href="#" class="active" data-filter="*">All</a>
                @foreach($categories as $category)
                <a href="#" data-filter=".{{$category->slug}}">{{$category->name}}</a>
                @endforeach
            </nav>
            <!-- .row -->
            <div class="isotope-row row">
                @foreach($categories as $category)
                @foreach($category->courses as $course)
                <div class="col-sm-4 col-md-3 print {{$category->slug}}">
                    <!-- 1 -->
                    <div class="affa-portfolio">
                        <figure class="post-thumbnail post-item-thumbnail img-hover3">
                            <img src="{{asset('public/'.$course->thumnail)}}" alt="Blockchain" style="height: 250px">
                            <div class="overlay-masked">
                                <a href="{{route('course.show', [$course])}}" class="link-left" title="Live Preview"><i class="ion ion-eye"></i></a>
                                <a href="{{route('course.show', [$course])}}" class="link-right" title="More Details"><i class="ion ion-android-open"></i></a>
                            </div>
                        </figure>
                        <div class="post-item-txt">
                            <h4 class="entry-title post-item-title">
                                        <a href="{{route('course.show', [$course])}}">{{$course->name}}</a>
                                    </h4>
                            <div class="entry-meta post-item-meta">
                                <p><font color="#000000">Duration : {{$course->duration}} hours</font></p>
                            </div>
                            <div class="entry-meta post-item-meta">
                                <a href="#">{{$category->name}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
                @endforeach
            </div>
            <!-- .row end -->
        </div>
        <!-- .container end -->
    </div>
    <!-- #content end -->
    <a href="#" class="scrollup" title="Back to Top!"><i class="ion ion-android-arrow-up"></i></a>
    <script type="text/javascript" src="{{asset('public/themes/liveware/js/jquery-1.12.4.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/themes/liveware/js/all.js')}}"></script>
@endsection