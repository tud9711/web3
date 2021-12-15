
$(function(){
    $('nav>ul>li').on('mouseover', function() {
        $('.submenu').stop().slideDown(300)
    })
    $('nav>ul>li').on('mouseout', function() {
        $('.submenu').stop().slideUp(300)
    })
})