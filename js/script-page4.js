$(".refbtn1").click(function () {
  $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3,.plusbtn").fadeOut();
  $(".refpic,.closebtn").fadeIn();
});

$(".closebtn").click(function () {
  $(".refpic,.closebtn").fadeOut();
  $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3,.plusbtn").fadeIn();
});

$(".plusbtn").click(function () {
  $(".pluspic,.sdbtn1,.sdbtn2,.closebtn1").fadeIn();
  $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3,.plusbtn").fadeOut();
  $(".closebtn1").click(function () {
    $(".pluspic,.sdbtn1,.sdbtn2").fadeOut();
    $(".bg,.refbtn1,.pibtn,.pic1,.pic2,.pic3,.plusbtn").fadeIn();
  });
});

$(".sdbtn1").click(function () {
  $(".pluspic,.sdbtn1,.sdbtn2").fadeOut();
  $(".sdpic1,.closebtn2").fadeIn();
  $(".closebtn2").click(function () {
    $(".sdpic1,.closebtn2").fadeOut();
    $(".pluspic,.sdbtn1,.sdbtn2").fadeIn();
  });
});

$(".sdbtn2").click(function () {
  $(".pluspic,.sdbtn1,.sdbtn2").fadeOut();
  $(".sdpic2,.closebtn3").fadeIn();
  $(".closebtn3").click(function () {
    $(".sdpic2,.closebtn3").fadeOut();
    $(".pluspic,.sdbtn1,.sdbtn2").fadeIn();
  });
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page5.html";
  },

  swipeRight: function () {
    window.location = "index-page3.html";
  },
});
