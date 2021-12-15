
$(function(){
    $('nav>ul>li').on('mouseover', function() {
        $('.submenu').stop().slideDown(300)
    })
    $('nav>ul>li').on('mouseout', function() {
        $('.submenu').stop().slideUp(300)
    })

    let slideOn = 'off'
    $('.slide-open').on('click', function(){
        if( slideOn == 'off') {
            $('.slide').animate({
                right : 0
            },1000)
            slideOn = 'on'
        } else {
            $('.slide').stop().animate({
                right : '-100%'
            },1000)
            slideOn = 'off'
        }
    })

})