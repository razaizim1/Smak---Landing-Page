let preloader = document.getElementById("preloader");
function myFunction() {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 000);
}

$(document).ready(function () {
  AOS.init();
  $("#myCarousel").owlCarousel({
    items: 6,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angles-left"></i>',
      '<i class="fa-solid fa-angles-right"></i>',
    ],
  });

  $("#message").owlCarousel({
    items: 1,
    loop: true,
  });

  $(".member1").click(function () {
    $(".first-arrow").slideToggle(1000);
  });
  $(".member2").click(function () {
    $(".second-arrow").slideToggle();
  });
  $(".member3").click(function () {
    $(".third-arrow").slideToggle();
  });
  $(".member4").click(function () {
    $(".fourth-arrow").slideToggle();
  });

  $(".first-arrow i").click(function () {
    $(".first-arrow").slideToggle(1000);
  });
  $(".second-arrow i").click(function () {
    $(".second-arrow").slideToggle(1000);
  });
  $(".third-arrow i").click(function () {
    $(".third-arrow").slideToggle(1000);
  });
  $(".fourth-arrow i").click(function () {
    $(".fourth-arrow").slideToggle(1000);
  });


  // MagnificPopup
  $(".parent-container .image a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });


  // Progress Bar

  $(".first.circle")
    .circleProgress({
      value: 0.9,
      thickness:5,
      fill: "#ffe600",
      emptyFill:"#fff",
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(90 * progress) + "<i>%</i>");
    });


  $(".second.circle")
    .circleProgress({
      value: 0.96,
      thickness:5,
      fill: "#ffe600",
      emptyFill:"#fff",
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(96 * progress) + "<i>%</i>");
    });


  $(".third.circle")
    .circleProgress({
      value: 0.85,
      thickness:5,
      fill: "#ffe600",
      emptyFill:"#fff",
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(85 * progress) + "<i>%</i>");
    });


  $(".fourth.circle")
    .circleProgress({
      value: 0.94,
      thickness:5,
      fill: "#ffe600",
      emptyFill:"#fff",
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(94 * progress) + "<i>%</i>");
    });
});
