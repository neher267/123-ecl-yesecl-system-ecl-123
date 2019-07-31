@extends('layouts.frontend.master')

@section('content')
<section class="page-section">
    <div class="container">
        <div class="row">
            <div class="row mt-60">
                <div class="col-md-12" style="margin-bottom: 15px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.959976776569!2d90.39227880062207!3d23.784439513345884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74027c732b3%3A0xb617320d5845616b!2sECL+Systems+LTD!5e0!3m2!1sen!2sbd!4v1530084243163" width="1200" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="col-md-6 mb-md-50">
                    <div>
                        <h2 class="details-heading">How to find us</h2>
                        <hr>
                    </div>

                    <div class="details-fonts">
                        <p><span class="details-title">Please contact us at the following address and contact info:</span></p>
                        <p>
                            <span>House-278 (2nd Floor), Road-19, New DOHS, Mohakhali, Dhaka-1212, Bangladesh</span>
                        </p>
                        <p>&nbsp;</p>
                        <p><span class="example2"><strong>Phone: </strong>+880-9611222888</span></p>
                        <p><span class="example2"><strong>Email: </strong>info@eclsystem.com</span></p>
                    </div>
                </div>
                <form  action="{{url('inquiry')}}" method="post">
                {{csrf_field()}}

                    <div class="col-md-6">  
                        <div>
                            <h2 class="details-heading">Send Message</h2>
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