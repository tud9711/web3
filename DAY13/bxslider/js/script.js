

$(document).ready(function(){
    $('.slide-container').bxSlider({
        mode: 'fade',       
        captions: true,     // 이미지 하단 제목
        slideWidth: 1200,     // 슬라이드 가로 크기
        auto : true,        // 자동재생
        autoControls : true,    // 재생버튼, 중지버튼
        pause : 2000,           //슬라이드 당 재생 시간
        pager : true,           // 페이지네이션
        stopAutoOnClick: true,  // 클릭할때 자동재생 멈춤
        speed : 500,
        keyboardEnabled : true,     // 키보드 사용여부

        minSlides : 3,
        maxSlides : 2,
    });
  });