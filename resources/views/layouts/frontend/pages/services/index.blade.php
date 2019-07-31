@extends('layouts.frontend.master')

@section('content')
<style type="text/css">
    .counter-block .count-divider {
        border-top: 2px solid #ff6600;
    }
</style>
<div class="bg">
    <!-- <div class="caption">
    <span class="border">Services</span>
  </div> -->
</div>

<section class="page-section" STYLE='DISPLAY:NONE;'>
    <span id="Pagebody_lblContent"></span>

</section>
<br />
<br />
<div class="container p-relative">
    <div class="row">
        <div class="col-md-12">
            <h1 class="big-title text-center">Our Services</h1>
            <div class="divider mb-20 mt-25">&nbsp;</div>
        </div>
    </div>
    <div class="row cws-multi-col hover-effect-2">
        @foreach($services as $service)
        <!-- service item-->
        <div class="col-md-3 col-sm-6 mb-md-50" style="margin-bottom: 10px;">
            <div class="service-item icon-center opacity">
                <div class="counter-block border-none" style="height: 300px">
                    <div class="counter-icon">
                        <img src="{{asset('public/images/Services/services.png')}}" style="height: 60px; width: 60px; border-radius: 50%">
                    </div>

                    <div class="count-divider">&nbsp;</div>                    
                    <h3 class="title" style="min-height: 50px; font-size: 16px; color: #ff6600">
                        <a href="{{route('frontend.services.show', $service)}}">{{$service->name}}</a>
                    </h3>
                    <p class="details-fonts" style="text-align: center; color: #808080;">
                        <?php 
                            $text = $service->short_des;
                            if (str_word_count($text, 0) > 10) {
                                $words = str_word_count($text, 2);
                                $pos = array_keys($words);
                                $text = substr($text, 0, $pos[10]) . '..';
                            }
                            echo $text;
                        ?>  
                    </p>
                </div>
            </div>
        </div>
        <!-- ! service item-->       
        @endforeach 
    </div>
</div>
<br>
<br>
<br>
@endsection