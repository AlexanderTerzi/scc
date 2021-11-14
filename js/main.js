$(function () {

		// Hamburger
  	$('.menu-btn').on('click', function(e) {
  	e.preventDefault();
 	 $(this).toggleClass('menu-btn_active');
  	$('.menu-mobile').toggleClass('menu-mobile_active');
	});

	// Search
  	$('.search__btn').on('click', function(e) {
  	e.preventDefault();
  	$('.search__input').toggleClass('active');
	});

	// Filters
  	$('.filter__show').on('click', function(e) {
  	e.preventDefault();
  	$('.filters__wrap').toggleClass('active');
  	$('.filter__show').toggleClass('active');
	});

    // Slick slider
    $('.categories__slider').slick({
   		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
   		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  	});

  	$('.product__slider_for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.product__slider_nav'
	});
	$('.product__slider_nav').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  asNavFor: '.product__slider_for',
	  dots: false,
	  focusOnSelect: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }]
	});
  $('.header__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
        infinite: true
      });


  $('.product__slider_mobile').slick({
      prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  	// Quantity

  	(function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
   })();

});