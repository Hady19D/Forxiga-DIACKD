$(".refbtn1").click(function () {
  $(".bg,.refbtn1,.pibtn,.pic1").fadeOut();
  $(".refpic1,.closebtn1").fadeIn();
  $(".closebtn1").click(function () {
    $(".refpic1,.closebtn1").fadeOut();
    $(".bg,.refbtn1,.pibtn,.pic1").fadeIn();
  });
});

$(".refbtn2").click(function () {
  $(".bg1,.refbtn2,.pibtn,.pic2").fadeOut();
  $(".refpic2,.closebtn2").fadeIn();
  $(".closebtn2").click(function () {
    $(".refpic2,.closebtn2").fadeOut();
    $(".bg1,.refbtn2,.pibtn,.pic2").fadeIn();
  });
});

$(".swipbtn1").click(function () {
  $(".bg1,.pic2,.swipbtn1,.w,.refbtn2,.sdbtn,.plusbtn").fadeOut();
  $(".bg,.pic1,.swipbtn2,.refbtn1").fadeIn();
});

$(".swipbtn2").click(function () {
  $(".bg,.pic1,.swipbtn2,.refbtn1").fadeOut();
  $(".bg1,.swipbtn1,.w,.refbtn2,.sdbtn,.plusbtn").fadeIn();
  $(".w").click(function () {
    $(".pic2").fadeIn(function () {
      $(".pic2").animate({ width: "100%" }, 2000);
    });
  });
});

$(".sdbtn").click(function () {
  $(".sdpic,.closebtn1").fadeIn();
  $(".pluspic1,.ckdbtn,.sdbtn1,.closebtn3,.bg,.pic2").fadeOut();
  $(".closebtn1").click(function () {
    $(".sdpic,.closebtn1").fadeOut();
    $(
      ".bg1,.pic2,.w,.plusbtn,.swipbtn1,.swipbtn2,.sdbtn,.homebtn,.refbtn,.pibtn"
    ).fadeIn();
  });
});

$(".plusbtn").click(function () {
  $(".bg1,.plusbtn,.pic2,.w,.swipbtn1,.sdbtn,.bg,.pic1").fadeOut();
  $(".pluspic1,.ckdbtn2,.sdbtn1,.closebtn3").fadeIn();

  $(".closebtn3").click(function () {
    $(".bg1,.plusbtn,.pic2,.w,.swipbtn1,.sdbtn").fadeIn();
    $(".pluspic1,.ckdbtn1,.sdbtn1,.closebtn3").fadeOut();
  });
  $(".ckdbtn1").click(function () {
    $(".pluspic1,.ckdbtn1,.sdbtn1,.closebtn3").fadeOut();
    $(".ckdpic,.closebtn4,.cdbtn1,.sdbtn1,.ckdbtn2").fadeIn();
    $(".cdbtn1").click(function () {
      $(".sdpic1,.closebtn5").fadeIn();
      $(".pluspic1,.ckdbtn,.sdbtn1").fadeOut();
      $(".closebtn4").click(function () {
        $(".pluspic1,.ckdbtn2,.sdbtn1,.closebtn3").fadeIn();
        $(".ckdpic,.closebtn4").fadeOut();
      });
      $(".closebtn5").click(function () {
        $(".sdpic1,.closebtn5").fadeOut();
        $(".pluspic1,.ckdbtn1,.sdbtn1").fadeIn();
      });
    });
  });

  $(".ckdbtn2").click(function () {
    $(".ckdpic,.closebtn4,.cdbtn1,.sdbtn1,.ckdbtn1").fadeIn();
    $(".ckdbtn2").fadeOut();
    $(".closebtn4").click(function () {
      $(".pluspic1,.sdbtn1,.closebtn3,.ckdbtn1,.ckdbtn2").fadeIn();
      $(".ckdpic,.closebtn4").fadeOut();
    });
  });

  $(".sdbtn1").click(function () {
    $(".sdpic1,.closebtn5").fadeIn();
    $(".pluspic1,.ckdbtn,.sdbtn1").fadeOut();
    $(".closebtn5").click(function () {
      $(".sdpic1,.closebtn5").fadeOut();
      $(".pluspic1,.ckdbtn,.sdbtn1").fadeIn();
    });
  });
});

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page6.html";
  },

  swipeRight: function () {
    window.location = "index-page4.html";
  },
});
