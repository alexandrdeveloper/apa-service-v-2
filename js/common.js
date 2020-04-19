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


	var formInit = $('.price__modal-init');
	var priceModal = $('.price-modal');
	var priceModalClose = $('.price-modal__close');

	

	formInit.on('click', function(e) {
		e.preventDefault();
		priceModal.toggleClass('price-modal_active');
	});

	priceModalClose.on('click',  function(e) {
		e.preventDefault();
		priceModal.removeClass('price-modal_active');	
	});




});