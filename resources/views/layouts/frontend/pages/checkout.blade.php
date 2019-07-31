@extends('layouts.frontend.master')

@section('content')
<section class="page-section">
    <span id="Pagebody_lblContent"></span>
    <br>
    <div class="container" style="min-height: 550px">
        <div class="row">
            <div class="col-md-10 col-md-offset-1" style="text-align: justify;">
                <!-- section title-->
                <table class="table table-striped table-bordered">
                	<thead>
                		<tr style="background-color: #f15c87; color: #ddd">
                			<th>Image</th>
                			<th>Name</th>
                			<th style="text-align: center;">Brand</th>
                			<th style="width: 130px; text-align: center;">Model No</th>
                			<th style="text-align: center;">Quantity</th>
                			<th style="width: 130px; text-align: center;">Manage(+/-)</th>
                		</tr>
                	</thead>

                	<tbody>
                        @if(Cart::count()>0)
                		@foreach(Cart::content() as $content)
                		<tr>
                			<td>
                				<img src="{{asset('public/'.$content->options->image)}}" style="height: 50px; width: 120px">
                			</td>
                			<td style="text-align: left;">{{$content->name}}</td>
                			<td style="text-align: center;">{{$content->options->brand->name}}</td>
                			<td style="text-align: center;">{{$content->options->model}}</td>
                			<td style="text-align: center;">{{$content->qty}}</td>
                			<td style="text-align: center;">
                				<form method="post" action="{{url('cart-update')}}">
                					{{csrf_field()}}
                					<input class="form-control" type="number" name="qty" style="width: 50px; display: inline; height: 25px;">
                					<input type="hidden" name="rowId" value="{{$content->rowId}}">
                					<button 
                                        type="submit" 
                                        class="btn btn-xs" 
                                        style="margin-bottom: 3px">
                                        <i class="fa fa-retweet" aria-hidden="true" style="color: green;"></i>
                                    </button> 

                                    
                				</form>
                			</td>
                		</tr>
                		@endforeach
                        @else
                        <tr>
                            <td colspan="6" style="text-align: center;">
                                <h3 style="color: #f15c87">Your Cart is empty!</h3>
                                <a style="color: blue" href="{{url('all-products')}}" class="nav-style"><i class="fa fa-shopping-cart"></i> Continue</a>
                            </td>
                        </tr>
                        @endif
                		
                	</tbody>
                </table>
            </div>

            @if(Cart::count()>0)
            <div class="col-md-10 col-md-offset-1">
            	<form  action="{{route('orders.store')}}" method="post">
                {{csrf_field()}}

                    <div class="col-md-8">                    
                        <h2 class="mt-0 mb-30">Place an Order</h2>
                        <div class="widget-contact-form pb-0">                     
                            <div style="padding-bottom:5px;">
                                <input name="name" type="text" id="" placeholder="Your Name" style="width:100%" required  class="form-row form-row-last" />
                            </div>
                            <div style="padding-bottom:5px;">
                                <input name="email" type="text" id="" placeholder="Your Email" style="width:100%" required  class="form-row form-row-last" />
                            </div>
                            <div style="padding-bottom:5px;">
                                <input name="company" type="text" id="" placeholder="Your Company" style="width:100%" required  class="form-row form-row-last" />
                            </div>
                            <div style="padding-bottom:5px;">
                                <input name="mobile" type="text" id="" placeholder="Your Phone" style="width:100%" required  class="form-row form-row-last" />
                            </div>
                            <div style="padding-bottom:5px; margin-left: 5px;">
                                <textarea name="message" rows="4" style="width:100%" id="Pagebody_message" placeholder="Your Message" aria-invalid="false" required ></textarea>
                            </div>
                            <input type="submit" value="Place Order" id="Pagebody_btnSend" class="cws-button border-radius pull-right" />
                        </div>
                    </div>
                </form>
            </div>
            @endif
        </div>
    </div>
    <!-- list-->
</section>
@endsection

