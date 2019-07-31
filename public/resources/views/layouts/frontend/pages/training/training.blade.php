@extends('layouts.frontend.master')

@section('content')
<section class="page-section">
    <span id="Pagebody_lblContent"></span>
    <BR>
    <div class="container" style="min-height: 550px">
        <div class="row">
            <div class="col-md-12">
                <!-- section title-->
                <h1 class="title-section mt-0 mb-0"><span style="color: black; text-transform: capitalize;">{{strtolower($training->name)}}</span>
                </h1>
                <!-- ! section title-->
                <div class="divider gray left mt-20 mb-25" style="text-align: justify;"></div>
                <div style="text-align: justify; font-family: sans-serif; font-size: 14px; color: black;">
                    <?php echo html_entity_decode($training->description);?>
                </div>           
                <a href="{{url('contact')}}" target="-blank" class="cws-button">Contact Us</a>
            </div>
        </div>
    </div>
    <!-- list-->
</section>
@endsection

