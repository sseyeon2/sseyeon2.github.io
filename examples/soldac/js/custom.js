$(document).ready(function(e) {
	$('.sup-cont .slide-box-wrap ul').slick({
		infinite: true,
		speed: 300,
		fade: true,
		arrows: false,
		autoplay: true,
		pauseOnHover : false, //마우스 호버시슬라이드 멈추는거
		autoplaySpeed: 3000,
		cssEase: 'linear',
		dotClass: 'btn-dot',
		dots: true
	});
});

