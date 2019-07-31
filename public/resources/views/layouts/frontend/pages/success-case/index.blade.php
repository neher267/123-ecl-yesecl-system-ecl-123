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
            <div class="divider mb-20 mt-25">&nbsp;</div>
        </div>
    </div>
    <div class="row cws-multi-col hover-effect-2">
        @foreach($projectTypes as $type)
        <!-- service item-->        

        <div class="col-md-4 col-sm-6 mb-md-50" style="margin-bottom: 10px;">
            <div class="service-item icon-center opacity">
                <div class="counter-block border-none" style="height: 300px">
                    <div class="counter-icon">
                        <img src="{{asset('public/'.$type->image)}}" style="height: 90px; width: 140px; border-radius: 4px"></div>

                    <div class="count-divider">&nbsp;</div>                    
                    <h3 class="details-title" style="min-height: 50px; font-size: 18px"><a href="{{route('fronend.successful-cases.show', $type)}}">{{$type->name}}</a></h3>
                    <p class="details-fonts" style="text-align: center;">
                        <?php 
                            $text = $type->s_description;
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