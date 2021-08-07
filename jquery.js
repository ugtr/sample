$(function() {
  $('.btn-trigger').on('click', function() {
    $('#btn').toggleClass('active');
    $('.click-color').toggleClass('active');
    $('.btn-nav').toggleClass('active');
  });
  $('.click-color').on('click', function() {
    $('#btn').toggleClass('active');
    $('.click-color').toggleClass('active');
    $('.btn-nav').toggleClass('active');
  });
  $('.sec-nav').on('click', function() {
    $('#btn').toggleClass('active');
    $('.click-color').toggleClass('active');
    $('.btn-nav').toggleClass('active');
  });
});
$('.slider').slick({
  autoplay:true,
  dots:true,
  centerMode:true,
  centerPadding:'25%',
});
