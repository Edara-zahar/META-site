$(document).ready(function(){
	$('.container__slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:700,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	})


	setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top--open')
	})
	

$('.logoholder__acc-link').on('click', function (e) {
	e.preventDefault()
	$(this).toggleClass('logoholder__acc-link--active')
	$(this).children('.logoholder__acc-text').slideToggle()
})

});
