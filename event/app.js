var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
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
    loop: true,
    autoplay: {
        delay: 3000
    }
  });
  
  // let scrollpos = window.scrollY

  // const footer = document.querySelector("footer")
  // const scrollChange = 647
  // const scrollChangetop = 2471
  // const add_class_on_scroll = () => footer.classList.add("!z-20")
  // const remove_class_on_scroll = () => footer.classList.remove("!z-20")
  
  // window.addEventListener('scroll', function() { 
  //   scrollpos = window.scrollY;
  //   if (scrollpos >= scrollChange) { 
  //     add_class_on_scroll() 
  //     console.log("reached")
  //   }
    
  // })
  
  // window.addEventListener('scroll', function() { 
  //   scrollpos = window.scrollY;
  //   console.log(scrollpos)
  //   if (scrollpos <= scrollChangetop) { 
  //      remove_class_on_scroll() }
    
  // })
  

  const button = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu');
  
  
  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    
  });



  // Set the date we're counting down to
var countDownDate = new Date("Mar 29, 2023 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  const $ = (element) => {return document.querySelector(element)}
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   $(".day").innerHTML = days + "Jr"
   $(".hours").innerHTML = hours + "h"
   $(".min").innerHTML = minutes + "min"
   $(".sec").innerHTML = seconds + "s"
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);