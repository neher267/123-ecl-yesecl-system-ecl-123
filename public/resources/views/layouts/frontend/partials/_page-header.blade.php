<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">

            </div>
            <div class="col-md-12 text-right breadcrumbs-item">
            	<a href="{{url('/')}}">Home</a>
            	@foreach($pages as $key => $value)
            	<i class="fa fa-angle-right"></i><a href="{{url($value)}}">{{$key}}</a>
            	@endforeach 
            </div>            
    </div>
</section>