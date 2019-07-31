@extends('layouts.backend.master')

@section('content')
<div id="contactus-box1 inquiry-form">
    <h2 class="text-center" style="color: #ff6600; font-size: 22px; font-weight: bold;padding-top: 15px;">
        {{$product->name}}: Inquiry
    </h2>

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
                    
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3">
                <div class="col-md-4">
                    <img src="{{asset('public/'.$product->image)}}" class="" style="height: 50px">
                </div>  
                <div class="col-md-4">
                    <strong>
                        Brand:
                    </strong>
                    <a target="_blank" href="{{$product->brand->url}}">
                        <img src="{{asset('public/'.$product->brand->src)}}" class="" style="height: 50px">
                    </a>
                </div>               
            </div>
        </div>
    </div>
    <hr>
    <form action="{{route('product.inquiry.store', $product)}}" method="post">
        {{csrf_field()}}
        
        <div class="container">

            <div class="form-group row">
                <div class="col-md-12">
                    <input class="form-control" name="company" type="text" placeholder="Your Company">  
                </div>           
            </div>

            <div class="form-group row">
                <div class="col-md-6">
                    <input name="name" type="text" required class="form-control" placeholder="Your Name">
                </div>

                <div class="col-md-6">
                    <input name="designation" type="text" class="form-control" placeholder="Designation">
                </div>                             
            </div>            

             <div class="form-group row">
                <div class="col-md-6">
                    <input class="form-control" name="mobile" type="text" placeholder="Your Phone" required> 
                </div>    

                <div class="col-md-6">
                    <input name="email" type="text" placeholder="Your Email" class="form-row form-row-last form-control" required>
                </div>       
            </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="4" cols="20" placeholder="Your Message" required></textarea>
                </div>           
            </div>
                
            <input type="submit" value="Submit" class="btn btn-sm btn-primary pull-right">
        </div>
    </form>
</div>
@endsection