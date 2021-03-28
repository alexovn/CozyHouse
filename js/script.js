$(document).ready(function(){
    $('.pets-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 10,
        infinite: true,
        autoplay: false,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplaySpeed: 2500,
    
        prevArrow: '<div class="slider-arrow slider-arrow--left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow--right"></div>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });
});
  
$(function() {
    //Menu nav toggle
    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();
    
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })
    //     //Menu nav toggle hide
    // $("#nav a").on("click", function(){
    //     $("#nav").removeClass("active");
    //     $("#nav__toggle").removeClass("active");
    // })
});

//Header scroll out
var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
     
    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});