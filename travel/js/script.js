
// burger
const headerBurger = document.querySelector('.header__burger');
if(headerBurger){
    const navigacion = document.querySelector('.header__navigacion'); 
    const headerInfo = document.querySelector('.header__info');   
    headerBurger.addEventListener("click", function(e){
        headerBurger.classList.toggle('_active');
        navigacion.classList.toggle('_active');
        headerInfo.classList.toggle('_active');
    } )
}


//swipper section1=============================
new Swiper ('.start__swiper',{
   
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination' ,
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    touchRatio:4,
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
});
//======================================================

//  select ===================================================================================
const selects = document.querySelectorAll('.select');

selects.forEach(select => {

    const selectMenu = select.querySelector('.select__menu');
    const selectIcon = select.querySelector('.select__icon');
   const optionsUl = select.querySelector('.options');
   const options = select.querySelectorAll('.option');
   const selectSubmenu = select.querySelector('.select__submenu');


   selectMenu.addEventListener("click", ()=>{
selectMenu.classList.toggle("select_clicked");
selectIcon.classList.toggle("salect-rotate");
optionsUl.classList.toggle("open");
   });

options.forEach(option => {

option.addEventListener('click' , () => {
selectSubmenu.innerText = option.innerText;

selectMenu.classList.remove("select_clicked");
selectIcon.classList.remove("salect-rotate");
optionsUl.classList.remove("open");

options.forEach(option => {

    option.classList.remove('_active');
})
option.classList.add('_active');


})

})

})
//select==================================================================

// const popularSwiper = new Swiper('.popular__swiper', {

//    spaceBetween: 20,
//    slidesPerView: 3,
//     loop: true,
  //


 // 

//     navigation: {
//       nextEl: '.popular__swiper-button-prev',
//       prevEl: '.popular__swiper-button-next',
//     },
//     breakpoints: {
//         993: {
//             slidesPerView: 3, 
//         },
//         650: {
//             slidesPerView: 2,  
//         },
//         320: {
//             slidesPerView: 1,   
//         },

//     }
 
//   });
  // -------- finish popular swiper---------
  //==========start special swiper-------
  const swiperSpecial = new Swiper('.special__swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.special__swiper-button-next',
      prevEl: '.special__swiper-button-prev',
    },
    breakpoints: {
        1029: {
            slidesPerView: 3, 
        },
        650: {
            slidesPerView: 2,  
        },
        320: {
            slidesPerView: 1,   
        },
    }
 
   
    },
  );

// footer==========================
let titles = Array.from( document.querySelectorAll('.footer__title'))
console.log(titles)

for (const title of titles) {
    title.addEventListener('click',() => {
        title.nextElementSibling.classList.toggle('hidden')
    })
    
}


