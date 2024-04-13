$(".contaner").click(function () {
  $(".w").animate({ height: "40%" }, 2000);
});

$(".refbtn").click(function () {
  $(".refpic,.closebtn").fadeIn("slow");
  $(".bg,.pic1,.w").fadeOut();
  $(".refbtn,.homebtn,.pibtn,.sdbtn,.addonbtn1,.addonbtn2").hide();
  $(".closebtn").click(function () {
    $(".refpic,.closebtn").fadeOut("slow");
    $(".bg,.pic1,.w").fadeIn();
    $(".refbtn,.homebtn,.pibtn,.sdbtn,.addonbtn1,.addonbtn2").show();
  });
});

/*$(".sdbtn").click(function () {
  $(".sdpic1").fadeIn();
  $(".refbtn,.pibtn,.homebtn,.sdbtn").hide();
  $(".closebtn").show();
  $(".closebtn").click(function () {
    $(".sdpic1").fadeOut();
    $(".closebtn").hide();
    $(".refbtn,.pibtn,.homebtn,.sdbtn").show();
  });
});

$(".addonbtn1").click(function () {
  $(".addonbtn1,.refbtn,.homebtn,.pibtn,.sdbtn").hide();
  $(".bg,.w,.pic1").fadeOut();
  $(".addonpic1,.closebtn1,.sdbtn2").fadeIn();
  $(".closebtn1").click(function () {
    $(".bg,.w,.pic1").fadeIn("slow");
    $(".addonpic1,.closebtn1").hide("slow");
    $(".refbtn,.homebtn,.pibtn,.addonbtn1,.addonbtn2,.sdbtn").show();
  });
  $(".sdbtn2").click(function () {
    $(".bg,.w,.pic1").fadeOut();
    $(".sdpic1").fadeIn("slow");
    $(".closebtn1,.addonbtn2,.sdbtn2").hide();
    $(".closebtn2").show();
    $(".closebtn2").click(function () {
      $(".sdpic1").fadeOut("slow");
      $(".addonpic1,.closebtn1,.sdbtn2,.addonbtn2").fadeIn();
      $(".closebtn2").hide();
    });
  });
});

$(".addonbtn2").click(function () {
  $(".bg,.pic1,.w").fadeOut("slow");
  $(".addonpic2").fadeIn("slow");
  $(".addonbtn2,.closebtn1,.sdbtn2").hide();
  $(".closebtn3,.addonbtn1,.addonbtn3,.addonbtn4,.sdbtn3").show();
  $(".closebtn3").click(function () {
    $(".addonpic2").fadeOut("slow");
    $(".closebtn3").hide();
    $(".addonpic1").fadeIn("slow");
  });
});
/*$(".addonbtn2").click(function () {
  $(".addonpic2").fadeIn();
  $(".addonbtn2,.closebtn2,.addonbtn2,.sdbtn2").hide();
  $(".closebtn3,.addonbtn1,.addonbtn3,.addonbtn4,.sdbtn3").show();
  $(".sdbtn3").click(function () {});
  $(".closebtn3").click(function () {
    $(".bg,.w,.pic1").fadeIn();
    $(".refbtn,.homebtn,.pibtn,.addonbtn1,.addonbtn2,.sdbtn").show();
    $(".closebtn3,.addonbtn1,.addonbtn3,.addonbtn4,.sdbtn3").hide();
  });

  $("addonbtn3").click(function () {
    $(".addonpic3").fadeIn();
    $(".addonbtn3,.closebtn4,.sdbtn2").hide();
    $(".closebtn4,.addonbtn1,.addonbtn2,.addonbtn4,.sdbtn3").show();
    $(".closebtn4").click(function () {
      $(".addonpic2").fadeIn();
      $(".closebtn3,.addonbtn1,.addonbtn3,.addonbtn4").show();
    });
  });
});*/

/*$(".sdbtn").click(function () {
  $(
    ".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1,.addonbtn2"
  ).fadeOut();
  $(".sdpic,.closebtn1").show();
  $(".closebtn1").click(function () {
    $(".sdpic,.closebtn1").hide();
    $(
      ".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1,.addonbtn2"
    ).fadeIn();
  });
});

$(".refbtn").click(function () {
  $(
    ".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1,.addonbtn2"
  ).fadeOut();
  $(".refpic,.closebtn").show();
  $(".closebtn").click(function () {
    $(".refpic,.closebtn").hide();
    $(
      ".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1,.addonbtn2"
    ).fadeIn();
  });
});

$(".addonbtn1").click(function () {
  $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1").fadeOut();
  $(".addonpic1,.closebtn2,.addonbtn2").fadeIn();
  $(".closebtn2").click(function () {
    $(".addonpic1").slideUp("slow");
    $(
      ".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn1,.addonbtn2"
    ).fadeIn("SLOW");
  });
});

$(".addonbtn2").click(function () {
  $(".bg,.pic1,.w,.refbtn,.pibtn,.homebtn,.sdbtn,.addonbtn2").fadeOut();
  $(".addonpic2,.closebtn3,.addonbtn1,.addonbtn3,.addonbtn4").fadeIn();
  $(".closebtn3").click(function () {
    $(".addonpic2").slideUp("slow");
    $(".addonpic1,.sdbtn,.addonbtn1,.addonbtn2,.addonbtn3,.addonbtn4").fadeIn(
      "SLOW"
    );
  });

  $(".addonbtn3").click(function () {
    $(".sdbtn,.addonbtn3").fadeOut();
    $(".addonpic2,.closebtn4,.addonbtn2,.addonbtn1,.addonbtn4").fadeIn();
    $(".closebtn4").click(function () {
      $(".addonpic3").slideUp("slow");
      $(".addonpic1,.sdbtn,.addonbtn1,.addonbtn2,.addonbtn3,.addonbtn4").fadeIn(
        "SLOW"
      );
    });
  });
});*/

$(".contaner").swipe({
  swipeLeft: function () {
    window.location = "index-page9.html";
  },

  swipeRight: function () {
    window.location = "index-page7.html";
  },
});
