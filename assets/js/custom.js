(function ($) {

	"use strict";

	$('.owl-men-item').owlCarousel({
		lazyLoad:true,
		items: 10,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.owl-women-item').owlCarousel({
		lazyLoad:true,
		items: 10,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.owl-kid-item').owlCarousel({
		items: 10,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$(window).scroll(function () {
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
			name: '無碼',
			localtion: '最新的無碼照片，都會顯示在這裡',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/Ia0XceQ.jpg",
		},
		{
			name: '高清',
			localtion: '熱門觀看的高清照片，都會在這裡',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/KsvLEz7.jpg",
		},
		{
			name: '露毛',
			localtion: '最新的露毛 照片，都會顯示在這裡',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/Ma5Ha1m.jpg",
		},
		{
			name: '偷拍',
			localtion: '無碼 露毛 高清 照片',
			context: 'hello',
			url: "#",
			image: "https://i.imgur.com/Rucgenx.jpg"
		}

	]
	let menInfos = []
	let womenInfos = []
	let kidInfos = []

	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
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

	$(document).ready(function () {
		// $(document).on("scroll", onScroll);
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
																							<img src='${v.image}'>
																					</div>
																				</div>
																			</div>`
			row.prepend(contenet)
		})

		appendElemmtOnDom('Bf9Co8J','group_woman','.owl-women-item', 'owl-women')
		appendElemmtOnDom('24xI7sL','group_men','.owl-men-item', 'men-item')
		// appendElemmtOnDom('24xI7sL','group_kid','.owl-kid-item')

	})

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}
		$("#preloader").css("visibility", "hidden")
		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}
	const ACCESSTOKEN = 'bd0cb9b01c3f3cae3322ccce3e4a47d9bea4029b'

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
	function appendElemmtOnDom(id, groupId, refreshId, pId) {

		const settingsList = {
			"async": true,
			"crossDomain": true,
			"url": `https://api.imgur.com/3/album/${id}/images`,
			"method": "GET",
			"headers": {
				"Authorization": 'Bearer ' + ACCESSTOKEN
			}
		}
		$.ajax(settingsList).done(
			function (res) {
				const infos = res.data.reverse()
				$.each(infos, (i, v) => {
					const title = v.title ?? ''
					const description = v.description ?? ''
					let contenet = `<div class="item">
																<div class="thumb">
																	<div class="hover-content">
																		<ul>
																			<li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
																		</ul>
																	</div>
																	<a href='${v.link}' data-lightbox="${groupId}"><img style="border-radius: 260px" src='https://i.imgur.com/${v.id}m.jpg'></a>
																	
																</div>
																<div class="down-content" >
																	<h4>${title}</h4>
																	<span>${description}</span>
																	<ul class="stars">
																		<li><i class="fa fa-eye">${v.views}</i></li>
																	</ul>
																</div>
															</div>`
					$(refreshId).trigger('add.owl.carousel', contenet)
					$(refreshId).trigger('refresh.owl.carousel');
				})
			})
		// $(pId).trigger('refresh.owl.carousel');
	}

})(window.jQuery);