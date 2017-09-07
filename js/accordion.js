$(document).ready(function($) {
    $(".carousel").carousel();
    // $('.accordion').find('.accordion-toggle').click(function(){

    //     //Expand or collapse this panel
    //     $(this).next().slideToggle('fast');


    //     var src = ($(this).attr('src') === 'img/accordion-open.png') ? 'img/accordion-open.png' : 'img/accordion-close.png';
    //     $(this).find('img').attr('src', src);


    //     //Hide the other panels
    //     $(".accordion-content").not($(this).next()).slideUp('fast');                
	// $(".accordion__img").not($(this).children()).attr('src', 'img/accordion-open.png');        
 
    // });
    
  $('.accordion').find('.accordion-toggle').click(function(){
    
            //Expand or collapse this panel
            $(this).next().slideToggle('fast');
    
            //changes arrow 
            if( $(this).find('.arrow').hasClass('arrowUp')){
                $(this).find('.arrow').removeClass('arrowUp').addClass('arrowDown');
            } else {
                $('.accordion').find('.arrow').removeClass('arrowUp').addClass('arrowDown');
                $(this).find('.arrow').removeClass('arrowDown').addClass('arrowUp');
             }
               //Hide the other panels
             $(".accordion-content").not($(this).next()).slideUp('fast');
          
        });
});