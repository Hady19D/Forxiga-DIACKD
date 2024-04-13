$(".contaner").click(function () {
  $(".swipbtn1,.swipbtn2").fadeIn();
});

$(".swipbtn1").click(function () {
  $(".pic2").hide();
  $(".pic1").fadeIn(function () {
    $(".bg1").attr(
      "src",
      "imgs/Forxiga DIACKD Flow New detail aid Page 20/Forxiga DIACKD Flow New detail aid20-1.png"
    );
  });
});

$(".swipbtn2").click(function () {
  $(".pic1").hide();
  $(".pic2").fadeIn(function () {
    $(".bg1").attr(
      "src",
      "imgs/Forxiga DIACKD Flow New detail aid Page 21/Forxiga DIACKD Flow New detail aid21-1.png"
    );
  });
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page7.html";
  },

  swipeRight: function () {
    window.location = "index-page5.html";
  },
});
