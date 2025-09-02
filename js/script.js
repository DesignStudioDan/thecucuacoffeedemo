// opening
$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
  return false;
});

$(".hmenu").click(function () {
  $(this).toggleClass("close");
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#sp-nav").toggleClass("nav-active"); //ナビゲーションにpanelactiveクラスを付与
});

$("#sp-nav").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".hmenu").removeClass("active"); //ボタンの activeクラスを除去し
  $("#sp-nav").removeClass("nav-active"); //ナビゲーションのpanelactiveクラスも除去
  $(".hmenu").removeClass("close");
});

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".scroll_up");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});

// slider
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 6000,
  dots: true,
  fade: true,
  speed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
      },
    },
  ],
});

// pagetop
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 200) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});
