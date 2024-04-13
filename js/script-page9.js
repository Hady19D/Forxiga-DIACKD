$(".refbtn").click(function () {
  $(".bg,.pic1,.pic2,.refbtn,.pibtn,.homebtn").fadeOut();
  $(".refpic,.closebtn").show("slow");
  $(".closebtn").click(function () {
    $(".refpic,.closebtn").hide();
    $(".bg,.pic1,.pic2,.refbtn,.pibtn,.homebtn").show("slow");
  });
});

$(".contaner").swipe({
  swipeRight: function () {
    window.location = "index-page8.html";
  },
});
