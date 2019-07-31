@extends('layouts.frontend.master')

@section('content')


<section class="page-section" STYLE='DISPLAY:NONE;'>
    <span id="Pagebody_lblContent"></span>

</section>
<br />
<br />
<div class="container p-relative">
    <div class="row">
        <div class="col-md-12">
            <h2 class="title-section mb-0 mt-0 text-center"><span class="details-heading">Success Cases</span></h2>
            <div class="divider mb-20 mt-25" style="background-color: #ff6600">&nbsp;</div>
        </div>
    </div>
    <div class="row cws-multi-col hover-effect-2">
        @foreach($projectTypes as $type)
        <!-- service item-->        

        <div class="col-md-4 col-sm-6 mb-md-50" style="margin-bottom: 10px;">
            <div class="service-item icon-center opacity">
                <div class="counter-block border-none" style="height: 300px">
                    <div class="counter-icon">
                        <a href="{{route('fronend.successful-cases.show', $type)}}">
                            <img src="{{asset('public/'.$type->image)}}" style="height: 150px; width: 90%; border-radius: 4px">
                        </a>                        
                    </div>
                    <div class="count-divider" style="margin-bottom: 0px; border-top: 2px solid #ff6600">&nbsp;</div>                    
                    <h1 class="title" style="min-height: 50px; font-size: 18px">
                        <a href="{{route('fronend.successful-cases.show', $type)}}">{{$type->service->name}}</a>
                    </h1>
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