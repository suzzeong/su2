$(function(){
  $('.top_banner i').on('click', function(){
    $('.top_banner').slideUp();
    // $('.top_banner').hide();   - 배너없애기
    // console.log('큰일했네....')    - 콘솔에 클릭한거 찍히기..?
  });

  $('.main_slider').on('init reInit afterChange', function(e,s,c){
    console.log(e,s,c);
    var TG = $('.main_slider .slick-current');
    TG.addClass('xxx').siblings().removeClass('xxx');
    $('.num').text((c ? c+1 : 1) + '/'  + s.slideCount);
  });

  $('.main_slider').slick({
    // arrows: false,
    autoplay: true,
    // autoplaySpeed: 1000, - 1초
    autoplaySpeed: 4000,
    pauseOnHover: false,
    dots: true,
  });

})


