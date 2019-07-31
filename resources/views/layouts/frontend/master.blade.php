<!DOCTYPE html>
<head>
    <title>ECL System &#8211; ECL System</title>
    <meta name="keywords" content="obd2 gps tracker, obdii tracker manufacturers, obd2 gps wholesale, obd suppliers" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <meta name="description" content="Ecl System Ltd.">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('public/favicon-16x16.png')}}">

    <link rel="stylesheet" href="{{asset('public/css/reset.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/css/bootstrap.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/css/owl.carousel.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/css/jquery.fancybox.css')}}" />
    <link rel="stylesheet" href="{{asset('public/css/main.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/css/indent.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/rs-plugin/css/settings.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/rs-plugin/css/layers.css')}}"/>
    <link rel="stylesheet" href="{{asset('public/rs-plugin/css/navigation.css')}}" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link rel="stylesheet" href="{{asset('public/fonts/fi/flaticon.css')}}" />

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.css">

    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{asset('public/css/custom.css')}}">



    <style>
        body, html {
            height: 100%;
        }


        h1, h2, h3, h4{
            font-family: "Montserrat", Helvetica, sans-serif;
            font-weight: 700;
            display: block;
            clear: both;
            margin: 0;
            margin-bottom: 10px;
            padding: 0;
            border: 0;
            font: inherit;
            vertical-align: baseline;
        }

        .title{
            margin-top: 0;
            padding-top: 0;
            font-size: 20px;
            font-weight: 700;
            color: #404040;
            line-height: 22px;
        }

        .body{
            color: #808080;
            line-height: 20px;
            font-size: 100%;
        }

        .c-body{
            line-height: 18px;
            font-size: 100%;
        }

        .big-title{
            font-size: 22px;
            margin-top: 10px;
            padding-top: 0;
            font-weight: 700;
            line-height: 22px;
        }

        .title-color{
            color: #ff6600; 
            padding: 5px; 
            border-left: 3px solid #ff6600;
        }

        

        .bg {
            @if(!empty($servicesImage))
            background-image: url({{asset('public/'.$servicesImage->src)}});
            @endif
            /* Full height */
            height: 90%; 
            /* Center and scale the image nicely */
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            /*opacity: 0.65;*/

        }
        .caption {
          position: absolute;
          left: 0;
          top: 3%;
          width: 100%;
          text-align: center;
          color: #000;
        }

        .caption span.border {
          /*color: #ed1c24;*/
          color: #fff;
          font-size: 80px;
          letter-spacing: 3px;
        }

    </style>

    <style type="text/css">
        .nav-style{font: bold 17px/24px Lato;color: #000;}
        body, 
    </style>

    <style type="text/css">
        /* width */
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #337ab7; 
        }
    </style>
</head>

<body class="fonts">
    
    @include('layouts.frontend.partials._header')

    <div style="width: 100%; text-align: center;">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
    </div>


    @yield('content')
    @include('layouts.frontend.partials._inquiry')      
    @include('layouts.frontend.partials._footer')
         


        <script>
            function onErr() {
                var img = event.srcElement;
                img.src = "img/temp.jpg";
            }
        </script>    

        <script type="text/javascript" src="{{asset('public/js/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery-ui.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/bootstrap.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/owl.carousel.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.sticky.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/cws_parallax.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.fancybox.pack.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.fancybox-media.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.isotope.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/jquery.themepunch.tools.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/jquery.themepunch.revolution.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.slideanims.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.navigation.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.parallax.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.video.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.actions.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.kenburn.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/rs-plugin/js/extensions/revolution.extension.migration.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.validate.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.form.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/script.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/bg-video/cws_self_vimeo_bg.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/bg-video/jquery.vimeo.api.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/bg-video/cws_YT_bg.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/jquery.tweet.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/js/retina.min.js')}}"></script>
        
</body>

</html>