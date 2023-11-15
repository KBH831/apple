new Swiper('.sw-visual', {
    // 기본이 horizontal
    direction: 'horizontal',
    // direction: 'vertical',
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 200,
    },
    slidesPerView: 1,
    mousewheel: {
        enabled: true, 
        sensitivity: 5.5,
        // sensitivity: 10,
    }
})