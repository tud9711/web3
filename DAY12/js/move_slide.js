
let pause = false

$(function(){
    let list = $('.slide-list')
    let item = $('.slide-item')

    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0

    let slideHeight = item.height()
    let slideWidth = item.width()
    let slideCount = item.length

    let totalSlideWidth = slideWidth * slideCount
    list.css({width : totalSlideWidth + 50})

    let initNum = parseInt(slideCount / 2)

    for (let i = 0 ; i <initNum; i++){
        $('.slide-item:last-child').prependTo(list)
    }        
    
    list.css({ left : currentPosition -= (slideWidth * initNum)})

    for ( let i = 0 ; i < slideCount; i++) {
        let dot = "<a href='#' class='dot'></a>"
        $('.dots-box').append(dot)
    }

    $('.dot:first-child').addClass('active')

    $('.slide-item').stop().animate( {opacity : 0.2}, 1000)
    $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({opacity : 1},1000)   
     $('.prev').on('click', function() {
        currentPosition += slideWidth
        list.css({ left : currentPosition })
        $('.slide-item:first-child').appendTo(list)

        currentPosition -= slideWidth
        list.stop().animate({ left : currentPosition},2000)

        $('.slide-item').stop().animate( {opacity : 0.2}, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({opacity : 1},1000)   

        if( currentNo == slideCount )
        currentNo = 1
        else
        currentNo++

        currentIndex = currentNo - 1

        $('.dot').removeClass('active')
        $('.dot:nth-child('+ currentNo +')').addClass('active')
    })

    $('.next').on('click', function() {
        currentPosition -= slideWidth
        list.css({ left : currentPosition })
        $('.slide-item:last-child').prependTo(list)

        currentPosition += slideWidth
        list.stop().animate({ left : currentPosition},2000)

        $('.slide-item').stop().animate( {opacity : 0.2}, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({opacity : 1},1000)   

        if( currentNo == 1 )
        currentNo = slideCount
        else
        currentNo--

        currentIndex = currentNo - 1

        $('.dot').removeClass('active')
        $('.dot:nth-child('+ currentNo +')').addClass('active')
    })

    $('.dot').on('click', function() {


        // 현재 선택한 네비게이션 인덱스
        let index = $(this).index()
        // 클릭한 위치와 현재 위치의 차이
        // 3 - 1 = 2
        // 1 - 3 = -2
        let gap = index - currentIndex
        // gap 절댓값
        let absGap = Math.abs(gap)


        // 현재 위치보다 작은 위치로 이동
        if( gap < 0 ) {
            
            currentPosition -= (slideWidth*absGap)
            list.css( { left : currentPosition } )


            for (let i = 0; i < absGap; i++) {
                $('.slide-item:last-child').prependTo(list)
            }


            currentPosition += (slideWidth*absGap)
            list.animate({ left : currentPosition }, 1000)
            
        }


        // 현재 위치보다 큰 위치로 이동
        if( gap > 0 ) {
            
            currentPosition += (slideWidth*absGap)
            list.css( { left : currentPosition } )


            for (let i = 0; i < absGap; i++) {
                $('.slide-item:first-child').appendTo(list)
            }


            currentPosition -= (slideWidth*absGap)
            list.animate({ left : currentPosition }, 1000)
            
        }


        currentIndex = index
        currentNo = currentIndex + 1
        $('.slide-item').stop().animate( {opacity : 0.2}, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({opacity : 1},1000)   

        $('.dot').removeClass('active')
        $('.dot:nth-child('+ currentNo +')').addClass('active')
    })

    let timer = setInterval(function(){
        if(!pause){
        $('.next').trigger('click')
        }
    },3000)

    $('.slide-list, .btn-box, .dots-box').on('mouseover', function(){
        pause = true
    })

    $('.slide-list, .btn-box, .dots-box').on('mouseout', function(){
        pause = false
    })
})