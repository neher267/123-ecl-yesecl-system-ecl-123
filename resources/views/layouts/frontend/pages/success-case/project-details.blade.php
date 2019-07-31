@extends('layouts.frontend.master')
@section('content')
<section class="page-section">
    <span id="Pagebody_lblContent" style="display:none;"></span>

    <div class="container">
        <div class="row">
            <br />
            <div class="pic">
                <div>
                    <h2 class="text-center details-heading">{{$project->title}}</h2>
                    <hr>
                </div>                
                
                <div class="details-fonts">
                    <p><?php echo html_entity_decode($project->introduction);?></p>
                </div>

                @if(!empty($project->provided))
                <span class="details-title">According to the requirements above all, we provided-</span>
                <div style="width:1200px; border:1px solid #28A6EC;"></div>
                <p></p>

                <div class="details-fonts">
                    <p><?php echo html_entity_decode($project->provided);?></p>
                </div>                
                @endif  

                @if(!empty($project->challanges_overcome))
                <span class="details-title">Challenges and how we overcome</span>
                <div style="width:1200px; border:1px solid #28A6EC;"></div>
                <p></p>

                <div class="details-fonts">
                    <p><?php echo html_entity_decode($project->challanges_overcome);?></p>
                </div>
                @endif               
            </div>
        </div>
    </div>
</section>
@endsection