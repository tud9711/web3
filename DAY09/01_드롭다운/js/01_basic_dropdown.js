
$(function(){
    $('nav>ul>li').on('mouseover', function() {
        $(this).children('.submenu').stop().slideDown(300)
    })
    $('nav>ul>li').on('mouseout', function() {
        $(this).children('.submenu').stop().slideUp(300)
    })
    $('nav>ul>li').on('click', function() {
        $(this).children('.submenu').stop().slideToggle(300)
    })
})