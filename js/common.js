$(document).ready(function() {


	var acc = $('.accordeon__item > .accordeon__title');

	acc.on('click', function() {
		if ($(this).parent('.accordeon__item').hasClass('accordeon__item_active')) {
			$(this).parent('.accordeon__item').removeClass('accordeon__item_active');
			$(this).next('.accordeon__info').fadeOut(300);
		} else {
			$(this).parent('.accordeon__item').toggleClass('accordeon__item_active');
			$(this).next('.accordeon__info').show(300);
		}
	});



});