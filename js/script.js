//Mobile menu
$('.nav-btn').click(function() {
  $(this).toggleClass('nav-btn--close');
  $('.nav').slideToggle();
})
