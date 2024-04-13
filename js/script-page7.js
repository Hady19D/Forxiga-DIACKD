$(".contaner").click(function () {
  $(".w").animate({ width: "475px" }, 3000);
});

$(".sdbtn").click(function () {
  $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn").fadeOut();
  $(".sdpic,.closebtn1").fadeIn();
  $(".closebtn1").click(function () {
    $(".sdpic,.closebtn1").fadeOut();
    $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn").fadeIn();
  });
});

$(".refbtn").click(function () {
  $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn").fadeOut();
  $(".refpic,.closebtn").fadeIn();
  $(".closebtn").click(function () {
    $(".refpic,.closebtn").fadeOut();
    $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn").fadeIn();
  });
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page8.html";
  },

  swipeRight: function () {
    window.location = "index-page6.html";
  },
});
