// ACCORDION
$(".toggle").click(function (e) {
	e.preventDefault();
	let inner = $(this).next(".inner");

	if ($(this).hasClass("active")) {
		inner.removeClass("show");
		inner.slideUp(350);
		$(this).removeClass("active");
	} else {
		$(this).closest(".accordion").find("a.active").removeClass("active");
		$(this)
			.closest(".accordion")
			.find(".inner")
			.not(inner)
			.removeClass("show")
			.slideUp(350);
		inner.slideDown(350);
		inner.addClass("show");
		$(this).addClass("active");
	}
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(".page-scroll").bind("click", function (event) {
	var $anchor = $(this);
	$("html, body")
		.stop()
		.animate(
			{
				scrollTop: $($anchor.attr("href")).offset().top - 50,
			},
			250,
			"easeOutSine"
		);
	event.preventDefault();
});

// back to top button
$(document).ready(function () {
	var offset = 550;
	var duration = 300;

	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$(".back-to-top").fadeIn(duration);
		} else {
			$(".back-to-top").fadeOut(duration);
		}
	});

	$(".back-to-top").click(function (event) {
		event.preventDefault();

		$("html, body").animate({ scrollTop: 0 }, duration);
		return false;
	});

	//  scrollreveal
	// ScrollReveal().reveal('.header-content', {delay: 500});
	// ScrollReveal().reveal('.package-container');
	// ScrollReveal().reveal('#preview-item');
});

$(function () {
	// $("div").hasClass("event_page").find("p.asset-description").css("display:none !important")

	// paywall.on('authenticated', function(){
	// 	$("p").hasClass("asset-description").css("display:none !important")
	// });


	paywall.on("authenticated", () => {
		$("p").hasClass("asset-description").css("display:none !important");
	});


	var toggle = $("#toggle");

	$("#menu a").on("click", function () {
		console.log();
		if ($(window).width() < 790) {
			$("#toggle").click();
		}
	});
	toggle.on("click", function () {
		$(this).toggleClass("is-active");

		$("#menu").addClass("flex");
		$("#menu").toggleClass("slideInDown slideOutUp");
		$("body").toggleClass("overflow");
	});

});
