var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const button = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu');
  
  
  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    
  });