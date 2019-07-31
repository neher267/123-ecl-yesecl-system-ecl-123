@extends('layouts.app') @section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Inquiryes</div>

                <div class="panel-body">
                    @if (session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                    @endif
                    <?php
                    $i=0;
                    $status = ['success', 'danger', 'info', 'warning', 'active'];
                    ?>
                    <table id="example" class="table table-striped" style="width:100%">
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Message</th>
                                <th>Actjions</th>
                            </tr>
                        </thead>
                        <tbody>
                        	@foreach($inquiryes as $inquiry)
                        	<tr>
                                <td>{{++$i}}</td>
                                <td>{{$inquiry->name}}</td>
                                <td>{{$inquiry->email}}</td>
                                <td>{{$inquiry->mobile}}</td>
                                <td>{{$inquiry->company}}</td>
                                <td>{{$inquiry->message}}</td>
                                <td>
                                	<a href="#" class="btn btn-small btn-denger">Delete</a>
                                </td>
                            </tr>    
                            @endforeach                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>    
    @endsection