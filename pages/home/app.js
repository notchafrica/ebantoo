var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    //loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        direction: "horizontal"
    },
    autoplay: {
       // delay: 5000,
    },
    navigation: {
        nextEl: ".rod-button-next",
        prevEl: ".rod-button-prev"
    }
});