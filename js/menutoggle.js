$('.hamburger').on('click', function() {
    document.getElementById('myCarousel').style.visibility = "hidden";
    var pageTitle = $('.sub-page__header');
    var modal = $('.modal-f');
    $("#app").addClass('main-menu--active');
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
    if($('.hamburger').hasClass('hamburger--active')) {
        pageTitle.show();
        modal.hide();
    } else {
        document.getElementById('myCarousel').style.visibility = "visible";
        pageTitle.hide();
        modal.show();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});