
$(document).ready(function(){



	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	


	$('.left-choose, .right-choose').on('click', function(e) {
		e.preventDefault(); 
		$('.left-choose, .right-choose').removeClass('active');
		$(this).addClass('active'); 
		$('.js-type').val($(this).attr('data-type'));
	});


	var bx5 = $('.bx-calc-1').bxSlider({
		nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		pager: false,
		controls: true

	});;

	var bx6 = $('.bx-calc-2').bxSlider({
		nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		pager: false,
		controls: true

	});



	$('.step-btn').on('click', function(e) {
		e.preventDefault(); 

		// if ($(this).hasClass('next-2step')) {
			var th1 = $(this);
			$(this).closest('.steps-all').animate({opacity: '0'}, 300, function() {
				$(this).css('display', 'none').next().css('display', 'block').animate({opacity: '1'}, 300, function() {

					

				});


				if (th1.hasClass('next-5step')) {
					bx5.reloadSlider();
				} else if (th1.hasClass('next-6step')) {
					bx6.reloadSlider();	
				}


			});

		// }



	});







	$(".various-modal").fancybox({
		'hideOnContentClick': true,
		fitToView: true,
		minWidth: '100%',
		minHeight: '100%',
		topRatio    : 0,
		maxWidth : '100%',
		openEffect: 'fade',
		padding : 0,
		margin: [0, 0, 50, 0],
		helpers     : { 
			overlay : {closeClick: false}
		},
		tpl: {
			closeBtn : '<div class="close-abs-2"></div>'
		},
		afterShow: function() {

			var sliderPOP = $('.slider-popup');
			sliderPOP.bxSlider({
				pager: false,
				adaptiveHeight: true,
				nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
				onSlideAfter: function($slideElement, oldIndex, newIndex){ 
					var currentPopup = sliderPOP.getCurrentSlide()+1;
					var allPopup = sliderPOP.getSlideCount();
					$('.page-popup').html(currentPopup + '<em>/'+allPopup +'</em> '); 
					$.fancybox.update();
				},
				prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
			});


		}

	});




	$(".various").fancybox({
		'hideOnContentClick': true,
		fitToView: true,
		minWidth: '100%',
		minHeight: '100%',
		topRatio    : 0,
		maxWidth : '100%',
		openEffect: 'fade',
		padding : 0,
		margin: [0, 0, 50, 0],
		helpers     : { 
			overlay : {closeClick: false}
		},
		tpl: {
			closeBtn : '<div class="close-abs-2"></div>'
		},
	});


	$(document).on('click', '.man-box', function(e) {
		e.preventDefault(); 
		if ($(this).hasClass('val-color-1')) {
			$('.js-color-1').val('');
			$('.js-manufacturer-1').val($(this).attr('data-manufacturer')); 
		} else if ($(this).hasClass('val-color-2')) {
			$('.js-color-2').val('');
			$('.js-manufacturer-2').val($(this).attr('data-manufacturer')); 
		}
		
		$(this).addClass('active').closest('.manufacturer-item').siblings().find('.man-box').removeClass('active');



	});

	$(document).on('click', '.color-box', function(e) {
		e.preventDefault(); 
		$(this).closest('.all-color-bg').find('.your-choose-color span').html('&nbsp;&nbsp;'+$(this).find('span').text());
		$(this).addClass('active').closest('.color-item').siblings().find('.color-box').removeClass('active');

		if ($('.step-calc-2').css('display') == 'block') {
			$('.js-color-1').val($(this).find('span').text());
		} else {
			$('.js-color-2').val($(this).find('span').text());
		}

		
	});





	$(document).on('click', '.shape-box:not(.active)', function(e) {
		e.preventDefault(); 

		if ($(this).closest('.container-step-3').length) {
			console.log($(this));
			$(this).closest('.container-step-3').find('.radius, .add-click').removeClass('active');
			$(this).closest('.container-step-3').find('div').removeClass('radius-bottom-left radius-bottom-right radius-top-right radius-top-left border-r-b-neg border-l-b-neg no-after');
			$(this).closest('.container-step-3').find('.bg-draw').find('input').val('');
			$('.js-shape').val($(this).next().text());
			$(this).addClass('active').closest('.shape-item').siblings().find('.shape-box').removeClass('active'); 
		} else {
			$('.js-shape-2').val($(this).next().text());
			$(this).addClass('active').closest('.panel-wrapp').siblings().find('.shape-box').removeClass('active'); 
		}


		
	});





	$(document).on('click', '.add-click', function(e) {
		e.preventDefault(); 

		$(this).toggleClass('active').parent('div').toggleClass('no-after');

		if ($(this).hasClass('r-1')) {
			$(this).parent('div').toggleClass('radius-top-left').css('transition', '.15s');
		} else if ($(this).hasClass('r-2')) {
			$(this).parent('div').toggleClass('radius-top-right').css('transition', '.15s');
		} else if ($(this).hasClass('r-3')) {
			$(this).parent('div').toggleClass('radius-bottom-right').css('transition', '.15s');
		} else if ($(this).hasClass('r-4')) {
			$(this).parent('div').toggleClass('radius-bottom-left').css('transition', '.15s');
		} else if ($(this).hasClass('round-3')) {
			$(this).parent('div').toggleClass('border-r-b-neg').css('transition', '.15s');
		} else if ($(this).hasClass('round-4')) {
			$(this).parent('div').toggleClass('border-l-b-neg').css('transition', '.15s');
		}

	});


	// $(document).on('click', '.radius', function(e) {
	// 	e.preventDefault(); 

 // 	});



 $(document).on('click', '.appearance-item', function(e) {
 	e.preventDefault(); 
 	$(this).toggleClass('active').parent('div').siblings().find('.appearance-item').removeClass('active'); 
 });





 $(document).on('click', '.item-box-2', function(e) {
 	e.preventDefault(); 
 	$(this).closest('li').siblings().find('.item-box-2').removeClass('active'); 
 	$(this).addClass('active').closest('.item-wr').siblings().find('.item-box-2').removeClass('active'); 
 	$('.js-step-5').val($(this).next().text());
 });




 $(document).on('click', '.img-wrapp-6', function(e) {
 	e.preventDefault(); 
 	$(this).closest('li').siblings().find('.img-wrapp-6').removeClass('active'); 
 	$(this).addClass('active').closest('.item-last').siblings().find('.img-wrapp-6').removeClass('active'); 
 	$('.js-step-6').val($(this).next().text()); 
 });










 $('.m-h-1, .m-h-2, .m-h-3, .top-photo .photo-box, .bottom-photo .photo-box, .map-height > div, .last-mh > div').matchHeight();

 $('.open-r').on('click', 'li:not(.active)', function(e) {
 	e.preventDefault(); 
 	$(this).addClass('active').siblings().removeClass('active').closest('.section-2').find('.r-side').children('.absolute').css({display: 'none', opacity: '0'}).eq($(this).index()).css('display', 'block').animate({opacity: '1'}, 300); 
 });

 $('.open-l').on('click', 'li:not(.active)', function(e) {
 	e.preventDefault(); 
 	$(this).addClass('active').siblings().removeClass('active').closest('.section-2').find('.l-side').children('.absolute').css({display: 'none', opacity: '0'}).eq($(this).index()).css('display', 'block').animate({opacity: '1'}, 300); 
 });

 $('.close-abs').on('click', function(e) {
 	e.preventDefault(); 
 	$(this).closest('.section-2').find('li.active').removeClass('active');
 	$(this).closest('.absolute').animate({opacity: '0'}, 300, function() {
 		$(this).css('display', 'none');
 	}); 
 });

 $('.plus').on('click', function(e) {
 	e.preventDefault(); 
 	$(this).toggleClass('active');
 	$(this).find('p').toggleClass('active'); 
 });


 $(document).on('click', '.link-show-more', function(e) {
 	e.preventDefault(); 
 	var t = $(this);
 	t.closest('.center').prev().slideToggle();
 	if (t.html() == 'Показать больше параметров для сравнения') {
 		t.html('Показать основные параметры');
 		t.closest('.center').removeClass('line-bottom');
 	} else {
 		t.html('Показать больше параметров для сравнения');
 		t.closest('.center').addClass('line-bottom');
 	}
 });



 $(document).on('click', '.margin-sl:not(.active)', function(e) {
 	e.preventDefault(); 
 	var ttt = $(this);
 	var thisIndexMargin = ttt.index();
 	$('.t-content-wrapp').find('.tabs-content').removeClass('active').css('opacity', '.2').eq(thisIndexMargin).addClass('active').animate({opacity: '1'},1000);
 	$('.dots-custom').find('div').eq(thisIndexMargin).siblings().removeClass('active');
 	$('.dots-custom').find('div').eq(thisIndexMargin).addClass('active');
 	$(this).siblings().animate({height: '16.67%'}, 300, function() {
 		$(this).removeClass('active');
 		ttt.animate({height: '66.66%'}, 300).addClass('active')
 	}); 

 });


 $('.dots-custom').on('click', 'div:not(.active)', function(e) {
 	e.preventDefault(); 
 	var thisDots = $(this);
 	var thisIndexDots = thisDots.index();
 	$('.t-content-wrapp').find('.tabs-content').removeClass('active').css('opacity', '.2').eq(thisIndexDots).addClass('active').animate({opacity: '1'},1000);
 	thisDots.addClass('active').siblings().removeClass('active');
 	thisDots.closest('.slider-1').find('.margin-sl').eq(thisIndexDots).siblings().animate({height: '16.67%'}, 300, function() {
 		$(this).removeClass('active');
 		$('.margin-sl').eq(thisIndexDots).animate({height: '66.66%'}, 300).addClass('active')
 	}); 

 });




 $("a.modal-form").fancybox({
 	'hideOnContentClick': true,
 	minWidth : 230,
 	padding : 0,
 	closeBtn : true

 });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });




