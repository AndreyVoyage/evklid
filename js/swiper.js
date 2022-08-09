const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  spaceBetween: 30,

  autoplay: {
    delay: 20000,
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }


  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },


  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});