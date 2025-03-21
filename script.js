
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  

    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        }
    }

});


function increaseValue() {
    const input = document.getElementById('number');
    let value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 0 : value + 1;
}
  
  function decreaseValue() {
    const input = document.getElementById('number');
    let value = parseInt(input.value, 10);
    input.value = isNaN(value) || value <= 0 ? 0 : value - 1;
}
  



  