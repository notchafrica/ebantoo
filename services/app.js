
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000
    }
  });

  
  let scrollpos = window.scrollY

  const footer = document.querySelector("footer")
  const scrollChange = 647
  const scrollChangetop = 5200
  const add_class_on_scroll = () => footer.classList.add("!z-20")
  const remove_class_on_scroll = () => footer.classList.remove("!z-20")
  
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) { 
      add_class_on_scroll() 
      console.log("reached")
    }
    
  })
  
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    console.log(scrollpos)
    if (scrollpos <= scrollChangetop) { 
       remove_class_on_scroll() }
    
  })
  

  const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  
});
