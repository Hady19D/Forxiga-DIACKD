$(".refbtn1").click(function () {
  $(".bg,.refbtn1,.pibtn,.pic").fadeOut();
  $(".refpic,.closebtn").fadeIn();
});

$(".closebtn").click(function () {
  $(".refpic,.closebtn").fadeOut();
  $(".bg,.refbtn1,.pibtn,.pic").fadeIn();
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page4.html";
  },

  swipeRight: function () {
    window.location = "index-page2.html";
  },
});
