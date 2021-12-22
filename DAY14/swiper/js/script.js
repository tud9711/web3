$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',  // horizontal and vertical (방향)
        loop: true,               // true and false (반복여부)
        autoplay: {
          delay: 1000,
          pauseOnMouseEnter : true,
          disableOnInteraction : true,
          stopOnLastSlide : true,
        },

        /*
        slidesPerView : 3,      // 보여지는 슬라이드 개수
        spacebetween : 30,      // 슬라이드간 여백
        */

        /*
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          slideShadows: false,
        },
        */

        /*
        effect: 'cube',
        cubeEffect: {
        slideShadows: false,
        },
        */

        /*
        effect: 'flip',
        flipEffect: {
          slideShadows: false,
        },
        */

        /*
        effect: 'cards',
        cardsEffect: {
        // ...
        },
        */

        /*
        effect: 'creative',
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
          },
        },
        */

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type : 'bullets',         // bullets  :  * * *
                                    // fraction : 현재번호/전체번호
                                    // progressbar : 진행률(게이지)
                                    // custom
          clickable : true,         // 페이지네이션 클릭 가능 여부
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar', 
          hide : true,              // 스크롤바 숨김 (직접 움직일때 보이고 그외에 숨김)
          draggable : true,         // 스크롤바 드래그 가능 여부
          snapOnRelease : true,    // 스크롤바 놓을 때 정위치로 맞춤
        },
      });
})