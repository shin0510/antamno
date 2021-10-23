$(function(){
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
  });

  $(window).scroll(function(){
    let s=$(this).scrollTop();
    let w=$(window).width();
    if(s>=660 && w>=500){
      $("#scroll").addClass("do");
    }else{
      $("#scroll").removeClass("do");
    }
  })
})