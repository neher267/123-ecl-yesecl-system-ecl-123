<style type="text/css">
    .webmail:hover{
        color: #ff6600;
    }
    
    .widget-footer .divider {
        margin: 10px 0 30px 0;
    }
</style>

<footer class="footer">
    <div class="container">
        <div class="row cws-multi-col">            
            <div class="col-md-3 col-sm-6 mb-md-50" style="padding: 40px 0px;">
                <div class="widget-footer text">
                    <h3>Services</h3>
                    <div class="divider"></div>
                    <div class="body">
                        @foreach($services as $service)
                        <div>
                            <a href="{{route('frontend.services.show', $service)}}" style="text-transform: capitalize;">{{$service->name}}</a>
                        </div>
                        @endforeach
                    </div>                    
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-sm-50" style="padding: 40px 0px;">
                <div class="widget-footer">
                    <h3>Contact 1</h3>
                    <div class="divider"></div> 
                    <h1 class="title" style="color: #808080">Bangladesh Office</h1>
                    <div class="body">
                        <p>House-278 (2nd Floor), Road-19, New DOHS, Mohakhali, Dhaka-1212, Bangladesh</p>
                        <p><span class="example2"><i class="fa fa-phone" style="color: #FF6600"></i> +880-9611222888</span></p>
                        <p><span class="example2"><i class="fa fa-envelope" style="color: #FF6600"></i> info@eclsystem.com</span></p> 
                    </div>                   
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-sm-50" style="padding: 40px 0px;">
                <div class="widget-footer">
                    <h3>Contact 2</h3>
                    <div class="divider"></div> 
                    <h1 class="title" style="color: #808080">Singapore Office</h1>
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
            <div class="col-md-3 col-sm-6 mb-sm-50" style="padding: 40px 0px;">
                <div class="widget-footer">
                    <h3>{{config('app.name')}}</h3>
                    <div class="divider"></div>
                    <div class="body">
                        <a href="#" class="flaticon-facebook" style="padding: 8px 2px; margin: -20px"> Facebook</a><br>
                        <a href="#" class="flaticon-twitter" style="padding: 8px 2px; margin: -20px"> Twitter</a><br>
                        <a href="#" class="flaticon-linkedin" style="padding: 8px 2px; margin: -20px"> Linkedin</a><br>
                        <a href="#" class="flaticon-youtube" style="padding: 8px 2px; margin: -20px"> Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <p style="color: #ddd; font-size: 14px;">Copyrights&copy;2015-{{date('Y')}}: ECL Systems Ltd.</p>
                </div>
                <div class="col-sm-4 text-right">
                    <!-- <a href="/#" class="flaticon-facebook"></a>
                    <a href="/#" class="flaticon-twitter"></a>
                    <a href="/#" class="flaticon-linkedin"></a>
                    <a href="/#" class="flaticon-youtube"></a> -->
                    <a href="https://www.eclsystem.com:2096" class="btn webmail">Web Mail</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="scroll-top"><i class="fa fa-angle-up"></i></div>     
