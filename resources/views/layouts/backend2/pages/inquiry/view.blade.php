@extends('layouts.backend2.master')

@section('content')

<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        	<div class="x_title">            	
                <!-- fa-arrow-left fa-plus -->
                @include('layouts.backend2.partials._panel-toolbox')
            </div>

            <div class="page-title">{{$page_title}}</div>

            <div class="x_content">                
                <table id="datatable-buttons" class="table table-striped table-bordered">
                    <tr>
                        <th style="width: 150px">Name</th>
                        <td>{{$inquiry->name}}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{{$inquiry->email}}</td>
                    </tr>

                    <tr>
                        <th>Phone</th>
                        <td>{{$inquiry->mobile}}</td>
                    </tr>

                    <tr>
                        <th>Company</th>
                        <td>{{$inquiry->company}}</td>
                    </tr>

                    <tr>
                        <th>Message</th>
                        <td>{{$inquiry->message}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection