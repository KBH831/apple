$(function(){

    new Swiper('.main_news .swiper-container',{       
        slidesPerView: 'auto',
        // slidesPerView: 5,
        centeredSlides: true,
        loop:true,
          scrollbar : {
               el : '.swiper-scrollbar',
               draggable: true,
                dragSize:100,
            },
            mousewheel: {
                enabled: true,
                sensitivity: 5.5,
                // sensitivity: 10,
            },
    });
});