$(document).ready(function(){

    let = owl = $('.owl-carousel')

    owl.owlCarousel({
        loop:true,
        cener : true,
        autoplay : false,
        autoplayTimeOut : 5000,
        autoplayHoverPause : false,
        margin:10,
        nav:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
   });

   owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

  });