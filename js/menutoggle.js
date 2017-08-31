$('.hamburger').on('click', function() {
    document.getElementById('myCarousel').style.visibility = "hidden";
    var pageTitle = $('.sub-page__header');
    $("#app").addClass('main-menu--active');
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
    if($('.hamburger').hasClass('hamburger--active')) {
        pageTitle.show();
    } else {
        document.getElementById('myCarousel').style.visibility = "visible";
        pageTitle.hide();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});