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

	$('.certificate__carousel').slick({
		slidesToShow: 3,
	});


	$('.banner-image').slick({
		slidesToShow: 1,
		asNavFor: $('.banner-text__carousel'),
	});
	$('.banner-text__carousel').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: $('.banner-image'),
	});

	$('.certificate__link').magnificPopup({
	  type: 'image'
	});

	



	var rooms = $('.rooms'),
		bath = $('.bathroom'),
		roomsPlus = $('.rooms-plus'),
		roomsMinus = $('.rooms-minus'),
		bathPlus = $('.bathroom-plus'),
		bathMinus = $('.bathroom-minus'),
		roomsVal = rooms.val(),
		bathVal = bath.val();

	$('.header-categories').waypoint(function() {
		$('.calc').toggleClass('calc_visible');
	});

	$('.contacts').waypoint(function() {
		if($('.calc').hasClass('calc_visible')){
			$('.calc').removeClass('calc_visible');
		} else {
			$('.calc').toggleClass('calc_visible');
		}
		
	}, { offset: '50%' });

		

		
				
		

});