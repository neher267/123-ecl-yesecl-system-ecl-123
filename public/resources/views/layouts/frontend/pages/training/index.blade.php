@extends('layouts.frontend.master')

@section('content')
<div class="bg">
    <div class="caption">
    <span class="border">Services</span>
  </div>
</div>

<section class="page-section" STYLE='DISPLAY:NONE;'>
    <span id="Pagebody_lblContent"></span>

</section>
<br />
<br />
<div class="container p-relative">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <h2 class="title-section mb-0 mt-0 text-center"><span style="color: black">Our Services</span></h2>
            <div class="divider mb-20 mt-25">&nbsp;</div>
            <p class="text-left mb-50"><span style="color: black">With 11 years GPS tracking and IOT equipments experience, ThinkRace already integrated the design, development, software and manufature together. We are one of leading companies can provide one stop shop solution for GPS tracking business with good comunication platform and good company structure to make sure we can delivery excellent products and services.</span></p>
        </div>
    </div>
    <div class="row cws-multi-col hover-effect-2">
        @foreach($services as $service)
        <!-- service item-->
        <div class="col-md-3 col-sm-6 mb-md-50">
            <div class="service-item icon-center opacity">
                <div class="counter-block border-none">
                    <div class="counter-icon flaticon-microchip">&nbsp;</div>
                    <div class="count-divider">&nbsp;</div>                    
                    <h3><a href="{{route('frontend.services.show', $service)}}">{{$service->name}}</a></h3>
                    <p style="text-align: left;"><?php echo html_entity_decode($service->short_des) ?></p>
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