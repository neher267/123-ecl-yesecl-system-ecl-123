@extends('layouts.backend.master') 

@section('content')
<div class="row"  style="padding: 15px; margin-top: 20px;">
    <div class="col-md-12">
        <h3 class="details-heading" style="text-align: center; color: red">{{$product->model_no}}</h3>
        <img src="{{asset($product->image)}}" style="width: 100%; max-height: 500px"; />
    </div>
    <div class="col-md-12"  style="margin-top: 20px;">
        <h4 style="color: red; padding: 5px 0px;">Brand: {{$product->brand}}</h4>
        <h4 style="color: red; padding: 5px 0px;">Model No: {{$product->model_no}}</h4>
        
        <div class="row">
            <div class="col-md-3">
            <div class="snipcart-details" style="margin-left: 0px">
                <form method="post" action="{{route('cart.add', $product)}}">
                    {{ csrf_field() }}
                    
                    <fieldset>
                        <input type="submit" name="submit" value="Add to cart" class="button" />
                    </fieldset>
                </form>                                            
            </div>            
        </div>
        </div>
        

        <div style="padding: 15px 10px; margin-top: 10px; text-align: justify; border-radius: 4px; border: 1px solid #337ab7;">
            <?php echo html_entity_decode($product->description); ?>
        </div>
    </div>    
</div>

<div class="clearfix"> </div>
<div class="col-md-12" style="margin-top: 20px;">
    <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="false">GENERAL FEATURES</a>
            </li>
            
            @if(!empty($product->technical_features))
            <li role="presentation">
                <a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="true">TECHNICAL FEATURES</a>
            </li>
            @endif
            @if(!empty($product->safety_and_veri))
            <li role="presentation">
                <a href="#profile1" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="true">SAFETY AND VERIFICATION</a>
            </li>
            @endif
            <!-- <li role="presentation" class="dropdown">
                <a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents"> <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
                    <li>
                        <a href="#dropdown1" tabindex="-1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">Service</a>
                    </li>
                    <li>
                        <a href="#dropdown2" tabindex="-1" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">Support</a>
                    </li>
                </ul>
            </li> -->
        </ul>

        <div id="myTabContent" class="tab-content" style="margin-left: 19px;">
            <div role="tabpanel" class="tab-pane fade" id="home" aria-labelledby="home-tab">
                <div style="text-align: justify;">
                    <?php echo html_entity_decode($product->general_features); ?>
                </div>
            </div>
            @if(!empty($product->technical_features))
            <div role="tabpanel" class="tab-pane fade active in" id="profile" aria-labelledby="profile-tab">
                <div style="text-align: justify;">
                    <?php echo html_entity_decode($product->technical_features); ?>
                </div>
            </div>
            @endif

            @if(!empty($product->safety_and_veri))
            <div role="tabpanel" class="tab-pane fade active in" id="profile1" aria-labelledby="profile-tab">
                <div style="text-align: justify;">
                    <?php echo html_entity_decode($product->safety_and_veri); ?>
                </div>
            </div>
            @endif

            <!-- <div role="tabpanel" class="tab-pane fade" id="dropdown1" aria-labelledby="dropdown1-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies felis nec interdum fermentum. Vestibulum diam ligula, efficitur ut vehicula quis, sagittis nec nunc. Mauris accumsan ante at hendrerit faucibus.</p>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="dropdown2" aria-labelledby="dropdown2-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies felis nec interdum fermentum. Vestibulum diam ligula, efficitur ut vehicula quis, sagittis nec nunc. Mauris accumsan ante at hendrerit faucibus.</p>
            </div> -->
        </div>
    </div>
</div>
<script type="text/javascript">
    $('#myTab a[href="#profile"]').tab('show') // Select tab by name
    $('#myTab a:first').tab('show') // Select first tab
    $('#myTab a:last').tab('show') // Select last tab
    $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)
</script>
@endsection