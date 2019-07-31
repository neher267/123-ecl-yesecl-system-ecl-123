        <a href="#" class="scrollup" title="Back to Top!"><i class="ion ion-android-arrow-up"></i></a>
        <!-- Back to Top -->

        <script type="text/javascript" src="https://www.livewireindia.com/js/jquery-1.12.4.min.js"></script>

        <script type="text/javascript" src="https://www.livewireindia.com/js/all.js"></script>

        <!-- external js -->

<!-- BEGIN TRACKJS -->
        <script type="text/javascript">
            window._trackJs = {
                token: '201b8640bca14610bc8ba280f17f429b'
            };
        </script>
        <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
        <!-- END TRACKJS -->
        <script type="text/javascript">
            // Starrr plugin (https://github.com/dobtco/starrr)
            var __slice = [].slice;

            (function($, window) {
                var Starrr;

                Starrr = (function() {
                    Starrr.prototype.defaults = {
                        rating: void 0,
                        numStars: 5,
                        change: function(e, value) {}
                    };

                    function Starrr($el, options) {
                        var i, _, _ref,
                            _this = this;

                        this.options = $.extend({}, this.defaults, options);
                        this.$el = $el;
                        _ref = this.defaults;
                        for (i in _ref) {
                            _ = _ref[i];
                            if (this.$el.data(i) != null) {
                                this.options[i] = this.$el.data(i);
                            }
                        }
                        this.createStars();
                        this.syncRating();
                        this.$el.on('mouseover.starrr', 'span', function(e) {
                            return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
                        });
                        this.$el.on('mouseout.starrr', function() {
                            return _this.syncRating();
                        });
                        this.$el.on('click.starrr', 'span', function(e) {
                            return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
                        });
                        this.$el.on('starrr:change', this.options.change);
                    }

                    Starrr.prototype.createStars = function() {
                        var _i, _ref, _results;

                        _results = [];
                        for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                            _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
                        }
                        return _results;
                    };

                    Starrr.prototype.setRating = function(rating) {
                        if (this.options.rating === rating) {
                            rating = void 0;
                        }
                        this.options.rating = rating;
                        this.syncRating();
                        return this.$el.trigger('starrr:change', rating);
                    };

                    Starrr.prototype.syncRating = function(rating) {
                        var i, _i, _j, _ref;

                        rating || (rating = this.options.rating);
                        if (rating) {
                            for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                                this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
                            }
                        }
                        if (rating && rating < 5) {
                            for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                                this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                            }
                        }
                        if (!rating) {
                            return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                        }
                    };

                    return Starrr;

                })();
                return $.fn.extend({
                    starrr: function() {
                        var args, option;

                        option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                        return this.each(function() {
                            var data;

                            data = $(this).data('star-rating');
                            if (!data) {
                                $(this).data('star-rating', (data = new Starrr($(this), option)));
                            }
                            if (typeof option === 'string') {
                                return data[option].apply(data, args);
                            }
                        });
                    }
                });
            })(window.jQuery, window);

            $(function() {
                return $(".starrr").starrr();
            });

            $(document).ready(function() {

                $('#stars').on('starrr:change', function(e, value) {
                    $('#count').html(value);
                });

                $('#stars-existing').on('starrr:change', function(e, value) {
                    $('#count-existing').html(value);
                });
            });
        </script>
        <!-- Current Page Scripts -->
        <script type="text/javascript">
            var $ = window.jQuery;

            $('.carousel-slider.carousel-header-education').slick({
                speed: 300,
                fade: true,
                adaptiveHeight: true,
                draggable: false,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        draggable: true
                    }
                }]
            });
        </script>

        
        
        
        <!-- Current Page Scripts -->

        <script type="text/javascript">
            var $ = window.jQuery;
            var $window = $(window);
            var $sliderPro = $('#header .slider-pro');

            $sliderPro.sliderPro({
                width: 1920,
                height: 900,
                forceSize: 'fullWidth',
                slideDistance: 0,
                autoScaleLayers: false,
                breakpoints: {
                    1820: {
                        height: 950
                    },
                    1720: {
                        height: 1000
                    },
                    1620: {
                        height: 1050
                    },
                    1520: {
                        height: 1100
                    },
                    1420: {
                        height: 1150
                    },
                    1320: {
                        height: 1200
                    },
                    1220: {
                        height: 1250
                    },
                    1120: {
                        height: 1300
                    },
                    1020: {
                        height: 1350
                    },
                    974: {
                        height: 1350,
                        forceSize: 'none'
                    },
                    920: {
                        height: 1400,
                        forceSize: 'none'
                    },
                    820: {
                        height: 1450,
                        forceSize: 'none'
                    },
                    750: {
                        height: 1500,
                        forceSize: 'none'
                    },
                    650: {
                        height: 1600,
                        forceSize: 'none'
                    },
                    550: {
                        height: 1700,
                        forceSize: 'none'
                    },
                    450: {
                        height: 2000,
                        forceSize: 'none'
                    },
                    350: {
                        height: 2800,
                        forceSize: 'none'
                    },
                    300: {
                        height: 3200,
                        forceSize: 'none'
                    }
                }
            });

            $sliderPro.on('gotoSlideComplete', function() {
                $window.trigger('resize.px.parallax');
            });
        </script>
        
        <!-- Current Page Scripts -->
        <script type="text/javascript">
            var $ = window.jQuery;

            // Header carousel slider with slickSlider
            $('.carousel-slider.carousel-header-blog').slick({
                speed: 400,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        draggable: true
                    }
                }]
            });

            // Posts carousel slider with slickSlider
            $('.carousel-slider.carousel-posts-blog').slick({
                arrows: false,
                dots: false,
                speed: 400,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        </script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55492179-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-55492179-1');
        </script>
        <!-- Facebook Pixel Code -->
        <script>
            ! function(f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function() {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '379851092368256');
            fbq('track', 'PageView');
        </script>
        <noscript>
            <img height="1" width="1" src="https://www.facebook.com/tr?id=379851092368256&ev=PageView
&noscript=1" />
        </noscript>
        <!-- End Facebook Pixel Code -->
        <script>
            $(document).ready(function() {
                $('.customer-logos').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    dots: false,
                    pauseOnHover: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                });
            });
        </script>
        <script>
            $('.flip').hover(function() {
                $(this).find('.card').toggleClass('flipped');

            });
        </script>
        <!-- Current Page Scripts -->

        <script type="text/javascript">
            var $ = window.jQuery;

            $('.easyzoom a').on('click', function() {
                return false;
            });

            $(window).on('load', function() {
                $('.easyzoom').easyZoom({
                    onShow: function() {
                        $('.easyzoom-flyout').hide().fadeIn(200);
                    }
                });
            });
        </script>
        <script>
            $(function() {
                var $first = $('#scroller>:first-child');
                $('#scroller').width($first.outerWidth(true));
                $first.clone(true).appendTo('#scroller');
                $('#scroller').addClass('ready');
            })
        </script>

        <script>
            $(document).ready(function(e) {

                $("#submitqr").click(function() {

                    var cap_code = 3258;
                    var cap_data = $("#cap_data").val();

                    if (cap_code != cap_data) {
                        alert("Please Enter Valid Code");
                        $("#cap_data").focus();
                        return false;
                    }

                });

            });
        </script>

        <script type="text/javascript">
            jQuery(document).ready(function($) {
                $('.slick.marquee').slick({
                    speed: 5000,
                    autoplay: true,
                    autoplaySpeed: 0,
                    centerMode: true,
                    cssEase: 'linear',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    initialSlide: 1,
                    arrows: false,
                    buttons: false
                });
            });
        </script>

        <script>
            $("#centre").change(function(e) {
                var CentreName = $('#centre').val();
                $("#ems_id").html("<h5 style='text-align:center;color:black'>Loading Please Wait....</h5>");
                $.ajax({
                    type: "POST",
                    url: "get_empname.php",
                    data: "evt_id=" + +"&CentreName=" + CentreName,
                    success: function(data) {
                        $("#ems_id").html(data);
                    }
                });
            });
        </script>
        <script type="text/javascript">
            $(document).ready(function() {
                // invoke the carousel
                $('#myCarousel').carousel({
                    interval: 6000
                });

                // scroll slides on mouse scroll 
                $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e) {

                    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                        $(this).carousel('prev');

                    } else {
                        $(this).carousel('next');

                    }
                });

                //scroll slides on swipe for touch enabled devices 

                $("#myCarousel").on("touchstart", function(event) {

                    var yClick = event.originalEvent.touches[0].pageY;
                    $(this).one("touchmove", function(event) {

                        var yMove = event.originalEvent.touches[0].pageY;
                        if (Math.floor(yClick - yMove) > 1) {
                            $(".carousel").carousel('next');
                        } else if (Math.floor(yClick - yMove) < -1) {
                            $(".carousel").carousel('prev');
                        }
                    });
                    $(".carousel").on("touchend", function() {
                        $(this).off("touchmove");
                    });
                });

            });
            //animated  carousel start
            $(document).ready(function() {

                //to add  start animation on load for first slide 
                $(function() {
                    $.fn.extend({
                        animateCss: function(animationName) {
                            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                            this.addClass('animated ' + animationName).one(animationEnd, function() {
                                $(this).removeClass(animationName);
                            });
                        }
                    });
                    $('.item1.active img').animateCss('slideInDown');
                    $('.item1.active h2').animateCss('zoomIn');
                    $('.item1.active p').animateCss('fadeIn');

                });

                //to start animation on  mousescroll , click and swipe

                $("#myCarousel").on('slide.bs.carousel', function() {
                    $.fn.extend({
                        animateCss: function(animationName) {
                            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                            this.addClass('animated ' + animationName).one(animationEnd, function() {
                                $(this).removeClass(animationName);
                            });
                        }
                    });

                    // add animation type  from animate.css on the element which you want to animate

                    $('.item1 img').animateCss('slideInDown');
                    $('.item1 h2').animateCss('zoomIn');
                    $('.item1 p').animateCss('fadeIn');

                    $('.item2 img').animateCss('zoomIn');
                    $('.item2 h2').animateCss('swing');
                    $('.item2 p').animateCss('fadeIn');

                    $('.item3 img').animateCss('fadeInLeft');
                    $('.item3 h2').animateCss('fadeInDown');
                    $('.item3 p').animateCss('fadeIn');
                });
            });
        </script>

