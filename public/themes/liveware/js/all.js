(function($) {
	
	'use strict';
	
	var $window	= $(window);
	var $body	= $('body');
	
	var Unicom = {
		
		// Initialization the functions
		init: function() {
			
			Unicom.Menu();
			Unicom.Scroll();
			Unicom.Form();
			Unicom.Button();
			Unicom.Placeholder();
			Unicom.Video();
			Unicom.Background();
			Unicom.Carousel();
			Unicom.Lightbox();
			Unicom.Tooltip();
			Unicom.Isotope();
			Unicom.Counter();
			Unicom.Tweets();
			
			$window.on('load', function() {
				Unicom.Animation();
			});
			
		},
		
		// Menu functions & settings
		Menu: function() {
			
			var $headerNavWrap	= $('#header.header-nav-bottom .navigation-wrap');
			var $navigation		= $('#navigation');
			
			// Navigation menu affix
			if ($body.hasClass('body-header-nav-bottom')) {
				$headerNavWrap.waypoint(function() {
					$navigation.removeClass('affix');
				}, {
					offset: 1
				});
				
				$headerNavWrap.waypoint(function() {
					$navigation.addClass('affix');
				});
			} else {
				if ($body.hasClass('body-header-2') || $body.hasClass('body-header-4') || $body.hasClass('body-header-5') || $body.hasClass('body-header-transparent')) {
					$body.waypoint(function() {
						$navigation.removeClass('affix');
					}, {
						offset: -1
					});
					
					$body.waypoint(function() {
						$navigation.addClass('affix');
					}, {
						offset: -2
					});
				} else if ($body.hasClass('body-header-3')) {
					$body.waypoint(function() {
						$navigation.removeClass('affix');
					}, {
						offset: -140
					});
					
					$body.waypoint(function() {
						$navigation.addClass('affix');
					}, {
						offset: -141
					});
				} else {
					$body.waypoint(function() {
						$navigation.removeClass('affix');
					}, {
						offset: -40
					});
					
					$body.waypoint(function() {
						$navigation.addClass('affix');
					}, {
						offset: -41
					});
				}
			}
			
			var timeout;
			
			$('#navigation .navbar-menu .nav li').on('mouseover', function() {
				var $elem = $('.sub-menu', $(this)).first();
				
				if ($elem.length > 0) {
					if ($elem.offset().left + $elem.outerWidth() > $window.width()) {
						$elem.addClass('sub-menu-left');
					}
				}
				
				clearTimeout(timeout);
			});
			
			$('#navigation .navbar-menu .nav').on('mouseleave', function() {
				timeout = setTimeout(function(elem) {
					$('.sub-menu.sub-menu-left', elem).removeClass('sub-menu-left');
				}, 200);
			});
			
			$('#nav-mobile .scrollbar-inner, #nav-shop-filter .scrollbar-inner').scrollbar();
			
		},
		
		// Scroll functions & settings
		Scroll: function() {
			
			// Navigation menu scrollspy to anchor section
			setTimeout(function() {
				$body.scrollspy({
					target: '#navigation .navbar.scrollspy',
					offset: 71
				});
			}, 100);
			
			// Smooth scrolling to anchor section
			$('a.smooth-scroll').on('click', function(e) {
				var $anchor	  = $(this);
				var offsetTop = '';
				
				if (window.Response.band(992)) {
					offsetTop = parseInt($($anchor.attr('href')).offset().top - 70, 0);
				} else {
					offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
				}
				
				$('html, body').stop().animate({
					scrollTop: offsetTop
				}, 2000,'easeOutExpo');
				
				e.preventDefault();
			});
			
		},
		
		// Form functions & settings
		Form: function() {
			
			var pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
			
			// Checking subcribe form input when focus & keypress event
			/*$('.affa-form-subscribe input[type="text"], .affa-form-subscribe input[type="email"]').on('focus keypress', function() {
				var $input = $(this);
				
				if ($input.hasClass('error')) {
					$input.val('').removeClass('error');
				}
				
				if ($input.hasClass('success')) {
					$input.val('').removeClass('success');
				}
			});*/
			
			// Checking form input when focus and keypress event
			$('.affa-form-contact input[type="text"], .affa-form-contact input[type="email"], .affa-form-contact textarea, .affa-form-signup input[type="text"], .affa-form-signup input[type="email"], .affa-form-signup input[type="password"], .affa-form-signup textarea, .affa-form-signup select, .affa-form-signup2 input[type="text"], .affa-form-signup2 input[type="email"], .affa-form-signup2 input[type="password"], .affa-form-signup2 textarea, .affa-form-signup2 select, .affa-form-signup3 input[type="text"], .affa-form-signup3 input[type="email"], .affa-form-signup3 input[type="password"], .affa-form-signup3 textarea, .affa-form-signup3 select').on('focus keypress', function() {
				var $input = $(this);
				
				if ($input.hasClass('error')) {
					$input.removeClass('error');
				}
			});
			
			// Subscribe form when submit button clicked
			/*$('.affa-form-subscribe').submit(function() {
				var $email	= $(this).find('input[name="email"]');
				var $submit	= $(this).find('input[name="submit"]');
				
				if (pattern.test($email.val()) === false) {
					$email.val('Please enter a valid email address!').addClass('error');
				} else {
					var submitData = $(this).serialize();
					$email.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					$.ajax({
						type: 'POST',
						url: 'includes/mailchimp/process-subscribe.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								
								if (msg_split[0] === 'success') {
									$submit.removeAttr('disabled');
									$email.removeAttr('disabled').val(msg_split[1]).addClass('success');
								} else {
									$submit.removeAttr('disabled');
									$email.removeAttr('disabled').val(msg_split[1]).addClass('error');
								}
							}
						}
					});
				}
				
				return false;
			});
			*/
			// Contact form when submit button clicked
			$('.affa-form-contact').submit(function() {
				var $form		= $(this);
				var submitData	= $form.serialize();
				var $name		= $form.find('input[name="name"]');
				var $email		= $form.find('input[name="email"]');
				var $subject	= $form.find('input[name="subject"]');
				var $message	= $form.find('textarea[name="message"]');
				var $submit		= $form.find('input[name="submit"]');
				var status		= true;
				
				if ($email.val() === '' || pattern.test($email.val()) === false) {
					$email.addClass('error');
					status = false;
				}
				
				if ($message.val() === '') {
					$message.addClass('error');
					status = false;
				}
				
				if (status) {
					$name.attr('disabled', 'disabled');
					$email.attr('disabled', 'disabled');
					$subject.attr('disabled', 'disabled');
					$message.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					$.ajax({
						type: 'POST',
						url: 'includes/process-contact.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								
								if (msg_split[0] === 'success') {
									$name.val('').removeAttr('disabled').removeClass('error');
									$email.val('').removeAttr('disabled').removeClass('error');
									$subject.val('').removeAttr('disabled').removeClass('error');
									$message.val('').removeAttr('disabled').removeClass('error');
									$submit.removeAttr('disabled');
									$form.find('.submit-status').html('<div class="submit-status-text"><span class="success"><i class="ion ion-ios-checkmark-outline"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
								} else {
									$name.removeAttr('disabled').removeClass('error');
									$email.removeAttr('disabled').removeClass('error');
									$subject.removeAttr('disabled').removeClass('error');
									$message.removeAttr('disabled').removeClass('error');
									$submit.removeAttr('disabled').removeClass('error');
									$form.find('.submit-status').html('<div class="submit-status-text"><span class="error"><i class="ion ion-ios-close-outline"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
								}
							}
						}
					});
				}
				
				status = true;
				
				return false;
			});
			
			// Signup form when submit button clicked
			$('.affa-form-signup').submit(function() {
				var $form		= $(this);
				var submitData	= $form.serialize();
				var $name		= $form.find('input[name="name"]');
				var $email		= $form.find('input[name="email"]');
				var $submit		= $form.find('input[name="submit"]');
				var status		= true;
				
				if ($email.val() === '' || pattern.test($email.val()) === false) {
					$email.addClass('error');
					status = false;
				}
				
				if (status) {
					$name.attr('disabled', 'disabled');
					$email.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					$.ajax({
						type: 'POST',
						url: 'includes/process-signup.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								
								if (msg_split[0] === 'success') {
									$name.val('').removeAttr('disabled');
									$email.val('').removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.parents('.header-content-form').find('.submit-status').html('<span class="success"><i class="ion ion-ios-checkmark-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								} else {
									$name.removeAttr('disabled');
									$email.removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.parents('.header-content-form').find('.submit-status').html('<span class="error"><i class="ion ion-ios-close-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								}
							}
						}
					});
				}
				
				status = true;
				
				return false;
			});
			
			// Signup form when submit button clicked
			$('.affa-form-signup2').submit(function() {
				var $form		= $(this);
				var submitData	= $form.serialize();
				var $name		= $form.find('input[name="name"]');
				var $email		= $form.find('input[name="email"]');
				var $phone		= $form.find('input[name="phone"]');
				var $message	= $form.find('textarea[name="message"]');
				var $agree		= $form.find('input[name="agree"]');
				var $submit		= $form.find('input[name="submit"]');
				var status		= true;
				
				if ($email.val() === '' || pattern.test($email.val()) === false) {
					$email.addClass('error');
					status = false;
				}
				
				if ($message.val() === '') {
					$message.addClass('error');
					status = false;
				}
				
				if (status) {
					$name.attr('disabled', 'disabled');
					$email.attr('disabled', 'disabled');
					$phone.attr('disabled', 'disabled');
					$message.attr('disabled', 'disabled');
					$agree.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					$.ajax({
						type: 'POST',
						url: 'includes/process-signup2.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								
								if (msg_split[0] === 'success') {
									$name.val('').removeAttr('disabled');
									$email.val('').removeAttr('disabled');
									$phone.val('').removeAttr('disabled');
									$message.val('').removeAttr('disabled');
									$agree.attr('checked', false).removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.siblings('.submit-status').html('<span class="success"><i class="ion ion-ios-checkmark-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								} else {
									$name.removeAttr('disabled');
									$email.removeAttr('disabled');
									$phone.removeAttr('disabled');
									$message.removeAttr('disabled');
									$agree.removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.siblings('.submit-status').html('<span class="error"><i class="ion ion-ios-close-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								}
							}
						}
					});
				}
				
				status = true;
				
				return false;
			});
			
			// Signup form when submit button clicked
			$('.affa-form-signup3').submit(function() {
				var $form		= $(this);
				var submitData	= $form.serialize();
				var $name		= $form.find('input[name="name"]');
				var $email		= $form.find('input[name="email"]');
				var $phone		= $form.find('input[name="phone"]');
				var $message	= $form.find('textarea[name="message"]');
				var $submit		= $form.find('input[name="submit"]');
				var status		= true;
				
				if ($email.val() === '' || pattern.test($email.val()) === false) {
					$email.addClass('error');
					status = false;
				}
				
				if ($message.val() === '') {
					$message.addClass('error');
					status = false;
				}
				
				if (status) {
					$name.attr('disabled', 'disabled');
					$email.attr('disabled', 'disabled');
					$phone.attr('disabled', 'disabled');
					$message.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					$.ajax({
						type: 'POST',
						url: 'includes/process-signup3.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								
								if (msg_split[0] === 'success') {
									$name.val('').removeAttr('disabled');
									$email.val('').removeAttr('disabled');
									$phone.val('').removeAttr('disabled');
									$message.val('').removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.siblings('.submit-status').html('<span class="success"><i class="ion ion-ios-checkmark-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								} else {
									$name.removeAttr('disabled');
									$email.removeAttr('disabled');
									$phone.removeAttr('disabled');
									$message.removeAttr('disabled');
									$submit.removeAttr('disabled');
									$form.siblings('.submit-status').html('<span class="error"><i class="ion ion-ios-close-outline"></i> ' + msg_split[1] + '</span>').fadeIn(300).delay(3000).fadeOut(300);
								}
							}
						}
					});
				}
				
				status = true;
				
				return false;
			});
			
		},
		
		// Button functions & settings
		Button: function() {
			
			var menuOpenProcess = false;
			
			$('#header .navbar-btn-toggle').on('click', function() {
				menuOpenProcess = true;
				
				if ($body.hasClass('nav-mobile-open')) {
					$body.removeClass('nav-mobile-open');
				} else {
					$body.addClass('nav-mobile-open');
				}
				
				setTimeout(function() {
					menuOpenProcess = false;
				}, 100);
			});
			
			$('#nav-mobile .navbar-btn-close').on('click', function() {
				$body.removeClass('nav-mobile-open');
			});
			
			$('#nav-mobile .nav li.menu-item-has-children > span').on('click', function() {
				menuOpenProcess = true;
				
				if ($(this).hasClass('in')) {
					$(this).siblings('ul').slideUp(200, function() {
						$(this).removeClass('in').siblings('span').removeClass('in').text('+');
						menuOpenProcess = false;
					});
				} else {
					$(this).addClass('in').text('-').siblings('ul').slideDown(200, function() {
						$(this).addClass('in');
						menuOpenProcess = false;
					});
				}
			});
			
			var filterOpenProcess = false;
			
			$('.products-nav .products-nav-filter').on('click', function(e) {
				filterOpenProcess = true;
				
				if ($body.hasClass('nav-shop-filter-open')) {
					$body.removeClass('nav-shop-filter-open');
				} else {
					$body.addClass('nav-shop-filter-open');
				}
				
				setTimeout(function() {
					filterOpenProcess = false;
				}, 100);
				
				e.preventDefault();
			});
			
			$('#nav-shop-filter .navbar-btn-close').on('click', function() {
				$body.removeClass('nav-shop-filter-open');
			});
			
			$('#body-wrap').on('click', function() {
				if ($body.hasClass('nav-mobile-open') && menuOpenProcess === false || $body.hasClass('nav-shop-filter-open') && filterOpenProcess === false) {
					$body.removeClass('nav-mobile-open').removeClass('nav-shop-filter-open');
				}
			});
			
			$('#navigation .navbar-secondary .btn-cart, #navigation .navbar-secondary .navbar-cart').on('mouseenter', function() {
				var $cart = $(this).parents('.navbar-secondary').find('.navbar-cart');
				
				if (!$cart.hasClass('in')) {
					$cart.addClass('in');
				}
			});
			
			$('#navigation .navbar-secondary .btn-cart, #navigation .navbar-secondary .navbar-cart').on('mouseleave', function() {
				$(this).parents('.navbar-secondary').find('.navbar-cart').removeClass('in');
			});
			
			$('#nav-mobile-top .navbar-secondary .btn-cart').on('click', function(e) {
				var $cart = $(this).parents('.navbar-secondary').find('.navbar-cart');
				
				if ($cart.hasClass('in')) {
					$cart.removeClass('in');
				} else {
					$cart.addClass('in');
				}
				
				e.preventDefault();
			});
			
			$('#navigation .navbar-secondary .btn-search, #nav-mobile-top .navbar-secondary .btn-search').on('click', function(e) {
				var $form = $(this).parents('.navbar-btn').next();
				
				$form.addClass('in');
				
				setTimeout(function() {
					$form.find('input[type="text"]').focus();
				}, 200);
				
				if ($(this).parents('#header.header-transparent').length > 0) {
					$(this).parents('.navbar').addClass('bg-white');
				}
				
				e.preventDefault();
			});
			
			$('#navigation .navbar-secondary .btn-close, #nav-mobile-top .navbar-secondary .btn-close').on('click', function() {
				$(this).parents('form').removeClass('in');
				
				if ($(this).parents('#header.header-transparent').length > 0) {
					$(this).parents('.navbar').removeClass('bg-white');
				}
			});
			
			$('.panel-group a[data-toggle="collapse"], .nav-tabs a').on('click', function() {
				setTimeout(function() {
					$window.trigger('resize.px.parallax');
				}, 400);
			});
			
			$('.panel-group-toggle .panel-heading a').each(function() {
				$(this).on('click', function() {
					var $elem	= $(this);
					var $tab_id	= $($elem.attr('href'));
					
					if ($tab_id.hasClass('in')) {
						$elem.addClass('collapsed');
						$tab_id.slideUp(300, function() {
							$(this).removeClass('in');
						});
					} else {
						$elem.removeClass('collapsed');
						$tab_id.slideDown(300, function() {
							$(this).addClass('in');
						});
					}
					
					return false;
				});
			});
			
			$('.products-nav .products-nav-options .option-selected').on('click', function() {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active').siblings('.options-list').removeClass('in');
				} else {
					$(this).addClass('active').siblings('.options-list').addClass('in');
				}
			});
			
			$('.products-nav .products-nav-options .options-list li').on('click', function() {
				$(this).parents('.options-list').removeClass('in').find('li').removeClass('current');
				$(this).addClass('current');
				$(this).parents('.options-list').siblings('.option-selected').html($(this).html()).removeClass('active');
			});
			
			var $scrollUp = $('.scrollup');
			
			$body.waypoint(function() {
				$scrollUp.removeClass('visible');
			}, {
				offset: -130
			});
			
			$body.waypoint(function() {
				$scrollUp.addClass('visible');
			}, {
				offset: -131
			});
			
			$scrollUp.click(function() {
				$('html, body').stop().animate({
					scrollTop: 0
				}, 2000, 'easeOutExpo');
				
				return false;
			});
			
		},
		
		// Placeholder functions & settings
		Placeholder: function() {
			
			// Add placeholder text compatibility for IE8
			$('input, textarea').placeholder();
			
		},
		
		// Video functions & settings
		Video: function() {
			
			// Responsive video frame size
			$body.fitVids();
			
		},
		
		// Background functions & settings
		Background: function() {
			
			// Background with parallax scrolling effect
			$window.resize(function() {
				setTimeout(function() {
					$window.trigger('resize.px.parallax');
				}, 400);
			});
			
		},
		
		// Carousel functions & settings
		Carousel: function() {
			
			// Carousel arrows 2 columns
			$('.carousel-slider.carousel-arrows-2col').slick({
				speed: 400,
				slidesToShow: 2,
				slidesToScroll: 2,
				draggable: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel arrows 3 columns
			$('.carousel-slider.carousel-arrows-3col').slick({
				speed: 400,
				slidesToShow: 3,
				slidesToScroll: 3,
				draggable: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel arrows 4 columns
			$('.carousel-slider.carousel-arrows-4col').slick({
				speed: 400,
				slidesToShow: 4,
				slidesToScroll: 4,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel arrows 5 columns
			$('.carousel-slider.carousel-arrows-5col').slick({
				speed: 400,
				slidesToShow: 5,
				slidesToScroll: 5,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel arrows 6 columns
			$('.carousel-slider.carousel-arrows-6col').slick({
				speed: 400,
				slidesToShow: 6,
				slidesToScroll: 6,
				draggable: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel dots 2 columns
			$('.carousel-slider.carousel-dots-2col').slick({
				arrows: false,
				dots: true,
				speed: 400,
				slidesToShow: 2,
				slidesToScroll: 2,
				draggable: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel dots 3 columns
			$('.carousel-slider.carousel-dots-3col').slick({
				arrows: false,
				dots: true,
				speed: 400,
				slidesToShow: 3,
				slidesToScroll: 3,
				draggable: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel dots 4 columns
			$('.carousel-slider.carousel-dots-4col').slick({
				arrows: false,
				dots: true,
				speed: 400,
				slidesToShow: 4,
				slidesToScroll: 4,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel dots 5 columns
			$('.carousel-slider.carousel-dots-5col').slick({
				arrows: false,
				dots: true,
				speed: 400,
				slidesToShow: 5,
				slidesToScroll: 5,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel dots 6 columns
			$('.carousel-slider.carousel-dots-6col').slick({
				arrows: false,
				dots: true,
				speed: 400,
				slidesToShow: 6,
				slidesToScroll: 6,
				draggable: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							draggable: true
						}
					}
				]
			});
			
			// Carousel draggable 2 columns
			$('.carousel-slider.carousel-draggable-2col').slick({
				arrows: false,
				speed: 400,
				slidesToShow: 2,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Carousel draggable 3 columns
			$('.carousel-slider.carousel-draggable-3col').slick({
				arrows: false,
				speed: 400,
				slidesToShow: 3,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Carousel draggable 4 columns
			$('.carousel-slider.carousel-draggable-4col').slick({
				arrows: false,
				speed: 400,
				slidesToShow: 4,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Carousel draggable 5 columns
			$('.carousel-slider.carousel-draggable-5col').slick({
				arrows: false,
				speed: 400,
				slidesToShow: 5,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Carousel draggable 6 columns
			$('.carousel-slider.carousel-draggable-6col').slick({
				arrows: false,
				speed: 400,
				slidesToShow: 6,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Carousel nav
			$('.carousel-nav-btn a').on('click', function(e) {
				var $slider = $(this).parents('.carousel-nav-btn').siblings('.carousel-slider.carousel-nav-content');
				
				if ($(this).hasClass('nav-prev')) {
					$slider.slick('slickPrev');
				} else {
					$slider.slick('slickNext');
				}
				
				e.preventDefault();
			});
			
			$('.carousel-slider.carousel-nav-content').slick({
				arrows: false,
				speed: 300,
				slidesToShow: 4,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							draggable: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							draggable: true
						}
					}
				]
			});
			
			// Testimonials
			$('.carousel-slider.carousel-testimonials').slick({
				speed: 400,
				fade: true,
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
			
			// Testimonials 2
			$('.carousel-slider.carousel-testimonials2').slick({
				speed: 300,
				autoplay: true,
				autoplaySpeed: 5000,
				draggable: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							arrows: false,
							dots: true
						}
					},
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							dots: true,
							draggable: true
						}
					}
				]
			});
			
			// Clients
			$('.carousel-slider.carousel-clients').slick({
				arrows: false,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 6,
				centerMode: false,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 301,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Single product thumbnails
			$('.carousel-slider.carousel-product-thumbnails-nav').slick({
				arrows: false,
				speed: 300,
				infinite: false,
				slidesToShow: 5,
				vertical: true,
				focusOnSelect: true,
				verticalSwiping: true,
				swipeToSlide: true,
				asNavFor: '.carousel-slider.carousel-product-thumbnails',
				responsive: [
					{
						breakpoint: 1200
					}
				]
			});
			
			$('.carousel-slider.carousel-product-thumbnails-nav').on('breakpoint');
			
			$('.carousel-slider.carousel-product-thumbnails').slick({
				speed: 300,
				fade: true,
				infinite: false,
				swipe: false,
				asNavFor: '.carousel-slider.carousel-product-thumbnails-nav'
			});
			
			// General slider 2
			$('.carousel-slider.general-slider2').slick({
				arrows: false,
				dots: true,
				speed: 400,
				adaptiveHeight: true
			});
			
			// General slider 2 autoplay
			$('.carousel-slider.general-slider2-autoplay').slick({
				arrows: false,
				dots: true,
				speed: 400,
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 5000
			});
			
			$('.carousel-slider.general-slider2, .carousel-slider.general-slider2-autoplay').on('beforeChange', function() {
				$('.slick-slide:not(.slick-current.slick-active) .slide-layer', this).each(function() {
					if ($(this).data('animation')) {
						$(this).removeClass('animated ' + $(this).data('animation'));
					}
				});
			});
			
			$('.carousel-slider.general-slider2, .carousel-slider.general-slider2-autoplay').on('afterChange', function() {
				$('.slick-slide .slide-layer', this).each(function() {
					if ($(this).data('animation')) {
						$(this).removeClass('animated ' + $(this).data('animation'));
					}
				});
				
				$('.slick-slide.slick-current.slick-active .slide-layer', this).each(function() {
					if ($(this).data('animation')) {
						$(this).addClass('animation animated ' + $(this).data('animation'));
					}
				});
			});
			
			// General slider
			$('.carousel-slider.general-slider').slick({
				dots: true,
				speed: 300,
				adaptiveHeight: true,
				draggable: false,
				responsive: [{
					breakpoint: 768,
					settings: {
						draggable: true
					}
				}]
			});
			
			// General slider autoplay
			$('.carousel-slider.general-slider-autoplay').slick({
				dots: true,
				speed: 300,
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
			
		},
		
		// Lightbox functions & settings
		Lightbox: function() {
			
			// Preview images popup gallery with Fancybox
			$('.fancybox').fancybox({
				loop: false
			});
			
			$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
				openEffect: 'none',
				closeEffect: 'none',
				prevEffect: 'none',
				nextEffect: 'none',
				arrows: false,
				helpers: {
					title: null,
					media: {},
					buttons : {}
				}
			});
			
		},
		
		// Tooltip functions & settings
		Tooltip: function() {
			
			// Tooltip element on hover
			$('.btn-tooltip').tooltip();
			
			// Popover element on click
			var $btnPopover = $('.btn-popover');
			$btnPopover.popover();
			$btnPopover.on('click', function(e) {
				e.preventDefault();
			});
			
		},
		
		// Isotope functions & settings
		Isotope: function() {
			
			// Filter elements with jQuery Isotope
			var $filter		= $('.isotope-menu');
			var $container	= $('.isotope-row, .isotope-row-noset');
			var $container2	= $('.isotope-row-masonry, .isotope-row-masonry-noset');
			
			// Initialize
			$window.load(function() {
				$container.isotope({
					filter			 : '*',
					layoutMode		 : 'fitRows',
					animationOptions : {
						duration : 400
					}
				}).on('arrangeComplete', function() {
					$window.trigger('resize.px.parallax');
				}).on('layoutComplete', function() {
					$window.trigger('resize.px.parallax');
				});
				
				$container2.isotope({
					filter			 : '*',
					animationOptions : {
						duration : 400
					},
					masonry : {
						columnWidth: 1
					}
				}).on('arrangeComplete', function() {
					$window.trigger('resize.px.parallax');
				}).on('layoutComplete', function() {
					$window.trigger('resize.px.parallax');
				});
			});
			
			// Trigger item lists filter when link clicked
			$filter.find('a').click(function() {
				var selector = $(this).attr('data-filter');
				
				$filter.find('a').removeClass('active');
				$(this).addClass('active');
				
				if ($container.length > 0) {
					$container.isotope({
						filter			 : selector,
						animationOptions : {
							animationDuration : 400,
							queue : false
						}
					});
				}
				
				if ($container2.length > 0) {
					$container2.isotope({
						filter			 : selector,
						animationOptions : {
							animationDuration : 400,
							queue : false
						}
					});
				}
				
				return false;
			});
			
		},
		
		// Counter functions & settings
		Counter: function() {
			
			// CounterUp element function
			$('.affa-counter > h4 > span, .affa-counter2 > h4 > span, .affa-progress-bar .progress-bar-line .bar-line-val > i').counterUp({
				delay: 10,
				time: 3000
			});
			
			// Progress Bar element function
			$('.affa-progress-bar .progress-bar-line .bar-line-overlay').each(function() {
				$(this).css('width', 0);
			});
			
			$('.affa-progress-bar .progress-bar-line .bar-line-val').each(function() {
				$(this).css('left', 0);
			});
			
			$('.affa-progress-bar').each(function() {
				$(this).waypoint(function() {
					var $elem = $(this).find('.progress-bar-line.in');
					
					$elem.find('.bar-line-overlay').animate({
						'width': $elem.find('.bar-line-overlay').html()
					}, 3000, 'easeOutExpo');
					
					$elem.find('.bar-line-val').animate({
						'left': $elem.find('.bar-line-overlay').html()
					}, 3000, 'easeOutExpo');
					
					$elem.removeClass('in');
				}, {
					offset: '95%'
				});
			});
			
			$('.affa-progress-bar2').each(function() {
				$(this).waypoint(function() {
					var $elem = $(this).find('.progress-bar-line.in');
					
					$elem.animate({
						'width': $elem.html()
					}, 3000, 'easeOutExpo');
					
					$elem.removeClass('in');
				}, {
					offset: '95%'
				});
			});
			
			if ($('.isotope-row, .isotope-row-noset').length > 0) {
				$window.on('resize', function() {
					setTimeout(function() {
						$('.affa-progress-bar').each(function() {
							$(this).waypoint(function() {
								var $elem = $(this).find('.progress-bar-line.in');
								
								$elem.find('.bar-line-overlay').animate({
									'width': $elem.find('.bar-line-overlay').html()
								}, 3000, 'easeOutExpo');
								
								$elem.find('.bar-line-val').animate({
									'left': $elem.find('.bar-line-overlay').html()
								}, 3000, 'easeOutExpo');
								
								$elem.removeClass('in');
							}, {
								offset: '95%'
							});
						});
					}, 500);
				});
			}
			
			// CounterDown element function
			$('.row-countdown').each(function() {
				$(this).countdown({
					until: new Date('01/01/2019'),
					layout: $(this).html()
				});
			});
			
		},
		
		// Twitter feeds functions & settings
		Tweets: function() {
			
			var $element  = $('.carousel-slider.carousel-tweets');
			var $element2 = $('.carousel-slider.carousel-tweets2');
			
			if ($element.length > 0 || $element2.length > 0) {
				$.ajax({
					url: 'includes/tweets/get-tweets.php',
					dataType: 'html',
					success: function(content) {
						var status = content.substr(0,5);
						
						if (status === 'error') {
							var output = content.split('|');
							
							if ($element.length > 0) {
								$element.html(output[1]).hide().fadeIn(1000);
							}
							
							if ($element2.length > 0) {
								$element2.html(output[1]).hide().fadeIn(1000);
							}
						} else {
							if ($element.length > 0) {
								$element.removeClass('no-content').html(content).hide().fadeIn(1000);
								$element.slick({
									speed: 400,
									fade: true,
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
							}
							
							if ($element2.length > 0) {
								$element2.removeClass('no-content').html(content).hide().fadeIn(1000);
								$element2.slick({
									arrows: false,
									dots: true,
									speed: 300,
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
							}
						}
					}
				});
			}
			
		},
		
		// Animation functions & settings
		Animation: function() {
			
			// Embed animation effects to HTML elements with CSS3
			$('.animation, .animation-visible').each(function() {
				var $element = $(this);
				
				$element.waypoint(function() {
					var delay = 0;
					
					if ($element.data('delay')) {
						delay = parseInt($element.data('delay'), 0);
					}
					
					if (!$element.hasClass('animated')) {
						setTimeout(function() {
							$element.addClass('animated ' + $element.data('animation'));
						}, delay);
					}
					
					delay = 0;
				}, {
					offset: '80%'
				});
			});
			
		}
		
	};
	
	// Run the main function
	$(function() {
		Unicom.init();
	});
	
})(window.jQuery);


/* 2 */
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
    (function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=f7d28feb655c4427713c)
 * Config saved to config.json and https://gist.github.com/f7d28feb655c4427713c
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.6",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.6",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.6",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.6",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.6",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.6",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);


/*!
 * response.js 0.9.1+201410311050
 * https://github.com/ryanve/response.js
 * MIT License (c) 2014 Ryan Van Etten
 */
!function(a,b,c){var d=a.jQuery||a.Zepto||a.ender||a.elo;"undefined"!=typeof module&&module.exports?module.exports=c(d):a[b]=c(d)}(this,"Response",function(a){function b(a){return a===+a}function c(a,b){return function(){return a.apply(b,arguments)}}function d(a,b){var c=this.call();return c>=(a||0)&&(!b||b>=c)}function e(a,b,c){for(var d=[],e=a.length,f=0;e>f;)d[f]=b.call(c,a[f],f++,a);return d}function f(a){return a?i("string"==typeof a?a.split(" "):a):[]}function g(a,b,c){if(null==a)return a;for(var d=a.length,e=0;d>e;)b.call(c||a[e],a[e],e++,a);return a}function h(a,b,c){null==b&&(b=""),null==c&&(c="");for(var d=[],e=a.length,f=0;e>f;f++)null==a[f]||d.push(b+a[f]+c);return d}function i(a,b,c){var d,e,f,g=[],h=0,i=0,j="function"==typeof b,k=!0===c;for(e=a&&a.length,c=k?null:c;e>i;i++)f=a[i],d=j?!b.call(c,f,i,a):b?typeof f!==b:!f,d===k&&(g[h++]=f);return g}function j(a,c){if(null==a||null==c)return a;if("object"==typeof c&&b(c.length))_.apply(a,i(c,"undefined",!0));else for(var d in c)cb.call(c,d)&&void 0!==c[d]&&(a[d]=c[d]);return a}function k(a,c,d){return null==a?a:("object"==typeof a&&!a.nodeType&&b(a.length)?g(a,c,d):c.call(d||a,a),a)}function l(a){var b=T.devicePixelRatio;return null==a?b||(l(2)?2:l(1.5)?1.5:l(1)?1:0):isFinite(a)?b&&b>0?b>=a:(a="only all and (min--moz-device-pixel-ratio:"+a+")",zb(a)?!0:zb(a.replace("-moz-",""))):!1}function m(a){return a.replace(tb,"$1").replace(sb,function(a,b){return b.toUpperCase()})}function n(a){return"data-"+(a?a.replace(tb,"$1").replace(rb,"$1-$2").toLowerCase():a)}function o(a){var b;return"string"==typeof a&&a?"false"===a?!1:"true"===a?!0:"null"===a?null:"undefined"===a||(b=+a)||0===b||"NaN"===a?b:a:a}function p(a){return!a||a.nodeType?a:a[0]}function q(a,b,c){var d,e,f,g,h;if(a.attributes)for(d="boolean"==typeof c?/^data-/:d,g=0,h=a.attributes.length;h>g;)(f=a.attributes[g++])&&(e=""+f.name,d&&d.test(e)!==c||null==f.value||b.call(a,f.value,e,f))}function r(a){var b;if(a&&1===a.nodeType)return(b=Y&&a.dataset)?b:(b={},q(a,function(a,c){b[m(c)]=""+a},!0),b)}function s(a,b,c){for(var d in b)cb.call(b,d)&&c(a,d,b[d])}function t(a,b,c){if(a=p(a),a&&a.setAttribute){if(void 0===b&&c===b)return r(a);var d=db(b)&&n(b[0]);if("object"!=typeof b||d){if(b=d||n(b),!b)return;return void 0===c?(b=a.getAttribute(b),null==b?c:d?o(b):""+b):(a.setAttribute(b,c=""+c),c)}b&&s(a,b,t)}}function u(a,b){b=f(b),k(a,function(a){g(b,function(b){a.removeAttribute(n(b))})})}function v(a){for(var b,c=[],d=0,e=a.length;e>d;)(b=a[d++])&&c.push("["+n(b.replace(qb,"").replace(".","\\."))+"]");return c.join()}function w(b){return a(v(f(b)))}function x(){return window.pageXOffset||V.scrollLeft}function y(){return window.pageYOffset||V.scrollTop}function z(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{};return b="number"==typeof b?b||0:0,{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function A(a,b){var c=z(p(a),b);return!!c&&c.right>=0&&c.left<=Ab()}function B(a,b){var c=z(p(a),b);return!!c&&c.bottom>=0&&c.top<=Bb()}function C(a,b){var c=z(p(a),b);return!!c&&c.bottom>=0&&c.top<=Bb()&&c.right>=0&&c.left<=Ab()}function D(a){var b={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,script:5},c=b[a.nodeName.toLowerCase()]||-1;return 4>c?c:null!=a.getAttribute("src")?5:-5}function E(a,b,c){var d;if(!a||null==b)throw new TypeError("@store");return c="string"==typeof c&&c,k(a,function(a){d=c?a.getAttribute(c):0<D(a)?a.getAttribute("src"):a.innerHTML,null==d?u(a,b):t(a,b,d)}),N}function F(a,b){var c=[];return a&&b&&g(f(b),function(b){c.push(t(a,b))},a),c}function G(a,b){return"string"==typeof a&&"function"==typeof b&&(fb[a]=b,gb[a]=1),N}function H(a){return X.on("resize",a),N}function I(a,b){var c,d,e=wb.crossover;return"function"==typeof a&&(c=b,b=a,a=c),d=a?""+a+e:e,X.on(d,b),N}function J(a){return k(a,function(a){W(a),H(a)}),N}function K(a){return k(a,function(a){if("object"!=typeof a)throw new TypeError("@create");var b,c=ub(O).configure(a),d=c.verge,e=c.breakpoints,f=vb("scroll"),h=vb("resize");e.length&&(b=e[0]||e[1]||!1,W(function(){function a(){c.reset(),g(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(i)}function e(){g(c.$e,function(a,b){C(c[b].$e,d)&&c[b].updateDOM()})}var i=wb.allLoaded,j=!!c.lazy;g(c.target().$e,function(a,b){c[b]=ub(c).prepareData(a),(!j||C(c[b].$e,d))&&c[b].updateDOM()}),c.dynamic&&(c.custom||lb>b)&&H(a,h),j&&(X.on(f,e),c.$e.one(i,function(){X.off(f,e)}))}))}),N}function L(a){return P[Q]===N&&(P[Q]=R),"function"==typeof a&&a.call(P,N),N}if("function"!=typeof a)try{return void console.warn("response.js aborted due to missing dependency")}catch(M){}var N,O,P=this,Q="Response",R=P[Q],S="init"+Q,T=window,U=document,V=U.documentElement,W=a.domReady||a,X=a(T),Y="undefined"!=typeof DOMStringMap,Z=Array.prototype,$=Object.prototype,_=Z.push,ab=Z.concat,bb=$.toString,cb=$.hasOwnProperty,db=Array.isArray||function(a){return"[object Array]"===bb.call(a)},eb={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},fb={},gb={},hb={all:[]},ib=1,jb=screen.width,kb=screen.height,lb=jb>kb?jb:kb,mb=jb+kb-lb,nb=function(){return jb},ob=function(){return kb},pb=/[^a-z0-9_\-\.]/gi,qb=/^[\W\s]+|[\W\s]+$|/g,rb=/([a-z])([A-Z])/g,sb=/-(.)/g,tb=/^data-(.+)$/,ub=Object.create||function(a){function b(){}return b.prototype=a,new b},vb=function(a,b){return b=b||Q,a.replace(qb,"")+"."+b.replace(qb,"")},wb={allLoaded:vb("allLoaded"),crossover:vb("crossover")},xb=T.matchMedia||T.msMatchMedia,yb=xb?c(xb,T):function(){return{}},zb=xb?function(a){return!!xb.call(T,a).matches}:function(){return!1},Ab=function(){var a=V.clientWidth,b=T.innerWidth;return b>a?b:a},Bb=function(){var a=V.clientHeight,b=T.innerHeight;return b>a?b:a},Cb=c(d,Ab),Db=c(d,Bb),Eb={band:c(d,nb),wave:c(d,ob)};return O=function(){function b(a){return"string"==typeof a?a.toLowerCase().replace(pb,""):""}function c(a,b){return a-b}var d=wb.crossover,k=Math.min;return{$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,lazy:null,i:0,uid:null,reset:function(){for(var a=this.breakpoints,b=a.length,c=0;!c&&b--;)this.fn(a[b])&&(c=b);return c!==this.i&&(X.trigger(d).trigger(this.prop+d),this.i=c||0),this},configure:function(a){j(this,a);var d,l,m,n,o,p=!0,q=this.prop;if(this.uid=ib++,null==this.verge&&(this.verge=k(lb,500)),!(this.fn=fb[q]))throw new TypeError("@create");if(null==this.dynamic&&(this.dynamic="device"!==q.slice(0,6)),this.custom=gb[q],m=this.prefix?i(e(f(this.prefix),b)):["min-"+q+"-"],n=1<m.length?m.slice(1):0,this.prefix=m[0],l=this.breakpoints,db(l)){if(g(l,function(a){if(!a&&0!==a)throw"invalid breakpoint";p=p&&isFinite(a)}),p&&l.sort(c),!l.length)throw new TypeError(".breakpoints")}else if(l=eb[q]||eb[q.split("-").pop()],!l)throw new TypeError(".prop");if(this.breakpoints=l,this.keys=h(this.breakpoints,this.prefix),this.aka=null,n){for(o=[],d=n.length;d--;)o.push(h(this.breakpoints,n[d]));this.aka=o,this.keys=ab.apply(this.keys,o)}return hb.all=hb.all.concat(hb[this.uid]=this.keys),this},target:function(){return this.$e=a(v(hb[this.uid])),E(this.$e,S),this.keys.push(S),this},decideValue:function(){for(var a=null,b=this.breakpoints,c=b.length,d=c;null==a&&d--;)this.fn(b[d])&&(a=this.values[d]);return this.newValue="string"==typeof a?a:this.values[c],this},prepareData:function(b){if(this.$e=a(b),this.mode=D(b),this.values=F(this.$e,this.keys),this.aka)for(var c=this.aka.length;c--;)this.values=j(this.values,F(this.$e,this.aka[c]));return this.decideValue()},updateDOM:function(){return this.currValue===this.newValue?this:(this.currValue=this.newValue,0<this.mode?this.$e[0].setAttribute("src",this.newValue):null==this.newValue?this.$e.empty&&this.$e.empty():this.$e.html?this.$e.html(this.newValue):(this.$e.empty&&this.$e.empty(),this.$e[0].innerHTML=this.newValue),this)}}}(),fb.width=Cb,fb.height=Db,fb["device-width"]=Eb.band,fb["device-height"]=Eb.wave,fb["device-pixel-ratio"]=l,N={deviceMin:function(){return mb},deviceMax:function(){return lb},noConflict:L,create:K,addTest:G,datatize:n,camelize:m,render:o,store:E,access:F,target:w,object:ub,crossover:I,action:J,resize:H,ready:W,affix:h,sift:i,dpr:l,deletes:u,scrollX:x,scrollY:y,deviceW:nb,deviceH:ob,device:Eb,inX:A,inY:B,route:k,merge:j,media:yb,mq:zb,wave:Db,band:Cb,map:e,each:g,inViewport:C,dataset:t,viewportH:Bb,viewportW:Ab},W(function(){var b=t(U.body,"responsejs"),c=T.JSON&&JSON.parse||a.parseJSON;b=b&&c?c(b):b,b&&b.create&&K(b.create),V.className=V.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "}),N});

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

/**
 * @licence MIT
 */
(function() {
	$.fn.scrollWithEase = function(options) {
		! function() {
			function e() {
				var e = !1;
				e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r)
			}

			function t() {
				if (document.body) {
					var t = document.body,
						o = document.documentElement,
						n = window.innerHeight,
						r = t.scrollHeight;
					if (S = document.compatMode.indexOf("CSS") >= 0 ? o : t, w = t, e(), x = !0, top != self) y = !0;
					else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
						var a = !1,
							i = function() {
								a || o.scrollHeight == document.height || (a = !0, setTimeout(function() {
									o.style.height = document.height + "px", a = !1
								}, 100))
							};
						if (o.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= n) {
							var l = document.createElement("div");
							l.style.clear = "both", t.appendChild(l)
						}
					}
					v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
				}
			}

			function o(e, t, o, n) {
				if (n || (n = 1e3), d(t, o), 1 != v.accelerationMax) {
					var r = +new Date,
						a = r - C;
					if (a < v.accelerationDelta) {
						var i = (1 + 30 / a) / 2;
						i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, o *= i)
					}
					C = +new Date
				}
				if (M.push({
						x: t,
						y: o,
						lastX: 0 > t ? .99 : -.99,
						lastY: 0 > o ? .99 : -.99,
						start: +new Date
					}), !T) {
					var l = e === document.body,
						u = function() {
							for (var r = +new Date, a = 0, i = 0, c = 0; c < M.length; c++) {
								var s = M[c],
									d = r - s.start,
									f = d >= v.animationTime,
									h = f ? 1 : d / v.animationTime;
								v.pulseAlgorithm && (h = p(h));
								var m = s.x * h - s.lastX >> 0,
									w = s.y * h - s.lastY >> 0;
								a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--)
							}
							l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || o || (M = []), M.length ? E(u, e, n / v.frameRate + 1) : T = !1
						};
					E(u, e, 0), T = !0
				}
			}

			function n(e) {
				x || t();
				var n = e.target,
					r = l(n);
				if (!r || e.defaultPrevented || s(w, "embed") || s(n, "embed") && /\.pdf/i.test(n.src)) return !0;
				var a = e.wheelDeltaX || 0,
					i = e.wheelDeltaY || 0;
				return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), o(r, -a, -i), void e.preventDefault())
			}

			function r(e) {
				var t = e.target,
					n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar;
				if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) return !0;
				if (s(t, "button") && e.keyCode === H.spacebar) return !0;
				var r, a = 0,
					i = 0,
					u = l(w),
					c = u.clientHeight;
				switch (u == document.body && (c = window.innerHeight), e.keyCode) {
					case H.up:
						i = -v.arrowScroll;
						break;
					case H.down:
						i = v.arrowScroll;
						break;
					case H.spacebar:
						r = e.shiftKey ? 1 : -1, i = -r * c * .9;
						break;
					case H.pageup:
						i = .9 * -c;
						break;
					case H.pagedown:
						i = .9 * c;
						break;
					case H.home:
						i = -u.scrollTop;
						break;
					case H.end:
						var d = u.scrollHeight - u.scrollTop - c;
						i = d > 0 ? d + 10 : 0;
						break;
					case H.left:
						a = -v.arrowScroll;
						break;
					case H.right:
						a = v.arrowScroll;
						break;
					default:
						return !0
				}
				o(u, a, i), e.preventDefault()
			}

			function a(e) {
				w = e.target
			}

			function i(e, t) {
				for (var o = e.length; o--;) z[N(e[o])] = t;
				return t
			}

			function l(e) {
				var t = [],
					o = S.scrollHeight;
				do {
					var n = z[N(e)];
					if (n) return i(t, n);
					if (t.push(e), o === e.scrollHeight) {
						if (!y || S.clientHeight + 10 < o) return i(t, document.body)
					} else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e)
				} while (e = e.parentNode)
			}

			function u(e, t, o) {
				window.addEventListener(e, t, o || !1)
			}

			function c(e, t, o) {
				window.removeEventListener(e, t, o || !1)
			}

			function s(e, t) {
				return (e.nodeName || "").toLowerCase() === t.toLowerCase()
			}

			function d(e, t) {
				e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0)
			}

			function f(e) {
				if (e) {
					e = Math.abs(e), D.push(e), D.shift(), clearTimeout(A);
					var t = D[0] == D[1] && D[1] == D[2],
						o = h(D[0], 120) && h(D[1], 120) && h(D[2], 120);
					return !(t || o)
				}
			}

			function h(e, t) {
				return Math.floor(e / t) == e / t
			}

			function m(e) {
				var t, o, n;
				return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * v.pulseNormalize
			}

			function p(e) {
				return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e))
			}

			var settings = $.extend({
				// These are the defaults.
				frameRate: 60,
				animationTime: 1000,
				stepSize: 120,
				pulseAlgorithm: !0,
				pulseScale: 8,
				pulseNormalize: 1,
				accelerationDelta: 20,
				accelerationMax: 1,
				keyboardSupport: !0,
				arrowScroll: 50,
				touchpadSupport: !0,
				fixedBackground: !0
			}, options);

			var w, g = {
					frameRate: settings.frameRate,
					animationTime: settings.animationTime,
					stepSize: settings.stepSize,
					pulseAlgorithm: settings.pulseAlgorithm,
					pulseScale: settings.pulseScale,
					pulseNormalize: settings.pulseNormalize,
					accelerationDelta: settings.accelerationDelta,
					accelerationMax: settings.accelerationMax,
					keyboardSupport: settings.keyboardSupport,
					arrowScroll: settings.arrowScroll,
					touchpadSupport: settings.touchpadSupport,
					fixedBackground: settings.fixedBackground,
					excluded: ""
				},
				v = g,
				b = !1,
				y = !1,
				k = {
					x: 0,
					y: 0
				},
				x = !1,
				S = document.documentElement,
				D = [120, 120, 120],
				H = {
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					spacebar: 32,
					pageup: 33,
					pagedown: 34,
					end: 35,
					home: 36
				},
				v = g,
				M = [],
				T = !1,
				C = +new Date,
				z = {};
			setInterval(function() {
				z = {}
			}, 1e4);
			var A, N = function() {
					var e = 0;
					return function(t) {
						return t.uniqueID || (t.uniqueID = e++)
					}
				}(),
				E = function() {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, o) {
						window.setTimeout(e, o || 1e3 / 60)
					}
				}(),
				K = /chrome|iPad/i.test(window.navigator.userAgent),
				L = "onmousewheel" in document;
			L && K && (u("mousedown", a), u("mousewheel", n), u("load", t))
		}();
    }
})();

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);



/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];return r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=t("<div />").prependTo("body"),this.$slider=t("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")||(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&o[s]()})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var n=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-n:isNaN(this.positionX)?-n/2|0:Math.max(this.positionX,-n)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var n=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-n:isNaN(this.positionY)?r-n/2|0:r+Math.max(this.positionY,-n)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.visibility=this.boxOffsetBottom>t&&this.boxOffsetTop<s?"visible":"hidden",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i);h.on("scroll.px.parallax load.px.parallax",function(){var t=o.docHeight-o.winHeight,i=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(t,h.scrollTop())),o.scrollLeft=Math.max(0,Math.min(i,h.scrollLeft())),o.overScroll=Math.max(h.scrollTop()-t,Math.min(h.scrollTop(),0)),o.requestRender()}).on("resize.px.parallax load.px.parallax",function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width(),o.isFresh=!1,o.requestRender()}),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);

/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.8
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(l.jQuery)}(this,function(l){"use strict";function e(e){if(t.webkit&&!e)return{height:0,width:0};if(!t.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};t.data.inner=l("<div>").css(l.extend({},o)),t.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(t.data.inner).appendTo("body")}return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)}}function o(){var l=e(!0);return!(l.height||l.width)}function s(l){var e=l.originalEvent;return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0}var r=!1,t={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};t.scrolls.add=function(l){this.remove(l).push(l)},t.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var i={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},n=function(s){t.scroll||(t.overlay=o(),t.scroll=e(),a(),l(window).resize(function(){var l=!1;if(t.scroll&&(t.scroll.height||t.scroll.width)){var o=e();(o.height!==t.scroll.height||o.width!==t.scroll.width)&&(t.scroll=o,l=!0)}a(l)})),this.container=s,this.namespace=".scrollbar_"+t.data.index++,this.options=l.extend({},i,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(t.data.name,this),t.scrolls.add(this)};n.prototype={destroy:function(){if(this.wrapper){this.container.removeData(t.data.name),t.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var o=this,r=this.container,i=this.containerWrapper||r,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop()};if(t.mobile&&c.ignoreMobile||t.overlay&&c.ignoreOverlay||t.macosx&&!t.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position","absolute"==r.css("position")?"absolute":"relative").insertBefore(r).append(r),r.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(r).append(r),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""}),r.on("scroll"+n,function(){l.isFunction(c.onScroll)&&c.onScroll.call(o,{maxScroll:a.y.maxScrollOffset,scroll:r.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:r.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",r.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",r.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){s(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),t.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,s={pageX:o.pageX,pageY:o.pageY},t={left:r.scrollLeft(),top:r.scrollTop()};l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;r.scrollLeft(t.left+s.pageX-e.pageX),r.scrollTop(t.top+s.pageY-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[r])}l.each(a,function(e,t){var i=null,d=1,h="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,u=function(){var l=r[h]();r[h](l+p),1==d&&l+p>=f&&(l=r[h]()),-1==d&&f>=l+p&&(l=r[h]()),r[h]()==l&&i&&i()},f=0;t.scroll||(t.scroll=o._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&t.scroll.addClass("scroll-element_arrows_visible"),t.mousewheel=function(l){if(!t.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=t.size-t.visible-t.offset;return(i>0&&n>f||0>i&&f>0)&&(f+=i,0>f&&(f=0),f>n&&(f=n),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=f,setTimeout(function(){o.scrollTo&&(r.stop().animate(o.scrollTo,240,"linear",function(){f=r[h]()}),o.scrollTo=null)},1)),l.preventDefault(),!1},t.scroll.on("MozMousePixelScroll"+n,t.mousewheel).on("mousewheel"+n,t.mousewheel).on("mouseenter"+n,function(){f=r[h]()}),t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;d=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:t.size-t.visible-t.offset,scrollbarOffset:t.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:t.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,f=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*t.visible)*d,f=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),f=r[h]()+f/t.kx),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=c.stepScrolling?r[h]()+p:f,c.stepScrolling&&(i=function(){f=r[h](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(u,40)},c.duration+100)),setTimeout(function(){o.scrollTo&&(r.animate(o.scrollTo,c.duration),o.scrollTo=null)},1),o._handleMouseDown(i,s)}),t.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var i=s["x"===e?"pageX":"pageY"],c=r[h]();return t.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/t.kx,10);r[h](c+o)}),o._handleMouseDown(function(){t.scroll.removeClass("scroll-draggable"),f=r[h]()},s)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",s="x"==l?a.y:a.x;e.scroll.removeClass(o),s.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(r.css("top"),10)||0,size:r.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[r]),l.each(a,function(l,e){var o="x"===l?"left":"top",s="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(r.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[s]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[s](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var s=this.namespace;return l(document).on("blur"+s,function(){l(document).add("body").off(s),e&&e()}),l(document).on("dragstart"+s,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+s,function(){l(document).add("body").off(s),e&&e()}),l("body").on("selectstart"+s,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,r=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,h=o.visible+c;o.isVisible=d-h>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),r.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),r.removeClass(i)),"y"===e&&r.css(s.is("textarea")||h>d?{height:h+t.scroll.height+"px","max-height":"none"}:{"max-height":h+t.scroll.height+"px"}),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var c=n;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),"undefined"==typeof o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),r=s.data(t.data.name);(r||"init"===e)&&(r||(r=new c(s)),r[e]&&r[e].apply(r,o))}),this},l.fn.scrollbar.options=i;var a=function(){var l=0,e=0;return function(o){var s,i,n,c,d,h,p;for(s=0;s<t.scrolls.length;s++)c=t.scrolls[s],i=c.container,n=c.options,d=c.wrapper,h=c.scrollx,p=c.scrolly,(o||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),n.debug&&(window.console&&console.log({scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,visibleHeight:d.height()+":"+c.scrolly.visible,visibleWidth:d.width()+":"+c.scrollx.visible},!0),e++));r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),l=setTimeout(a,300))}}();window.angular&&!function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=i;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",function(l,e){return{restrict:"AC",link:function(o,s,r){var t=e(r.jqueryScrollbar),i=t(o);s.scrollbar(i||l.options).on("$destroy",function(){s.scrollbar("destroy")})}}})}(window.angular)});

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
	d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
	width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
	keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
	(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
	openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
	isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
	c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
	k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
	b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
	setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
	d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
	a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
	b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
	y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
	if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
	(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
	{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
	mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
	!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
	"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
	this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
	f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
	e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
	outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
	g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
	"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
	h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
	h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
	"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
	y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
	!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
	b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
	a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
	(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
	f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
	{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
	b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
	f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
	b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
	p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
	f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
	b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
	e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
	":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
	d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
   (function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},resync:function(){var d=this;$('.'+this._getMarker()).each(function(){var a=$.data(this,d.name);if(a.options.serverSync){var b=null;for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][0]==a.options.serverSync){b=d._serverSyncs[i];break}}if(b[2]==null){var c=($.isFunction(a.options.serverSync)?a.options.serverSync.apply(this,[]):null);b[2]=(c?new Date().getTime()-c.getTime():0)-b[1]}if(a._since){a._since.setMilliseconds(a._since.getMilliseconds()+b[2])}a._until.setMilliseconds(a._until.getMilliseconds()+b[2])}});for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][2]!=null){d._serverSyncs[i][1]+=d._serverSyncs[i][2];delete d._serverSyncs[i][2]}}},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){d=this._serverSyncs[i][1];break}}if(d!=null){var e=(b.options.serverSync?d:0);var f=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);var f=new Date();var e=(g?f.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-f.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,f));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);


   (function($){"use strict";$("#stickymenu.ttmenu").affix({offset:{top:100}})
   $(document).ready(function(){$(".ttmenu").fitVids();});$('.nav-pills > li ').hover(function(){if($(this).hasClass('hoverblock'))return;else
   $(this).find('a').tab('show');});$('.nav-tabs > li').find('a').click(function(){$(this).parent().siblings().addClass('hoverblock');});$(".hovermenu .dropdown").hover(function(){$(this).addClass('open')},function(){$(this).removeClass('open')});$('.clickablemenu .dropdown').click('show.bs.dropdown',function(e){var $dropdown=$(this).find('.dropdown-menu');var orig_margin_top=parseInt($dropdown.css('margin-top'));$dropdown.css({'margin-top':(orig_margin_top+65)+'px',opacity:0}).animate({'margin-top':orig_margin_top+'px',opacity:1},420,function(){$(this).css({'margin-top':''});});});$('.verticalmenu .dropdown').click('show.bs.dropdown',function(e){var $dropdown=$(this).find('.dropdown-menu');var orig_margin_top=parseInt("1",10);$dropdown.css({'margin-left':(orig_margin_top+65)+'px',opacity:0}).animate({'margin-left':orig_margin_top+'px',opacity:1},420,function(){$(this).css({'margin-left':''});});});})(jQuery);




