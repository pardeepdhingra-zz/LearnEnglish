// Page Loader
$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();
});

////------- Testimonials Carousel
$(".testimonials-carousel").owlCarousel({
	navigation : false,
	pagination: false,
	slideSpeed : 2500,
	stopOnHover: true,
autoPlay: 3000,
singleItem:true,
	autoHeight : true,
	transitionStyle : "fade"
});

/*----------------------------------------------------*/
/*	Back Top Link
/*----------------------------------------------------*/

var offset = 200;
var duration = 500;
$(window).scroll(function() {
if ($(this).scrollTop() > offset) {
    $('.back-to-top').fadeIn(400);
} else {
    $('.back-to-top').fadeOut(400);
}
});
$('.back-to-top').click(function(event) {
event.preventDefault();
$('html, body').animate({scrollTop: 0}, 600);
return false;
})
