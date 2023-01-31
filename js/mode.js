$(function () {
  $(".mode #day")
    .stop()
    .click(function () {
      $("body").stop().css({ backgroundColor: "#fff" });
      $(".fixed .logo img").attr("src", "../img/gray_logo.png");
      $("#About h2").css({ color: "#333" });
      $("#About .path").css({ stroke: "#333" });
      $("#design .first-parallel").css({ color: "#333" });
      $("#design h2").css({ color: "#333" });
      $("#contact .contact-text-wrapper h3").css({ color: "#333" });
      $("#contact .contact-text-wrapper h4").css({ color: "#333" });
      $("#contact .contact-text-wrapper input").css({
        backgroundColor: "black",
      });
      $("#contact .contact-text-wrapper input").css({ color: "white" });
      $("#contact .circle .contact-text span").css({ color: "#333" });
      $("#contact .contact-scroll h2").css({ color: "#333" });
    });
  $(".mode #night")
    .stop()
    .click(function () {
      $("body").stop().css({ backgroundColor: "black" });
      $(".fixed .logo img").attr("src", "../img/white_logo.png");
      $("#About h2").css({ color: "#fff" });
      $("#About .path").css({ stroke: "#fff" });
      $("#design .first-parallel").css({ color: "#fff" });
      $("#design h2").css({ color: "#fff" });
      $("#contact .contact-text-wrapper h3").css({ color: "#fff" });
      $("#contact .contact-text-wrapper h4").css({ color: "#fff" });
      $("#contact .contact-text-wrapper input").css({
        backgroundColor: "white",
      });
      $("#contact .contact-text-wrapper input").css({ color: "black" });
      $("#contact .circle .contact-text span").css({ color: "#fff" });
      $("#contact .contact-scroll h2").css({ color: "#fff" });
    });
});
