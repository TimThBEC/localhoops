// LOCALHOOPS Sandbox Page

var sBoxTarget = ".sbox__target-js";

$(document).ready(function () {
  gsap.registerPlugin(ScrollToPlugin, MorphSVGPlugin);

  console.log("sandbox.js loaded and ready");

  $(sBoxTarget).css({ opacity: 0.5 });
  $(sBoxTarget).css({
    opacity: 0.5,
    transform: "scale(3,3) translateX(20vw)"

    //transform: "translateX(20vw)"
  });
  //  $(sBoxTarget).css({ transform: "scale(3,3)" });

  //GSAP Stuff
  var playBox = gsap.to(".sbox__target-js", {
    x: "+=5vw",
    rotation: "720deg",
    duration: 1,
    paused: true,
    id: "playBox"
  });

  $("#run-button-js").click(function () {
    console.log("Run button clicked");
    playBox.play();
  });

  $("#reset-button-js").click(function () {
    console.log("Reset button clicked");
    playBox.progress(0);
    playBox.pause();
  });

  // GSDevTools.create();
}); // End doc ready
