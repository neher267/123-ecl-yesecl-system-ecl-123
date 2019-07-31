@extends('layouts.frontend.master')

@section('content')
<div class="bg" style="background-image: url(<?php echo '/public/'.$service->image;  //echo '/eclsystem/public/'.$service->image; ?>);">
    <!-- <div class="caption">
    <span class="border">{{$service->name}}</span>
  </div> -->
</div>

<section class="page-section">
    <span id="Pagebody_lblContent"></span>
    <BR>
    <div class="container" style="min-height: 550px">
        <div class="row">
            <div class="col-md-12" style="text-align: justify;">
                <!-- section title-->
                <h1 class="title-section mt-0 mb-0">
                    <span class="details-heading">{{$service->name}}</span>
                </h1>
                <!-- ! section title-->
                <div class="divider gray left mt-20 mb-25"></div>

                <div class="details-fonts">
                    <?php echo html_entity_decode($service->description);?>
                </div>  

                <a href="{{url('contact')}}" target="blank" class="cws-button">Contact Us</a>
            </div>
        </div>
    </div>
    <!-- list-->
</section>
@endsection

