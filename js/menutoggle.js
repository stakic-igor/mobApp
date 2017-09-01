var slideBar = $('.slide-bar');
$('.hamburger').on('click', function() {
    document.getElementById('myCarousel').style.visibility = "hidden";
    var pageTitle = $('.sub-page__header');
    var modal = $('.modal-f');
    var logoshow = $('#logoshow');
    var logoImg = $('.logoImg');
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
    } else {
        document.getElementById('myCarousel').style.visibility = "visible";
        pageTitle.hide();
        logoImg.hide();
        modal.show();
        logoshow.show();
        slideBar.show();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});

$(window).resize(function(){
    var windowWdth = $(window).width();
    
    if(windowWdth < 768) {
        slideBar.hide();
    }
})
