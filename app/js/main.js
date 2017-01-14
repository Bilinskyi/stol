
$(document).ready(function(){
	

	$('.js-valf-1').on('click', function(e) {
		e.preventDefault(); 
		$('.js-val-forname-1').val($(this).attr('data-name-form1'));
	});

	$('.js-valf-2').on('click', function(e) {
		e.preventDefault(); 
		$('.js-val-forname-2').val($(this).attr('data-name-form1'));
	});

	$('.js-valf-3').on('click', function(e) {
		e.preventDefault(); 
		$('.js-val-forname-3').val($(this).attr('data-name-form1'));
	});


	$('.btn-menu').on('click', function(e) {
		e.preventDefault(); 
		$(this).closest('div').next().find('.nav').slideToggle();
	});



	var flag = true;
	var flag2 = true;
	var note2 = $('.note-2');
	var sec1 = $('.js-change');
	var sec1btn = $('.section-1 .button');
	var or = $('.open-r');
	var copy = $('.copy');
	var privacy = $('.politic');
	$(window).on('load resize', function() {

		if (window.innerWidth < 800) {

			if (flag) {
				flag = false;
				flag2 = true;
				note2.insertAfter('header h6');
				$('.section-1').before(sec1);
				$('.js-change').append(sec1btn);
				$('.wrapp-img').after(or);
				$('.dev').after(copy);
				$('.copy').after(privacy);
			}		

		} else {
			if (flag2) {
				flag = true;
				flag2 = false;
				$('.note-2').insertAfter('.main-header');
				$('.section-1 .container:first-child').append($('.js-change'));
				$('.section-1 .container:last-child').append($('.js-change .button'));
				$('.js-insert-ul').append($('.open-r'));
				$('.l-foot-wrapp').after($('.copy'));
				$('.copy').after($('.politic'));
			}
		}


	});

// 	$(".custom-fancy").fancybox({
//     afterShow: function () {
//         $("#submitForm").on("click", function () {
//             $.fancybox.close();
//             setTimeout(function () {
//                 $("#myForm").submit();
//             }, 100);
//         });
//     }
// });

$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

$('.tabs-caption-call').on('click', 'li:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('.timecall').find('.tabs-content-input').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

})


$('.left-choose, .right-choose').on('click', function(e) {
	e.preventDefault(); 
	$('.left-choose, .right-choose').removeClass('active');
	$(this).addClass('active'); 
	$('.js-type').val($(this).attr('data-type'));
});


var bx5 = $('.bx-calc-1').bxSlider({
	touchEnabled: false,
	nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
	prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
	pager: false,
	controls: true

});;

var bx6 = $('.bx-calc-2').bxSlider({
	touchEnabled: false,
	nextText: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
	prevText: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
	pager: false,
	infiniteLoop: false,
	controls: true

});


$(window).scroll(function() {

	if ($(this).scrollTop() > 100) {
		$('.nav').addClass('fixed');
	} else {
		$('.nav').removeClass('fixed');
	}

	if ($(this).scrollTop() > 500) {
		$('.up').addClass('fixed');
	} else {
		$('.up').removeClass('fixed');
	}

})


$('.up').on('click', function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 500);

});

$('.step-btn').on('click', function(e) {
	e.preventDefault(); 

		// if ($(this).hasClass('next-2step')) {
			var th1 = $(this);
			$(this).closest('.steps-all').animate({opacity: '0'}, 300, function() {
				$(this).css('display', 'none').next().css('display', 'block').animate({opacity: '1'}, 300, function() {
					$('html,body').animate({ 

						scrollTop: $('#screen4').offset().top + 200}, 'slow');

				});


				if (th1.hasClass('next-5step')) {
					bx5.reloadSlider();
				} else if (th1.hasClass('next-6step')) {
					bx6.reloadSlider(); 
				}


			});

		// }



	});


$('.next-from-fancy').on('click', function(e) {
	e.preventDefault();
	$.fancybox.close();
});

$('.back-step').on('click', function(e) {
	e.preventDefault(); 

	var th1 = $(this);
	th1.closest('.steps-all').animate({opacity: '0'}, 300, function() {
		$(this).css('display', 'none').prev().css('display', 'block').animate({opacity: '1'}, 300, function() {
			$('html,body').animate({ 

				scrollTop: $('#screen4').offset().top + 200}, 'slow');

		});


		if (th1.hasClass('next-5step')) {
			bx5.reloadSlider();
		} else if (th1.hasClass('next-6step')) {
			bx6.reloadSlider(); 
		}


	});

});


$('.fancybox').fancybox({
	'hideOnContentClick': true,
	fitToView: true,
	maxWidth: '90%',
	maxHeight: '90%',
	openEffect: 'fade',
	padding : 0,
	margin: [0, 0, 50, 0]
})



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
	scrolling: 'yes',
	helpers     : { 
		overlay : {closeClick: false}
	},
	tpl: {
		closeBtn : '<div class="close-abs-2"></div>'
	},
	afterShow: function() {

		var sliderPOP = $('.slider-popup');
		sliderPOP.bxSlider({
			touchEnabled: false,
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
	// scrolling: 'yes',
	scrolling: 'yes',
	helpers     : { 
		overlay: {
			closeClick: false
            }
	},
	tpl: {
		closeBtn : '<div class="close-abs-2 js-close-draw"></div>'
	}
});

	// $('.js-close-draw').on('click', function(e) {
	//  e.preventDefault(); 
	//  $.fancybox.close();
	// });

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

	$.fancybox.close();


});





