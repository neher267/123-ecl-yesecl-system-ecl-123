
@extends('layouts.backend2.master')

@section('content')
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">             
                <!-- fa-arrow-left fa-plus -->
                <a href="{{route('pages.index')}}" class="btn btn-round btn-default"><i class="fa fa-arrow-left fa-icon"></i>Back</a>
              @include('layouts.backend2.partials._panel-toolbox')
            </div>
            <div class="page-title">{{$page_title}}</div>

            <div class="x_content">
                <br />
                <form action="{{route('pages.update', $result)}}" method="post" class="form-horizontal form-label-left" enctype="multipart/form-data">
                    {{csrf_field()}}
                    {{ method_field("PUT") }}

                    <div class="form-group">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                    </div>

                    <div class="form-group">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required="required" class="form-control col-md-12" value="{{$result->name}}">
                        </div>
                    </div>

                    <div class="form-group">
                       <div class="col-md-12 col-sm-12 col-xs-12">
                            <label for="description">Short Description</label>
                            <textarea id="s_description" name="s_description" required class="form-control col-md-12" placeholder="Short Description">{{$result->s_description}}</textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" required="required">{{$result->description}}</textarea>
                        </div>
                    </div>

                    <div class="form-group">                        
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <label for="priority">Display Order</label>
                            <input type="text" id="priority" name="priority" required="required" class="form-control col-md-12" value="{{$result->priority}}">
                        </div>
                    </div>
                    
                    <div class="ln_solid"></div>
                    <div class="form-group">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-success" onclick="return confirm_user('update')">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace( 'description' );
</script>

@endsection