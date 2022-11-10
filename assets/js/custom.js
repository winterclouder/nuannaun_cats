(function ($) {
	
	"use strict";

	$('.owl-men-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	})

	$('.owl-women-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })

	$('.owl-kid-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('#top').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	
	let leftFirstImages = [
		"https://i.imgur.com/e2g6VFi.jpg"
	]
	let rightFirstInfos = [
		{
			name: '大胖',
			localtion: '碇內吊橋',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/Ia0XceQ.jpg",
		},
		{
			name: '大胖',
			localtion: '碇內吊橋',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/PtXWv3C.jpg",
		},
		{
			name: '大胖',
			localtion: '碇內吊橋',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/i0wYyJT.jpg",
		},
		{
			name: '大胖',
			localtion: '碇內吊橋',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/y0sfdvF.jpg"
		}

	]
	let menInfos = []

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(  function  () {
	    // $(document).on("scroll", onScroll);
			const album = '24xI7sL'
			const settingsList = {
				"async": true,
				"crossDomain": true,
				"url": 	`https://api.imgur.com/3/album/${album}/images`,
				"method": "GET",
				"headers": {
					"Authorization": 'Bearer ' + ACCESSTOKEN
				}
			}
			$.ajax(settingsList).done(
				function(res)  { 
					menInfos = res.data
					console.log(menInfos, 'data')
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });

			      // Right up images 
				const row = $('#right-content').children('.row')
				$.each(rightFirstInfos, (i, v) => {
					const contenet = `<div class="col-lg-6">
																			<div class="right-first-image">
																			<div class="thumb">
																					<div class="inner-content">
																							<h4>${v.name}</h4>
																							<span>${v.localtion}</span>
																					</div>
																					<div class="hover-content">
																							<div class="inner">
																									<h4>${v.name}</h4>
																									<p>${v.name}
																									</p>
																									98989
																									<div class="main-border-button">
																											<a href="${v.url}">Discover More</a>
																									</div>
																							</div>
																					</div>
																					<img src ='${v.image}'>
																			</div>
																		</div>
																	</div>`
					row.prepend(contenet)
				})
	
						let arr = []
						$.each(menInfos, (i, v) => {
							console.log(v, '1')
							let contenet = `<div class="item">
																<div class="thumb">
																	<div class="hover-content">
																		<ul>
																			<li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
																		</ul>
																	</div>
																	<img src='${v.link}'>
																</div>
																<div class="down-content">
																	<h4>Classic Spring</h4>
																	<span>$110.00</span>
																	<ul class="stars">
																		<li><i class="fa fa-star"></i></li>
																		<li><i class="fa fa-star"></i></li>
																		<li><i class="fa fa-star"></i></li>
																		<li><i class="fa fa-star"></i></li>
																		<li><i class="fa fa-star"></i></li>
																	</ul>
																</div>
															</div>`
								$('.owl-men-item').trigger('add.owl.carousel', contenet)
								$('.owl-women-item').trigger('add.owl.carousel', contenet)
								$('.owl-kid-item').trigger('add.owl.carousel', contenet)
						})
			
						$('.owl-men-item').trigger('refresh.owl.carousel');
						$('.owl-women-item').trigger('refresh.owl.carousel');
						$('.owl-kid-item').trigger('refresh.owl.carousel');
	});
	})

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}
		$("#preloader").css("visibility", "hidden")
		// $("#preloader").animate({
		// 	'opacity': '0'
		// }, 600, function(){
		// 	setTimeout(function(){
		// 		$("#preloader").css("visibility", "hidden").fadeOut();
		// 	}, 300);
		// });
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}
	const ACCESSTOKEN = 'bd0cb9b01c3f3cae3322ccce3e4a47d9bea4029b'
	const REFRESHTOKEN = '7237de6b05ba4da652b1c740a690e3d96724986f'
	const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzNjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9hZ2VudC1qaW5mbS10ZXN0LWFiZ3FydCIsImF1ZCI6ImFnZW50LWppbmZtLXRlc3QtYWJncXJ0IiwiYXV0aF90aW1lIjoxNjY1NjU0ODkzLCJ1c2VyX2lkIjoidEdCTlA1aGk1SFNlU3Voc3VxYWFnRFNPb1J2MiIsInN1YiI6InRHQk5QNWhpNUhTZVN1aHN1cWFhZ0RTT29SdjIiLCJpYXQiOjE2NjYzMzYwNTQsImV4cCI6MTY2NjMzOTY1NCwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.Y-s4nyqFHXMzpFgAvKCUwmhwibN-YesHYz2gKM49Iqsx9uFEl91lu-43vioKhsidBQScsn754AS3WLDsefXe19Te1o06A8ReqtXwEXtw_RGHJ2eTlSMcWuJ86G5aJDdZJSWCvqvMp61qqDcP1teQZ6OQYy-sXaTo59wOFndfrYe91JjJOF3xPNaJ-3P4FIXfojLCHwYf1EG7AZrkiS3PKs6HmFBLBz1nZbi3jmgZkERbdvGBhZoDambY1dXEaKMpVxq8FGHChSq4TsD5UsTDCld9Z7gSgdfZz9EaO7YRqigBZtnpr87rMU77ICNLtl56KkZk4IHxalhDjF5ZrAulhg'
	function getImage() {

	}

	// function submit() {
	// 	let settings = {
	// 		async: true,
	// 		crossDomain: true,
	// 		processData: false,
	// 		contentType: false,
	// 		type: 'POST',
	// 		url: 'https://api.imgur.com/3/image',
	// 		headers: {
	// 			Authorization: 'Bearer ' +  ACCESSTOKEN
	// 		},
	// 		mimeType: 'multipart/form-data'
	// 	};

	// 	let form = new FormData();
	// 	form.append('image', this.file);
	// 	form.append('title', this.title);
	// 	form.append('description', this.des);
	// 	form.append('album', album); // 有要指定的相簿就加這行

	// 	settings.data = form;

	// 	$.ajax(settings).done(function(res) {
	// 		console.log(res); // 可以看見上傳成功後回的值
	// 		alert('上傳完成，稍待一會兒就可以在底部的列表上看見了。')
	// 	});
	// }


})(window.jQuery);