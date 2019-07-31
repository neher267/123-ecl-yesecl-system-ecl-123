
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Ecl</title>

    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/bootstrap.min.css')}}">
    <link href="{{asset('public/themes/liveware/css/bootstrap-3.3.6.css')}}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.css">  
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:100,300,300i,400,400i,500,700,900" rel="stylesheet">
    <!-- Stylesheets -->
  
    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('public/themes/liveware/css/all.css')}}">

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

       
    <link rel="stylesheet" type="text/css" href="{{asset('public/css/custom.css')}}"> 

    <style type="text/css">
        /* width */
        ::-webkit-scrollbar {
            width: 0px;
        }        
    </style>   

</head>



<body class="body-header-3 media-height">


    <!-- #header -->
    <header id="header">
        <div class="sub-header2 text-white" data-parallax="scroll" data-speed="0.2" data-natural-width="1920" data-natural-height="1080" data-image-src="{{asset('public/'.$course->background)}}">
                <div class="sub-header-overlay bg-dark-overlay80">
                    <div class="container">
                        <h3><?php echo html_entity_decode($course->title); ?></h3>
                        <h6 class="text-white"><?php echo html_entity_decode($course->summary); ?></h6>
                        <!-- .row -->
                        <div class="row padding-top50" style="padding-left: 0%;">
                            <div class="col-sm-12 text-center">
                                <h4  style="font-size: 18px"><i style="margin-right: 10px" class="ion ion-android-time animation" data-animation="animation-fade-in-left"></i>Duration: {{$course->duration}} Hrs</h4>

                                @if($course->hands_on)
                                <h4 style="font-size: 18px"><i style="margin-right: 10px" class="ion ion-help-buoy animation" data-animation="animation-fade-in-left" data-delay="300"></i>Hands-on Training</h4>
                                @endif

                                <h4 style="font-size: 18px"><i style="margin-right: 10px" class="ion ion-ios-people-outline animation" data-animation="animation-fade-in-left" data-delay="600"></i>122 Students</h4>                               
                            </div>
                        </div>
                        <!-- .row end -->
                    </div>
                </div>

            </div>
    </header>   

    <div id="body-wrap">
        <div id="features" class="padding-top30 padding-bottom20">
            <div class="container text-center-xs">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="affa-feature-icon-education">
                                    <!-- 1 -->
                                    <h4 class="no-icon">About Course</h4>
                                    <?php echo html_entity_decode($course->about); ?>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="content">
            <div class="bg-color text-white padding-top60 padding-bottom60">
                <div class="container">

                    <div class="post-heading-center2 animation" data-animation="animation-fade-in-down">
                        <h2>Why ECL?</h2>
                    </div>
                    <div class="row row-counter">
                        <div class="row">

                            <div class="col-sm-4">
                                <div class="affa-feature-icon feature-icon-bg">
                                    <i class="ion ion-ribbon-a animation" data-animation="animation-bounce-in-down"></i>
                                    <h4>CERTIFICATION</h4>
                                    <p>Get trained through an ISO certified institute. Our course completion certificate and material are globally recognized. <u> <a href="https://www.livewireindia.com/images/Skill-certufucate.jpg" class="fancybox" data-fancybox-group="images_gallery">Skill based certification</a></u> provided which will add value in resume</p>

                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="affa-feature-icon feature-icon-bg">
                                    <i class="ion ion-ios-contact animation" data-animation="animation-bounce-in-down" data-delay="300"></i>
                                    <h4>CERTIFIED FACULTIES</h4>
                                    <p>All our trainer are Certified in their Products. <u><a href="https://www.livewireindia.com/images/b2e.jpg" class="fancybox" data-fancybox-group="images_gallery">B2E certified </a></u> Industry experienced faculty. They ensure students are benefited with in depth practical training. </p>

                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="affa-feature-icon feature-icon-bg">
                                    <i class="ion ion-thumbsup animation" data-animation="animation-bounce-in-down" data-delay="600"></i>
                                    <h4>PLACEMENT OPPORTUNITY</h4>
                                    <p>ECL is in association with 250+ corporates, who grab candidates from our centres when they match their job requirement. We offer all these opening to the students. They will be able to directly apply for the openings through our <u><a href="https://www.livewireindia.com/StudentPortal/">Student Portal.</a></u></p>
                                </div>
                            </div>

                        </div>
                        <!-- .row end -->
                    </div>
                    <!-- .row end -->

                    <div class="sep-border margin-top0 margin-bottom20"></div>
                    <!-- separator -->

                    <div class="affa-img-lists-app">
                        <!-- .row -->
                        <div class="row">

                            <div class="col-sm-3">
                                <!-- 1 -->
                                <div class="affa-feature-icon-left">
                                    <i class="ion ion-ios-star-half animation" data-animation="animation-fade-in-left"></i>
                                    <h5>Corporate Style Training</h5>

                                </div>
                            </div>

                            <div class="col-sm-3">
                                <!-- 2 -->
                                <div class="affa-feature-icon-left">
                                    <i class="ion ion-ios-star-half animation" data-animation="animation-fade-in-left" data-delay="300"></i>
                                    <h5>Individual focus</h5>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <!-- 3 -->
                                <div class="affa-feature-icon-left">
                                    <i class="ion ion-ios-star-half animation" data-animation="animation-fade-in-left" data-delay="600"></i>
                                    <h5>Oracle - Workforce Development partner</h5>

                                </div>
                            </div>
                            <div class="col-sm-3">
                                <!-- 3 -->
                                <div class="affa-feature-icon-left">
                                    <i class="ion ion-ios-star-half animation" data-animation="animation-fade-in-left" data-delay="600"></i>
                                    <h5>Learn the required skill</h5>

                                    <!--<a href="#">Learn More <i class="ion ion-arrow-right-b"></i></a>-->
                                </div>
                            </div>

                        </div>
                        <!-- .row end -->
                    </div>

                </div>
                <!-- .container end -->

            </div>

            <style>
                .flip {
                    -webkit-perspective: 800;
                    perspective: 800;
                    position: relative;
                    text-align: center;
                }
                
                .flip .card.flipped {
                    -webkit-transform: rotatey(-180deg);
                    transform: rotatey(-180deg);
                }
                
                .flip .card {
                    width: 270px;
                    height: 300px;
                    -webkit-transform-style: preserve-3d;
                    -webkit-transition: 0.5s;
                    transform-style: preserve-3d;
                    transition: 0.5s;
                    background-color: #fff;
                }
                
                .flip .card .face {
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    z-index: 2;
                }
                
                .flip .card .front {
                    position: absolute;
                    width: 270px;
                    z-index: 1;
                }
                
                .flip .card .img {
                    position: relaitve;
                    width: 270px;
                    height: 300px;
                    z-index: 1;
                    border: 2px solid #000;
                }
                
                .flip .card .back {
                    -webkit-transform: rotatey(-180deg);
                    transform: rotatey(-180deg);
                }
                
                .inner {
                    margin: 0px !important;
                }
                
                @media only screen and (max-width: 500px) {
                    .flip .card {
                        width: 270px;
                        height: 300px;
                        -webkit-transform-style: preserve-3d;
                        -webkit-transition: 0.5s;
                        transform-style: preserve-3d;
                        transition: 0.5s;
                        background-color: #fff;
                        padding-bottom: 10%;
                        margin-top: 10px;
                        margin-left: 10%;
                    }
                    .flip .card .front {
                        position: absolute;
                        width: 270px;
                        z-index: 1;
                    }
                    .flip .card .img {
                        position: relaitve;
                        width: 270px;
                        height: 300px;
                        z-index: 1;
                        border: 2px solid #000;
                    }
                    .flip .card .back {
                        padding-top: 10%;
                        -webkit-transform: rotatey(-180deg);
                        transform: rotatey(-180deg);
                    }
                }
            </style>
            <!-- #features3 end -->
            <!-- .container -->

            <div id="features" class="padding-top30 padding-bottom20">
                <div class="container text-center-xs">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="affa-feature-icon-education">
                                        <!-- 1 -->
                                        <h4 class="no-icon animation">What Will You Learn?</h4>
                                        <?php echo html_entity_decode($course->learning); ?>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container padding-top80 padding-bottom30">
                <!-- .row -->

                <div class="post-heading-center2 padding-top10  animation" data-animation="animation-fade-in-down">
                    <h2>Deliverables</h2>
                </div>
                <div class="row margin-bottom90">
                    <div class="col-sm-3">
                        <div class="flip">
                            <div class="card">
                                <div class="face front bg-color text-white padding-bottom20 padding-top40">
                                    <div class="affa-feature-icon feature-icon-bg">
                                        <i class="ion ion-clipboard animation" data-animation="animation-bounce-in-down"></i>
                                        <h4 style="margin-top:15%;"> Material for future reference</h4>
                                        <a href="#" style="margin-top:15%;">View<i class="ion ion-arrow-right-b"></i></a>
                                    </div>
                                </div>
                                <div class="face back ">
                                    <div class="inner">
                                        <a href="{{asset('public/'.$course->referance)}}" class="fancybox" data-fancybox-group="images_gallery">
                                            <img src="{{asset('public/'.$course->referance)}}"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="flip">
                            <div class="card">
                                <div class="face front bg-color text-white padding-bottom20 padding-top40">
                                    <div class="affa-feature-icon feature-icon-bg">
                                        <i class="ion ion-document animation" data-animation="animation-bounce-in-down"></i>
                                        <h4 style="margin-top:2%;">Internationally recognized Course Completion certificate </h4>
                                        <br>
                                        <a href="#">View<i class="ion ion-arrow-right-b"></i></a>
                                    </div>

                                </div>
                                <div class="face back ">
                                    <div class="inner padding-top50">
                                        <a href="https://www.livewireindia.com/images/samplecert.png" class="fancybox" data-fancybox-group="images_gallery"><img src="https://www.livewireindia.com/images/course-completion.jpg" width="300" height="300"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="flip">
                            <div class="card">
                                <div class="face front bg-color text-white padding-bottom20 padding-top40">
                                    <div class="affa-feature-icon feature-icon-bg">
                                        <i class="ion ion-document-text animation" data-animation="animation-bounce-in-down"></i>
                                        <h4 style="margin-top:17%;"> skill based Certificate </h4>
                                        <br>
                                        <a href="#" style="margin-top:15%;">View<i class="ion ion-arrow-right-b"></i></a>
                                    </div>
                                </div>
                                <div class="face back ">
                                    <div class="inner padding-top50">
                                        <a href="https://www.livewireindia.com/images/Skill-certufucate.jpg" class="fancybox" data-fancybox-group="images_gallery"> <img src="https://www.livewireindia.com/images/skill-certificate.jpg" width="300" height="300"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="">
                            <div class="card">
                                <div class="face front bg-color text-white padding-bottom40 padding-top40" align="left">
                                    <div class="affa-feature-icon feature-icon-bg">
                                        <i class="ion ion-android-laptop animation" data-animation="animation-bounce-in-down"></i>
                                        <ul class="carder" style="list-style-type:square;margin-top:15%;">
                                            <li>Discounted price for future Upgrade trainings.</li>
                                            <li>Best Guidance for your Career</li>
                                            <br>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .container end -->

            <div class="bg-grey" style="background-image:url(https://www.livewireindia.com/images/content/sliders/e.jpg);">
                <div class="bg-white-overlay90 padding-top50">
                    <!-- .container -->
                    <div class="container">
                        <!-- .row -->
                        <div class="row margin-bottom60">
                            <div class="col-sm-12">
                                <div class="affa-feature-icon-education">
                                    <!-- 1 -->
                                    <h4 class="no-icon">WHO CAN ENROLL?</h4>
                                    <?php echo html_entity_decode($course->enroll); ?>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- .row end -->
                </div>
                <!-- .container end -->
            </div>

            <div id="features3" class="bg-color text-white padding-top60 padding-bottom60">
                <!-- .container -->
                <div class="container">

                    <!-- .row -->
                    <div class="row">

                        <!-- .col -->
                        <div class="col-sm-12">
                                <div class="affa-feature-icon-education">
                                    <!-- 1 -->
                                    <h4 class="no-icon">Job Opportunities</h4>
                                    <?php echo html_entity_decode($course->job_opp); ?>
                                </div>
                            </div>
                        <!-- .col end -->
                    </div>
                    <!-- .row end -->

                </div>
                <!-- .container end -->

            </div>

            <div style="background-image: url('public/bg.gif'); width: 100%; height: 200px;">
                
            </div>
            
        </div>
        <!-- #content end -->           

    </div>      

    <a href="#" class="scrollup" title="Back to Top!"><i class="ion ion-android-arrow-up"></i></a>
    <script type="text/javascript" src="{{asset('public/themes/liveware/js/jquery-1.12.4.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/themes/liveware/js/all.js')}}"></script>

    @include('layouts.frontend.partials.livewireindia-js')
    <!-- external js -->       

</body>
</html>
