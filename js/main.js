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

  $('.product_slider').slick({
    arrows:false,
    slidesToShow: 5,
    dots: true
  });

  $('.product_list .arrows .left').on('click', function(){
    $('.product_slider').slick('slickPrev')
  })

  $('.product_list .arrows .right').on('click', function(){
    $('.product_slider').slick('slickNext')
  });

  $('#bgndVideo').YTPlayer();

  $('.utb_movie .left').on('click',function(){
    $('#bgndVideo').YTPPause();
  });

  $('.utb_movie .right').on('click',function(){
    $('#bgndVideo').YTPPlay();
  });

  $('.customer_tab .tab_menu>li').on('click',function(){
    var idx=$(this).index(); //0, 1, 2
    $(this).addClass('on').siblings().removeClass('on');
    $('.customer_tab .tab_content>div')
    .eq(idx).addClass('on')
    .siblings()
    .removeClass('on');
  });

  $('#flink').on('change', function(){
    var lik = $(this).val();
    if(lik) window.open(lik)
  });

  $('.popup button').on('click',function(){
    $(this).parent().hide();
  })

})


