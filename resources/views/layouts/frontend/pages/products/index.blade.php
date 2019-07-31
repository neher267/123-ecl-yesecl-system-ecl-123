@extends('layouts.frontend.master')
@section('content')

<section class="page-section">
    <div class="container">
        <div class="row" style="min-height: 400px">
            <div class="col-sm-12">
                <iframe src="{{url('view-products')}}" style="border:none; min-height: 400px; width: 100%">                
                </iframe>
            </div>
        </div>
    </div>
</section>
@endsection