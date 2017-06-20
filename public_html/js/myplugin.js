$(document).ready(function () {
     $('.type-it').typeIt({
    speed: 450,
    lifeLike: false,
    autoStart: false,
    cursor:false
  });
  $('.type-it-second').typeIt({
    speed: 100,
    lifeLike: false,
    autoStart: false,
    cursor:false
  });
    /**************trigger nice scroll**************/
    $("html").niceScroll({

    });
    /**************end trigger nice scroll**************/
    //initialize swiper when document ready  
    /*var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed:2000,
      autoplay:5000
    });
    mySwiper.onClickNext(function (){
        alert("next");
    });
    */
})