$('.bx-slider-2').bxSlider({
	mode: 'fade',
	pager: true,
	controls: false
});



function slider_init_number($slider, $DOMslider, $pager, $pageNumber, $prev, $next) {

	var $slider = $($DOMslider).bxSlider({
		controls: false, 
		pagerCustom: $pager,
		onSlideAfter: function($slideElement, oldIndex, newIndex){ 
			var currenItem = $slider.getCurrentSlide()+1;
			var slideQty = $slider.getSlideCount();
			$($pageNumber).html(currenItem + '<em>/'+slideQty +'</em> '); 
		}
	});


	$($prev).on('click', function(e) {
		e.preventDefault(); 
		$slider.goToPrevSlide(); 
	});

	$($next).on('click', function(e) {
		e.preventDefault(); 
		$slider.goToNextSlide(); 
	});

	var cur1 = $slider.getCurrentSlide()+1;
	var count1 = $slider.getSlideCount();
	$($pageNumber).html(cur1 + '<em>/'+count1 +'</em> ');

};


slider_init_number('s1', '.num-1', '.dots-1', '.pages-2', '.num-1 .prev', '.num-1 .next');
slider_init_number('s2', '.num-2', '.dots-2', '.pages-3', '.num-2 .prev', '.num-2 .next');
slider_init_number('s3', '.num-3', '.dots-3', '.pages-4', '.num-3 .prev', '.num-3 .next');
slider_init_number('s4', '.num-4', '.dots-4', '.pages-5', '.num-4 .prev', '.num-4 .next');



$(window).on('load', function() {

	var slider1 = $('.bx-slider-1').bxSlider({
		nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		onSlideAfter: function($slideElement, oldIndex, newIndex){ 
			var currenItem = slider1.getCurrentSlide()+1;
			var slideQty = slider1.getSlideCount();
			$('.pages-1').html(currenItem + '<em>/'+slideQty +'</em> '); 
		},
		prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
	}); 









	var currenItem = slider1.getCurrentSlide()+1;
	var slideQty = slider1.getSlideCount();
	$('.pages-1').html(currenItem + '<em>/'+slideQty +'</em> ');




});




});






ymaps.ready(init);
var myMap, 
myPlacemark;

function init(){ 
	myMap = new ymaps.Map ("map-canvas", {
		center: [56.099560, 47.262263],
		zoom: 17
	}); 



	var myPlacemark = new ymaps.Placemark([56.099560, 47.262263], {
		hintContent: 'TEXT'
	}, 
	{
		preset: 'twirl#redDotIcon' 
	});


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
		}
