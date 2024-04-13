$(".refbtn1").click(function () {
  $(".bg,.refbtn1,.pibtn").fadeOut();
  $(".refpic,.closebtn").fadeIn();
});

$(".closebtn").click(function () {
  $(".refpic,.closebtn").fadeOut();
  $(".bg,.refbtn1,.pibtn").fadeIn();
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page2.html";
  },
});
