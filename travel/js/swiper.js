const popularSwiper = new Swiper('.popular__swiper', {
    
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  
    navigation: {
      nextEl: '.popular__swiper-button-next',
      prevEl: '.popular__swiper-button-prev',
    },
    breakpoints: {
                993: {
                    slidesPerView: 3, 
                },
                650: {
                    slidesPerView: 2,  
                },
                320: {
                    slidesPerView: 1,   
                },
        
            }
  });
  // =========================================================================
  //START SECTION DESTINATION SWIPER========================================
  const destinationSwiper = new Swiper('.destination__swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    
  
   
    // Navigation arrows
    navigation: {
      nextEl: '.destination__button-next',
      prevEl: '.destination__button-prev',
    },
    breakpoints: {
                998: {
                    slidesPerView: 4, 
                },
                 778: {
                    slidesPerView: 3,  
                 },
                 550: {
                    slidesPerView: 2,   
                },
        
                320: {
                    slidesPerView: 1,   
                },
            }
 
  });
  //============================================================================
  //START EXPERIENCES SWIPER====================================================
  const experiencesSwiper = new Swiper('.experiences__swiper', {
    slidesPerView: 2.5,
    spaceBetween: 15,
    loop: true,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.exsperiences__button-next',
      prevEl: '.exsperiences__button-prev',
    },
    breakpoints: {
        
         778: {
            slidesPerView: 2.5,  
         },
         550: {
            slidesPerView: 2,   
        },

        320: {
            slidesPerView: 1,   
        },
    }
   
  });