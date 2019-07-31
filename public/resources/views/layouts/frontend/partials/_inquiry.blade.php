<div class="contactus-button" onclick='document.getElementById("contactus-box").style.display="block"'>
    <div id="blink">Inquiry Now</div>
    <script language="javascript">
        function changeColor() {
            var color = "#FFFFFF|#fcff00";
            color = color.split("|");
            document.getElementById("blink").style.color = color[parseInt(Math.random() * color.length)];
        }
        setInterval("changeColor()", 300);
    </script>
    <style>
        .contactus-button {
            border: solid 0px red;
            padding: 10px;
            position: fixed;
            bottom: 100px;
            right: 20px;
            z-index: 999;
            background: #003c75;
            cursor: pointer;
            color: white;
            border-radius: 5px;
        }
    </style>
</div>

<div id="contactus-box" style="border-radius: 5px; border:solid 1px #cccccc;position: fixed; top:20%; left:50%; display:none;padding:18px;  margin-left:-25%; background:white; z-index:999;">
    <span style="position:absolute;right:8px;font-size: 18; top: 3px; color:red; z-index:999; cursor: pointer;font-family: sans-serif;" onclick="document.getElementById('contactus-box').style.display='none'"><i class="fas fa-minus-circle"></i></span>

    <h2 class="mt-0 mb-30" style="color: #10a5f3;">Your Message</h2>
    <hr>
    <form action="{{url('inquiry')}}" method="post">
        {{csrf_field()}}
        
        <div class="widget-contact-form pb-0">
            <!-- contact-form-->
            <div id="feedback-form-errors" role="alert" class="alert alert-danger alt alert-dismissible fade in">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true">×</span></button><i class="alert-icon border flaticon-exclamation-mark1"></i><strong>Error Message!</strong>
                <br>
                <div class="message"></div>
            </div>
            <div class="email_server_responce"></div>
            <div style="padding-bottom:5px; width: 100%">
                <input style="width: 50%" name="name" type="text" id="" size="40" aria-invalid="false" required class="form-row form-row-first" placeholder="Your Name">
                <input style="width: 48.1%; margin-left: 1%" name="email" type="text" id="" size="40" placeholder="Your Email" class="form-row form-row-last">
            </div>
            <div style="padding-bottom:5px;">
                <input name="company" type="text" placeholder="Your Company" style="width:100%; margin-left: 0px;" class="form-row form-row-last">
            </div>
            <div style="padding-bottom:5px;">
                <input name="mobile" type="text" placeholder="Your Phone" style="width:100%; margin-left: 0px;" required class="form-row form-row-last">
            </div>
            <div style="padding-bottom:5px;">
                <textarea name="message" rows="4" cols="20" placeholder="Your Message" aria-invalid="false" required></textarea>
            </div>
            <input type="submit" value="Send Message" class="cws-button border-radius pull-right">
        </div>
    </form>
</div>