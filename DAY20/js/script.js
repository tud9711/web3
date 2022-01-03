
// 이미지 슬라이드 (slick)
$(function(){
    $('.visual .slide').slick({
        arrows: false,              //화살표 사용안함
        dots: true,                 //닷츠
        autoplay: true,             //자동재생
        fade: true,                 //페이드인 효과 
        autoplaySpeed:5000,         //재생시간 5초
        pauseOnHover:false,         //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false          //포커스시 슬라이드 멈춤 해제
    });
});

// 스크롤 애니메이션 (scrolla)
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})


let scrollTop = 0
// 스크롤 감지
$(window).on('scroll resize', function() {
    // 스크롤 위치
    scrollTop = $(this).scrollTop()
    if( scrollTop > 200 ) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }

    // 전체 높이
    let containerHeight = $('.container').height()

    // 윈도우 높이
    let windowHeight = $(window).height()

    // 인디케이터 퍼센트
    let percent = 0

    if ( scrollTop <= windowHeight ) {
        percent = scrollTop / containerHeight * 100
    } else {
        percent = (scrollTop + windowHeight) / containerHeight * 100
     }

    $('.progress-bar').css({'width' : percent + "%" })


})

// 모바일 햄버거 버튼
$(function(){
    // 모바일 햄버거 버튼 클릭
    $('header .open').on('click', function(){
        $('header .bg').fadeIn()
        $('header nav').addClass('on')
        $('header nav').css({'width' : '300px'})
    })

    $('header .close, hedaer .bg').on('click', function(){
        $('header .bg').fadeOut()
        $('header nav').removeClass('on')
        $('header nav').css({'width' : '0'})
    })
})


// 플로팅 버튼 클릭
let floatOn = 'off'
$(function(){
    $('.floating-list li').on('click', function(){
        if(floatOn == 'off'){
         $('#floating-btn1').css({ transform  : "translateY(-260px)", transition : "all 0.3s"})
         $('#floating-btn2').css({ transform  : "translateY(-130px)", transition : "all 0.3s"})
         floatOn = 'on'
        } else {
            $('#floating-btn1').css({ transform  : "translateY(260px)", transition : "all 0.3s"})
            $('#floating-btn2').css({ transform  : "translateY(130px)", transition : "all 0.3s"})
            floatOn = 'off'
        }
    })
})
