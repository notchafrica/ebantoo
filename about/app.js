var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let scrollpos = window.scrollY

  const footer = document.querySelector("footer")
  const scrollChange = 647
  const scrollChangetop = 4100
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