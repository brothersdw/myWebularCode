$(document).ready(function() {
  $('.hideMe').hide(),
  $('.hideMe2').hide();
  $('#onHover').hover(function() {
    $('.hideMe').fadeIn(1000);
  },
  function() {
    $('.hideMe').hide();
  });
  $('#gallery').click(function() {
    if($('body').hasClass('')) {
      $('#ipsum').hide(),
      $('#about').fadeIn(500),
      $('body').addClass('galleryBackground');
    }else if($('body').hasClass('original')) {
      $('#ipsum').hide(),
      $('#about').fadeIn(500),
      $('body').removeClass('original'),
      $('body').addClass('galleryBackground');
    }
  });
  $('#borderLeft').click(function() {
    if($('body').hasClass('galleryBackground')) {
      $('#about').hide(),
      $('#ipsum').fadeIn(500),
      $('body').removeClass('galleryBackground'),
      $('body').addClass('original');
    }
  });
});