$(document).on('click', '.shape-box:not(.active)', function(e) {
	e.preventDefault(); 

	if ($(this).closest('.container-step-3').length) {
		$(this).closest('.container-step-3').find('.radius, .add-click').removeClass('active');
		$(this).closest('.container-step-3').find('div').removeClass('radius-bottom-left radius-bottom-right radius-top-right radius-top-left border-r-b-neg border-l-b-neg no-after');
		$(this).closest('.container-step-3').find('.bg-draw').find('input').val('');
		$(this).closest('form').find('.js-add-1, .js-add-2, .clear-radius input').val('');
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

	var thisAclick = $(this);


	if (thisAclick.hasClass('r-1')) {
		thisAclick.parent('div').toggleClass('radius-top-left').css('transition', '.15s');
	} else if (thisAclick.hasClass('r-2')) {
		thisAclick.parent('div').toggleClass('radius-top-right').css('transition', '.15s');
	} else if (thisAclick.hasClass('r-3')) {
		thisAclick.parent('div').toggleClass('radius-bottom-right').css('transition', '.15s');
	} else if (thisAclick.hasClass('r-4')) {
		thisAclick.parent('div').toggleClass('radius-bottom-left').css('transition', '.15s');
	} else if (thisAclick.hasClass('round-3')) {
		thisAclick.parent('div').toggleClass('border-r-b-neg').css('transition', '.15s');
	} else if (thisAclick.hasClass('round-4')) {
		thisAclick.parent('div').toggleClass('border-l-b-neg').css('transition', '.15s');
	} else if (thisAclick.hasClass('val-bort')) {
		if ($(this).hasClass('active')) {
			$('.js-bort').val($(this).text()); 
		} else {
			$('.js-bort').val('');
		}
	} else if (thisAclick.hasClass('val-panel')) {
		if ($(this).hasClass('active')) {
			$('.js-panel').val($(this).text()); 
		} else {
			$('.js-panel').val('');

		}
	} else if (thisAclick.hasClass('val-step-7-1')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-1').val($(this).text()); 
		} else {
			$('.js-step-7-1').val('');
		}
	} else if (thisAclick.hasClass('val-step-7-2')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-2').val($(this).text()); 
		} else {
			$('.js-step-7-2').val('');
		}
	} else if (thisAclick.hasClass('val-step-7-3')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-3').val($(this).text()); 
		} else {
			$('.js-step-7-3').val('');
		}
	} else if (thisAclick.hasClass('val-step-7-4')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-4').val($(this).text()); 
		} else {
			$('.js-step-7-4').val('');
		}
	} else if (thisAclick.hasClass('val-step-7-5')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-5').val($(this).text()); 
		} else {
			$('.js-step-7-5').val('');
		} 
	} else if (thisAclick.hasClass('val-step-7-6')) {
		if ($(this).hasClass('active')) {
			$('.js-step-7-6').val($(this).text()); 
		} else {
			$('.js-step-7-6').val('');
		}
	} else if (thisAclick.hasClass('val-step-8-1')) {
		if ($(this).hasClass('active')) {
			$('.js-step-8-1').val($(this).text()); 
		} else {
			$('.js-step-8-1').val('');
		}
	} else if (thisAclick.hasClass('val-step-8-2')) {
		if ($(this).hasClass('active')) {
			$('.js-step-8-2').val($(this).text()); 
		} else {
			$('.js-step-8-2').val('');
		}
	} else if (thisAclick.hasClass('val-step-8-3')) {
		if ($(this).hasClass('active')) {
			$('.js-step-8-3').val($(this).text()); 
		} else {
			$('.js-step-8-3').val('');
		}
	} else if (thisAclick.hasClass('val-st9-1')) {
		if ($(this).hasClass('active')) {
			$('.js-step-9-1').val($(this).text()); 
		} else {
			$('.js-step-9-1').val('');
		}
	} else if (thisAclick.hasClass('val-st9-2')) {
		if ($(this).hasClass('active')) {
			$('.js-step-9-2').val($(this).text()); 
		} else {
			$('.js-step-9-2').val('');
		}
	} 

});

