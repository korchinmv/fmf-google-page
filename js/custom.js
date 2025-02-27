$(document).ready(function () {
	const customSelect = document.querySelector(".custom-select");
	const selectTrigger = customSelect.querySelector(".select-trigger");
	const selectTriggerText = selectTrigger.querySelector(
		".select-trigger__text"
	);
	const selectOptions = customSelect.querySelector(".select-options");
	const contentBlocks = document.querySelectorAll(".content-container__item");

	// Обработчик события клика по триггеру селекта
	selectTrigger.addEventListener("click", function (e) {
		e.stopPropagation();
		customSelect.classList.toggle("open");
	});

	// Обработчик события клика по опциям селекта
	selectOptions.addEventListener("click", (e) => {
		const target = e.target;
		const selectedValue = target.getAttribute("data-value");
		selectTriggerText.textContent = target.textContent;

		// Показываем выбранный блок контента
		const selectedBlock = document.getElementById(selectedValue);

		if (selectedBlock) {
			contentBlocks.forEach((block) => {
				if (block !== selectedBlock) {
					block.classList.remove("content-container__item--active");
				}
				selectedBlock.classList.add("content-container__item--active");
			});
		}

		customSelect.classList.remove("open");
	});

	// Закрытие селекта при клике вне его области
	document.addEventListener("click", function (e) {
		if (!customSelect.contains(e.target)) {
			customSelect.classList.remove("open");
		}
	});

	const reviews_swiper = new Swiper(".reviews-swiper", {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 1.1,
		autoHeight: true,
		speed: 600,
		navigation: {
			nextEl: ".swiper-button-next2",
			prevEl: ".swiper-button-prev2",
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 1.3,
				autoHeight: false,
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 1,
				centeredSlides: true,
			},
		},
		on: {
			init: function () {
				$(window)
					.resize(function () {
						$(".reviews-swiper .reviews-item").height("");
						$(".reviews-swiper .reviews-item .item-descr").addClass("hide");

						if ($(window).width() <= 640) {
							let height = 0;

							$(".reviews-swiper .reviews-item").each(function () {
								if (height > $(this).height()) {
									height = $(this).height();
								}
							});

							if (height) {
								$(".reviews-swiper .reviews-item").height(height);
								$(".reviews-swiper .reviews-item").attr("data-height", height);
							}
						}
					})
					.trigger("resize");
			},
		},
	});

	const sliderThumbs = new Swiper(".slider-thumbs-block__swiper-thumbs", {
		slidesPerView: "auto",
		slideToClickedSlide: true,
		direction: "vertical",
		freeMode: {
			enabled: true,
		},
		history: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	const sliderSwiper = new Swiper(".slider-thumbs-block__descr-swiper", {
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 6000,
		},
		thumbs: {
			swiper: sliderThumbs,
		},
	});

	const sliderButtons = document.querySelectorAll(
		".slider-thumbs-block__accordeon-item"
	);

	// остановка слайдера (гл. стр.) по клику на кнопку аккордеона
	if (sliderButtons) {
		sliderButtons.forEach((sliderBtn) => {
			sliderBtn.addEventListener("click", () => {
				sliderSwiper.autoplay.stop();
			});
		});
	}

	const team_swiper = new Swiper(".team-slider-block__slider", {
		spaceBetween: 16,
		slidesPerView: 1.2,
		speed: 600,
		navigation: {
			prevEl: ".slider-button-prev",
			nextEl: ".slider-button-next",
		},
		pagination: {
			el: ".team-slider-block__progressbar",
			type: "progressbar",
		},
		breakpoints: {
			576: {
				spaceBetween: 16,
				slidesPerView: 2,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			1440: {
				spaceBetween: 40,
				slidesPerView: 4,
			},
		},
	});

	$(".js-burger-mob").click(function (e) {
		$("body").toggleClass("overlay");
		$(".header-nav-mobile").toggleClass("is-active");
		$(".burger-icon-menu").toggleClass("is-active");
		$(".top-menu").toggleClass("light-theme");
	});

	let width = $(".line-status").css("width");
	$(".form-field-age input").click(function (e) {
		let value = $(this).val();
		let width = $(".line-status").css("width");
		const parent = $(this).parents(".form-field-age");

		if (value == "<1") {
			$(".line-status").css("width", "0");
			parent.find("input").removeClass("checked-input");
		} else if (value == "2-4") {
			$(".line-status").css("width", "23%");
			parent.find("input").removeClass("checked-input");
		} else if (value == "5-7") {
			$(".line-status").css("width", "47%");
			parent.find("input").removeClass("checked-input");
			$(this).parent().prevUntil().children("input").addClass("checked-input");
		} else if (value == "8-10") {
			$(".line-status").css("width", "70%");
			parent.find("input").removeClass("checked-input");
			$(this).parent().prevUntil().children("input").addClass("checked-input");
		} else if (value == ">10") {
			$(".line-status").css("width", "100%");
			parent.find("input").removeClass("checked-input");
			$(this).parent().prevUntil().children("input").addClass("checked-input");
		}
		$(this).parent().toggleClass("label-checked");
	});

	/*$('.index-flex-portfolio').slick({
	infinite: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 0,
	speed: 1600,
	slidesToShow: 9,
	slidesToScroll: 1,
	swipeToSlide: true,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
});*/

	const index_flex_portfolio = $("#index-flex-portfolio").owlCarousel({
		/*loop: true,
	autoplay: true,
	smartSpeed: 9000,
	autoplayTimeout: 1000,
	slideTransition: 'linear',
	slideBy : 1,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 3
		},
		640: {
			items: 6
		},
		1024: {
			items: 7
		},
		1440: {
			items: 9
		}
	}*/
		slideSpeed: 2000,
		nav: false,
		autoplay: true,
		dots: false,
		loop: true,
		smartSpeed: 2000,
		slideTransition: "linear",
		autoplayTimeout: 2000,
		//responsiveRefreshRate: 200,
		responsive: {
			0: {
				items: 3,
				smartSpeed: 2000,
				slideTransition: "linear",
				autoplayTimeout: 2000,
			},
			640: {
				items: 6,
				smartSpeed: 2000,
				slideTransition: "linear",
				autoplayTimeout: 2000,
			},
			1024: {
				items: 7,
				smartSpeed: 2000,
				slideTransition: "linear",
				autoplayTimeout: 2000,
			},
			1440: {
				items: 9,
			},
		},
	});

	$(".top-menu .root-item").click(function (e) {
		$("body").toggleClass("overlay");
		$(".top-sub-menu").toggleClass("is-open");
		$(this).toggleClass("is-open");
		$(".top-menu").toggleClass("light-theme");
	});

	$(document).on("mouseenter", ".sub-menu-item .item-title", function () {
		$(this).find(".img").addClass("open");
	});
	$(document).on("mouseleave", ".sub-menu-item .item-title", function () {
		$(this).find(".img").removeClass("open");
	});

	//$(".phone_mask").inputmask("+7 (999) 999-99-99");

	/*var maskList = $.masksSort($.masksLoad("phone-codes.json"), ['#'], /[0-9]|#/, "mask");
var maskOpts = {
	inputmask: {
		definitions: {
			'#': {
				validator: "[0-9]",
				cardinality: 1
			}
		},
		//clearIncomplete: true,
		showMaskOnHover: false,
		autoUnmask: true
	},
	match: /[0-9]/,
	replace: '#',
	list: maskList,
	listKey: "mask",
	onMaskChange: function(maskObj, completed) {
		$(this).attr("placeholder", $(this).inputmask("getemptymask"));
	}
};
$(".phone_mask").inputmasks(maskOpts);*/

	try {
		$(".phone_mask").intlTelInput({
			utilsScript: "/fmf-test/js/intl-tel-input/utils.js",
			defaultCountry: "auto",
			autoPlaceholder: "aggressive",
			separateDialCode: true,
			autoInsertDialCode: true,
			preferredCountries: ["th"],
		});
	} catch (e) {
		console.log(e);
	}

	$(".phone_mask").focus(function () {
		if (!$(this).hasClass("phone-inited")) {
			const mask1 = $(this).attr("placeholder").replace(/[0-9]/g, 9);
			if (/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(mask1)) {
				return;
			}
			$(this).inputmask(mask1);
			$(this).addClass("phone-inited");
		}
	});

	$(".phone_mask").on("countrychange", function (e, countryData) {
		$(".phone_mask").val("");
		var mask1 = $(".phone_mask").attr("placeholder").replace(/[0-9]/g, 9);
		$(".phone_mask").inputmask(mask1);
	});

	$(document).on("mouseenter", ".portfolio-big-item", function () {
		$(this).find(".portfolio-item-hover").addClass("show");
		$(this).find(".portfolio-item-img").addClass("hover");
	});
	$(document).on("mouseleave", ".portfolio-big-item", function () {
		$(this).find(".portfolio-item-hover").removeClass("show");
		$(this).find(".portfolio-item-img").removeClass("hover");
	});

	$(document).on("mouseenter", ".portfolio-item", function () {
		$(this).find(".portfolio-item-hover").addClass("show");
		$(this).find(".portfolio-item-img").addClass("hover");
	});
	$(document).on("mouseleave", ".portfolio-item", function () {
		$(this).find(".portfolio-item-hover").removeClass("show");
		$(this).find(".portfolio-item-img").removeClass("hover");
	});

	$(".feedback-block .check-agree").click(function (e) {
		$(this).parents(".form-info").toggleClass("check");
		if ($(this).is(":checked")) {
			$(this).attr("checked", true);
		} else {
			$(this).attr("checked", false);
		}
	});

	$(".item-text-toggle").click(function () {
		$(this).siblings(".item-descr").toggleClass("hide");
		const parent = $(this).parents(".reviews-item");

		if ($(this).siblings(".item-descr").hasClass("hide")) {
			$(this).html("Uncover");

			if (parent.data("height") !== undefined) {
				parent.height(parent.data("height"));
			}
		} else {
			$(this).html("Minimize");
			parent.height("");
		}
		return false;
	});

	$(".js-btn--modal-policy").click(function (event) {
		$("#modal-policy").modal({
			fadeDuration: 250,
		});
		return false;
	});

	$(".select-list").click(function (e) {
		$(this).find(".select-items").toggleClass("is-open");
		$(this).find(".item-arrow span").toggleClass("arrow-down");
		$(this).find(".item-arrow span").toggleClass("arrow-up");
	});
	$(".select-item").click(function (e) {
		const parent = $(this).parents(".select-items");
		parent.find(".select-item").removeClass("selected");
		$(this).toggleClass("selected");
		parent
			.siblings(".select-item-selected")
			.find("input")
			.val($(this).find("input").val());
	});

	$(document).on("mouseenter", ".switch-lang", function () {
		$(this).find(".lang-wrapper").addClass("hover");
	});
	$(document).on("mouseleave", ".switch-lang", function () {
		$(this).find(".lang-wrapper").removeClass("hover");
	});

	$(".accordion__title").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$(".accordion__arrow").removeClass("accordion__rotate");
		}
		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$(".accordion__arrow", this).toggleClass("accordion__rotate");
	});

	/*let cards = gsap.utils.toArray(".our-works-big-item");
let stickDistance = 0;
let firstCardST = ScrollTrigger.create({
	trigger: cards[0],
	start: "center center"
});
let lastCardST = ScrollTrigger.create({
	trigger: cards[cards.length-1],
	start: "center center"
});
cards.forEach((card, index) => {
	//var scale = 1 - (cards.length - index) * 0.025;
	//let scaleDown = gsap.to(card, {scale: scale});
	ScrollTrigger.create({
		trigger: card,
		start: "top top",
		end: () => lastCardST.start + stickDistance,
		pin: true,
		markers: false,
		pinSpacing: false,
		ease: "none",
		//animation: scaleDown,
		//toggleActions: "restart none none reverse"
	});
});*/
	/*let cards = gsap.utils.toArray(".our-works-big-item");
let stickDistance = -250;
let firstCardST = ScrollTrigger.create({
	trigger: cards[0],
	start: "center center"
});
let lastCardST = ScrollTrigger.create({
	trigger: cards[cards.length-1],
	start: "center center"
});
cards.forEach((card, index) => {
	//var scale = 1 - (cards.length - index) * 0.025;
	//let scaleDown = gsap.to(card, {scale: scale});
	ScrollTrigger.create({
		trigger: card,
		//start: "top top",
		//start: "center center",
		start: "top-=" + 80 * index + " 10%",
		end: () => lastCardST.start + stickDistance,
		//end: `top 20%`,
		//end: "top 20%",
		//start: () => 'top bottom-=100',
// end: () => 'top top+=40',
		pin: true,
		markers: false,
		pinSpacing: false,
		scrub: true,
		//ease: "none",
		//animation: scaleDown,
		//toggleActions: "restart none none reverse"
	});
});*/

	/*if (location.pathname == '/fmf-test/seo.html') {
	let cards = gsap.utils.toArray(".our-works-big-item");
	let stickDistance = -150;
	let firstCardST = ScrollTrigger.create({
		trigger: cards[0],
		start: "top top"
	});
	let lastCardST = ScrollTrigger.create({
		trigger: cards[cards.length-1],
		start: "center center"
	});
	cards.forEach((card, index) => {
		//var scale = 1 - (cards.length - index) * 0.025;
		//let scaleDown = gsap.to(card, {scale: scale});
		ScrollTrigger.create({
			trigger: card,
			//start: "top top",
			//start: "center center",
			start: "top-=" + 78 * index + " 10%",
			end: () => lastCardST.start + stickDistance,
			//end: `top 20%`,
			//end: "top 20%",
			//start: () => 'top bottom-=100',
 			// end: () => 'top top+=40',
			pin: true,
			markers: false,
			pinSpacing: false,
			scrub: true,
			//ease: "none",
			//animation: scaleDown,
			//toggleActions: "restart none none reverse"
		});
	});
}*/

	let check = false;
	var st = 0;

	$(window).scroll(function () {
		if (location.pathname == "/seo/") {
			console.log($(this).scrollTop());
			console.log($(".our-works-block").offset().top);
			//if (($('body')[0].scrollTop + $('.types-block').offset().top) >= $(window).height()) {
			if ($(this).scrollTop() >= $(".our-works-block").offset().top) {
				st =
					(($(this).scrollTop() - $(".types-block").offset().top) /
						$(window).height()) *
					20;
				$(".title-first").css({
					transform: "translateX(" + -st + "%)",
					"-webkit-transform": "translateX(" + -st + "%)",
				});
				$(".title-second").css({
					transform: "translateX(" + st + "%)",
					"-webkit-transform": "translateX(" + st + "%)",
				});
			}
		}
		if (location.pathname == "/context-ad/") {
			if (
				$(this).scrollTop() + $(".steps-block").offset().top >=
					$(window).height() &&
				$(this).scrollTop() + $(".steps-item-4").outerHeight(true) <=
					$(".timeline-4").offset().top
			) {
				st = $(this).scrollTop() - $(".steps-block").offset().top;
				$(".timeline-status").css({
					height: st + "px",
				});
			}

			//console.log($('.timeline-1').offset().top);
			//console.log($('.timeline-2').offset().top);
			//console.log($('.timeline-3').offset().top);
			//console.log($('.timeline-4').offset().top);
			//console.log($('.steps-block').offset().top);
			//console.log($('body')[0].scrollTop);
			//console.log($('body')[0].scrollTop + ($('.timeline-1').offset().top - $('.steps-block').offset().top));
			//console.log($('body')[0].scrollTop + ($('.timeline-2').offset().top - $('.steps-block').offset().top));
			/*if (($('body')[0].scrollTop + ($('.timeline-1').offset().top - $('.steps-block').offset().top)) >= $('.timeline-1').offset().top) {//console.log('1');
			$('.timeline-1').addClass('hover');
		}
		if (($('body')[0].scrollTop + ($('.timeline-2').offset().top - $('.steps-block').offset().top)) >= $('.timeline-2').offset().top) {//console.log('2');
			$('.timeline-2').addClass('hover');
		}
		if (($('body')[0].scrollTop + ($('.timeline-3').offset().top - $('.steps-block').offset().top)) >= $('.timeline-3').offset().top) {//console.log('3');
			$('.timeline-3').addClass('hover');
		}
		if (($('body')[0].scrollTop + ($('.timeline-4').offset().top - $('.steps-block').offset().top)) >= $('.timeline-4').offset().top) {//console.log('4');
			$('.timeline-4').addClass('hover');
		}*/
			/*if (($('body')[0].scrollTop + ($('.timeline-1').offset().top - $('.steps-block').offset().top)) >= $('.timeline-1').offset().top) {//console.log('1');
			$('.timeline-1').addClass('hover');
		}*/
			//console.log($('.steps-item-1').outerHeight(true));

			let height1 = $(".steps-item-1").outerHeight(true);
			let height2 =
				$(".steps-item-1").outerHeight(true) +
				$(".steps-item-2").outerHeight(true);
			let height3 =
				$(".steps-item-1").outerHeight(true) +
				$(".steps-item-2").outerHeight(true) +
				$(".steps-item-3").outerHeight(true);

			if (st > 0) {
				//console.log('1');
				$(".timeline-1").addClass("hover");
			} else {
				$(".timeline-1").removeClass("hover");
			}
			if (st > height1) {
				//console.log('1');
				$(".timeline-2").addClass("hover");
			} else {
				$(".timeline-2").removeClass("hover");
			}
			if (st > height2) {
				//console.log('1');
				$(".timeline-3").addClass("hover");
			} else {
				$(".timeline-3").removeClass("hover");
			}
			if (st > height3) {
				//console.log('1');
				$(".timeline-4").addClass("hover");
			} else {
				$(".timeline-4").removeClass("hover");
			}

			/*$(".pillars-container").css({"opacity" : "0"});
		if ($('body')[0].scrollTop >= $('.pillars-block').offset().top) {
			$(".pillars-container").css({"opacity" : "1"});
		}
		if (($('body')[0].scrollTop + $('.pillars-block').offset().top) >= $('.pillars-container').width()) {
		//console.log($('body')[0].scrollTop);
		//console.log($('.pillars-container').offset().top);
		//if (($('body')[0].scrollTop + $('.pillars-container').offset().top) >= $(window).height()) {
			var st = ($(this).scrollTop() - ($('.formats-block').offset().top + $('.formats-block').height())) / 10;//console.log(st);console.log($(this).scrollTop());
			//var st = ($('body')[0].scrollTop - $('.pillars-container').offset().top) / $(window).height() * 100;
			$(".pillars-containerss").css({
				"height": $(".pillars-container").width()
			});
			$(".pillars-item").css({
				"transform" : "translate(" + -st + "%, 0px)",
				"-webkit-transform" : "translate(" + -st + "%, 0px)"
			});
		}
		if (($('body')[0].scrollTop + $('.pillars-block').offset().top) >= $('.pillars-container').width()) {
			var st = ($('body')[0].scrollTop - $('.pillars-block').offset().top) / $('.pillars-container').width() * 100;
			//var st = ($(this).scrollTop() - ($('.pillars-block').offset().top + $('.pillars-container').width())) / 10;
			//$(".pillars-container").css({
			//	"transform" : "translateY(" + st + "%)",
			//	"-webkit-transform" : "translateY(" + st + "%)"
			//});
		}*/

			/*const gallery = $('.pillars-container');
		let galleryWidth = gallery.offsetWidth;
		let amountToScroll = galleryWidth - $(window).innerWidth;
		gsap.registerPlugin(ScrollTriger);
		gsap.to(gallery, {
			x: -amountToScroll,
			ease: "none",
			scrollTrigger: {
				trigger: ".pillars-container",
				start: "top 30px",
				end: "+=" + amountToScroll,
				pin: true,
				scrub: true,
			}
		});*/

			/*let gallery = gsap.utils.toArray(".pillars-item");
		let galleryWidth = gallery.offsetWidth;
		let amountToScroll = galleryWidth - $(window).innerWidth;
		cards.forEach((card, index) => {
			x: -amountToScroll,
			//ease: "none",
			ScrollTrigger.create({
				trigger: ".pillars-container",
				start: "top 30px",
				end: "+=" + amountToScroll,
				pin: true,
				scrub: true,
			});
		});*/
			/*const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);*/
		}
	});

	$(".offer-item").click(function (e) {
		$(this).toggleClass("show");
		$(this).find(".offer-text-anim").toggleClass("show");
	});

	gsap.registerPlugin(ScrollTrigger);

	/*if ($('#our-works').length) {
	const panels = document.querySelectorAll('#our-works .our-works-big-item:not(:first-child)');
	let h = 0;

	panels.forEach(element => {
		h += element.scrollHeight;
	})

	let timeln = gsap.timeline({
		scrollTrigger: {
			trigger: '#our-works',
			pin: true,
			pinSpacing: false,
			start: "top top",
			end: "+=" + (h - 100),
			scrub: 0.5,
			ease: "linear",
		}
	});
	let delay = 0;
	let duration = 0.01;
	let offset = 50;

	panels.forEach((element, i) => {
		timeln.to(element, {
			duration,
			delay,
			marginTop: -(element.scrollHeight - offset),
			ease: "linear"
		}, 0.001);
		delay += duration
	});
}*/
	if ($("#pillars").length) {
		if ($(window).width() > 768) {
			const containerWidth = $("#pillars .wrap_container").width();
			var rightOffset =
				$(window).width() -
				($("#pillars .wrap_container").offset().left +
					$("#pillars .wrap_container").width());
			let col = 3;

			if (containerWidth <= 992) {
				col = 2;
			}

			$("#pillars .pillars-item").width(containerWidth / col);

			gsap.to("#pillars .pillars-container", {
				x: () =>
					-(
						document.querySelector("#pillars .pillars-container").scrollWidth -
						window.innerWidth +
						rightOffset * 2
					),
				ease: "none",
				scrollTrigger: {
					trigger: "#pillars .wrap_container",
					start: "top top",
					end: () =>
						"+=" +
						document.querySelector("#pillars .pillars-container").scrollWidth,
					scrub: true,
					pin: true,
					anticipatePin: 1,
				},
			});
		}
	}

	if ($("#ideal").length) {
		let height = $("#ideal .ideal-items").height();
		height -= $("#ideal .ideal-items .ideal-item-last").height();
		$("#ideal").css({ height: height + 150 + "px" });

		let isScroll = false;
		let current = 0;
		let h = 0;
		const itemHeight = $("#ideal .ideal-items span").outerHeight();

		ScrollTrigger.create({
			trigger: "#ideal .wrap_container",
			start: "top top",
			end: "+=" + height,
			pin: true,
			scrub: true,
			anticipatePin: 1,
			onEnter: function (e) {
				isScroll = true;
			},
			onUpdate: function (e) {
				if ($("#ideal .ideal-items span").length) {
					const p = 1 / $("#ideal .ideal-items span").length;
					console.log(e.progress / p);
					current = Math.ceil(e.progress / p);
					if (current >= 0 && current < $("#ideal .ideal-items span").length) {
						$("#ideal .ideal-items span").css({ opacity: 0.5 });
						$("#ideal .ideal-items span").eq(current).css({ opacity: 1 });

						h = itemHeight * current;
						$("#ideal .ideal-items").css({
							transform: "translateY(-" + h + "px)",
						});
					}
				}
			},
		});

		/*$(document).on('wheel', function (e) {
		if (isScroll) {
			if (e.originalEvent.deltaY < 0) {
				current--;
			}
			else {
				current++;
			}

			if (current >= 0 && current < $("#ideal .ideal-items span").length ) {
				$("#ideal .ideal-items span").css({opacity: 0.5})
				$("#ideal .ideal-items span").eq(current).css({opacity: 1})

				h = itemHeight * current;
				$("#ideal .ideal-items").css({transform: 'translateY(-' + h + 'px)'});
			}
		}
	})*/

		/*$(document).scroll(function () {
		if (!isScroll) {
			isScroll = true;
			const el = $("#ideal .ideal-items span").eq(current++);
			if (el.length) {
				h += $("#ideal .ideal-items span").eq(current++).outerHeight();
				$("#ideal .ideal-items").css({transform: 'translateY(-'+h+'px)'});
			}
			setTimeout(() => {
				isScroll = false;
			}, 100)
		}
	});*/

		function setPosition() {}

		/*const tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#ideal .wrap_container",
			start: "top top",
			end: "+=" +900,
			scrub: true,
			pin: true,
			anticipatePin: 1,
		}
	})*/
		//	.to("#ideal .ideal-items", {duration: 0,  y: -height}, 0)

		/*gsap.to("#ideal .wrap_container", {
			ease: "none", 
			scrollTrigger: {
				trigger: "#ideal .wrap_container",
				start: "top top",
				end: "+=" +height,
				scrub: true,
				pin: true,
				anticipatePin: 1,
				onUpdate: function(self) {
					// Здесь можно добавить ваш код, который будет выполняться во время анимации
					// Например, вывод в консоль текущего прогресса анимации
					console.log(self);
				}
			}
		});*/
	}

	$(".modal-test").click(function () {
		$("#feedback-success").modal();
	});

	$('form.feedback-form input[name="email"]').on("input", function () {
		const value = this.value;
		const hasCyrillic = /[а-яёА-ЯЁ]/;

		if (hasCyrillic.test(value)) {
			this.reportValidity();
		}
	});

	$('form.feedback-form input[name="phone"]').on("input", function () {
		const value = this.value;
		const validPhone = /^[0-9+()\- ]*$/;

		if (!validPhone.test(value)) {
			this.setCustomValidity("Phone number can contain only digits");
		}

		this.reportValidity();
	});

	$("form.feedback-form").submit(function (e) {
		e.preventDefault();
		const $this = $(this);
		const formData = new FormData(this);
		let iti;

		const phone = $this.find('input[name="phone"]');

		if (phone.length) {
			for (let key in window.intlTelInputGlobals.instances) {
				if (phone[0] === window.intlTelInputGlobals.instances[key].telInput) {
					iti = window.intlTelInputGlobals.instances[key];
				}
			}

			if (iti) {
				formData.set(
					"phone",
					"+" + iti.selectedCountryData.dialCode + " " + phone.val()
				);
			}
		}

		$.ajax({
			type: "POST",
			url: "/local/templates/eshop_bootstrap_green/ajax/feedback.php",
			data: formData,
			processData: false,
			contentType: false,
			success: function (res) {
				$this[0].reset();
				if ($("#feedback-success").length) {
					$("#feedback-success").modal();
				} else {
					if ($this.parents(".feedback-content").length) {
						$this.parents(".feedback-content").hide();
						$this
							.parents(".feedback-content")
							.siblings(".feedback-success")
							.show();
					} else {
						$this.before(
							$('<p style="text-align: center">Form successfully sent</p>')
						);
					}
				}
			},
		});
	});

	if ($(".reviews-detail-list").length) {
		var hash = window.location.hash;
		hash = hash.substring(1);
		let index = 0;
		if (hash !== "") {
			if ($("#" + hash).length) {
				index = $("#" + hash).index();
			}
		}

		const reviewDetailNextSlider = new Swiper(".reviews-detail-next", {
			loop: true,
			initialSlide: index,
			spaceBetween: 0,
			slidesPerView: 1,
			speed: 600,
			allowTouchMove: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
		});

		const reviewDetailSlider = new Swiper(".reviews-detail-list", {
			loop: true,
			initialSlide: index,
			spaceBetween: 20,
			slidesPerView: 1,
			speed: 600,
			autoHeight: true,
			navigation: {
				nextEl: ".reviews-detail-block .swiper-button-next2",
				prevEl: ".reviews-detail-block .swiper-button-prev2",
			},
			thumbs: {
				swiper: reviewDetailNextSlider,
			},
			on: {
				init: function (e) {
					let value = e.$el.find(".swiper-slide-active").attr("aria-label");

					if (value) {
						$(".reviews-detail-counter").text(value.replace(/\s/g, ""));
					}
				},
			},
		});

		$(".reviews-detail-next").click(function () {
			reviewDetailSlider.slideNext();
		});

		reviewDetailSlider.on("slideChangeTransitionStart", function (e) {
			let value = e.$el.find(".swiper-slide-active").attr("aria-label");

			if (value) {
				$(".reviews-detail-counter").text(value.replace(/\s/g, ""));
			}
		});
	}

	$(window)
		.resize(function () {
			$(".reviews-detail-item").each(function () {
				const text = $(this).find(".reviews-detail-text");
				const view = $(this).find(".reviews-detail-text--view");
				const more = $(this).find(".reviews-detail-text-more");

				if (text.height() < view.height()) {
					more.css({ display: "block" });
					text.addClass("more");
				} else {
					more.hide();
					text.removeClass("more");
				}
			});

			$(".reviews-item").each(function () {
				const text = $(this).find(".item-descr");
				const view = $(this).find(".item-text");
				const more = $(this).find(".item-text-toggle");

				if (text.height() < view.height()) {
					more.css({ display: "block" });
					text.addClass("hide");
				} else {
					more.hide();
				}
			});
		})
		.trigger("resize");

	$(".reviews-detail-text-more").on("click", function () {
		$(this).toggleClass("open");
		$(this).siblings(".reviews-detail-text").toggleClass("open");
	});

	$(".show-more").on("click", function (e) {
		e.stopPropagation();
		if ($(this).siblings(".hide").length) {
			$(this).siblings(".hide").slideToggle();
			$(this).toggleClass("open");

			if ($(this).hasClass("open")) {
				$(this).find("span").text("Hide");
			} else {
				$(this).find("span").text("Show More");
			}
		}
	});

	$(".company-item").on("click", function () {
		if ($(this).attr("data-href") !== undefined) {
			location.href = $(this).attr("data-href");
		}
	});

	let selectedCase = "all";

	$("[data-case]").on("click", function (e) {
		if (!$(this).hasClass("active")) {
			const caseName = $(this).data("case");
			selectedCase = caseName;

			$("[data-case]").removeClass("active");
			$(this).addClass("active");

			if (caseName !== "all") {
				$("[data-case-item]").hide();
				$('[data-case-item*="' + caseName + '"]').show();
			} else {
				$("[data-case-item]").show();
			}
			toggleCase(caseName);
		}
	});

	$('[data-case="all"]').trigger("click");

	toggleCase("all");

	$("[data-toggle-case]").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("show")) {
			toggleCase(selectedCase);
		} else {
			$('[data-case-item*="' + selectedCase + '"]').show();
			$(this).addClass("show");
			$(this).text("Hide");
		}
	});

	function toggleCase(caseName = "all") {
		let items;
		items = $("[data-case-item]:visible");
		const btn = $("[data-toggle-case]");
		btn.removeClass("show");
		btn.text("Show More");

		/*if (!items.eq(0).hasClass('portfolio-big-item')) {
		$('[data-case-item]').removeClass('portfolio-big-item');
		items.eq(0).addClass('portfolio-big-item');
	}*/

		let max = 5;

		if (caseName == "all") {
			max = 6;
		}

		if (items.length > max) {
			let index = 0;

			items.each(function () {
				if (index > max) {
					$(this).hide();
				}
				index++;
			});
			$("[data-toggle-case]").css({ display: "inline-block" });
		} else {
			$("[data-toggle-case]").hide();
		}
	}

	$(".case__banner-breadcrumbs .breadcrumbs__list li").each(function () {
		const span = $('<span class="truncate"></span>');

		if ($(this).find("a").length) {
			span.html($(this).find("a").html());
			$(this).find("a").html("");
			$(this).find("a").append(span);
		} else {
			span.html($(this).html());
			$(this).html("");
			$(this).append(span);
		}
	});

	$(".case__banner-breadcrumbs .breadcrumbs__list").css({ opacity: 1 });
});
