$(document).ready( function() {
    $('#logostart').delay(3000).fadeOut();
  });
$(document).ready( function() {
    $('#modalfade').delay(4000).fadeIn();
  });

$('.close-modal').click(function(){
  $('#modalfade').delay(1000).fadeOut();
})