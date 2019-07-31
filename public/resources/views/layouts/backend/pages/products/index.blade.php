@extends('layouts.app') @section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Products</div>

                <div class="panel-body">
                    @if (session('success'))
                    <div class="alert alert-success" style="position: fixed; right: 20px; bottom: 15px;">
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
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        	                      
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>    
    @endsection