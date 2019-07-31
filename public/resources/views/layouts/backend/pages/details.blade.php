<!DOCTYPE HTML>
<html>

<head>
    <title>Laravel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <!-- Bootstrap Core CSS -->
    <link href="{{asset('public/themes/fresh/css/bootstrap.min.css')}}" rel='stylesheet' type='text/css' />
    <!-- Custom CSS -->
    <link href="{{asset('public/themes/fresh/css/style.css')}}" rel='stylesheet' type='text/css' />
    
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{asset('public/css/custom.css')}}">

    <script src="{{asset('public/themes/fresh/js/jquery-1.10.2.min.js')}}"></script>
    <!-- //lined-icons -->

    <style type="text/css">
        /* width */
        ::-webkit-scrollbar {
            width: 0px;
        }        
    </style>
    
</head>

<body class="fonts">
    <div class="">
        <!-- content-inner -->
        <div class="mobile-content">
            <div class="inner-content">
                <!--content-->
                <div class="content" style="margin-top: 15px">
                    <div class="">
                        <div class="row single">
                            <div class="det">
                                <div class="single_left">
                                    <div class="grid images_3_of_2">
                                        <div class="flexslider">
                                            <!-- FlexSlider -->
                                            <script src="{{asset('public/themes/fresh/js/imagezoom.js')}}"></script>
                                            <script defer="" src="{{asset('public/themes/fresh/js/jquery.flexslider.js')}}"></script>
                                            <link rel="stylesheet" href="{{asset('public/themes/fresh/css/flexslider.css')}}" type="text/css" media="screen">

                                            <script>
                                                // Can also be used with $(document).ready()
                                                $(window).load(function() {
                                                    $('.flexslider').flexslider({
                                                        animation: "slide",
                                                        controlNav: "thumbnails"
                                                    });
                                                });
                                            </script>
                                            <!-- //FlexSlider-->

                                            <div class="flex-viewport" style="overflow: hidden; position: relative;">
                                                <ul class="slides" style="width: 1200%; transition-duration: 0.6s; transform: translate3d(-864px, 0px, 0px);">
                                                    <li data-thumb="{{asset('public/'.$product->image)}}" style="width: 288px; float: left; display: block;" class="">
                                                        <div class="thumb-image">
                                                            <img src="{{asset('public/'.$product->image)}}" data-imagezoom="true" class="img-responsive" draggable="false">
                                                        </div>
                                                    </li>

                                                    @if(!empty($product->image2))
                                                    <li data-thumb="{{asset('public/'.$product->image2)}}" style="width: 288px; float: left; display: block;" class="">
                                                        <div class="thumb-image">
                                                            <img src="{{asset('public/'.$product->image2)}}" data-imagezoom="true" class="img-responsive" draggable="false">
                                                        </div>
                                                    </li>
                                                    @endif

                                                    @if(!empty($product->image3))
                                                    <li data-thumb="{{asset('public/'.$product->image3)}}" style="width: 288px; float: left; display: block;" class="">
                                                        <div class="thumb-image">
                                                            <img src="{{asset('public/'.$product->image3)}}" data-imagezoom="true" class="img-responsive" draggable="false">
                                                        </div>
                                                    </li>
                                                    @endif

                                                    @if(!empty($product->image4))
                                                    <li data-thumb="{{asset('public/'.$product->image4)}}" style="width: 288px; float: left; display: block;" class="">
                                                        <div class="thumb-image">
                                                            <img src="{{asset('public/'.$product->image4)}}" data-imagezoom="true" class="img-responsive" draggable="false">
                                                        </div>
                                                    </li>
                                                    @endif

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="desc1 span_3_of_2">
                                        <h3 class="details-heading">{{$product->name}}</h3>
                                        <br>
                                        <div class="price">
                                            <span class="details-title">Brand: </span>
                                            <a href="{{$product->brand()->first()->url}}" target="_blank">

                                                <img src="{{asset('public/'.$product->brand()->first()->src)}}" style="height: 50px; width: 100px; border-radius: 4px;">
                                            </a>
                                            <br>

                                            <span class="details-title">Model No: </span>
                                            <span>{{$product->model_no}}</span><br>                                           
                                            @if((int)$product->price > 0)
                                            <span class="details-title">Price:</span>
                                            <span class="price-new">৳ 1000.00</span><br>
                                            @endif
                                            <div style="margin: 15px 0px; text-align: justify;">
                                                <span class="details-title">Features:</span><br>
                                                <span class="details-fonts">
                                                    <?php echo html_entity_decode($product->general_features)?>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="btn_form">
                                            <form method="post" action="{{route('cart.add', $product)}}">
                                                {{ csrf_field() }}
                                                
                                                <input type="submit" class="btn btn-success" name="submit" value="ADD TO CART"/>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="single-bottom1">
                                    @if(!empty($product->description))
                                    <h6 class="details-title">DETAILS</h6>

                                    <div class="details-fonts">
                                        <?php echo html_entity_decode($product->description) ?>
                                    </div>
                                    @endif

                                    @if(!empty($product->technical_features))
                                    <h6 class="details-title">TECHNICAL FEATURES</h6>

                                    <div class="details-fonts">
                                        <?php echo html_entity_decode($product->technical_features) ?>
                                    </div>
                                    @endif
                                    @if(!empty($product->safety_and_veri))
                                    <h6 class="details-title">SAFETY AND VERIFICATION</h6>

                                    <div class="details-fonts">
                                        <?php echo html_entity_decode($product->safety_and_veri) ?>
                                    </div>                                    
                                    @endif                                
                        
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!--content-->
            </div>
        </div>
        <div class="clearfix"></div>
    </div>   

    <script src="{{asset('public/themes/fresh/js/bootstrap.min.js')}}"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
</body>

</html>