jQuery('.drawer-icon').on('click',function(e) {
    e.preventDefault();
  
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
  
    return false;
  });

jQuery('.drawer-link').on('click',function() {

    jQuery('.drawer-icon').removeClass('is-active');
    jQuery('.drawer-content').removeClass('is-active');
    return false;
});
jQuery('.drawer-button').on('click',function() {

    jQuery('.drawer-icon').removeClass('is-active');
    jQuery('.drawer-content').removeClass('is-active');
    return false;
});


  $(window).on('scroll',function(){

    $(".js-marker").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight){
        $(this).addClass('is-active');
      }
    });
    
   });

   new WOW().init();

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  
  
  
  // スムーススクロール動き //
  jQuery('.to-top').on('click', function(){
    $('body, html').animate({scrollTop: 0}, 500);
  });
  
  // ボタンの表示//
  jQuery(window).on('scroll',function(){
    if ( 100 < jQuery(this).scrollTop()){
      jQuery('.to-top').addClass('is-show');
    }else {
      jQuery('.to-top').removeClass('is-show');
    }
  });   