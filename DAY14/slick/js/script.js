$(function(){
    $('.slide-container').slick({
        dots : true,
        arrows : true,
        prevArrow : '<button class="slide-arrow prev-arrow"></button>',
        nextArrow : '<button class="slide-arrow next-arrow"></button>',
        autoplay : true,
        autoplaySpeed : 1000,
        speed : 500,

        slidesToShow : 2,
        slidesToScroll : 2,

        pauseOnDotsHover : true,
        pauseOnFocus : true,
        pauseOnHover : true,

        /* 반응형 */
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
}]

    })
})