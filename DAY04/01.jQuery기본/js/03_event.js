$(function(){

    $('#item1').on('click', function(){
        $('#item1').css({'color' : 'hotpink'})
    });

    $('#item2').on('click', function(){
        $(this).css({'color' : 'hotpink'})
    });

    $('#item3').on('mouseover', function(){
        $(this).css({'color' : 'hotpink'});
        $(this).css({'background-color' : 'royalblue'});
    });

    $('#item4').on('mouseout', function(){
        $(this).css({'color' : 'white'});
        $(this).css({'background-color' : '#3489ab'});
    }).on('mouseover', function(){
        $(this).css({'color' : 'hotpink'});
        $(this).css({'background-color' : 'royalblue'});

    });

});