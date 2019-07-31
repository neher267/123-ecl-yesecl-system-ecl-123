@extends('layouts.backend2.master')

@section('content')

<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        	<div class="x_title">            	
                <!-- fa-arrow-left fa-plus -->
                <a href="{{route('project-types.create')}}" class="btn btn-round btn-default"><i class="fa fa-plus fa-icon"></i>Add Type</a>
            	@include('layouts.backend2.partials._panel-toolbox')
            </div>

            <div class="page-title">{{$page_title}}</div>

            <div class="x_content">                
                <table id="datatable-buttons" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Projects</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    	<?php $i=0 ?>
                    	@foreach($results as $result)
                        <tr>
                            <td>{{++$i}}</td>
                            <td>
                                <img src="{{asset('public/'.$result->image)}}" style="height: 50px; box-shadow: 2px 4px 5px darkgrey; margin: 3px;">
                            </td>
                            <td>{{$result->name}}</td>
                            <td>
                                <?php 
                                    $text = $result->s_description;
                                    if (str_word_count($text, 0) > 50) {
                                        $words = str_word_count($text, 2);
                                        $pos = array_keys($words);
                                        $text = substr($text, 0, $pos[50]) . '...';
                                    }
                                    echo $text;
                                ?>
                            </td>
                            <td>{{$result->projects->count()}}</td>
                            <td>
                            	<a href="{{route($name.'.projects', $result)}}" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Projects </a>

                                <a href="{{route($name.'.show', $result)}}" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>

                            	<a href="{{route($name.'.edit', $result)}}" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                                @if(Auth::user()->role == 1)
                                <form action="{{route($name.'.destroy', $result)}}" method="POST" style="display: inline;">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}

                                    <button type="submit" class="btn btn-danger btn-xs" onclick="return confirm_user('delete')"><i class="fa fa-trash-o"></i> Delete </button>
                                </form>
                                @endif                            	
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