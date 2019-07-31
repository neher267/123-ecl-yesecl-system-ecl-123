@extends('layouts.backend.master')

@section('content')
<div class="banner">
    <div class="">
        <div class="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
            
            <div style="width: 100%; text-align: center;">
                @if (session('success'))
                    <div class="alert alert-success flash" style=" margin-top: 15px">
                        {{ session('success') }}
                    </div>
                @endif
            </div>
            @foreach($products as $chunk_products)
            <div class="w3ls_w3l_banner_nav_right_grid1">
                @foreach($chunk_products as $product)
                <div class="col-md-3 w3ls_w3l_banner_left">
                    <div class="hover14 column">
                        <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                            <div class="agile_top_brand_left_grid1">
                                <img src="{{asset('public/'.$product->brand->src)}}" style="height: 30px; width: 85px; position: relative;top: 1px;left: 30%;">
                                <figure>
                                    <div class="snipcart-item block">
                                        <div class="snipcart-thumb">
                                            <a href="{{route('product.details', $product)}}">
                                                <img src="{{asset('public/'.$product->image)}}" alt="{{$product->name}}" class="img-responsive" style="height: 146px; width: 55%; margin-top: 25px;" />

                                                <span style="color: green;"><i class="fas fa-eye"></i> Details</span>
                                            </a>
                                            <div style="text-align: center; height: 44px">
                                                <h1 class="title" style="font-size: 14px; font-weight: bold; margin-top: 12px; color: #ff6600">{{$product->name}}</h1>
                                                @if(!empty($product->price))
                                                <h4>{{$product->price }}TK</h4>
                                                @endif 
                                            </div>                                            
                                        </div>
                                        <div class="snipcart-details">

                                            <a href="{{route('product.inquiry', $product)}}" class="btn btn-sm btn-success">
                                                <strong>REQUEST A QUOTATION</strong>
                                            </a>
                                            <!-- <form method="post" action="{{route('cart.add', $product)}}">
                                                {{ csrf_field() }}
                                                
                                                <fieldset>
                                                    <input type="submit" name="submit" value="Add to cart" class="button" />
                                                </fieldset>
                                            </form>  -->                                           
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>                    
                </div>                
                @endforeach                
                <div class="clearfix"> </div>
                
            </div>
            @endforeach            
        </div>
    </div>
    <div class="clearfix"></div>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $('.flash').delay(7000).fadeOut(1000);
    } );
</script>
@endsection