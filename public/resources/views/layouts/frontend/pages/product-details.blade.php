@extends('layouts.frontend.master')

@section('content')
<div class="bg" style="background-image: url(<?php /*echo '/'.$product->image;*/  echo '/eclsystem/public/'.$product->image; ?>);">
    <div class="caption">
    <span class="border">{{$product->name}}</span>
  </div>
</div>

<section class="page-section">
    <span id="Pagebody_lblContent"></span>
    <BR>
    <div class="container" style="min-height: 550px">
        <div class="row">
            <div class="col-md-12" style="text-align: justify;">
                <!-- section title-->
                <h1 class="title-section mt-0 mb-0"><span style="color: black; text-transform: capitalize;">    {{strtolower($product->name)}}</span>
                </h1>
                <!-- ! section title-->
                <div class="divider gray left mt-20 mb-25"></div>

                <div style="text-align: justify; font-family: sans-serif; font-size: 14px; color: black;">
                    <?php echo html_entity_decode($product->description);?>
                </div>  

                <a href="{{url('contact')}}" target="-blank" class="cws-button">Contact Us</a>
            </div>
        </div>
    </div>
    <!-- list-->
</section>
@endsection

