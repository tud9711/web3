$ (function(){
   /* item1 */
   $('#item1 .hide').on('click', function() {
    $('#item1 .target-box').hide()
})

$('#item1 .show').on('click', function() {
    $('#item1 .target-box').show()
})

$('#item1 .hide1000').on('click', function() {
    $('#item1 .target-box').hide(1000)
})

$('#item1 .show1000').on('click', function() {
    $('#item1 .target-box').show(1000)
})

    $('#item2 .fadeIn').on('click', function(){
        $('#item2 .target-box').fadeIn()
    });
    $('#item2 .fadeOut').on('click', function(){
        $('#item2 .target-box').fadeOut()
    });

    $('#item2 .fadeToggle').on('click', function(){
        $('#item2 .target-box').fadeToggle(1000)
    });

    $('#item2 .fadeTo').on('click', function(){
        $('#item2 .target-box').fadeTo(1000)
    });

    $('#item3 .slideUp').on('click', function(){
        $('#item3 .target-box').slideUp()
    });

    $('#item3 .slideDown').on('click', function(){
        $('#item3 .target-box').slideDown()
    });

    let animated = 'off'
    $('#item4 .animate').on('click', function(){

        if( animated == 'off' ) {
            $('#item4 .target-box').animate({
                'opactiy' : '0.3',
                'width' : '400px'
            }, 2000)
            animated = 'on'

        } else {
            $('#item4 .target-box').animate({
                'opactiy' : '1',
                'width' : '150px'
            }, 2000)
            animated = 'off'
        }
    })
});