$(document).on('click', '.add-click', function(e) {
	e.preventDefault(); 

	if ( $(this).hasClass('val-radius1') ) {
		if ($(this).hasClass('active')) {
			$('.js-rad-1').val('R1'); 
		} else {
			$('.js-rad-1').val('');
		}
	} else if ($(this).hasClass('val-radius2')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-2').val('R2'); 
		} else {
			$('.js-rad-2').val('');
		}
	} else if ($(this).hasClass('val-radius3')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-3').val('R3'); 
		} else {
			$('.js-rad-3').val('');
		}
	} else if ($(this).hasClass('val-radius4')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-4').val('R4'); 
		} else {
			$('.js-rad-4').val('');
		}
	} else if ($(this).hasClass('val-radius5')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-5').val('R5'); 
		} else {
			$('.js-rad-5').val('');
		}
	} else if ($(this).hasClass('val-radius6')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-6').val('R6'); 
		} else {
			$('.js-rad-6').val('');
		}
	} else if ($(this).hasClass('val-radius7')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-7').val('R7'); 
		} else {
			$('.js-rad-7').val('');
		}
	} else if ($(this).hasClass('val-radius8')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-8').val('R8'); 
		} else {
			$('.js-rad-8').val('');
		}
	} else if ($(this).hasClass('val-add-option')) {
		if ($(this).hasClass('active')) {
			$('.js-add-1').val($(this).text());
		} else {
			$('.js-add-1').val('');
		}

	} else if ($(this).hasClass('val-add-option-2')) {
		if ($(this).hasClass('active')) {
			$('.js-add-2').val($(this).text());
		} else {
			$('.js-add-2').val('');
		}

	} else if ($(this).hasClass('val-rad-2-1')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-2-1').val('R1');
		} else {
			$('.js-rad-2-1').val('');
		}

	} else if ($(this).hasClass('val-rad-2-2')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-2-2').val('R2');
		} else {
			$('.js-rad-2-2').val('');
		}

	} else if ($(this).hasClass('val-rad-2-3')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-2-3').val('R3');
		} else {
			$('.js-rad-2-3').val('');
		}

	} else if ($(this).hasClass('val-rad-2-4')) {
		if ($(this).hasClass('active')) {
			$('.js-rad-2-4').val('R4');
		} else {
			$('.js-rad-2-4').val('');
		}

	}

});


	// $(document).on('click', '.radius', function(e) {
	//  e.preventDefault(); 

 //   });



 $(document).on('click', '.appearance-item:not(.active)', function(e) {
 	e.preventDefault(); 
 	$(this).addClass('active').parent('div').siblings().find('.appearance-item').removeClass('active'); 
 	$('.js-view-bort').val($(this).find('span').text());
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


 $(document).on('click', '.sec-img, .sec-partners', function(e) {
 	$('.section-2').find('li.active').removeClass('active');
 	$('.section-2').find('.absolute').animate({opacity: '0'}, 250, function() {
 		$(this).css('display', 'none');
 	}); 
 });





 $(document).on('click', '.section-2 li', function(event){
 	event.stopPropagation();
 });

 $('.open-r').on('click', 'li:not(.active)', function(e) {
 	e.preventDefault(); 
 	$(this).closest('.section-2').find('.absolute').css({display: 'none', opacity: '0'});
 	$(this).closest('.section-2').find('.active').removeClass('active');
 	$(this).addClass('active').siblings().removeClass('active').closest('.section-2').find('.r-side').children('.absolute').css({display: 'none', opacity: '0'}).eq($(this).index()).css('display', 'block').animate({opacity: '1'}, 300); 
 });

 $('.open-l').on('click', 'li:not(.active)', function(e) {
 	e.preventDefault(); 
 	$(this).closest('.section-2').find('.absolute').css({display: 'none', opacity: '0'});
 	$(this).closest('.section-2').find('.active').removeClass('active');
 	$(this).addClass('active').siblings().removeClass('active').closest('.section-2').find('.l-side').children('.absolute').css({display: 'none', opacity: '0'}).eq($(this).index()).css('display', 'block').animate({opacity: '1'}, 300); 
 });

 $('.close-abs').on('click', function(e) {
 	e.preventDefault(); 
 	$('.section-2').find('li.active').removeClass('active');
 	$('.section-2').find('.absolute').animate({opacity: '0'}, 250, function() {
 		$(this).css('display', 'none');
 	}); 
 });







 // $('.plus').on('click', function(e) {
 // 	e.preventDefault(); 
 // 	$(this).toggleClass('active');
 // 	$(this).find('p').toggleClass('active'); 
 // });

 $('.plus').mouseenter(function() {
 	$(this).addClass('active');
 	$(this).find('p').addClass('active'); 
 })

 $('.plus').mouseleave(function() {
 	$(this).removeClass('active');
 	$(this).find('p').removeClass('active'); 
 })



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

 $('a.scr[href^="#"]').on('click', function(event) {

 	var target = $( $(this).attr('href') );

 	if( target.length ) {
 		event.preventDefault();
 		$('html, body').animate({
 			scrollTop: target.offset().top
 		}, 600);
 	}

 });



 jQuery(function($){ 
 	$(".mask").mask("+7 (999) 999-99-99");
 });




 $('.bx-slider-2').bxSlider({
 	touchEnabled: false,
 	mode: 'fade',
 	pager: true,
 	adaptiveHeight: true,
 	controls: false
 });



 function slider_init_number($slider, $DOMslider, $pager, $pageNumber, $prev, $next) {

 	var $slider = $($DOMslider).bxSlider({
 		touchEnabled: false,
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
 		touchEnabled: false,
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
