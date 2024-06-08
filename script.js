$(document).ready(function(){

    $('#menu').click(function(){
        $('this').toggleClass('fa-time');
        $('hrader').toggleClass('toggle');
    });
 $(window).on('scroll load',function(){
        $('menu').removeClass('fa-time');
        $('header').removeClass('toggle');
    });

    //smooth scrolling

$('a[href*="#"]').on('click',function(e){
    e.preventdefault()
});

});