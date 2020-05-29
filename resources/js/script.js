//SWIPER SLIDER
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    speed: 2000
  });

$(document).ready(function(){
    // ANIMATED HEADLINE
    $('.hero-text').animatedHeadline({
        animationType : 'clip',
    });
    //SCROLL SMOOTH
    $(".main-menu li a,.scroll-down a,.logo-area a").click(function(){
        $('html,body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },1000);
        
    });

    //NAV BAR
    $('#show,.main-menu li a').click(function(){
        $('.main-menu-area').toggleClass('nav');
    });
    

    //OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000
    });
});

//MIXITUP
var mixer = mixitup('.grid-portfolio-container');

//WOW   
new WOW().init();