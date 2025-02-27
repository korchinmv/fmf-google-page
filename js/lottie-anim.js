$(document).ready(function(){
//const anim_seo = lottie;
if ($(window).width() > 1024) {
	$(document).on("mouseenter", ".company-item-seo", function() {
		const anim_seo = lottie.loadAnimation({
			container: document.querySelector('#lottie-company-seo'),
			render: 'svg',
			name: 'anim_seo',
			loop: true,
			autoplay: true,
			path: '/fmf-test/animation/SEO_Small.json'
		});
		$(this).find('.company-title').addClass('company-title-hover');
	});
	$(document).on("mouseleave", ".company-item-seo", function() {
		lottie.destroy('anim_seo');
		$(this).find('.company-title').removeClass('company-title-hover');
	});
} else {
	const anim_seo = lottie.loadAnimation({
		container: document.querySelector('#lottie-company-seo'),
		render: 'svg',
		name: 'anim_seo',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/SEO_Small.json'
	})
}

//const anim_cont = lottie;
if ($(window).width() > 1024) {
	$(document).on("mouseenter", ".company-item-cont", function() {
		const anim_cont = lottie.loadAnimation({
			container: document.querySelector('#lottie-company-cont'),
			render: 'svg',
			name: 'anim_cont',
			loop: true,
			autoplay: true,
			path: '/fmf-test/animation/Cont_Small.json'
		});
		$(this).find('.company-title').addClass('company-title-hover');
	});
	$(document).on("mouseleave", ".company-item-cont", function() {
		lottie.destroy('anim_cont');
		$(this).find('.company-title').removeClass('company-title-hover');
	});
} else {
	const anim_cont = lottie.loadAnimation({
		container: document.querySelector('#lottie-company-cont'),
		render: 'svg',
		name: 'anim_cont',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/Cont_Small.json'
	})
}

//const anim_smm = lottie;
if ($(window).width() > 1024) {
	$(document).on("mouseenter", ".company-item-smm", function() {
		const anim_smm = lottie.loadAnimation({
			container: document.querySelector('#lottie-company-smm'),
			render: 'svg',
			name: 'anim_smm',
			loop: true,
			autoplay: true,
			path: '/fmf-test/animation/SMM_Small.json'
		});
		$(this).find('.company-title').addClass('company-title-hover');
	});
	$(document).on("mouseleave", ".company-item-smm", function() {
		lottie.destroy('anim_smm');
		$(this).find('.company-title').removeClass('company-title-hover');
	});
} else {
	const anim_smm = lottie.loadAnimation({
		container: document.querySelector('#lottie-company-smm'),
		render: 'svg',
		name: 'anim_smm',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/SMM_Small.json'
	})
}

//const anim_an = lottie;
if ($(window).width() > 1024) {
	$(document).on("mouseenter", ".company-item-an", function() {
		const anim_an = lottie.loadAnimation({
			container: document.querySelector('#lottie-company-an'),
			render: 'svg',
			name: 'anim_an',
			loop: true,
			autoplay: true,
			path: '/fmf-test/animation/An_Small.json'
		});
		$(this).find('.company-title').addClass('company-title-hover');
	});
	$(document).on("mouseleave", ".company-item-an", function() {
		lottie.destroy('anim_an');
		$(this).find('.company-title').removeClass('company-title-hover');
	});
} else {
	const anim_an = lottie.loadAnimation({
		container: document.querySelector('#lottie-company-an'),
		render: 'svg',
		name: 'anim_an',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/An_Small.json'
	})
}

//const anim_dev = lottie;
if ($(window).width() > 1024) {
	$(document).on("mouseenter", ".company-item-dev", function() {
		const anim_dev = lottie.loadAnimation({
			container: document.querySelector('#lottie-company-dev'),
			render: 'svg',
			name: 'anim_dev',
			loop: true,
			autoplay: true,
			path: '/fmf-test/animation/DEV_Small.json'
		});
		$(this).find('.company-title').addClass('company-title-hover');
	});
	$(document).on("mouseleave", ".company-item-dev", function() {
		lottie.destroy('anim_dev');
		$(this).find('.company-title').removeClass('company-title-hover');
	});
} else {
	const anim_dev = lottie.loadAnimation({
		container: document.querySelector('#lottie-company-dev'),
		render: 'svg',
		name: 'anim_dev',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/DEV_Small.json'
	})
}

const anim = lottie;
anim.loadAnimation({
	container: document.querySelector('#lottie-item-index'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/First_Screen.json'
});

const anim_seo_mobile = lottie;
anim_seo_mobile.loadAnimation({
	container: document.querySelector('#lottie-company-seo-mobile'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/SEO_Small.json'
});

const anim_cont_mobile = lottie;
anim_cont_mobile.loadAnimation({
	container: document.querySelector('#lottie-company-cont-mobile'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/Cont_Small.json'
});

const anim_smm_mobile = lottie;
anim_smm_mobile.loadAnimation({
	container: document.querySelector('#lottie-company-smm-mobile'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/SMM_Small.json'
});

const anim_an_mobile = lottie;
anim_an_mobile.loadAnimation({
	container: document.querySelector('#lottie-company-an-mobile'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/An_Small.json'
});

const anim_dev_mobile = lottie;
anim_dev_mobile.loadAnimation({
	container: document.querySelector('#lottie-company-dev-mobile'),
	render: 'svg',
	loop: true,
	autoplay: true,
	path: '/fmf-test/animation/DEV_Small.json'
});

const anim_full_engagement = lottie;
if ($(window).width() > 1024) {
	anim_full_engagement.loadAnimation({
		container: document.querySelector('#lottie-full-engagement'),
		render: 'svg',
		name: 'anim_full_engagement',
		loop: true,
		autoplay: false,
		path: '/fmf-test/animation/Full_engagement.json'
	});
	$(document).on("mouseenter", ".full-engagement", function() {
		anim_full_engagement.play('anim_full_engagement');
	});
	$(document).on("mouseleave", ".full-engagement", function() {
		anim_full_engagement.stop('anim_full_engagement');
	});
} else {
	anim_full_engagement.loadAnimation({
		container: document.querySelector('#lottie-full-engagement'),
		render: 'svg',
		name: 'anim_full_engagement',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/Full_engagement.json'
	});
}

const anim_regularly_showing_results = lottie;
if ($(window).width() > 1024) {
	anim_regularly_showing_results.loadAnimation({
		container: document.querySelector('#lottie-regularly-showing-results'),
		render: 'svg',
		name: 'anim_regularly_showing_results',
		loop: true,
		autoplay: false,
		path: '/fmf-test/animation/Regularly_showing_results.json'
	});
	$(document).on("mouseenter", ".regularly-showing-results", function() {
		anim_regularly_showing_results.play('anim_regularly_showing_results');
	});
	$(document).on("mouseleave", ".regularly-showing-results", function() {
		anim_regularly_showing_results.stop('anim_regularly_showing_results');
	});
} else {
	anim_regularly_showing_results.loadAnimation({
		container: document.querySelector('#lottie-regularly-showing-results'),
		render: 'svg',
		name: 'anim_regularly_showing_results',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/Regularly_showing_results.json'
	});
}

const anim_always_staying_in_touch = lottie;
if ($(window).width() > 1024) {
	anim_always_staying_in_touch.loadAnimation({
		container: document.querySelector('#lottie-always-staying-in-touch'),
		render: 'svg',
		name: 'anim_always_staying_in_touch',
		loop: true,
		autoplay: false,
		path: '/fmf-test/animation/Always_staying_in_touch.json'
	});
	$(document).on("mouseenter", ".always-staying-in-touch", function() {
		anim_always_staying_in_touch.play('anim_always_staying_in_touch');
	});
	$(document).on("mouseleave", ".always-staying-in-touch", function() {
		anim_always_staying_in_touch.stop('anim_always_staying_in_touch');
	});
} else {
	anim_always_staying_in_touch.loadAnimation({
		container: document.querySelector('#lottie-always-staying-in-touch'),
		render: 'svg',
		name: 'anim_always_staying_in_touch',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/Always_staying_in_touch.json'
	});
}

const anim_control_transparency = lottie;
if ($(window).width() > 1024) {
	anim_control_transparency.loadAnimation({
		container: document.querySelector('#lottie-control-transparency'),
		render: 'svg',
		name: 'anim_control_transparency',
		loop: true,
		autoplay: false,
		path: '/fmf-test/animation/Control_Transparency.json'
	});
	$(document).on("mouseenter", ".control-transparency", function() {
		anim_control_transparency.play('anim_control_transparency');
	});
	$(document).on("mouseleave", ".control-transparency", function() {
		anim_control_transparency.stop('anim_control_transparency');
	});
} else {
	anim_control_transparency.loadAnimation({
		container: document.querySelector('#lottie-control-transparency'),
		render: 'svg',
		name: 'anim_control_transparency',
		loop: true,
		autoplay: true,
		path: '/fmf-test/animation/Control_Transparency.json'
	});
}
});