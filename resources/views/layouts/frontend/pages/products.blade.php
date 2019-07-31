@extends('layouts.frontend.master')

@section('content')

<style type="text/css">
    #page-header{
        margin: 0px
    }
    .w3ls_w3l_banner_nav_right_grid_sub
    {
        padding: 0px;
    }
</style>

<div class="container">
    <div class="row" style="min-height: 550px">
        <div class="col-sm-12">
            <iframe src="{{url('view-products')}}" style="border:none; min-height: 1200px; width: 100%">                
            </iframe>
        </div>
    </div>
</div>
@endsection