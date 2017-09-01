$('.hamburger').on('click', function() {
    document.getElementById('myCarousel').style.visibility = "hidden";
    var pageTitle = $('.sub-page__header');
    var modal = $('.modal-f');
    var logoshow = $('#logoshow');
    $("#app").addClass('main-menu--active');
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
    if($('.hamburger').hasClass('hamburger--active')) {
        pageTitle.show();
        modal.hide();
        logoshow.hide();
    } else {
        document.getElementById('myCarousel').style.visibility = "visible";
        pageTitle.hide();
        modal.show();
        logoshow.show();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});