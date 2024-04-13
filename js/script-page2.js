$(".refbtn1").click(function () {
  $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3").fadeOut();
  $(".refpic,.closebtn").fadeIn();
});

$(".closebtn").click(function () {
  $(".refpic,.closebtn").fadeOut();
  $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3").fadeIn();
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page3.html";
  },

  swipeRight: function () {
    window.location = "index-page1.html";
  },
});
