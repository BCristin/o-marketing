$(function () {
	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: "<button class='slick-prev'><img src='img/arrow-left.svg' alt='prev'></button>",
		nextArrow: "<button class='slick-next'><img src='img/arrow-right.svg' alt='prev'></button>",
	});
	var mixer = mixitup('.portfolio__content');
});

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});