/* HTML5 Placeholder jQuery Plugin - v2.1.2
 * Copyright (c)2015 Mathias Bynens
 * 2015-06-09
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().prop({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});


/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

	'use strict';
  
	$.fn.fitVids = function( options ) {
	  var settings = {
		customSelector: null,
		ignore: null
	  };
  
	  if(!document.getElementById('fit-vids-style')) {
		// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
		var head = document.head || document.getElementsByTagName('head')[0];
		var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
		var div = document.createElement("div");
		div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
		head.appendChild(div.childNodes[1]);
	  }
  
	  if ( options ) {
		$.extend( settings, options );
	  }
  
	  return this.each(function(){
		var selectors = [
		  'iframe[src*="player.vimeo.com"]',
		  'iframe[src*="youtube.com"]',
		  'iframe[src*="youtube-nocookie.com"]',
		  'iframe[src*="kickstarter.com"][src*="video.html"]',
		  'object',
		  'embed'
		];
  
		if (settings.customSelector) {
		  selectors.push(settings.customSelector);
		}
  
		var ignoreList = '.fitvidsignore';
  
		if(settings.ignore) {
		  ignoreList = ignoreList + ', ' + settings.ignore;
		}
  
		var $allVideos = $(this).find(selectors.join(','));
		$allVideos = $allVideos.not('object object'); // SwfObj conflict patch
		$allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.
  
		$allVideos.each(function(count){
		  var $this = $(this);
		  if($this.parents(ignoreList).length > 0) {
			return; // Disable FitVids on this video.
		  }
		  if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
		  if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
		  {
			$this.attr('height', 9);
			$this.attr('width', 16);
		  }
		  var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
			  width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
			  aspectRatio = height / width;
		  if(!$this.attr('id')){
			var videoID = 'fitvid' + count;
			$this.attr('id', videoID);
		  }
		  $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
		  $this.removeAttr('height').removeAttr('width');
		});
	  });
	};
  // Works with either jQuery or Zepto
  })( window.jQuery || window.Zepto );

  
  /*!
 * @name        image-zoom
 * @author      Matt Hinchliffe <http://maketea.co.uk>
 * @modified    Monday, March 16th, 2015
 * @version     2.3.0
 */!function(a){"use strict";function b(b,c){this.$target=a(b),this.opts=a.extend({},i,c,this.$target.data()),void 0===this.isOpen&&this._init()}var c,d,e,f,g,h,i={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,preventClicks:!0,onShow:a.noop,onHide:a.noop,onMove:a.noop};b.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=a('<div class="easyzoom-flyout" />'),this.$notice=a('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":a.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":a.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":a.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(a){a.preventDefault()})},b.prototype.show=function(a,b){var g,h,i,j,k=this;return this.isReady?(this.$target.append(this.$flyout),g=this.$target.width(),h=this.$target.height(),i=this.$flyout.width(),j=this.$flyout.height(),c=this.$zoom.width()-i,d=this.$zoom.height()-j,e=c/g,f=d/h,this.isOpen=!0,this.opts.onShow.call(this),void(a&&this._move(a))):this._loadImage(this.$link.attr("href"),function(){(k.isMouseOver||!b)&&k.show(a)})},b.prototype._onEnter=function(a){var b=a.originalEvent.touches;this.isMouseOver=!0,b&&1!=b.length||(a.preventDefault(),this.show(a,!0))},b.prototype._onMove=function(a){this.isOpen&&(a.preventDefault(),this._move(a))},b.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},b.prototype._onLoad=function(a){a.target.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),a.data.call&&a.data())},b.prototype._onError=function(){var a=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){a.$notice.detach(),a.detachNotice=null},this.opts.errorDuration)},b.prototype._loadImage=function(b,c){var d=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=a(d).on("error",a.proxy(this._onError,this)).on("load",c,a.proxy(this._onLoad,this)),d.style.position="absolute",d.src=b},b.prototype._move=function(a){if(0===a.type.indexOf("touch")){var b=a.touches||a.originalEvent.touches;g=b[0].pageX,h=b[0].pageY}else g=a.pageX||g,h=a.pageY||h;var i=this.$target.offset(),j=h-i.top,k=g-i.left,l=Math.ceil(j*f),m=Math.ceil(k*e);if(0>m||0>l||m>c||l>d)this.hide();else{var n=-1*l,o=-1*m;this.$zoom.css({top:n,left:o}),this.opts.onMove.call(this,n,o)}},b.prototype.hide=function(){this.isOpen&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},b.prototype.swap=function(b,c,d){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:b,srcset:a.isArray(d)?d.join():d}),this.$link.attr("href",c)},b.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},a.fn.easyZoom=function(c){return this.each(function(){var d=a.data(this,"easyZoom");d?void 0===d.isOpen&&d._init():a.data(this,"easyZoom",new b(this,c))})},"function"==typeof define&&define.amd?define(function(){return b}):"undefined"!=typeof module&&module.exports&&(module.exports=b)}(jQuery);

   /*!
*  - v1.2.5
* Homepage: http://bqworks.com/slider-pro/
* Author: bqworks
* Author URL: http://bqworks.com/
*/
!function(a,b){"use strict";b.SliderPro={modules:[],addModule:function(a,c){this.modules.push(a),b.extend(d.prototype,c)}};var c=b.SliderPro.namespace="SliderPro",d=function(a,c){this.instance=a,this.$slider=b(this.instance),this.$slides=null,this.$slidesMask=null,this.$slidesContainer=null,this.slides=[],this.slidesOrder=[],this.options=c,this.settings={},this.originalSettings={},this.originalGotoSlide=null,this.selectedSlideIndex=0,this.previousSlideIndex=0,this.middleSlidePosition=0,this.supportedAnimation=null,this.vendorPrefix=null,this.transitionEvent=null,this.positionProperty=null,this.isIE=null,this.slidesPosition=0,this.slideWidth=0,this.slideHeight=0,this.slideSize=0,this.previousSlideWidth=0,this.previousSlideHeight=0,this.previousWindowWidth=0,this.previousWindowHeight=0,this.visibleOffset=0,this.allowResize=!0,this.uniqueId=(new Date).valueOf(),this.breakpoints=[],this.currentBreakpoint=-1,this.shuffledIndexes=[],this._init()};d.prototype={_init:function(){var d=this;this.supportedAnimation=f.getSupportedAnimation(),this.vendorPrefix=f.getVendorPrefix(),this.transitionEvent=f.getTransitionEvent(),this.isIE=f.checkIE(),this.$slider.removeClass("sp-no-js"),a.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&this.$slider.addClass("ios");var e=/(msie) ([\w.]+)/,g=e.exec(a.navigator.userAgent.toLowerCase());this.isIE&&this.$slider.addClass("ie"),null!==g&&this.$slider.addClass("ie"+parseInt(g[2],10)),this.$slidesContainer=b('<div class="sp-slides-container"></div>').appendTo(this.$slider),this.$slidesMask=b('<div class="sp-mask"></div>').appendTo(this.$slidesContainer),this.$slides=this.$slider.find(".sp-slides").appendTo(this.$slidesMask),this.$slider.find(".sp-slide").appendTo(this.$slides);var h=b.SliderPro.modules;if("undefined"!=typeof h)for(var i=0;i<h.length;i++){var j=h[i].substring(0,1).toLowerCase()+h[i].substring(1)+"Defaults";"undefined"!=typeof this[j]&&b.extend(this.defaults,this[j])}if(this.settings=b.extend({},this.defaults,this.options),"undefined"!=typeof h)for(var k=0;k<h.length;k++)"undefined"!=typeof this["init"+h[k]]&&this["init"+h[k]]();if(this.originalSettings=b.extend({},this.settings),this.originalGotoSlide=this.gotoSlide,null!==this.settings.breakpoints){for(var l in this.settings.breakpoints)this.breakpoints.push({size:parseInt(l,10),properties:this.settings.breakpoints[l]});this.breakpoints=this.breakpoints.sort(function(a,b){return a.size>=b.size?1:-1})}if(this.selectedSlideIndex=this.settings.startSlide,this.settings.shuffle===!0){var m=this.$slides.find(".sp-slide"),n=[];m.each(function(a){d.shuffledIndexes.push(a)});for(var o=this.shuffledIndexes.length-1;o>0;o--){var p=Math.floor(Math.random()*(o+1)),q=this.shuffledIndexes[o];this.shuffledIndexes[o]=this.shuffledIndexes[p],this.shuffledIndexes[p]=q}b.each(this.shuffledIndexes,function(a,b){n.push(m[b])}),this.$slides.empty().append(n)}b(a).on("resize."+this.uniqueId+"."+c,function(){var c=b(a).width(),e=b(a).height();d.allowResize===!1||d.previousWindowWidth===c&&d.previousWindowHeight===e||(d.previousWindowWidth=c,d.previousWindowHeight=e,d.allowResize=!1,setTimeout(function(){d.resize(),d.allowResize=!0},200))}),this.on("update."+c,function(){d.previousSlideWidth=0,d.resize()}),this.update(),this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"),this.trigger({type:"init"}),b.isFunction(this.settings.init)&&this.settings.init.call(this,{type:"init"})},update:function(){var a=this;"horizontal"===this.settings.orientation?(this.$slider.removeClass("sp-vertical").addClass("sp-horizontal"),this.$slider.css({height:"","max-height":""}),this.$slides.find(".sp-slide").css("top","")):"vertical"===this.settings.orientation&&(this.$slider.removeClass("sp-horizontal").addClass("sp-vertical"),this.$slides.find(".sp-slide").css("left","")),this.positionProperty="horizontal"===this.settings.orientation?"left":"top",this.gotoSlide=this.originalGotoSlide;for(var c=this.slides.length-1;c>=0;c--)if(0===this.$slider.find('.sp-slide[data-index="'+c+'"]').length){var d=this.slides[c];d.destroy(),this.slides.splice(c,1)}this.slidesOrder.length=0,this.$slider.find(".sp-slide").each(function(c){var d=b(this);"undefined"==typeof d.attr("data-init")?a._createSlide(c,d):a.slides[c].setIndex(c),a.slidesOrder.push(c)}),this.middleSlidePosition=parseInt((a.slidesOrder.length-1)/2,10),this.settings.loop===!0&&this._updateSlidesOrder(),this.trigger({type:"update"}),b.isFunction(this.settings.update)&&this.settings.update.call(this,{type:"update"})},_createSlide:function(a,c){var d=new e(b(c),a,this.settings);this.slides.splice(a,0,d)},_updateSlidesOrder:function(){var a,c,d=b.inArray(this.selectedSlideIndex,this.slidesOrder)-this.middleSlidePosition;if(0>d)for(a=this.slidesOrder.splice(d,Math.abs(d)),c=a.length-1;c>=0;c--)this.slidesOrder.unshift(a[c]);else if(d>0)for(a=this.slidesOrder.splice(0,d),c=0;c<=a.length-1;c++)this.slidesOrder.push(a[c])},_updateSlidesPosition:function(){for(var a=parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10),b=0;b<this.slidesOrder.length;b++){var c=this.$slides.find(".sp-slide").eq(this.slidesOrder[b]);c.css(this.positionProperty,a+(b-this.middleSlidePosition)*(this.slideSize+this.settings.slideDistance))}},_resetSlidesPosition:function(){for(var a=0;a<this.slidesOrder.length;a++){var b=this.$slides.find(".sp-slide").eq(this.slidesOrder[a]);b.css(this.positionProperty,a*(this.slideSize+this.settings.slideDistance))}var c=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;this._moveTo(c,!0)},resize:function(){var c=this;if(null!==this.settings.breakpoints&&this.breakpoints.length>0)if(b(a).width()>this.breakpoints[this.breakpoints.length-1].size&&-1!==this.currentBreakpoint)this.currentBreakpoint=-1,this._setProperties(this.originalSettings,!1);else for(var d=0,e=this.breakpoints.length;e>d;d++)if(b(a).width()<=this.breakpoints[d].size){if(this.currentBreakpoint!==this.breakpoints[d].size){var f={type:"breakpointReach",size:this.breakpoints[d].size,settings:this.breakpoints[d].properties};this.trigger(f),b.isFunction(this.settings.breakpointReach)&&this.settings.breakpointReach.call(this,f),this.currentBreakpoint=this.breakpoints[d].size;var g=b.extend({},this.originalSettings,this.breakpoints[d].properties);return void this._setProperties(g,!1)}break}this.settings.responsive===!0?"fullWidth"!==this.settings.forceSize&&"fullWindow"!==this.settings.forceSize||"auto"!==this.settings.visibleSize&&("auto"===this.settings.visibleSize||"vertical"!==this.settings.orientation)?this.$slider.css({width:"100%","max-width":this.settings.width,marginLeft:""}):(this.$slider.css("margin",0),this.$slider.css({width:b(a).width(),"max-width":"",marginLeft:-this.$slider.offset().left})):this.$slider.css({width:this.settings.width}),-1===this.settings.aspectRatio&&(this.settings.aspectRatio=this.settings.width/this.settings.height),this.slideWidth=this.$slider.width(),"fullWindow"===this.settings.forceSize?this.slideHeight=b(a).height():this.slideHeight=isNaN(this.settings.aspectRatio)?this.settings.height:this.slideWidth/this.settings.aspectRatio,(this.previousSlideWidth!==this.slideWidth||this.previousSlideHeight!==this.slideHeight||"auto"!==this.settings.visibleSize||this.$slider.outerWidth()>this.$slider.parent().width()||this.$slider.width()!==this.$slidesMask.width())&&(this.previousSlideWidth=this.slideWidth,this.previousSlideHeight=this.slideHeight,this.slideSize="horizontal"===this.settings.orientation?this.slideWidth:this.slideHeight,this.visibleSlidesSize=this.slideSize,this.visibleOffset=0,b.each(this.slides,function(a,b){b.setSize(c.slideWidth,c.slideHeight)}),this.$slidesMask.css({width:this.slideWidth,height:this.slideHeight}),this.settings.autoHeight===!0?setTimeout(function(){c._resizeHeight()},1):this.$slidesMask.css(this.vendorPrefix+"transition",""),"auto"!==this.settings.visibleSize&&("horizontal"===this.settings.orientation?("fullWidth"===this.settings.forceSize||"fullWindow"===this.settings.forceSize?(this.$slider.css("margin",0),this.$slider.css({width:b(a).width(),"max-width":"",marginLeft:-this.$slider.offset().left})):this.$slider.css({width:this.settings.visibleSize,"max-width":"100%",marginLeft:0}),this.$slidesMask.css("width",this.$slider.width()),this.visibleSlidesSize=this.$slidesMask.width(),this.visibleOffset=Math.round((this.$slider.width()-this.slideWidth)/2)):("fullWindow"===this.settings.forceSize?this.$slider.css({height:b(a).height(),"max-height":""}):this.$slider.css({height:this.settings.visibleSize,"max-height":"100%"}),this.$slidesMask.css("height",this.$slider.height()),this.visibleSlidesSize=this.$slidesMask.height(),this.visibleOffset=Math.round((this.$slider.height()-this.slideHeight)/2))),this._resetSlidesPosition(),this.trigger({type:"sliderResize"}),b.isFunction(this.settings.sliderResize)&&this.settings.sliderResize.call(this,{type:"sliderResize"}))},_resizeHeight:function(){var a=this,b=this.getSlideAt(this.selectedSlideIndex),d=b.getSize();b.off("imagesLoaded."+c),b.on("imagesLoaded."+c,function(c){if(c.index===a.selectedSlideIndex){var d=b.getSize();a._resizeHeightTo(d.height)}}),"loading"!==d&&this._resizeHeightTo(d.height)},gotoSlide:function(a){if(a!==this.selectedSlideIndex&&"undefined"!=typeof this.slides[a]){var c=this;this.previousSlideIndex=this.selectedSlideIndex,this.selectedSlideIndex=a,this.$slides.find(".sp-selected").removeClass("sp-selected"),this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"),this.settings.loop===!0&&(this._updateSlidesOrder(),this._updateSlidesPosition()),this.settings.autoHeight===!0&&this._resizeHeight();var d=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;this._moveTo(d,!1,function(){c.settings.loop===!0&&c._resetSlidesPosition(),c.trigger({type:"gotoSlideComplete",index:a,previousIndex:c.previousSlideIndex}),b.isFunction(c.settings.gotoSlideComplete)&&c.settings.gotoSlideComplete.call(c,{type:"gotoSlideComplete",index:a,previousIndex:c.previousSlideIndex})}),this.trigger({type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex}),b.isFunction(this.settings.gotoSlide)&&this.settings.gotoSlide.call(this,{type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex})}},nextSlide:function(){var a=this.selectedSlideIndex>=this.getTotalSlides()-1?0:this.selectedSlideIndex+1;this.gotoSlide(a)},previousSlide:function(){var a=this.selectedSlideIndex<=0?this.getTotalSlides()-1:this.selectedSlideIndex-1;this.gotoSlide(a)},_moveTo:function(a,b,c){var d=this,e={};if(a!==this.slidesPosition)if(this.slidesPosition=a,"css-3d"!==this.supportedAnimation&&"css-2d"!==this.supportedAnimation||this.isIE!==!1)e["margin-"+this.positionProperty]=a,"undefined"!=typeof b&&b===!0?this.$slides.css(e):(this.$slides.addClass("sp-animated"),this.$slides.animate(e,this.settings.slideAnimationDuration,function(){d.$slides.removeClass("sp-animated"),"function"==typeof c&&c()}));else{var f,g="horizontal"===this.settings.orientation?a:0,h="horizontal"===this.settings.orientation?0:a;"css-3d"===this.supportedAnimation?e[this.vendorPrefix+"transform"]="translate3d("+g+"px, "+h+"px, 0)":e[this.vendorPrefix+"transform"]="translate("+g+"px, "+h+"px)","undefined"!=typeof b&&b===!0?f="":(this.$slides.addClass("sp-animated"),f=this.vendorPrefix+"transform "+this.settings.slideAnimationDuration/1e3+"s",this.$slides.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(d.$slides.off(d.transitionEvent),d.$slides.removeClass("sp-animated"),"function"==typeof c&&c())})),e[this.vendorPrefix+"transition"]=f,this.$slides.css(e)}},_stopMovement:function(){var a={};if("css-3d"!==this.supportedAnimation&&"css-2d"!==this.supportedAnimation||this.isIE!==!1)this.$slides.stop(),this.slidesPosition=parseInt(this.$slides.css("margin-"+this.positionProperty),10);else{var b=this.$slides.css(this.vendorPrefix+"transform"),c=-1!==b.indexOf("matrix3d")?"matrix3d":"matrix",d=b.replace(c,"").match(/-?[0-9\.]+/g),e="matrix3d"===c?parseInt(d[12],10):parseInt(d[4],10),f="matrix3d"===c?parseInt(d[13],10):parseInt(d[5],10);"css-3d"===this.supportedAnimation?a[this.vendorPrefix+"transform"]="translate3d("+e+"px, "+f+"px, 0)":a[this.vendorPrefix+"transform"]="translate("+e+"px, "+f+"px)",a[this.vendorPrefix+"transition"]="",this.$slides.css(a),this.$slides.off(this.transitionEvent),this.slidesPosition="horizontal"===this.settings.orientation?e:f}this.$slides.removeClass("sp-animated")},_resizeHeightTo:function(a){var c=this,d={height:a};"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(d[this.vendorPrefix+"transition"]="height "+this.settings.heightAnimationDuration/1e3+"s",this.$slidesMask.off(this.transitionEvent),this.$slidesMask.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(c.$slidesMask.off(c.transitionEvent),c.trigger({type:"resizeHeightComplete"}),b.isFunction(c.settings.resizeHeightComplete)&&c.settings.resizeHeightComplete.call(c,{type:"resizeHeightComplete"}))}),this.$slidesMask.css(d)):this.$slidesMask.stop().animate(d,this.settings.heightAnimationDuration,function(a){c.trigger({type:"resizeHeightComplete"}),b.isFunction(c.settings.resizeHeightComplete)&&c.settings.resizeHeightComplete.call(c,{type:"resizeHeightComplete"})})},destroy:function(){this.$slider.removeData("sliderPro"),this.$slider.removeAttr("style"),this.$slides.removeAttr("style"),this.off("update."+c),b(a).off("resize."+this.uniqueId+"."+c);var d=b.SliderPro.modules;if("undefined"!=typeof d)for(var e=0;e<d.length;e++)"undefined"!=typeof this["destroy"+d[e]]&&this["destroy"+d[e]]();b.each(this.slides,function(a,b){b.destroy()}),this.slides.length=0,this.$slides.prependTo(this.$slider),this.$slidesContainer.remove()},_setProperties:function(a,b){for(var c in a)this.settings[c]=a[c],b!==!1&&(this.originalSettings[c]=a[c]);this.update()},on:function(a,b){return this.$slider.on(a,b)},off:function(a){return this.$slider.off(a)},trigger:function(a){return this.$slider.triggerHandler(a)},getSlideAt:function(a){return this.slides[a]},getSelectedSlide:function(){return this.selectedSlideIndex},getTotalSlides:function(){return this.slides.length},defaults:{width:500,height:300,responsive:!0,aspectRatio:-1,imageScaleMode:"cover",centerImage:!0,allowScaleUp:!0,autoHeight:!1,startSlide:0,shuffle:!1,orientation:"horizontal",forceSize:"none",loop:!0,slideDistance:10,slideAnimationDuration:700,heightAnimationDuration:700,visibleSize:"auto",breakpoints:null,init:function(){},update:function(){},sliderResize:function(){},gotoSlide:function(){},gotoSlideComplete:function(){},resizeHeightComplete:function(){},breakpointReach:function(){}}};var e=function(a,b,c){this.$slide=a,this.$mainImage=null,this.$imageContainer=null,this.hasMainImage=!1,this.isMainImageLoaded=!1,this.isMainImageLoading=!1,this.hasImages=!1,this.areImagesLoaded=!1,this.width=0,this.height=0,this.settings=c,this.setIndex(b),this._init()};e.prototype={_init:function(){this.$slide.attr("data-init",!0),this.$mainImage=0!==this.$slide.find(".sp-image").length?this.$slide.find(".sp-image"):null,null!==this.$mainImage&&(this.hasMainImage=!0,this.$imageContainer=b('<div class="sp-image-container"></div>').prependTo(this.$slide),0!==this.$mainImage.parent("a").length?this.$mainImage.parent("a").appendTo(this.$imageContainer):this.$mainImage.appendTo(this.$imageContainer)),this.hasImages=0!==this.$slide.find("img").length?!0:!1},setSize:function(a,b){this.width=a,this.height=this.settings.autoHeight===!0?"auto":b,this.$slide.css({width:this.width,height:this.height}),this.hasMainImage===!0&&(this.$imageContainer.css({width:this.width,height:this.height}),"undefined"==typeof this.$mainImage.attr("data-src")&&this.resizeMainImage())},getSize:function(){var a,b=this;if(this.hasImages===!0&&this.areImagesLoaded===!1&&"undefined"==typeof this.$slide.attr("data-loading")){this.$slide.attr("data-loading",!0);var d=f.checkImagesComplete(this.$slide,function(){b.areImagesLoaded=!0,b.$slide.removeAttr("data-loading"),b.trigger({type:"imagesLoaded."+c,index:b.index})});return"complete"===d?(a=this.calculateSize(),{width:a.width,height:a.height}):"loading"}return a=this.calculateSize(),{width:a.width,height:a.height}},calculateSize:function(){var a=this.$slide.width(),c=this.$slide.height();return this.$slide.children().each(function(d,e){var f=b(e);if(f.is(":hidden")!==!0){var g=e.getBoundingClientRect(),h=f.position().top+(g.bottom-g.top),i=f.position().left+(g.right-g.left);h>c&&(c=h),i>a&&(a=i)}}),{width:a,height:c}},resizeMainImage:function(a){var b=this;if(a===!0&&(this.isMainImageLoaded=!1,this.isMainImageLoading=!1),this.isMainImageLoaded===!1&&this.isMainImageLoading===!1)return this.isMainImageLoading=!0,void f.checkImagesComplete(this.$mainImage,function(){b.isMainImageLoaded=!0,b.isMainImageLoading=!1,b.resizeMainImage(),b.trigger({type:"imagesLoaded."+c,index:b.index})});if(this.settings.allowScaleUp===!1){this.$mainImage.css({width:"",height:"",maxWidth:"",maxHeight:""});var d=this.$mainImage.width(),e=this.$mainImage.height();this.$mainImage.css({maxWidth:d,maxHeight:e})}this.settings.autoHeight===!0?this.$mainImage.css({width:"100%",height:"auto"}):"cover"===this.settings.imageScaleMode?this.$mainImage.width()/this.$mainImage.height()<=this.width/this.height?this.$mainImage.css({width:"100%",height:"auto"}):this.$mainImage.css({width:"auto",height:"100%"}):"contain"===this.settings.imageScaleMode?this.$mainImage.width()/this.$mainImage.height()>=this.width/this.height?this.$mainImage.css({width:"100%",height:"auto"}):this.$mainImage.css({width:"auto",height:"100%"}):"exact"===this.settings.imageScaleMode&&this.$mainImage.css({width:"100%",height:"100%"}),this.settings.centerImage===!0&&this.$mainImage.css({marginLeft:.5*(this.$imageContainer.width()-this.$mainImage.width()),marginTop:.5*(this.$imageContainer.height()-this.$mainImage.height())})},destroy:function(){this.$slide.removeAttr("style"),this.$slide.removeAttr("data-init"),this.$slide.removeAttr("data-index"),this.$slide.removeAttr("data-loaded"),this.hasMainImage===!0&&(this.$slide.find(".sp-image").removeAttr("style").appendTo(this.$slide),this.$slide.find(".sp-image-container").remove())},getIndex:function(){return this.index},setIndex:function(a){this.index=a,this.$slide.attr("data-index",this.index)},on:function(a,b){return this.$slide.on(a,b)},off:function(a){return this.$slide.off(a)},trigger:function(a){return this.$slide.triggerHandler(a)}},a.SliderPro=d,a.SliderProSlide=e,b.fn.sliderPro=function(a){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){if("undefined"==typeof b(this).data("sliderPro")){var e=new d(this,a);b(this).data("sliderPro",e)}else if("undefined"!=typeof a){var f=b(this).data("sliderPro");if("function"==typeof f[a])f[a].apply(f,c);else if("undefined"!=typeof f.settings[a]){var g={};g[a]=c[0],f._setProperties(g)}else"object"==typeof a?f._setProperties(a):b.error(a+" does not exist in sliderPro.")}})};var f={supportedAnimation:null,vendorPrefix:null,transitionEvent:null,isIE:null,getSupportedAnimation:function(){if(null!==this.supportedAnimation)return this.supportedAnimation;var a=document.body||document.documentElement,b=a.style,c="undefined"!=typeof b.transition||"undefined"!=typeof b.WebkitTransition||"undefined"!=typeof b.MozTransition||"undefined"!=typeof b.OTransition;if(c===!0){var d=document.createElement("div");if(("undefined"!=typeof d.style.WebkitPerspective||"undefined"!=typeof d.style.perspective)&&(this.supportedAnimation="css-3d"),"css-3d"===this.supportedAnimation&&"undefined"!=typeof d.styleWebkitPerspective){var e=document.createElement("style");e.textContent="@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}",document.getElementsByTagName("head")[0].appendChild(e),d.id="test-3d",document.body.appendChild(d),(9!==d.offsetLeft||5!==d.offsetHeight)&&(this.supportedAnimation=null),e.parentNode.removeChild(e),d.parentNode.removeChild(d)}null!==this.supportedAnimation||"undefined"==typeof d.style["-webkit-transform"]&&"undefined"==typeof d.style.transform||(this.supportedAnimation="css-2d")}else this.supportedAnimation="javascript";return this.supportedAnimation},getVendorPrefix:function(){if(null!==this.vendorPrefix)return this.vendorPrefix;var a=document.createElement("div"),b=["Webkit","Moz","ms","O"];if("transform"in a.style)return this.vendorPrefix="",this.vendorPrefix;for(var c=0;c<b.length;c++)if(b[c]+"Transform"in a.style){this.vendorPrefix="-"+b[c].toLowerCase()+"-";break}return this.vendorPrefix},getTransitionEvent:function(){if(null!==this.transitionEvent)return this.transitionEvent;var a=document.createElement("div"),b={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd"};for(var c in b)if(c in a.style){this.transitionEvent=b[c];break}return this.transitionEvent},checkImagesComplete:function(a,b){var c=this,d=this.checkImagesStatus(a);if("loading"===d)var e=setInterval(function(){d=c.checkImagesStatus(a),"complete"===d&&(clearInterval(e),"function"==typeof b&&b())},100);else"function"==typeof b&&b();return d},checkImagesStatus:function(a){var c="complete";return a.is("img")&&a[0].complete===!1?c="loading":a.find("img").each(function(a){var d=b(this)[0];d.complete===!1&&(c="loading")}),c},checkIE:function(){if(null!==this.isIE)return this.isIE;var b=a.navigator.userAgent;b.indexOf("MSIE");return-1!==b.indexOf("MSIE")||b.match(/Trident.*rv\:11\./)?this.isIE=!0:this.isIE=!1,this.isIE}};a.SliderProUtils=f}(window,jQuery),function(a,b){"use strict";var c="Thumbnails."+b.SliderPro.namespace,d={$thumbnails:null,$thumbnailsContainer:null,thumbnails:null,selectedThumbnailIndex:0,thumbnailsSize:0,thumbnailsContainerSize:0,thumbnailsPosition:0,thumbnailsOrientation:null,thumbnailsPositionProperty:null,isThumbnailScroller:!1,initThumbnails:function(){var a=this;this.thumbnails=[],this.on("update."+c,b.proxy(this._thumbnailsOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._thumbnailsOnResize,this)),this.on("gotoSlide."+c,function(b){a._gotoThumbnail(b.index)})},_thumbnailsOnUpdate:function(){var a=this;if(0===this.$slider.find(".sp-thumbnail").length&&0===this.thumbnails.length)return void(this.isThumbnailScroller=!1);if(this.isThumbnailScroller=!0,null===this.$thumbnailsContainer&&(this.$thumbnailsContainer=b('<div class="sp-thumbnails-container"></div>').insertAfter(this.$slidesContainer)),null===this.$thumbnails)if(0!==this.$slider.find(".sp-thumbnails").length){if(this.$thumbnails=this.$slider.find(".sp-thumbnails").appendTo(this.$thumbnailsContainer),this.settings.shuffle===!0){var c=this.$thumbnails.find(".sp-thumbnail"),d=[];b.each(this.shuffledIndexes,function(a,e){var f=b(c[e]);0!==f.parent("a").length&&(f=f.parent("a")),d.push(f)}),this.$thumbnails.empty().append(d)}}else this.$thumbnails=b('<div class="sp-thumbnails"></div>').appendTo(this.$thumbnailsContainer);this.$slides.find(".sp-thumbnail").each(function(c){var d=b(this),e=d.parents(".sp-slide").index(),f=a.$thumbnails.find(".sp-thumbnail").length-1;0!==d.parent("a").length&&(d=d.parent("a")),e>f?d.appendTo(a.$thumbnails):d.insertBefore(a.$thumbnails.find(".sp-thumbnail").eq(e))});for(var e=this.thumbnails.length-1;e>=0;e--)if(0===this.$thumbnails.find('.sp-thumbnail[data-index="'+e+'"]').length){var f=this.thumbnails[e];f.destroy(),this.thumbnails.splice(e,1)}this.$thumbnails.find(".sp-thumbnail").each(function(c){var d=b(this);"undefined"==typeof d.attr("data-init")?a._createThumbnail(d,c):a.thumbnails[c].setIndex(c)}),this.$thumbnailsContainer.removeClass("sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"),"top"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-top-thumbnails"),this.thumbnailsOrientation="horizontal"):"bottom"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-bottom-thumbnails"),this.thumbnailsOrientation="horizontal"):"left"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-left-thumbnails"),this.thumbnailsOrientation="vertical"):"right"===this.settings.thumbnailsPosition&&(this.$thumbnailsContainer.addClass("sp-right-thumbnails"),this.thumbnailsOrientation="vertical"),this.settings.thumbnailPointer===!0?this.$thumbnailsContainer.addClass("sp-has-pointer"):this.$thumbnailsContainer.removeClass("sp-has-pointer"),this.selectedThumbnailIndex=this.selectedSlideIndex,this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"),this.thumbnailsSize=0,b.each(this.thumbnails,function(b,c){c.setSize(a.settings.thumbnailWidth,a.settings.thumbnailHeight),a.thumbnailsSize+="horizontal"===a.thumbnailsOrientation?c.getSize().width:c.getSize().height}),"horizontal"===this.thumbnailsOrientation?(this.$thumbnails.css({width:this.thumbnailsSize,height:this.settings.thumbnailHeight}),this.$thumbnailsContainer.css("height",""),this.thumbnailsPositionProperty="left"):(this.$thumbnails.css({width:this.settings.thumbnailWidth,height:this.thumbnailsSize}),this.$thumbnailsContainer.css("width",""),this.thumbnailsPositionProperty="top"),this.trigger({type:"thumbnailsUpdate"}),b.isFunction(this.settings.thumbnailsUpdate)&&this.settings.thumbnailsUpdate.call(this,{type:"thumbnailsUpdate"})},_createThumbnail:function(a,b){var d=this,f=new e(a,this.$thumbnails,b);f.on("thumbnailClick."+c,function(a){d.gotoSlide(a.index)}),this.thumbnails.splice(b,0,f)},_thumbnailsOnResize:function(){if(this.isThumbnailScroller!==!1){var c,d=this;"horizontal"===this.thumbnailsOrientation?(this.thumbnailsContainerSize=Math.min(this.$slidesMask.width(),this.thumbnailsSize),this.$thumbnailsContainer.css("width",this.thumbnailsContainerSize),"fullWindow"===this.settings.forceSize&&(this.$slidesMask.css("height",this.$slidesMask.height()-this.$thumbnailsContainer.outerHeight(!0)),this.slideHeight=this.$slidesMask.height(),b.each(this.slides,function(a,b){b.setSize(d.slideWidth,d.slideHeight)}))):"vertical"===this.thumbnailsOrientation&&(this.$slidesMask.width()+this.$thumbnailsContainer.outerWidth(!0)>this.$slider.parent().width()&&("fullWidth"===this.settings.forceSize||"fullWindow"===this.settings.forceSize?this.$slider.css("max-width",b(a).width()-this.$thumbnailsContainer.outerWidth(!0)):this.$slider.css("max-width",this.$slider.parent().width()-this.$thumbnailsContainer.outerWidth(!0)),this.$slidesMask.css("width",this.$slider.width()),"horizontal"===this.settings.orientation?(this.visibleOffset=Math.round((this.$slider.width()-this.slideSize)/2),this.visibleSlidesSize=this.$slidesMask.width()):"vertical"===this.settings.orientation&&(this.slideWidth=this.$slider.width(),b.each(this.slides,function(a,b){b.setSize(d.slideWidth,d.slideHeight)})),this._resetSlidesPosition()),this.thumbnailsContainerSize=Math.min(this.$slidesMask.height(),this.thumbnailsSize),this.$thumbnailsContainer.css("height",this.thumbnailsContainerSize)),c=this.thumbnailsSize<=this.thumbnailsContainerSize||0===this.$thumbnails.find(".sp-selected-thumbnail").length?0:Math.max(-this.thumbnails[this.selectedThumbnailIndex].getPosition()[this.thumbnailsPositionProperty],this.thumbnailsContainerSize-this.thumbnailsSize),"top"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:this.$thumbnailsContainer.outerHeight(!0),paddingLeft:"",paddingRight:""}):"bottom"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:""}):"left"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:"",paddingLeft:this.$thumbnailsContainer.outerWidth(!0),paddingRight:""}):"right"===this.settings.thumbnailsPosition&&this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:this.$thumbnailsContainer.outerWidth(!0)}),this._moveThumbnailsTo(c,!0)}},_gotoThumbnail:function(a){if(this.isThumbnailScroller!==!1&&"undefined"!=typeof this.thumbnails[a]){var c=this.selectedThumbnailIndex,d=this.thumbnailsPosition;if(this.selectedThumbnailIndex=a,this.$thumbnails.find(".sp-selected-thumbnail").removeClass("sp-selected-thumbnail"),this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"),this.selectedThumbnailIndex>=c){var e=this.selectedThumbnailIndex===this.thumbnails.length-1?this.selectedThumbnailIndex:this.selectedThumbnailIndex+1,f=this.thumbnails[e],g="horizontal"===this.thumbnailsOrientation?f.getPosition().right:f.getPosition().bottom,h=-this.thumbnailsPosition+this.thumbnailsContainerSize;g>h&&(d=this.thumbnailsPosition-(g-h))}else if(this.selectedThumbnailIndex<c){var i=0===this.selectedThumbnailIndex?this.selectedThumbnailIndex:this.selectedThumbnailIndex-1,j=this.thumbnails[i],k="horizontal"===this.thumbnailsOrientation?j.getPosition().left:j.getPosition().top;k<-this.thumbnailsPosition&&(d=-k)}this._moveThumbnailsTo(d),this.trigger({type:"gotoThumbnail"}),b.isFunction(this.settings.gotoThumbnail)&&this.settings.gotoThumbnail.call(this,{type:"gotoThumbnail"})}},_moveThumbnailsTo:function(a,c,d){var e=this,f={};if(a!==this.thumbnailsPosition)if(this.thumbnailsPosition=a,"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var g,h="horizontal"===this.thumbnailsOrientation?a:0,i="horizontal"===this.thumbnailsOrientation?0:a;"css-3d"===this.supportedAnimation?f[this.vendorPrefix+"transform"]="translate3d("+h+"px, "+i+"px, 0)":f[this.vendorPrefix+"transform"]="translate("+h+"px, "+i+"px)","undefined"!=typeof c&&c===!0?g="":(this.$thumbnails.addClass("sp-animated"),g=this.vendorPrefix+"transform 0.7s",this.$thumbnails.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(e.$thumbnails.off(e.transitionEvent),e.$thumbnails.removeClass("sp-animated"),"function"==typeof d&&d(),e.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(e.settings.thumbnailsMoveComplete)&&e.settings.thumbnailsMoveComplete.call(e,{type:"thumbnailsMoveComplete"}))})),f[this.vendorPrefix+"transition"]=g,this.$thumbnails.css(f)}else f["margin-"+this.thumbnailsPositionProperty]=a,"undefined"!=typeof c&&c===!0?this.$thumbnails.css(f):this.$thumbnails.addClass("sp-animated").animate(f,700,function(){e.$thumbnails.removeClass("sp-animated"),"function"==typeof d&&d(),e.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(e.settings.thumbnailsMoveComplete)&&e.settings.thumbnailsMoveComplete.call(e,{type:"thumbnailsMoveComplete"})})},_stopThumbnailsMovement:function(){var a={};if("css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var b=this.$thumbnails.css(this.vendorPrefix+"transform"),c=-1!==b.indexOf("matrix3d")?"matrix3d":"matrix",d=b.replace(c,"").match(/-?[0-9\.]+/g),e="matrix3d"===c?parseInt(d[12],10):parseInt(d[4],10),f="matrix3d"===c?parseInt(d[13],10):parseInt(d[5],10);"css-3d"===this.supportedAnimation?a[this.vendorPrefix+"transform"]="translate3d("+e+"px, "+f+"px, 0)":a[this.vendorPrefix+"transform"]="translate("+e+"px, "+f+"px)",a[this.vendorPrefix+"transition"]="",this.$thumbnails.css(a),this.$thumbnails.off(this.transitionEvent),this.thumbnailsPosition="horizontal"===this.thumbnailsOrientation?parseInt(d[4],10):parseInt(d[5],10)}else this.$thumbnails.stop(),this.thumbnailsPosition=parseInt(this.$thumbnails.css("margin-"+this.thumbnailsPositionProperty),10);this.$thumbnails.removeClass("sp-animated")},destroyThumbnails:function(){var d=this;this.off("update."+c),this.isThumbnailScroller!==!1&&(this.off("sliderResize."+c),this.off("gotoSlide."+c),b(a).off("resize."+this.uniqueId+"."+c),this.$thumbnails.find(".sp-thumbnail").each(function(){var a=b(this),e=parseInt(a.attr("data-index"),10),f=d.thumbnails[e];f.off("thumbnailClick."+c),f.destroy()}),this.thumbnails.length=0,this.$thumbnails.appendTo(this.$slider),this.$thumbnailsContainer.remove(),this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:""}))},thumbnailsDefaults:{
	thumbnailWidth:100,thumbnailHeight:80,thumbnailsPosition:"bottom",thumbnailPointer:!1,thumbnailsUpdate:function(){},gotoThumbnail:function(){},thumbnailsMoveComplete:function(){}}},e=function(a,b,c){this.$thumbnail=a,this.$thumbnails=b,this.$thumbnailContainer=null,this.width=0,this.height=0,this.isImageLoaded=!1,this.setIndex(c),this._init()};e.prototype={_init:function(){var a=this;this.$thumbnail.attr("data-init",!0),this.$thumbnailContainer=b('<div class="sp-thumbnail-container"></div>').appendTo(this.$thumbnails),0!==this.$thumbnail.parent("a").length?this.$thumbnail.parent("a").appendTo(this.$thumbnailContainer):this.$thumbnail.appendTo(this.$thumbnailContainer),this.$thumbnailContainer.on("click."+c,function(){a.trigger({type:"thumbnailClick."+c,index:a.index})})},setSize:function(a,b){this.width=a,this.height=b,this.$thumbnailContainer.css({width:this.width,height:this.height}),this.$thumbnail.is("img")&&"undefined"==typeof this.$thumbnail.attr("data-src")&&this.resizeImage()},getSize:function(){return{width:this.$thumbnailContainer.outerWidth(!0),height:this.$thumbnailContainer.outerHeight(!0)}},getPosition:function(){return{left:this.$thumbnailContainer.position().left+parseInt(this.$thumbnailContainer.css("marginLeft"),10),right:this.$thumbnailContainer.position().left+parseInt(this.$thumbnailContainer.css("marginLeft"),10)+this.$thumbnailContainer.outerWidth(),top:this.$thumbnailContainer.position().top+parseInt(this.$thumbnailContainer.css("marginTop"),10),bottom:this.$thumbnailContainer.position().top+parseInt(this.$thumbnailContainer.css("marginTop"),10)+this.$thumbnailContainer.outerHeight()}},setIndex:function(a){this.index=a,this.$thumbnail.attr("data-index",this.index)},resizeImage:function(){var a=this;if(this.isImageLoaded===!1)return void SliderProUtils.checkImagesComplete(this.$thumbnailContainer,function(){a.isImageLoaded=!0,a.resizeImage()});this.$thumbnail=this.$thumbnailContainer.find(".sp-thumbnail");var b=this.$thumbnail.width(),c=this.$thumbnail.height();b/c<=this.width/this.height?this.$thumbnail.css({width:"100%",height:"auto"}):this.$thumbnail.css({width:"auto",height:"100%"}),this.$thumbnail.css({marginLeft:.5*(this.$thumbnailContainer.width()-this.$thumbnail.width()),marginTop:.5*(this.$thumbnailContainer.height()-this.$thumbnail.height())})},destroy:function(){this.$thumbnailContainer.off("click."+c),this.$thumbnail.removeAttr("data-init"),this.$thumbnail.removeAttr("data-index"),0!==this.$thumbnail.parent("a").length?this.$thumbnail.parent("a").insertBefore(this.$thumbnailContainer):this.$thumbnail.insertBefore(this.$thumbnailContainer),this.$thumbnailContainer.remove()},on:function(a,b){return this.$thumbnailContainer.on(a,b)},off:function(a){return this.$thumbnailContainer.off(a)},trigger:function(a){return this.$thumbnailContainer.triggerHandler(a)}},b.SliderPro.addModule("Thumbnails",d)}(window,jQuery),function(a,b){"use strict";var c="ConditionalImages."+b.SliderPro.namespace,d={previousImageSize:null,currentImageSize:null,isRetinaScreen:!1,initConditionalImages:function(){this.currentImageSize=this.previousImageSize="default",this.isRetinaScreen="undefined"!=typeof this._isRetina&&this._isRetina()===!0,this.on("update."+c,b.proxy(this._conditionalImagesOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._conditionalImagesOnResize,this))},_conditionalImagesOnUpdate:function(){b.each(this.slides,function(a,c){var d=c.$slide;d.find("img:not([ data-default ])").each(function(){var a=b(this);"undefined"!=typeof a.attr("data-src")?a.attr("data-default",a.attr("data-src")):a.attr("data-default",a.attr("src"))})})},_conditionalImagesOnResize:function(){if(this.slideWidth<=this.settings.smallSize?this.currentImageSize="small":this.slideWidth<=this.settings.mediumSize?this.currentImageSize="medium":this.slideWidth<=this.settings.largeSize?this.currentImageSize="large":this.currentImageSize="default",this.previousImageSize!==this.currentImageSize){var a=this;b.each(this.slides,function(c,d){var e=d.$slide;e.find("img").each(function(){var c=b(this),e="";a.isRetinaScreen===!0&&"undefined"!=typeof c.attr("data-retina"+a.currentImageSize)?(e=c.attr("data-retina"+a.currentImageSize),"undefined"!=typeof c.attr("data-retina")&&c.attr("data-retina")!==e&&c.attr("data-retina",e)):(a.isRetinaScreen===!1||a.isRetinaScreen===!0&&"undefined"==typeof c.attr("data-retina"))&&"undefined"!=typeof c.attr("data-"+a.currentImageSize)&&(e=c.attr("data-"+a.currentImageSize),"undefined"!=typeof c.attr("data-src")&&c.attr("data-src")!==e&&c.attr("data-src",e)),""!==e&&"undefined"==typeof c.attr("data-src")&&c.attr("src")!==e&&a._loadConditionalImage(c,e,function(a){a.hasClass("sp-image")&&(d.$mainImage=a,d.resizeMainImage(!0))})})}),this.previousImageSize=this.currentImageSize}},_loadConditionalImage:function(a,c,d){var e=b(new Image);e.attr("class",a.attr("class")),e.attr("style",a.attr("style")),b.each(a.data(),function(a,b){e.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&e.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&e.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&e.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&e.attr("title",a.attr("title")),e.attr("src",c),e.insertAfter(a),a.remove(),a=null,"function"==typeof d&&d(e)},destroyConditionalImages:function(){this.off("update."+c),this.off("sliderResize."+c)},conditionalImagesDefaults:{smallSize:480,mediumSize:768,largeSize:1024}};b.SliderPro.addModule("ConditionalImages",d)}(window,jQuery),function(a,b){"use strict";var c="Retina."+b.SliderPro.namespace,d={initRetina:function(){this._isRetina()!==!1&&(this.on("update."+c,b.proxy(this._checkRetinaImages,this)),0!==this.$slider.find(".sp-thumbnail").length&&this.on("update.Thumbnails."+c,b.proxy(this._checkRetinaThumbnailImages,this)))},_isRetina:function(){return a.devicePixelRatio>=2?!0:a.matchMedia&&a.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)").matches?!0:!1},_checkRetinaImages:function(){var a=this;b.each(this.slides,function(c,d){var e=d.$slide;"undefined"==typeof e.attr("data-retina-loaded")&&(e.attr("data-retina-loaded",!0),e.find("img[data-retina]").each(function(){var c=b(this);"undefined"!=typeof c.attr("data-src")?c.attr("data-src",c.attr("data-retina")):a._loadRetinaImage(c,function(a){a.hasClass("sp-image")&&(d.$mainImage=a,d.resizeMainImage(!0))})}))})},_checkRetinaThumbnailImages:function(){var a=this;b.each(this.thumbnails,function(c,d){var e=d.$thumbnailContainer;"undefined"==typeof e.attr("data-retina-loaded")&&(e.attr("data-retina-loaded",!0),e.find("img[data-retina]").each(function(){var c=b(this);"undefined"!=typeof c.attr("data-src")?c.attr("data-src",c.attr("data-retina")):a._loadRetinaImage(c,function(a){a.hasClass("sp-thumbnail")&&d.resizeImage()})}))})},_loadRetinaImage:function(a,c){var d=!1,e="";if("undefined"!=typeof a.attr("data-retina")&&(d=!0,e=a.attr("data-retina")),"undefined"!=typeof a.attr("data-src")&&(d===!1&&(e=a.attr("data-src")),a.removeAttr("data-src")),""!==e){var f=b(new Image);f.attr("class",a.attr("class")),f.attr("style",a.attr("style")),b.each(a.data(),function(a,b){f.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&f.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&f.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&f.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&f.attr("title",a.attr("title")),f.insertAfter(a),a.remove(),a=null,f.attr("src",e),"function"==typeof c&&c(f)}},destroyRetina:function(){this.off("update."+c),this.off("update.Thumbnails."+c)}};b.SliderPro.addModule("Retina",d)}(window,jQuery),function(a,b){"use strict";var c="LazyLoading."+b.SliderPro.namespace,d={allowLazyLoadingCheck:!0,initLazyLoading:function(){this.on("sliderResize."+c,b.proxy(this._lazyLoadingOnResize,this)),this.on("gotoSlide."+c,b.proxy(this._checkAndLoadVisibleImages,this)),this.on("thumbnailsUpdate."+c+" thumbnailsMoveComplete."+c,b.proxy(this._checkAndLoadVisibleThumbnailImages,this))},_lazyLoadingOnResize:function(){var a=this;this.allowLazyLoadingCheck!==!1&&(this.allowLazyLoadingCheck=!1,this._checkAndLoadVisibleImages(),0!==this.$slider.find(".sp-thumbnail").length&&this._checkAndLoadVisibleThumbnailImages(),setTimeout(function(){a.allowLazyLoadingCheck=!0},500))},_checkAndLoadVisibleImages:function(){if(0!==this.$slider.find(".sp-slide:not([ data-loaded ])").length){var a=this,c=this.settings.loop===!0?this.middleSlidePosition:this.selectedSlideIndex,d=Math.ceil((this.visibleSlidesSize-this.slideSize)/2/this.slideSize),e=c-d-1>0?c-d-1:0,f=c+d+1<this.getTotalSlides()-1?c+d+1:this.getTotalSlides()-1,g=this.slidesOrder.slice(e,f+1);b.each(g,function(c,d){var e=a.slides[d],f=e.$slide;"undefined"==typeof f.attr("data-loaded")&&(f.attr("data-loaded",!0),f.find("img[ data-src ]").each(function(){var c=b(this);a._loadImage(c,function(a){a.hasClass("sp-image")&&(e.$mainImage=a,e.resizeMainImage(!0))})}))})}},_checkAndLoadVisibleThumbnailImages:function(){if(0!==this.$slider.find(".sp-thumbnail-container:not([ data-loaded ])").length){var a=this,c=this.thumbnailsSize/this.thumbnails.length,d=Math.floor(Math.abs(this.thumbnailsPosition/c)),e=Math.floor((-this.thumbnailsPosition+this.thumbnailsContainerSize)/c),f=this.thumbnails.slice(d,e+1);b.each(f,function(c,d){var e=d.$thumbnailContainer;"undefined"==typeof e.attr("data-loaded")&&(e.attr("data-loaded",!0),e.find("img[ data-src ]").each(function(){var c=b(this);a._loadImage(c,function(){d.resizeImage()})}))})}},_loadImage:function(a,c){var d=b(new Image);d.attr("class",a.attr("class")),d.attr("style",a.attr("style")),b.each(a.data(),function(a,b){d.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&d.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&d.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&d.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&d.attr("title",a.attr("title")),d.attr("src",a.attr("data-src")),d.removeAttr("data-src"),d.insertAfter(a),a.remove(),a=null,"function"==typeof c&&c(d)},destroyLazyLoading:function(){this.off("update."+c),this.off("gotoSlide."+c),this.off("sliderResize."+c),this.off("thumbnailsUpdate."+c),this.off("thumbnailsMoveComplete."+c)}};b.SliderPro.addModule("LazyLoading",d)}(window,jQuery),function(a,b){"use strict";var c="Layers."+b.SliderPro.namespace,d={layersGotoSlideReference:null,waitForLayersTimer:null,initLayers:function(){this.on("update."+c,b.proxy(this._layersOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._layersOnResize,this)),this.on("gotoSlide."+c,b.proxy(this._layersOnGotoSlide,this))},_layersOnUpdate:function(a){var c=this;b.each(this.slides,function(a,c){c.$slide;this.$slide.find(".sp-layer:not([ data-layer-init ])").each(function(){var a=new f(b(this));"undefined"==typeof c.layers&&(c.layers=[]),c.layers.push(a),b(this).hasClass("sp-static")===!1&&("undefined"==typeof c.animatedLayers&&(c.animatedLayers=[]),c.animatedLayers.push(a))})}),this.settings.waitForLayers===!0&&(clearTimeout(this.waitForLayersTimer),this.waitForLayersTimer=setTimeout(function(){c.layersGotoSlideReference=c.gotoSlide,c.gotoSlide=c._layersGotoSlide},1)),setTimeout(function(){c.showLayers(c.selectedSlideIndex)},1)},_layersOnResize:function(){var a,c,d=this,e=this.settings.autoScaleLayers;this.settings.autoScaleLayers!==!1&&(-1===this.settings.autoScaleReference?"string"==typeof this.settings.width&&-1!==this.settings.width.indexOf("%")?e=!1:a=parseInt(this.settings.width,10):a=this.settings.autoScaleReference,c=e===!0&&this.slideWidth<a?d.slideWidth/a:1,b.each(this.slides,function(a,d){"undefined"!=typeof d.layers&&b.each(d.layers,function(a,b){b.scale(c)})}))},_layersGotoSlide:function(a){var b=this,d=this.slides[this.selectedSlideIndex].animatedLayers;this.$slider.hasClass("sp-swiping")||"undefined"==typeof d||0===d.length?this.layersGotoSlideReference(a):(this.on("hideLayersComplete."+c,function(){b.off("hideLayersComplete."+c),b.layersGotoSlideReference(a)}),this.hideLayers(this.selectedSlideIndex))},_layersOnGotoSlide:function(a){this.previousSlideIndex!==this.selectedSlideIndex&&this.settings.waitForLayers===!1&&this.hideLayers(this.previousSlideIndex),this.showLayers(this.selectedSlideIndex)},showLayers:function(a){var c=this,d=this.slides[a].animatedLayers,e=0;"undefined"!=typeof d&&b.each(d,function(a,f){f.isVisible()===!0?(e++,e===d.length&&(c.trigger({type:"showLayersComplete",index:a}),b.isFunction(c.settings.showLayersComplete)&&c.settings.showLayersComplete.call(c,{type:"showLayersComplete",index:a}))):f.show(function(){e++,e===d.length&&(c.trigger({type:"showLayersComplete",index:a}),b.isFunction(c.settings.showLayersComplete)&&c.settings.showLayersComplete.call(c,{type:"showLayersComplete",index:a}))})})},hideLayers:function(a){var c=this,d=this.slides[a].animatedLayers,e=0;"undefined"!=typeof d&&b.each(d,function(a,f){f.isVisible()===!1?(e++,e===d.length&&(c.trigger({type:"hideLayersComplete",index:a}),b.isFunction(c.settings.hideLayersComplete)&&c.settings.hideLayersComplete.call(c,{type:"hideLayersComplete",index:a}))):f.hide(function(){e++,e===d.length&&(c.trigger({type:"hideLayersComplete",index:a}),b.isFunction(c.settings.hideLayersComplete)&&c.settings.hideLayersComplete.call(c,{type:"hideLayersComplete",index:a}))})})},destroyLayers:function(){this.off("update."+c),this.off("resize."+c),this.off("gotoSlide."+c),this.off("hideLayersComplete."+c)},layersDefaults:{waitForLayers:!1,autoScaleLayers:!0,autoScaleReference:-1,showLayersComplete:function(){},hideLayersComplete:function(){}}},e=a.SliderProSlide.prototype.destroy;a.SliderProSlide.prototype.destroy=function(){"undefined"!=typeof this.layers&&(b.each(this.layers,function(a,b){b.destroy()}),this.layers.length=0),"undefined"!=typeof this.animatedLayers&&(this.animatedLayers.length=0),e.apply(this)};var f=function(a){this.$layer=a,this.visible=!1,this.styled=!1,this.data=null,this.position=null,this.horizontalProperty=null,this.verticalProperty=null,this.horizontalPosition=null,this.verticalPosition=null,this.scaleRatio=1,this.supportedAnimation=SliderProUtils.getSupportedAnimation(),this.vendorPrefix=SliderProUtils.getVendorPrefix(),this.transitionEvent=SliderProUtils.getTransitionEvent(),this.stayTimer=null,this._init()};f.prototype={_init:function(){this.$layer.attr("data-layer-init",!0),this.$layer.hasClass("sp-static")?this._setStyle():this.$layer.css({visibility:"hidden"})},_setStyle:function(){this.styled=!0,this.data=this.$layer.data(),"undefined"!=typeof this.data.width&&this.$layer.css("width",this.data.width),"undefined"!=typeof this.data.height&&this.$layer.css("height",this.data.height),"undefined"!=typeof this.data.depth&&this.$layer.css("z-index",this.data.depth),this.position=this.data.position?this.data.position.toLowerCase():"topleft",-1!==this.position.indexOf("right")?this.horizontalProperty="right":-1!==this.position.indexOf("left")?this.horizontalProperty="left":this.horizontalProperty="center",-1!==this.position.indexOf("bottom")?this.verticalProperty="bottom":-1!==this.position.indexOf("top")?this.verticalProperty="top":this.verticalProperty="center",this._setPosition(),this.scale(this.scaleRatio)},_setPosition:function(){var a=this.$layer.attr("style");this.horizontalPosition="undefined"!=typeof this.data.horizontal?this.data.horizontal:0,this.verticalPosition="undefined"!=typeof this.data.vertical?this.data.vertical:0,"center"===this.horizontalProperty?(this.$layer.is("img")===!1&&("undefined"==typeof a||"undefined"!=typeof a&&-1===a.indexOf("width"))&&(this.$layer.css("white-space","nowrap"),this.$layer.css("width",this.$layer.outerWidth(!0))),this.$layer.css({marginLeft:"auto",marginRight:"auto",left:this.horizontalPosition,right:0})):this.$layer.css(this.horizontalProperty,this.horizontalPosition),"center"===this.verticalProperty?(this.$layer.is("img")===!1&&("undefined"==typeof a||"undefined"!=typeof a&&-1===a.indexOf("height"))&&(this.$layer.css("white-space","nowrap"),this.$layer.css("height",this.$layer.outerHeight(!0))),this.$layer.css({marginTop:"auto",marginBottom:"auto",top:this.verticalPosition,bottom:0})):this.$layer.css(this.verticalProperty,this.verticalPosition)},scale:function(a){if(!this.$layer.hasClass("sp-no-scale")&&(this.scaleRatio=a,this.styled!==!1)){var b="center"===this.horizontalProperty?"left":this.horizontalProperty,c="center"===this.verticalProperty?"top":this.verticalProperty,d={};d[this.vendorPrefix+"transform-origin"]=this.horizontalProperty+" "+this.verticalProperty,d[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")","string"!=typeof this.horizontalPosition&&(d[b]=this.horizontalPosition*this.scaleRatio),"string"!=typeof this.verticalPosition&&(d[c]=this.verticalPosition*this.scaleRatio),"string"==typeof this.data.width&&-1!==this.data.width.indexOf("%")&&(d.width=(parseInt(this.data.width,10)/this.scaleRatio).toString()+"%"),"string"==typeof this.data.height&&-1!==this.data.height.indexOf("%")&&(d.height=(parseInt(this.data.height,10)/this.scaleRatio).toString()+"%"),this.$layer.css(d)}},show:function(a){if(this.visible!==!0){this.visible=!0,this.styled===!1&&this._setStyle();var b=this,c="undefined"!=typeof this.data.showOffset?this.data.showOffset:50,d="undefined"!=typeof this.data.showDuration?this.data.showDuration/1e3:.4,e="undefined"!=typeof this.data.showDelay?this.data.showDelay:10,f="undefined"!=typeof b.data.stayDuration?parseInt(b.data.stayDuration,10):-1;if("javascript"===this.supportedAnimation)this.$layer.stop().delay(e).css({opacity:0,visibility:"visible"}).animate({opacity:1},1e3*d,function(){-1!==f&&(b.stayTimer=setTimeout(function(){b.hide(),b.stayTimer=null},f)),"undefined"!=typeof a&&a()});else{var g={opacity:0,visibility:"visible"},h={opacity:1},i="";g[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transition"]="opacity "+d+"s","undefined"!=typeof this.data.showTransition&&("left"===this.data.showTransition?i=c+"px, 0":"right"===this.data.showTransition?i="-"+c+"px, 0":"up"===this.data.showTransition?i="0, "+c+"px":"down"===this.data.showTransition&&(i="0, -"+c+"px"),g[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d("+i+", 0)":" translate("+i+")",h[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d(0, 0, 0)":" translate(0, 0)",h[this.vendorPrefix+"transition"]+=", "+this.vendorPrefix+"transform "+d+"s"),this.$layer.on(this.transitionEvent,function(c){c.target===c.currentTarget&&(b.$layer.off(b.transitionEvent).css(b.vendorPrefix+"transition",""),-1!==f&&(b.stayTimer=setTimeout(function(){b.hide(),b.stayTimer=null},f)),"undefined"!=typeof a&&a())}),this.$layer.css(g),setTimeout(function(){b.$layer.css(h)},e)}}},hide:function(a){if(this.visible!==!1){var c=this,d="undefined"!=typeof this.data.hideOffset?this.data.hideOffset:50,e="undefined"!=typeof this.data.hideDuration?this.data.hideDuration/1e3:.4,f="undefined"!=typeof this.data.hideDelay?this.data.hideDelay:10;if(this.visible=!1,null!==this.stayTimer&&clearTimeout(this.stayTimer),"javascript"===this.supportedAnimation)this.$layer.stop().delay(f).animate({opacity:0},1e3*e,function(){b(this).css("visibility","hidden"),"undefined"!=typeof a&&a()});else{var g="",h={opacity:0};h[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transition"]="opacity "+e+"s","undefined"!=typeof this.data.hideTransition&&("left"===this.data.hideTransition?g="-"+d+"px, 0":"right"===this.data.hideTransition?g=d+"px, 0":"up"===this.data.hideTransition?g="0, -"+d+"px":"down"===this.data.hideTransition&&(g="0, "+d+"px"),h[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d("+g+", 0)":" translate("+g+")",h[this.vendorPrefix+"transition"]+=", "+this.vendorPrefix+"transform "+e+"s"),this.$layer.on(this.transitionEvent,function(b){b.target===b.currentTarget&&(c.$layer.off(c.transitionEvent).css(c.vendorPrefix+"transition",""),c.visible===!1&&c.$layer.css("visibility","hidden"),"undefined"!=typeof a&&a())}),setTimeout(function(){c.$layer.css(h)},f)}}},isVisible:function(){return this.visible===!1||this.$layer.is(":hidden")?!1:!0},destroy:function(){this.$layer.removeAttr("style"),this.$layer.removeAttr("data-layer-init")}},b.SliderPro.addModule("Layers",d)}(window,jQuery),function(a,b){"use strict";var c="Fade."+b.SliderPro.namespace,d={fadeGotoSlideReference:null,initFade:function(){this.on("update."+c,b.proxy(this._fadeOnUpdate,this))},_fadeOnUpdate:function(){this.settings.fade===!0&&(this.fadeGotoSlideReference=this.gotoSlide,this.gotoSlide=this._fadeGotoSlide)},_fadeGotoSlide:function(a){if(a!==this.selectedSlideIndex)if(this.$slider.hasClass("sp-swiping"))this.fadeGotoSlideReference(a);else{var c,d,e=this,f=a;b.each(this.slides,function(a,b){var g=b.getIndex(),h=b.$slide;g===f?(h.css({opacity:0,left:0,top:0,"z-index":20}),c=h):g===e.selectedSlideIndex?(h.css({opacity:1,left:0,top:0,"z-index":10}),d=h):h.css("visibility","hidden")}),this.previousSlideIndex=this.selectedSlideIndex,this.selectedSlideIndex=a,this.$slides.find(".sp-selected").removeClass("sp-selected"),this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"),e.settings.loop===!0&&e._updateSlidesOrder(),this._moveTo(this.visibleOffset,!0),this.settings.fadeOutPreviousSlide===!0&&this._fadeSlideTo(d,0),this._fadeSlideTo(c,1,function(){b.each(e.slides,function(a,b){var c=b.$slide;c.css({visibility:"",opacity:"","z-index":""})}),e._resetSlidesPosition(),e.trigger({type:"gotoSlideComplete",index:a,previousIndex:e.previousSlideIndex}),b.isFunction(e.settings.gotoSlideComplete)&&e.settings.gotoSlideComplete.call(e,{type:"gotoSlideComplete",index:a,previousIndex:e.previousSlideIndex})}),this.settings.autoHeight===!0&&this._resizeHeight(),this.trigger({type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex}),b.isFunction(this.settings.gotoSlide)&&this.settings.gotoSlide.call(this,{type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex})}},_fadeSlideTo:function(a,b,c){var d=this;"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(setTimeout(function(){var c={opacity:b};c[d.vendorPrefix+"transition"]="opacity "+d.settings.fadeDuration/1e3+"s",a.css(c)},100),a.on(this.transitionEvent,function(b){b.target===b.currentTarget&&(a.off(d.transitionEvent),a.css(d.vendorPrefix+"transition",""),"function"==typeof c&&c())})):a.stop().animate({opacity:b},this.settings.fadeDuration,function(){"function"==typeof c&&c()})},destroyFade:function(){this.off("update."+c),null!==this.fadeGotoSlideReference&&(this.gotoSlide=this.fadeGotoSlideReference)},fadeDefaults:{fade:!1,fadeOutPreviousSlide:!0,fadeDuration:500}};b.SliderPro.addModule("Fade",d)}(window,jQuery),function(a,b){"use strict";var c="TouchSwipe."+b.SliderPro.namespace,d={touchStartPoint:{x:0,y:0},touchEndPoint:{x:0,y:0},touchDistance:{x:0,y:0},touchStartPosition:0,isTouchMoving:!1,touchSwipeEvents:{startEvent:"",moveEvent:"",endEvent:""},initTouchSwipe:function(){this.settings.touchSwipe!==!1&&(this.touchSwipeEvents.startEvent="touchstart."+c+" mousedown."+c,this.touchSwipeEvents.moveEvent="touchmove."+c+" mousemove."+c,this.touchSwipeEvents.endEvent="touchend."+this.uniqueId+"."+c+" mouseup."+this.uniqueId+"."+c,this.$slidesMask.on(this.touchSwipeEvents.startEvent,b.proxy(this._onTouchStart,this)),this.$slidesMask.on("dragstart."+c,function(a){a.preventDefault()}),this.$slidesMask.addClass("sp-grab"))},_onTouchStart:function(a){if(!(b(a.target).closest(".sp-selectable").length>=1)){var d="undefined"!=typeof a.originalEvent.touches?a.originalEvent.touches[0]:a.originalEvent;"undefined"==typeof a.originalEvent.touches&&a.preventDefault(),b(a.target).parents(".sp-slide").find("a").one("click."+c,function(a){a.preventDefault()}),this.touchStartPoint.x=d.pageX||d.clientX,this.touchStartPoint.y=d.pageY||d.clientY,this.touchStartPosition=this.slidesPosition,this.touchDistance.x=this.touchDistance.y=0,this.$slides.hasClass("sp-animated")&&(this.isTouchMoving=!0,this._stopMovement(),this.touchStartPosition=this.slidesPosition),this.$slidesMask.on(this.touchSwipeEvents.moveEvent,b.proxy(this._onTouchMove,this)),b(document).on(this.touchSwipeEvents.endEvent,b.proxy(this._onTouchEnd,this)),this.$slidesMask.removeClass("sp-grab").addClass("sp-grabbing"),this.$slider.addClass("sp-swiping")}},_onTouchMove:function(a){var b="undefined"!=typeof a.originalEvent.touches?a.originalEvent.touches[0]:a.originalEvent;this.isTouchMoving=!0,this.touchEndPoint.x=b.pageX||b.clientX,this.touchEndPoint.y=b.pageY||b.clientY,this.touchDistance.x=this.touchEndPoint.x-this.touchStartPoint.x,this.touchDistance.y=this.touchEndPoint.y-this.touchStartPoint.y;var c="horizontal"===this.settings.orientation?this.touchDistance.x:this.touchDistance.y,d="horizontal"===this.settings.orientation?this.touchDistance.y:this.touchDistance.x;Math.abs(c)>Math.abs(d)&&(a.preventDefault(),this.settings.loop===!1&&(this.slidesPosition>this.touchStartPosition&&0===this.selectedSlideIndex||this.slidesPosition<this.touchStartPosition&&this.selectedSlideIndex===this.getTotalSlides()-1)&&(c=.2*c),this._moveTo(this.touchStartPosition+c,!0))},_onTouchEnd:function(a){var d=this,e="horizontal"===this.settings.orientation?this.touchDistance.x:this.touchDistance.y;if(this.$slidesMask.off(this.touchSwipeEvents.moveEvent),b(document).off(this.touchSwipeEvents.endEvent),this.$slidesMask.removeClass("sp-grabbing").addClass("sp-grab"),(this.isTouchMoving===!1||this.isTouchMoving===!0&&Math.abs(this.touchDistance.x)<10&&Math.abs(this.touchDistance.y)<10)&&(b(a.target).parents(".sp-slide").find("a").off("click."+c),this.$slider.removeClass("sp-swiping")),setTimeout(function(){d.$slider.removeClass("sp-swiping")},1),this.isTouchMoving!==!1){this.isTouchMoving=!1,b(a.target).parents(".sp-slide").one("click",function(a){a.preventDefault()});var f=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;if(Math.abs(e)<this.settings.touchSwipeThreshold)this._moveTo(f);else{var g=e/(this.slideSize+this.settings.slideDistance);g=parseInt(g,10)+(g>0?1:-1);var h=this.slidesOrder[b.inArray(this.selectedSlideIndex,this.slidesOrder)-g];this.settings.loop===!0?this.gotoSlide(h):"undefined"!=typeof h?this.gotoSlide(h):this._moveTo(f)}}},destroyTouchSwipe:function(){this.$slidesMask.off(this.touchSwipeEvents.startEvent),this.$slidesMask.off(this.touchSwipeEvents.moveEvent),this.$slidesMask.off("dragstart."+c),b(document).off(this.touchSwipeEvents.endEvent),this.$slidesMask.removeClass("sp-grab")},touchSwipeDefaults:{touchSwipe:!0,touchSwipeThreshold:50}};b.SliderPro.addModule("TouchSwipe",d)}(window,jQuery),function(a,b){"use strict";var c="Caption."+b.SliderPro.namespace,d={$captionContainer:null,captionContent:"",initCaption:function(){this.on("update."+c,b.proxy(this._captionOnUpdate,this)),this.on("gotoSlide."+c,b.proxy(this._updateCaptionContent,this))},_captionOnUpdate:function(){this.$captionContainer=this.$slider.find(".sp-caption-container"),this.$slider.find(".sp-caption").length&&0===this.$captionContainer.length&&(this.$captionContainer=b('<div class="sp-caption-container"></div>').appendTo(this.$slider),this._updateCaptionContent()),this.$slides.find(".sp-caption").each(function(){b(this).css("display","none")})},_updateCaptionContent:function(){var a=this,b=this.$slider.find(".sp-slide").eq(this.selectedSlideIndex).find(".sp-caption"),c=0!==b.length?b.html():"";this.settings.fadeCaption===!0?""!==this.captionContent?(0===parseFloat(this.$captionContainer.css("opacity"),10)&&(this.$captionContainer.css(this.vendorPrefix+"transition",""),this.$captionContainer.css("opacity",1)),this._fadeCaptionTo(0,function(){a.captionContent=c,""!==c?(a.$captionContainer.html(a.captionContent),a._fadeCaptionTo(1)):a.$captionContainer.empty()})):(this.captionContent=c,this.$captionContainer.html(this.captionContent),this.$captionContainer.css("opacity",0),this._fadeCaptionTo(1)):(this.captionContent=c,this.$captionContainer.html(this.captionContent))},_fadeCaptionTo:function(a,b){var c=this;"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(setTimeout(function(){var b={opacity:a};b[c.vendorPrefix+"transition"]="opacity "+c.settings.captionFadeDuration/1e3+"s",c.$captionContainer.css(b)},1),this.$captionContainer.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(c.$captionContainer.off(c.transitionEvent),c.$captionContainer.css(c.vendorPrefix+"transition",""),"function"==typeof b&&b())})):this.$captionContainer.stop().animate({opacity:a},this.settings.captionFadeDuration,function(){"function"==typeof b&&b()})},destroyCaption:function(){this.off("update."+c),this.off("gotoSlide."+c),this.$captionContainer.remove(),this.$slider.find(".sp-caption").each(function(){b(this).css("display","")})},captionDefaults:{fadeCaption:!0,captionFadeDuration:500}};b.SliderPro.addModule("Caption",d)}(window,jQuery),function(a,b){"use strict";var c="DeepLinking."+b.SliderPro.namespace,d={initDeepLinking:function(){var d=this;this.on("init."+c,function(){d._gotoHash(a.location.hash)}),this.on("gotoSlide."+c,function(b){if(d.settings.updateHash===!0){var c=d.$slider.find(".sp-slide").eq(b.index).attr("id");"undefined"==typeof c&&(c=b.index),a.location.hash=d.$slider.attr("id")+"/"+c}}),b(a).on("hashchange."+this.uniqueId+"."+c,function(){d._gotoHash(a.location.hash)})},_parseHash:function(a){if(""!==a){a=a.substring(1);var b=a.split("/"),c=b.pop(),d=a.slice(0,-c.toString().length-1);if(this.$slider.attr("id")===d)return{sliderID:d,slideId:c}}return!1},_gotoHash:function(a){var b=this._parseHash(a);if(b!==!1){var c=b.slideId,d=parseInt(c,10);if(isNaN(d)){var e=this.$slider.find(".sp-slide#"+c).index();-1!==e&&e!==this.selectedSlideIndex&&this.gotoSlide(e)}else d!==this.selectedSlideIndex&&this.gotoSlide(d)}},destroyDeepLinking:function(){this.off("init."+c),this.off("gotoSlide."+c),b(a).off("hashchange."+this.uniqueId+"."+c)},deepLinkingDefaults:{updateHash:!1}};b.SliderPro.addModule("DeepLinking",d)}(window,jQuery),function(a,b){"use strict";var c="Autoplay."+b.SliderPro.namespace,d={autoplayTimer:null,isTimerRunning:!1,isTimerPaused:!1,initAutoplay:function(){this.on("update."+c,b.proxy(this._autoplayOnUpdate,this))},_autoplayOnUpdate:function(a){this.settings.autoplay===!0?(this.on("gotoSlide."+c,b.proxy(this._autoplayOnGotoSlide,this)),this.on("mouseenter."+c,b.proxy(this._autoplayOnMouseEnter,this)),this.on("mouseleave."+c,b.proxy(this._autoplayOnMouseLeave,this)),this.startAutoplay()):(this.off("gotoSlide."+c),this.off("mouseenter."+c),this.off("mouseleave."+c),this.stopAutoplay())},_autoplayOnGotoSlide:function(a){this.isTimerRunning===!0&&this.stopAutoplay(),this.isTimerPaused===!1&&this.startAutoplay()},_autoplayOnMouseEnter:function(a){!this.isTimerRunning||"pause"!==this.settings.autoplayOnHover&&"stop"!==this.settings.autoplayOnHover||(this.stopAutoplay(),this.isTimerPaused=!0)},_autoplayOnMouseLeave:function(a){this.settings.autoplay===!0&&this.isTimerRunning===!1&&"stop"!==this.settings.autoplayOnHover&&(this.startAutoplay(),this.isTimerPaused=!1)},startAutoplay:function(){var a=this;this.isTimerRunning=!0,this.autoplayTimer=setTimeout(function(){"normal"===a.settings.autoplayDirection?a.nextSlide():"backwards"===a.settings.autoplayDirection&&a.previousSlide()},this.settings.autoplayDelay)},stopAutoplay:function(){this.isTimerRunning=!1,this.isTimerPaused=!1,clearTimeout(this.autoplayTimer)},destroyAutoplay:function(){clearTimeout(this.autoplayTimer),this.off("update."+c),this.off("gotoSlide."+c),this.off("mouseenter."+c),this.off("mouseleave."+c)},autoplayDefaults:{autoplay:!0,autoplayDelay:5e3,autoplayDirection:"normal",autoplayOnHover:"pause"}};b.SliderPro.addModule("Autoplay",d)}(window,jQuery),function(a,b){"use strict";var c="Keyboard."+b.SliderPro.namespace,d={initKeyboard:function(){
	var a=this,d=!1;this.settings.keyboard!==!1&&(this.$slider.on("focus."+c,function(){d=!0}),this.$slider.on("blur."+c,function(){d=!1}),b(document).on("keydown."+this.uniqueId+"."+c,function(b){(a.settings.keyboardOnlyOnFocus!==!0||d!==!1)&&(37===b.which?a.previousSlide():39===b.which?a.nextSlide():13===b.which&&a.$slider.find(".sp-slide").eq(a.selectedSlideIndex).find(".sp-image-container a"))}))},destroyKeyboard:function(){this.$slider.off("focus."+c),this.$slider.off("blur."+c),b(document).off("keydown."+this.uniqueId+"."+c)},keyboardDefaults:{keyboard:!0,keyboardOnlyOnFocus:!1}};b.SliderPro.addModule("Keyboard",d)}(window,jQuery),function(a,b){"use strict";var c="FullScreen."+b.SliderPro.namespace,d={isFullScreen:!1,$fullScreenButton:null,sizeBeforeFullScreen:{},initFullScreen:function(){(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&this.on("update."+c,b.proxy(this._fullScreenOnUpdate,this))},_fullScreenOnUpdate:function(){this.settings.fullScreen===!0&&null===this.$fullScreenButton?this._addFullScreen():this.settings.fullScreen===!1&&null!==this.$fullScreenButton&&this._removeFullScreen(),this.settings.fullScreen===!0&&(this.settings.fadeFullScreen===!0?this.$fullScreenButton.addClass("sp-fade-full-screen"):this.settings.fadeFullScreen===!1&&this.$fullScreenButton.removeClass("sp-fade-full-screen"))},_addFullScreen:function(){this.$fullScreenButton=b('<div class="sp-full-screen-button"></div>').appendTo(this.$slider),this.$fullScreenButton.on("click."+c,b.proxy(this._onFullScreenButtonClick,this)),document.addEventListener("fullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("mozfullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("webkitfullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("MSFullscreenChange",b.proxy(this._onFullScreenChange,this))},_removeFullScreen:function(){null!==this.$fullScreenButton&&(this.$fullScreenButton.off("click."+c),this.$fullScreenButton.remove(),this.$fullScreenButton=null,document.removeEventListener("fullscreenchange",this._onFullScreenChange),document.removeEventListener("mozfullscreenchange",this._onFullScreenChange),document.removeEventListener("webkitfullscreenchange",this._onFullScreenChange),document.removeEventListener("MSFullscreenChange",this._onFullScreenChange))},_onFullScreenButtonClick:function(){this.isFullScreen===!1?this.instance.requestFullScreen?this.instance.requestFullScreen():this.instance.mozRequestFullScreen?this.instance.mozRequestFullScreen():this.instance.webkitRequestFullScreen?this.instance.webkitRequestFullScreen():this.instance.msRequestFullscreen&&this.instance.msRequestFullscreen():document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},_onFullScreenChange:function(){this.isFullScreen=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?!0:!1,this.isFullScreen===!0?(this.sizeBeforeFullScreen={forceSize:this.settings.forceSize,autoHeight:this.settings.autoHeight},this.$slider.addClass("sp-full-screen"),this.settings.forceSize="fullWindow",this.settings.autoHeight=!1):(this.$slider.css("margin",""),this.$slider.removeClass("sp-full-screen"),this.settings.forceSize=this.sizeBeforeFullScreen.forceSize,this.settings.autoHeight=this.sizeBeforeFullScreen.autoHeight),this.resize()},destroyFullScreen:function(){this.off("update."+c),this._removeFullScreen()},fullScreenDefaults:{fullScreen:!1,fadeFullScreen:!0}};b.SliderPro.addModule("FullScreen",d)}(window,jQuery),function(a,b){"use strict";var c="Buttons."+b.SliderPro.namespace,d={$buttons:null,initButtons:function(){this.on("update."+c,b.proxy(this._buttonsOnUpdate,this))},_buttonsOnUpdate:function(){this.$buttons=this.$slider.find(".sp-buttons"),this.settings.buttons===!0&&this.getTotalSlides()>1&&0===this.$buttons.length?this._createButtons():this.settings.buttons===!0&&this.getTotalSlides()!==this.$buttons.find(".sp-button").length&&0!==this.$buttons.length?this._adjustButtons():(this.settings.buttons===!1||this.getTotalSlides()<=1&&0!==this.$buttons.length)&&this._removeButtons()},_createButtons:function(){var a=this;this.$buttons=b('<div class="sp-buttons"></div>').appendTo(this.$slider);for(var d=0;d<this.getTotalSlides();d++)b('<div class="sp-button"></div>').appendTo(this.$buttons);this.$buttons.on("click."+c,".sp-button",function(){a.gotoSlide(b(this).index())}),this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button"),this.on("gotoSlide."+c,function(b){a.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"),a.$buttons.find(".sp-button").eq(b.index).addClass("sp-selected-button")}),this.$slider.addClass("sp-has-buttons")},_adjustButtons:function(){this.$buttons.empty();for(var a=0;a<this.getTotalSlides();a++)b('<div class="sp-button"></div>').appendTo(this.$buttons);this.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"),this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button")},_removeButtons:function(){this.$buttons.off("click."+c,".sp-button"),this.off("gotoSlide."+c),this.$buttons.remove(),this.$slider.removeClass("sp-has-buttons")},destroyButtons:function(){this._removeButtons(),this.off("update."+c)},buttonsDefaults:{buttons:!0}};b.SliderPro.addModule("Buttons",d)}(window,jQuery),function(a,b){"use strict";var c="Arrows."+b.SliderPro.namespace,d={$arrows:null,$previousArrow:null,$nextArrow:null,initArrows:function(){this.on("update."+c,b.proxy(this._arrowsOnUpdate,this)),this.on("gotoSlide."+c,b.proxy(this._checkArrowsVisibility,this))},_arrowsOnUpdate:function(){var a=this;this.settings.arrows===!0&&null===this.$arrows?(this.$arrows=b('<div class="sp-arrows"></div>').appendTo(this.$slidesContainer),this.$previousArrow=b('<div class="sp-arrow sp-previous-arrow"></div>').appendTo(this.$arrows),this.$nextArrow=b('<div class="sp-arrow sp-next-arrow"></div>').appendTo(this.$arrows),this.$previousArrow.on("click."+c,function(){a.previousSlide()}),this.$nextArrow.on("click."+c,function(){a.nextSlide()}),this._checkArrowsVisibility()):this.settings.arrows===!1&&null!==this.$arrows&&this._removeArrows(),this.settings.arrows===!0&&(this.settings.fadeArrows===!0?this.$arrows.addClass("sp-fade-arrows"):this.settings.fadeArrows===!1&&this.$arrows.removeClass("sp-fade-arrows"))},_checkArrowsVisibility:function(){this.settings.arrows!==!1&&this.settings.loop!==!0&&(0===this.selectedSlideIndex?this.$previousArrow.css("display","none"):this.$previousArrow.css("display","block"),this.selectedSlideIndex===this.getTotalSlides()-1?this.$nextArrow.css("display","none"):this.$nextArrow.css("display","block"))},_removeArrows:function(){null!==this.$arrows&&(this.$previousArrow.off("click."+c),this.$nextArrow.off("click."+c),this.$arrows.remove(),this.$arrows=null)},destroyArrows:function(){this._removeArrows(),this.off("update."+c),this.off("gotoSlide."+c)},arrowsDefaults:{arrows:!1,fadeArrows:!0}};b.SliderPro.addModule("Arrows",d)}(window,jQuery),function(a,b){"use strict";var c="ThumbnailTouchSwipe."+b.SliderPro.namespace,d={thumbnailTouchStartPoint:{x:0,y:0},thumbnailTouchEndPoint:{x:0,y:0},thumbnailTouchDistance:{x:0,y:0},thumbnailTouchStartPosition:0,isThumbnailTouchMoving:!1,isThumbnailTouchSwipe:!1,thumbnailTouchSwipeEvents:{startEvent:"",moveEvent:"",endEvent:""},initThumbnailTouchSwipe:function(){this.on("update."+c,b.proxy(this._thumbnailTouchSwipeOnUpdate,this))},_thumbnailTouchSwipeOnUpdate:function(){this.isThumbnailScroller!==!1&&(this.settings.thumbnailTouchSwipe===!0&&this.isThumbnailTouchSwipe===!1&&(this.isThumbnailTouchSwipe=!0,this.thumbnailTouchSwipeEvents.startEvent="touchstart."+c+" mousedown."+c,this.thumbnailTouchSwipeEvents.moveEvent="touchmove."+c+" mousemove."+c,this.thumbnailTouchSwipeEvents.endEvent="touchend."+this.uniqueId+"."+c+" mouseup."+this.uniqueId+"."+c,this.$thumbnails.on(this.thumbnailTouchSwipeEvents.startEvent,b.proxy(this._onThumbnailTouchStart,this)),this.$thumbnails.on("dragstart."+c,function(a){a.preventDefault()}),this.$thumbnails.addClass("sp-grab")),b.each(this.thumbnails,function(a,b){b.off("thumbnailClick")}))},_onThumbnailTouchStart:function(a){if(!(b(a.target).closest(".sp-selectable").length>=1)){var d="undefined"!=typeof a.originalEvent.touches?a.originalEvent.touches[0]:a.originalEvent;"undefined"==typeof a.originalEvent.touches&&a.preventDefault(),b(a.target).parents(".sp-thumbnail-container").find("a").one("click."+c,function(a){a.preventDefault()}),this.thumbnailTouchStartPoint.x=d.pageX||d.clientX,this.thumbnailTouchStartPoint.y=d.pageY||d.clientY,this.thumbnailTouchStartPosition=this.thumbnailsPosition,this.thumbnailTouchDistance.x=this.thumbnailTouchDistance.y=0,this.$thumbnails.hasClass("sp-animated")&&(this.isThumbnailTouchMoving=!0,this._stopThumbnailsMovement(),this.thumbnailTouchStartPosition=this.thumbnailsPosition),this.$thumbnails.on(this.thumbnailTouchSwipeEvents.moveEvent,b.proxy(this._onThumbnailTouchMove,this)),b(document).on(this.thumbnailTouchSwipeEvents.endEvent,b.proxy(this._onThumbnailTouchEnd,this)),this.$thumbnails.removeClass("sp-grab").addClass("sp-grabbing"),this.$thumbnailsContainer.addClass("sp-swiping")}},_onThumbnailTouchMove:function(a){var b="undefined"!=typeof a.originalEvent.touches?a.originalEvent.touches[0]:a.originalEvent;this.isThumbnailTouchMoving=!0,this.thumbnailTouchEndPoint.x=b.pageX||b.clientX,this.thumbnailTouchEndPoint.y=b.pageY||b.clientY,this.thumbnailTouchDistance.x=this.thumbnailTouchEndPoint.x-this.thumbnailTouchStartPoint.x,this.thumbnailTouchDistance.y=this.thumbnailTouchEndPoint.y-this.thumbnailTouchStartPoint.y;var c="horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.x:this.thumbnailTouchDistance.y,d="horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.y:this.thumbnailTouchDistance.x;if(Math.abs(c)>Math.abs(d)){if(a.preventDefault(),this.thumbnailsPosition>=0){var e=-this.thumbnailTouchStartPosition;c=e+.2*(c-e)}else if(this.thumbnailsPosition<=-this.thumbnailsSize+this.thumbnailsContainerSize){var f=this.thumbnailsSize-this.thumbnailsContainerSize+this.thumbnailTouchStartPosition;c=-f+.2*(c+f)}this._moveThumbnailsTo(this.thumbnailTouchStartPosition+c,!0)}},_onThumbnailTouchEnd:function(a){var d=this;"horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.x:this.thumbnailTouchDistance.y;if(this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent),b(document).off(this.thumbnailTouchSwipeEvents.endEvent),this.$thumbnails.removeClass("sp-grabbing").addClass("sp-grab"),this.isThumbnailTouchMoving===!1||this.isThumbnailTouchMoving===!0&&Math.abs(this.thumbnailTouchDistance.x)<10&&Math.abs(this.thumbnailTouchDistance.y)<10){var e=b(a.target).hasClass("sp-thumbnail-container")?b(a.target):b(a.target).parents(".sp-thumbnail-container"),f=e.index();return void(0!==b(a.target).parents("a").length?(b(a.target).parents("a").off("click."+c),this.$thumbnailsContainer.removeClass("sp-swiping")):f!==this.selectedThumbnailIndex&&-1!==f&&this.gotoSlide(f))}this.isThumbnailTouchMoving=!1,b(a.target).parents(".sp-thumbnail").one("click",function(a){a.preventDefault()}),setTimeout(function(){d.$thumbnailsContainer.removeClass("sp-swiping")},1),this.thumbnailsPosition>0?this._moveThumbnailsTo(0):this.thumbnailsPosition<this.thumbnailsContainerSize-this.thumbnailsSize&&this._moveThumbnailsTo(this.thumbnailsContainerSize-this.thumbnailsSize),this.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(this.settings.thumbnailsMoveComplete)&&this.settings.thumbnailsMoveComplete.call(this,{type:"thumbnailsMoveComplete"})},destroyThumbnailTouchSwipe:function(){this.off("update."+c),this.isThumbnailScroller!==!1&&(this.$thumbnails.off(this.thumbnailTouchSwipeEvents.startEvent),this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent),this.$thumbnails.off("dragstart."+c),b(document).off(this.thumbnailTouchSwipeEvents.endEvent),this.$thumbnails.removeClass("sp-grab"))},thumbnailTouchSwipeDefaults:{thumbnailTouchSwipe:!0}};b.SliderPro.addModule("ThumbnailTouchSwipe",d)}(window,jQuery),function(a,b){"use strict";var c="ThumbnailArrows."+b.SliderPro.namespace,d={$thumbnailArrows:null,$previousThumbnailArrow:null,$nextThumbnailArrow:null,initThumbnailArrows:function(){var a=this;this.on("update."+c,b.proxy(this._thumbnailArrowsOnUpdate,this)),this.on("sliderResize."+c+" thumbnailsMoveComplete."+c,function(){a.isThumbnailScroller===!0&&a.settings.thumbnailArrows===!0&&a._checkThumbnailArrowsVisibility()})},_thumbnailArrowsOnUpdate:function(){var a=this;this.isThumbnailScroller!==!1&&(this.settings.thumbnailArrows===!0&&null===this.$thumbnailArrows?(this.$thumbnailArrows=b('<div class="sp-thumbnail-arrows"></div>').appendTo(this.$thumbnailsContainer),this.$previousThumbnailArrow=b('<div class="sp-thumbnail-arrow sp-previous-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows),this.$nextThumbnailArrow=b('<div class="sp-thumbnail-arrow sp-next-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows),this.$previousThumbnailArrow.on("click."+c,function(){var b=Math.min(0,a.thumbnailsPosition+a.thumbnailsContainerSize);a._moveThumbnailsTo(b)}),this.$nextThumbnailArrow.on("click."+c,function(){var b=Math.max(a.thumbnailsContainerSize-a.thumbnailsSize,a.thumbnailsPosition-a.thumbnailsContainerSize);a._moveThumbnailsTo(b)})):this.settings.thumbnailArrows===!1&&null!==this.$thumbnailArrows&&this._removeThumbnailArrows(),this.settings.thumbnailArrows===!0&&(this.settings.fadeThumbnailArrows===!0?this.$thumbnailArrows.addClass("sp-fade-thumbnail-arrows"):this.settings.fadeThumbnailArrows===!1&&this.$thumbnailArrows.removeClass("sp-fade-thumbnail-arrows"),this._checkThumbnailArrowsVisibility()))},_checkThumbnailArrowsVisibility:function(){0===this.thumbnailsPosition?this.$previousThumbnailArrow.css("display","none"):this.$previousThumbnailArrow.css("display","block"),this.thumbnailsPosition===this.thumbnailsContainerSize-this.thumbnailsSize?this.$nextThumbnailArrow.css("display","none"):this.$nextThumbnailArrow.css("display","block")},_removeThumbnailArrows:function(){null!==this.$thumbnailArrows&&(this.$previousThumbnailArrow.off("click."+c),this.$nextThumbnailArrow.off("click."+c),this.$thumbnailArrows.remove(),this.$thumbnailArrows=null)},destroyThumbnailArrows:function(){this._removeThumbnailArrows(),this.off("update."+c),this.off("sliderResize."+c),this.off("thumbnailsMoveComplete."+c)},thumbnailArrowsDefaults:{thumbnailArrows:!1,fadeThumbnailArrows:!0}};b.SliderPro.addModule("ThumbnailArrows",d)}(window,jQuery),function(a,b){"use strict";var c="Video."+b.SliderPro.namespace,d={firstInit:!1,initVideo:function(){this.on("update."+c,b.proxy(this._videoOnUpdate,this)),this.on("gotoSlideComplete."+c,b.proxy(this._videoOnGotoSlideComplete,this))},_videoOnUpdate:function(){var a=this;this.$slider.find(".sp-video").not("a, [data-video-init]").each(function(){var c=b(this);a._initVideo(c)}),this.$slider.find("a.sp-video").not("[data-video-preinit]").each(function(){var c=b(this);a._preinitVideo(c)}),this.firstInit===!1&&(this.firstInit=!0,this._videoOnGotoSlideComplete({index:this.selectedSlideIndex,previousIndex:-1}))},_initVideo:function(a){var d=this;a.attr("data-video-init",!0).videoController(),a.on("videoPlay."+c,function(){"stopAutoplay"===d.settings.playVideoAction&&"undefined"!=typeof d.stopAutoplay&&(d.stopAutoplay(),d.settings.autoplay=!1);var c={type:"videoPlay",video:a};d.trigger(c),b.isFunction(d.settings.videoPlay)&&d.settings.videoPlay.call(d,c)}),a.on("videoPause."+c,function(){"startAutoplay"===d.settings.pauseVideoAction&&"undefined"!=typeof d.startAutoplay&&(d.startAutoplay(),d.settings.autoplay=!0);var c={type:"videoPause",video:a};d.trigger(c),b.isFunction(d.settings.videoPause)&&d.settings.videoPause.call(d,c)}),a.on("videoEnded."+c,function(){"startAutoplay"===d.settings.endVideoAction&&"undefined"!=typeof d.startAutoplay?(d.startAutoplay(),d.settings.autoplay=!0):"nextSlide"===d.settings.endVideoAction?d.nextSlide():"replayVideo"===d.settings.endVideoAction&&a.videoController("replay");var c={type:"videoEnd",video:a};d.trigger(c),b.isFunction(d.settings.videoEnd)&&d.settings.videoEnd.call(d,c)})},_preinitVideo:function(a){var d=this;a.attr("data-video-preinit",!0),a.on("click."+c,function(c){if(!d.$slider.hasClass("sp-swiping")){c.preventDefault();var e,f,g,h,i,j,k,l=a.attr("href"),m=a.children("img").attr("width")||a.children("img").width(),n=a.children("img").attr("height")||a.children("img").height();-1!==l.indexOf("youtube")||-1!==l.indexOf("youtu.be")?f="youtube":-1!==l.indexOf("vimeo")&&(f="vimeo"),g="youtube"===f?/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/:/http:\/\/(www\.)?vimeo.com\/(\d+)/,h=l.match(g),i=h[2],j="youtube"===f?"//www.youtube.com/embed/"+i+"?enablejsapi=1&wmode=opaque":"//player.vimeo.com/video/"+i+"?api=1",k=l.split("?")[1],"undefined"!=typeof k&&(k=k.split("&"),b.each(k,function(a,b){-1===b.indexOf(i)&&(j+="&"+b)})),e=b("<iframe></iframe>").attr({src:j,width:m,height:n,"class":a.attr("class"),frameborder:0,allowfullscreen:"allowfullscreen"}).insertBefore(a),d._initVideo(e),e.videoController("play"),a.css("display","none")}})},_videoOnGotoSlideComplete:function(a){var b=this.$slides.find(".sp-slide").eq(a.previousIndex).find(".sp-video[data-video-init]");if(-1!==a.previousIndex&&0!==b.length&&("stopVideo"===this.settings.leaveVideoAction?b.videoController("stop"):"pauseVideo"===this.settings.leaveVideoAction?b.videoController("pause"):"removeVideo"===this.settings.leaveVideoAction&&(0!==b.siblings("a.sp-video").length?(b.siblings("a.sp-video").css("display",""),b.videoController("destroy"),b.remove()):b.videoController("stop"))),"playVideo"===this.settings.reachVideoAction){var d=this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-init]"),e=this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-preinit]");0!==d.length?d.videoController("play"):0!==e.length&&e.trigger("click."+c)}},destroyVideo:function(){this.$slider.find(".sp-video[ data-video-preinit ]").each(function(){var a=b(this);a.removeAttr("data-video-preinit"),a.off("click."+c)}),this.$slider.find(".sp-video[ data-video-init ]").each(function(){var a=b(this);a.removeAttr("data-video-init"),a.off("Video"),a.videoController("destroy")}),this.off("update."+c),this.off("gotoSlideComplete."+c)},videoDefaults:{reachVideoAction:"none",leaveVideoAction:"pauseVideo",playVideoAction:"stopAutoplay",pauseVideoAction:"none",endVideoAction:"none",videoPlay:function(){},videoPause:function(){},videoEnd:function(){}}};b.SliderPro.addModule("Video",d)}(window,jQuery),function(a){"use strict";var b=window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1,c=function(b,c){this.$video=a(b),this.options=c,this.settings={},this.player=null,this._init()};c.prototype={_init:function(){this.settings=a.extend({},this.defaults,this.options);var b=this,c=a.VideoController.players,d=this.$video.attr("id");for(var e in c)if("undefined"!=typeof c[e]&&c[e].isType(this.$video)){this.player=new c[e](this.$video);break}if(null!==this.player){var f=["ready","start","play","pause","ended"];a.each(f,function(c,e){var f="video"+e.charAt(0).toUpperCase()+e.slice(1);b.player.on(e,function(){b.trigger({type:f,video:d}),a.isFunction(b.settings[f])&&b.settings[f].call(b,{type:f,video:d})})})}},play:function(){b===!0&&this.player.isStarted()===!1||"playing"===this.player.getState()||this.player.play()},stop:function(){b===!0&&this.player.isStarted()===!1||"stopped"===this.player.getState()||this.player.stop()},pause:function(){b===!0&&this.player.isStarted()===!1||"paused"===this.player.getState()||this.player.pause()},replay:function(){(b!==!0||this.player.isStarted()!==!1)&&this.player.replay()},on:function(a,b){return this.$video.on(a,b)},off:function(a){return this.$video.off(a)},trigger:function(a){return this.$video.triggerHandler(a)},destroy:function(){this.player.isStarted()===!0&&this.stop(),this.player.off("ready"),this.player.off("start"),this.player.off("play"),this.player.off("pause"),this.player.off("ended"),this.$video.removeData("videoController")},defaults:{videoReady:function(){},videoStart:function(){},videoPlay:function(){},videoPause:function(){},videoEnded:function(){}}},a.VideoController={players:{},addPlayer:function(a,b){this.players[a]=b}},a.fn.videoController=function(b){var d=Array.prototype.slice.call(arguments,1);return this.each(function(){if("undefined"==typeof a(this).data("videoController")){var e=new c(this,b);a(this).data("videoController",e)}else if("undefined"!=typeof b){var f=a(this).data("videoController");"function"==typeof f[b]?f[b].apply(f,d):a.error(b+" does not exist in videoController.")}})};var d=function(b){this.$video=b,this.player=null,this.ready=!1,this.started=!1,this.state="",this.events=a({}),this._init()};d.prototype={_init:function(){},play:function(){},pause:function(){},stop:function(){},replay:function(){},isType:function(){},isReady:function(){return this.ready},isStarted:function(){return this.started},getState:function(){return this.state},on:function(a,b){return this.events.on(a,b)},off:function(a){return this.events.off(a)},trigger:function(a){return this.events.triggerHandler(a)}};var e={youtubeAPIAdded:!1,youtubeVideos:[]},f=function(b){this.init=!1;var c=window.YT&&window.YT.Player;if("undefined"!=typeof c)d.call(this,b);else if(e.youtubeVideos.push({video:b,scope:this}),e.youtubeAPIAdded===!1){e.youtubeAPIAdded=!0;var f=document.createElement("script");f.src="//www.youtube.com/player_api";var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(f,g),window.onYouTubePlayerAPIReady=function(){a.each(e.youtubeVideos,function(a,b){d.call(b.scope,b.video)})}}};f.prototype=new d,f.prototype.constructor=f,a.VideoController.addPlayer("YoutubeVideo",f),f.isType=function(a){if(a.is("iframe")){var b=a.attr("src");if(-1!==b.indexOf("youtube.com")||-1!==b.indexOf("youtu.be"))return!0}return!1},f.prototype._init=function(){this.init=!0,this._setup()},f.prototype._setup=function(){var a=this;this.player=new YT.Player(this.$video[0],{events:{onReady:function(){a.trigger({type:"ready"}),a.ready=!0},onStateChange:function(b){switch(b.data){case YT.PlayerState.PLAYING:a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"});break;case YT.PlayerState.PAUSED:a.state="paused",a.trigger({type:"pause"});break;case YT.PlayerState.ENDED:a.state="ended",a.trigger({type:"ended"})}}}})},f.prototype.play=function(){var a=this;if(this.ready===!0)this.player.playVideo();else var b=setInterval(function(){a.ready===!0&&(clearInterval(b),a.player.playVideo())},100)},f.prototype.pause=function(){b===!0?this.stop():this.player.pauseVideo()},f.prototype.stop=function(){this.player.seekTo(1),this.player.stopVideo(),this.state="stopped"},f.prototype.replay=function(){this.player.seekTo(1),this.player.playVideo()},f.prototype.on=function(a,b){var c=this;if(this.init===!0)d.prototype.on.call(this,a,b);else var e=setInterval(function(){c.init===!0&&(clearInterval(e),d.prototype.on.call(c,a,b))},100)};var g={vimeoAPIAdded:!1,vimeoVideos:[]},h=function(b){if(this.init=!1,"undefined"!=typeof window.Froogaloop)d.call(this,b);else if(g.vimeoVideos.push({video:b,scope:this}),g.vimeoAPIAdded===!1){g.vimeoAPIAdded=!0;var c=document.createElement("script");c.src="//a.vimeocdn.com/js/froogaloop2.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(c,e);var f=setInterval(function(){"undefined"!=typeof window.Froogaloop&&(clearInterval(f),a.each(g.vimeoVideos,function(a,b){d.call(b.scope,b.video)}))},100)}};h.prototype=new d,h.prototype.constructor=h,a.VideoController.addPlayer("VimeoVideo",h),h.isType=function(a){if(a.is("iframe")){var b=a.attr("src");if(-1!==b.indexOf("vimeo.com"))return!0}return!1},h.prototype._init=function(){this.init=!0,this._setup()},h.prototype._setup=function(){var a=this;this.player=$f(this.$video[0]),this.player.addEvent("ready",function(){a.ready=!0,a.trigger({type:"ready"}),a.player.addEvent("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.addEvent("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.addEvent("finish",function(){a.state="ended",a.trigger({type:"ended"})})})},h.prototype.play=function(){var a=this;if(this.ready===!0)this.player.api("play");else var b=setInterval(function(){a.ready===!0&&(clearInterval(b),a.player.api("play"))},100)},h.prototype.pause=function(){this.player.api("pause")},h.prototype.stop=function(){this.player.api("seekTo",0),this.player.api("pause"),this.state="stopped"},h.prototype.replay=function(){this.player.api("seekTo",0),this.player.api("play")},h.prototype.on=function(a,b){var c=this;if(this.init===!0)d.prototype.on.call(this,a,b);else var e=setInterval(function(){c.init===!0&&(clearInterval(e),d.prototype.on.call(c,a,b))},100)};var i=function(a){d.call(this,a)};i.prototype=new d,i.prototype.constructor=i,a.VideoController.addPlayer("HTML5Video",i),i.isType=function(a){return a.is("video")&&a.hasClass("video-js")===!1&&a.hasClass("sublime")===!1?!0:!1},i.prototype._init=function(){var a=this;this.player=this.$video[0];var b=setInterval(function(){4===a.player.readyState&&(clearInterval(b),a.ready=!0,a.trigger({type:"ready"}),a.player.addEventListener("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.addEventListener("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.addEventListener("ended",function(){a.state="ended",a.trigger({type:"ended"})}))},100)},i.prototype.play=function(){var a=this;if(this.ready===!0)this.player.play();else var b=setInterval(function(){a.ready===!0&&(clearInterval(b),a.player.play())},100)},i.prototype.pause=function(){this.player.pause()},i.prototype.stop=function(){this.player.currentTime=0,this.player.pause(),this.state="stopped"},i.prototype.replay=function(){this.player.currentTime=0,this.player.play()};var j=function(a){d.call(this,a)};j.prototype=new d,j.prototype.constructor=j,a.VideoController.addPlayer("VideoJSVideo",j),j.isType=function(a){return"undefined"==typeof a.attr("data-videojs-id")&&!a.hasClass("video-js")||"undefined"==typeof videojs?!1:!0},j.prototype._init=function(){var a=this,b=this.$video.hasClass("video-js")?this.$video.attr("id"):this.$video.attr("data-videojs-id");this.player=videojs(b),this.player.ready(function(){a.ready=!0,a.trigger({type:"ready"}),a.player.on("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.on("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.on("ended",function(){a.state="ended",a.trigger({type:"ended"})})})},j.prototype.play=function(){this.player.play()},j.prototype.pause=function(){this.player.pause()},j.prototype.stop=function(){this.player.currentTime(0),this.player.pause(),this.state="stopped"},j.prototype.replay=function(){this.player.currentTime(0),this.player.play()};var k=function(a){d.call(this,a)};k.prototype=new d,k.prototype.constructor=k,a.VideoController.addPlayer("SublimeVideo",k),k.isType=function(a){return a.hasClass("sublime")&&"undefined"!=typeof sublime?!0:!1},k.prototype._init=function(){var a=this;sublime.ready(function(){a.player=sublime.player(a.$video.attr("id")),a.ready=!0,a.trigger({type:"ready"}),a.player.on("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.on("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.on("stop",function(){a.state="stopped",a.trigger({type:"stop"})}),a.player.on("end",function(){a.state="ended",a.trigger({type:"ended"})})})},k.prototype.play=function(){this.player.play()},k.prototype.pause=function(){this.player.pause()},k.prototype.stop=function(){this.player.stop()},k.prototype.replay=function(){this.player.stop(),this.player.play()};var l=function(a){d.call(this,a)};l.prototype=new d,l.prototype.constructor=l,a.VideoController.addPlayer("JWPlayerVideo",l),l.isType=function(a){return"undefined"==typeof a.attr("data-jwplayer-id")&&!a.hasClass("jwplayer")&&0===a.find("object[data*='jwplayer']").length||"undefined"==typeof jwplayer?!1:!0},l.prototype._init=function(){var a,b=this;this.$video.hasClass("jwplayer")?a=this.$video.attr("id"):"undefined"!=typeof this.$video.attr("data-jwplayer-id")?a=this.$video.attr("data-jwplayer-id"):0!==this.$video.find("object[data*='jwplayer']").length&&(a=this.$video.find("object").attr("id")),this.player=jwplayer(a),this.player.onReady(function(){b.ready=!0,b.trigger({type:"ready"}),b.player.onPlay(function(){b.started===!1&&(b.started=!0,b.trigger({type:"start"})),b.state="playing",b.trigger({type:"play"})}),b.player.onPause(function(){b.state="paused",b.trigger({type:"pause"})}),b.player.onComplete(function(){b.state="ended",b.trigger({type:"ended"})})})},l.prototype.play=function(){this.player.play(!0)},l.prototype.pause=function(){this.player.pause(!0)},l.prototype.stop=function(){this.player.stop(),this.state="stopped"},l.prototype.replay=function(){this.player.seek(0),this.player.play(!0)}}(jQuery);


