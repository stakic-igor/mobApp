var slideBar = $('.slide-bar');
$('.hamburger').on('click', function() {
    $('#slick-slider').css({"visibility":"visible", "filter":"blur(20px)"});
    $('#loader').css("opacity",0);
    var pageTitle = $('.sub-page__header');
    var modal = $('.modal-f');
    var logoshow = $('#logoshow');
    var logoImg = $('.logoImg');
    var footer = $('.footer');
    var logostart = $('#logostart');
    $("#app").addClass('main-menu--active');
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
    if($('.hamburger').hasClass('hamburger--active')) {
        pageTitle.show();
        logoImg.show();
        modal.hide();
        logoshow.hide();
        slideBar.hide();
        footer.hide();
        logostart.hide();
    } else {
        $('#slick-slider').css({"visibility":"visible", "filter":"blur(0)"});
        $('#loader').css("opacity",1);
        pageTitle.hide();
        logoImg.hide();
        modal.show();
        logoshow.show();
        slideBar.show();
        footer.show();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});

$(window).resize(function(){
    var windowWdth = $(window).width();
    
    if(windowWdth < 768) {
        slideBar.hide();
    }
})
