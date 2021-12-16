let slideOn = 'off'

$(function(){
    $('nav>ul>li').on('mouseover', function() {
        $('.submenu').stop().slideDown(300)
    })
    $('nav>ul>li').on('mouseout', function() {
        $('.submenu').stop().slideUp(300)
    })

    $('.slide-open').on('click', function(){
        if( slideOn == 'off') {
            $('.slide').animate({
                left : 0
            })
            slideOn = 'on'
            $('.bg').fadeIn()
            $('.slide-open span').addClass('on')
        } else {
            slideOut()
        }

    })

    $('.bg, .close').on('click', function(){
        slideOut()
    })

    function slideOut(){
        $('.slide').stop().animate({
            left : '-300px'
        })
        slideOn = 'off'
        $('.bg').fadeOut()
        $('.slide-open span').removeClass('on')
    }

})