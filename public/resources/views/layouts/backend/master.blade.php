<!DOCTYPE html>
<html>
<head>
    <title>Ecl</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{csrf_token()}}">
    
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>

    <style type="text/css">
        /* width */
        ::-webkit-scrollbar {
            width: 0px;
        }        
    </style> 
    
    <!-- //for-mobile-apps -->
    <link href="{{asset('public/backend/css/bootstrap.css')}}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{asset('public/backend/css/style.css')}}" rel="stylesheet" type="text/css" media="all" />
    <!-- font-awesome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <!-- //font-awesome icons -->
    <!-- js -->
    <script src="{{asset('public/backend/js/jquery-1.11.1.min.js')}}"></script>
    <!-- //js -->
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <link rel='stylesheet' id='zerif_font-css' href='//fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C400italic%7CMontserrat%3A400%2C700%7CHomemade+Apple&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
    <style type="text/css">
        .fa-icon{
            margin-right: 5px;
            color: blue;
        }
    </style>
    <link rel="stylesheet" type="text/css" href="{{asset('public/css/custom.css')}}">
    <!-- start-smoth-scrolling -->
    <script type="text/javascript" src="{{asset('public/backend/js/move-top.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/backend/js/easing.js')}}"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <!-- start-smoth-scrolling -->
</head>

<body class="fonts">

    @yield('content')
    <!-- Bootstrap Core JavaScript -->
    <script src="{{asset('public/backend/js/bootstrap.min.js')}}"></script>
    <script>
        $(document).ready(function() {
            $(".dropdown").hover(
                function() {
                    $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                    $(this).toggleClass('open');
                },
                function() {
                    $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                    $(this).toggleClass('open');
                }
            );
        });
    </script>
    <!-- here stars scrolling icon -->
    <script type="text/javascript">
        $(document).ready(function() {
            /*
            	var defaults = {
            	containerID: 'toTop', // fading element id
            	containerHoverID: 'toTopHover', // fading element hover id
            	scrollSpeed: 1200,
            	easingType: 'linear' 
            	};
            */

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
    <!-- //here ends scrolling icon -->
    <script src="{{asset('public/backend/js/minicart.js')}}"></script>
    <script>
        paypal.minicart.render();

        paypal.minicart.cart.on('checkout', function(evt) {
            var items = this.items(),
                len = items.length,
                total = 0,
                i;

            // Count the number of each item in the cart
            for (i = 0; i < len; i++) {
                total += items[i].get('quantity');
            }

            if (total < 3) {
                alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
                evt.preventDefault();
            }
        });
    </script>
</body>
</html>