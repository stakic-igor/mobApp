$('.hamburger').on('click', function() {
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
});