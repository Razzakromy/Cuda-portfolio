$(document).ready(function () {
  // Sticky Menu
  $(".js_services_section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  // MIX IT UP (PORTFOLOIO)
  var mixer = mixitup(".container");

  // SMOOOTH SCROLL FOR IE/EDGE/SAFARI
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        300,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
