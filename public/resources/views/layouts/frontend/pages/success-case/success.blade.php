@extends('layouts.frontend.master')
@section('content')
<section class="page-section">
    <span id="Pagebody_lblContent" style="display:none;"></span>

    <div class="container">
        <div class="row">
            <br />
            <div class="pic"><img src="{{asset('public/'.$projectType->image)}}" alt="{{$projectType->name}}" style="border-radius: 4px" /></div>
            <div class="pic" style="margin-top:20px;">
                <div>
                    <h2 class="text-center details-heading">{{$projectType->name}}</h2>
                    <hr>
                </div>

                <div class="details-fonts">
                    <p><?php echo html_entity_decode($projectType->description);?></p>
                </div>                

                @if(sizeof($projectType->projects)>0)
                <span class="details-title">{{$projectType->name}} we built</span>
                <div style="width:1200px; border:1px solid #28A6EC;"></div>
                <p></p>
                
                <div class="details-fonts">
                    <ul>
                        @foreach($projectType->projects as $project)
                        <li><a href="{{route('fronend.project-details',$project)}}">{{$project->title}}</a></li>
                        @endforeach
                    </ul>
                </div>
                @endif                
            </div>
        </div>
    </div>
</section>
@endsection