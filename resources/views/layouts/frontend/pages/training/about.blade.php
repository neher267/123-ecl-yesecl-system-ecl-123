@extends('layouts.frontend.master')
@section('content')

<style type="text/css">
	.abcd {
	    margin-top: 2px;
	    font-weight: 700;
	}
</style>

<section class="page-section" STYLE='DISPLAY:NONE;'>
    <span id="Pagebody_lblContent"></span>
</section>
<br />

<div class="container div-height details-fonts">
	<div style="padding-bottom: 10px">
		<h1 class="text-center title" style="margin-bottom: 25px;">Plan Your Career Now</h1>
		<p class="body">
			Plan Your Career, PEER Learning Centre’s very owned tool for students to find the right career, choose one that suits your interests, aptitudes, work-related values, and personality type.
		</p>
		<br>
		<h4 class="details-title text-center">Welcome to PEER Learning Centre</h4>
		<p class="text-center" style="font-weight: bold">We are the Partner of:</p>

		<div class="row" style="margin-bottom: 10px;">
			<?php $i = 0; ?>
			@foreach($images as $image)
			<?php $i++; ?>
			<div class="{{$i==1 ? 'col-md-offset-3':''}} col-md-2 col-sm-12">
				<a target="_blank" class="btn btn-default" href="{{$image->name}}"><img src="{{asset('public/'.$image->src)}}" style="height: 50px; width: 130px;"></a>
			</div>
			@endforeach
		</div>
		<div class="sep-border-shadow"></div>

		<div class="body">
	        <?php echo html_entity_decode($page->description);?>
	    </div>
	</div>

	<hr>
	
	<div class="row" style="margin-top: 20px">
	    <div class="col-sm-6">
	        <div class="botm">
	            <!-- 2 -->
	            <i class="ions ion-android-person"></i><h4 class="abcd">Learn from the experts</h4>
	            <p class="body">Being the Market leaders with a vast experience of 3 decade, LIVEWIRE courses are designed as per the industry needs.</p>
	        </div>
	    </div>
	    <div class="col-sm-6">
	        <div class="botm">
	            <!-- 3 -->
	            <i class="ions ion-university"></i><h4 class="abcd">Guaranteed career growth</h4>
	            <p class="body">The Product Portfolio is filled with technologies that are current and trending. We choose courses that has a high level of scope in the Job market.</p>
	        </div>
	    </div>
	</div>

	<div class="row">
	    <div class="col-sm-6">
	        <div class="botm">
	            <!-- 4 -->
	            <i class="ions ion-android-globe"></i><h4 class="abcd">100K+ Trained Students</h4>
	            <p class="body">Happy customers builds our strong Alumni network, where they share their industry experience for the next generation.</p>
	        </div>
	    </div>
	    <div class="col-sm-6">
	        <div class="botm">
	            <!-- 5 -->
	            <i class="ions ion-gear-b"></i><h4 class="abcd">ISO 29990:2010</h4>
	            <p class="body">Certified for the Quality Training and Competence of learning service providers to all relevant stakeholders.</p>
	        </div>
	    </div>
	</div>

    <div style="text-align: center;"><a href="{{url('courses')}}" class="cws-button" style="margin-bottom: 15px; text-transform: uppercase;">Join Our Job Oriented Courses</a></div>
</div>

@endsection