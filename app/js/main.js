
$(document).ready(function(){

  $('.m-h-1, .m-h-2, .top-photo .photo-box, .bottom-photo .photo-box, .map-height > div, .last-mh > div').matchHeight();

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

$('input,textarea').focus(function(){
 $(this).data('placeholder',$(this).attr('placeholder'))
 .attr('placeholder','');
}).blur(function(){
 $(this).attr('placeholder',$(this).data('placeholder'));
});


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




 $('h5').on('click', function(e) {
   e.preventDefault(); 
   slider1.goToNextSlide();
 });
 $('h2').on('click', function(e) {
   e.preventDefault(); 
   slider1.goToPrevSlide();
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
