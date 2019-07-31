@extends('layouts.frontend.master')

@section('content')
<style type="text/css">
    .divider{
        margin: 10px 0px;
        background-color: #FF6600;
    }
</style>
<section class="page-section">
    <div class="container">
        <div class="row">
            <div class="row mt-60">
                <div class="col-md-12" style="margin-bottom: 15px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.959976776569!2d90.39227880062207!3d23.784439513345884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74027c732b3%3A0xb617320d5845616b!2sECL+Systems+LTD!5e0!3m2!1sen!2sbd!4v1530084243163" width="1200" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>

                <div class="col-md-6 mb-md-50" style="border-bottom: 1px dotted #ddd; padding-bottom: 169px;">
                    <div>
                        <h1 class="title text-center">Contact us</h1>
                        <hr>
                    </div>

                    <div class="details-fonts col-md-6">
                        <h1 class="title">Bangladesh Office</h1>
                        <div class="divider mb-20 mt-25">&nbsp;</div>
                        <div class="body">
                            <p>House-278 (2nd Floor), Road-19, New DOHS, Mohakhali, Dhaka-1212, Bangladesh</p>
                            <p><span class="example2"><i class="fa fa-phone" style="color: #FF6600"></i> +880-9611222888</span></p>
                            <p><span class="example2"><i class="fa fa-envelope" style="color: #FF6600"></i> info@eclsystem.com</span></p> 
                        </div>
                    </div>

                    <div class="details-fonts col-md-6" style="padding-left: 40px">
                        <h1 class="title">Singapore Office</h1>
                        <div class="divider mb-20 mt-25">&nbsp;</div>
                        <div class="body">
                            <p>
                            140 Paya Lebar Road<br/>
                            #10-09 AZ @ PayaLebar<br/>
                            Singapore 409015<br/>
                            <p><span class="example2"><i class="fa fa-phone" style="color: #FF6600"></i> +6581450619</span></p>  
                            <p><span class="example2"><i class="fa fa-envelope" style="color: #FF6600"></i>  mohasin@eclsystem.com</span></p> 
                        </div>
                    </div>
                </div>

                <form action="{{url('inquiry')}}" method="post">
                {{csrf_field()}}

                    <div class="col-md-6">  
                        <div>
                            <h1 class="title">Send Message</h1>
                            <hr>
                        </div>

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
                                <textarea name="message" rows="4" style="width:101%" id="Pagebody_message" placeholder="Your Message" aria-invalid="false" required ></textarea>
                            </div>
                            <input type="submit" value="Send Message" id="Pagebody_btnSend" class="cws-button border-radius pull-right" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection