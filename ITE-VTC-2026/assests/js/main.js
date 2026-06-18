(function ($) {
    $(document).ready(function () {
     
    $('#header-mobile-hamburger').on('click', function (){
        if ($(this).hasClass('active')){
          $(this).removeClass('active');
          $('.header-menu-mobile').removeClass('active');
          $('body').removeClass('header-mobile-active');
          
        }else{
          $(this).addClass('active');
          $('.header-menu-mobile').addClass('active');
          $('body').addClass('header-mobile-active');
        //   $(' #header-menu-mobile #primary-menu .menu-item.menu-item-has-children').each(function(){
        //     $(this).append('<button>▾</button>');
        //   })
        //   $('#header-menu-mobile #primary-menu .menu-item.menu-item-has-children button').on('click',function(e){
        //     //e.preventDefault();
        //     $(this).parent().find('.sub-menu').toggleClass('open');
        //   });
        }
        
      });
      $('.menu-has-child').click(function(e){
        $(this).find('.sub-menu').toggleClass('active');
      });
      $('#scroll-down').click(function(){
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top
      }, 1000);
      });
      $(window).scroll(function() {
        if ($(document).scrollTop() > 130) {
          $(".sticky-menu").addClass("active");
          $("#main-header").addClass("sticky");
        } else {
          $(".sticky-menu").removeClass("active");
          $("#main-header").removeClass("sticky");
        }
         
         if ($(document).scrollTop() > 300) {
          $("#backtotop").addClass("active");
          
        } else {
          $("#backtotop").removeClass("active");
        }
      });
      $('#backtotop').click(function(){
            $('html, body').animate({scrollTop:0}, '1000');
      });
      // var slider = $('.slick-slider-1').slick({
      //   infinite: false,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   dots: true,
      //   arrows: true,
      //   autoplaySpeed: 5000,
      //   autoplay: false,
      //   speed: 1000,
      //   accessibility: false,
      //   draggable: false,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
        
      // });
      // var slider2 = $('.slick-slider-2').slick({
      //   infinite: true,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   dots: true,
      //   arrows: true,
      //   autoplaySpeed: 5000,
      //   autoplay: false,
      //   speed: 1000,
      //   accessibility: false,
      //   draggable: false,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
        
      // });
      // var width = $('.people-slider .slider-item').width();
      // $('.slider-popup').css('width', (width *3 +48));
      
      $('.slick-slider-1 .slider-item .slider-image').click(function(){
        $('.slider-popup').removeClass('active');
        var index = $(this).parent().attr('data-slick-index');
        // slider.slick('slickGoTo', index);
        $('#popup'+index).addClass('active');
        // var height = $(this).parent().find('.popup-content').height();
        // $('.slick-slider-1 .slick-track').css('height', height);
      });
      // $('.slick-slider-2 .slider-item .slider-image').click(function(){
      //   $('.slider-popup').removeClass('active');
      //   var index = $(this).parent().attr('data-slick-index');
      //   slider2.slick('slickGoTo', index);
      //   $(this).parent().find('.slider-popup').addClass('active');
      //   var height = $(this).parent().find('.popup-content').height();
      //   $('.slick-slider-2 .slick-track').css('height', height);
      // });
      // $('.slick-slider-1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      //   $('.slider-popup').removeClass('active');
      //   $('.slick-slider-1 .slick-track').css('height', 'auto');
      // });
      // $('.slick-slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      //   $('.slider-popup').removeClass('active');
      //   $('.slick-slider-2 .slick-track').css('height', 'auto');
      //   // nextSlide.find('.slider-popup').addClass('active');
      // });
      $('.popup-close').click(function(){
        $('.slider-popup').removeClass('active');
        // $('.slick-slider-1 .slick-track').css('height', 'auto');
        // $('.slick-slider-2 .slick-track').css('height', 'auto');
      });
       var tabSlider = $('.about-tabs .tab-panel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        autoplaySpeed: 5000,
        autoplay: false,
        speed: 1000
        
      });
      $('.tab-control .tab-menu li a').click(function(e){
        e.preventDefault();
        $('.tab-control .tab-menu li').removeClass('active');
        $(this).parent().addClass('active');
        var index = $(this).attr('data-index');
        tabSlider.slick('slickGoTo', index);
      });
      $('.about-tabs .tab-panel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // var slideIx = currentSlide.attr('data-slick-index');
        $('.tab-control .tab-menu li').removeClass('active');
        $('li#tab'+nextSlide).addClass('active');
      });
    if($( window ).width() <=992){
    $('.about-tabs .tab-menu').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplaySpeed: 5000,
      autoplay: false,
      speed: 1000,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      
    });
    
    }
  $('.media-list  .media-image').click(function(){
    $(this).parent().find('.media-popup-wrapper').addClass('active');
  });
  $('.media-btn-close').click(function(){
    $(this).parent().parent().parent().removeClass('active');
  });
//form submit
  $("#submit").click(function() {
   
    var subject = $("#form-subject").val();
    var fname = $("#form-name").val();
    var femail = $("#form-email").val();
    var message = $("#form-message").val();
    var button = $("#form-submit").val();
    var dataString = 'subject=' + subject + '&fname=' + fname + '&femail=' + femail + '&message=' + message + '&button=' + button;

    if (fname == '' || subject == '' || message == '' || femail == '') { //if you are use other form validation scripts remove the if statement 
      $('#response').html('<p id="error">Please fill all fields</p>').fadeIn();
    }
    // AJAX Code To Submit Form.
    else {
      $('#loader').addClass('show');
        $.ajax({
            type: "POST",
            url: "send-mailer.php",
            data: dataString,
            cache: false,
            success: function(result) {
              console.log( result );
                $('#loader').removeClass('show');
                $('#response').html(result).fadeIn();
                // $("#contact_form")[0].reset();
                // $('#response').fadeOut(3000).delay(400);
            }
        });
    }
    return false;
});
  $('#loadmore').click(function(){
    $('.media-list .loadmore-item').css('display', 'block').fadeIn();
    $(this).css('display', 'none').fadeOut();
  });
  $('.our-values .tab-name-item a').click(function (e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $('.our-values .tab-name-item').removeClass('active');
    $('.our-values .panel-item').removeClass('active');
    $('.our-values .panel-item-mobile').removeClass('active');
    $(this).parent().addClass('active');
    $(tabId).addClass('active');
    $(tabId+'-mobile').addClass('active');
  });
 
});
  })(jQuery);
  
  