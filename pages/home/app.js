var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        direction: "horizontal"
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".rod-button-next",
        prevEl: ".rod-button-prev"
    }
});

var swiper = new Swiper(".mySwiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000
    }
  });