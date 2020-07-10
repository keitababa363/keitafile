$(function() {

  $('.top').fadeIn(2000);

  　$('.hamburgerMenu').click(function() {
  　　$(".line,.globalMenu").toggleClass('active');
  });

  $(".profileContent").css({opacity:"0"});
  $(window).scroll(function (){
    $(".profileContent").each(function(){
      var ePos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight/3){
        $(this).animate({ opacity: 1 }, { duration: 800, easing: 'swing'})
      }
    });
  });

  $(".serviceText").css({opacity:"0"});
  $(window).scroll(function (){
    $(".serviceText").each(function(){
      var ePos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight/3){
        $(this).animate({ opacity: 1 }, { duration: 800, easing: 'swing'})
      }
    });
  });
});