'use strict'
$(document).ready(function(){
    // const swiper = new Swiper('.swiper', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'bullets',
    //     },
    // });

    const swiper = new Swiper('.swiper', {
      slidesPerView: 1, 
      loop: true, 
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
});