// LOCALHOOPS Template Pages

// Init

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

var version = 1;
// Page connections

var firstContent = "#first-content-js";
var outroSection = ".tmplt-outro-js";
var bgVidWrap = ".pg-bg__vid-wrap-js";
var introText = ".tmplt__pg-intro-js";
var bgOverlay = ".tmplt__pg-bg-overlay-js";
var moreButton = ".pg-intro__more-js";

$(document).ready(function () {
  console.log("inner-pages-all.js v" + version);

  // Animation Definitions

  // Scroll from intro to main content

  let introScroll = gsap.timeline({
    scrollTrigger: {
      trigger: firstContent,
      start: "top 95%",
      end: "top 50%",
      scrub: true
      //markers: true
    } // end ScrollTrigger
  });
  introScroll.to(bgVidWrap, { opacity: 0 }); // Fade bg video opacity to zero
  introScroll.to(introText, { opacity: 0 }, "<"); // Fade intro text opacity to zero
  introScroll.to(bgOverlay, { backgroundColor: "rgba(255,255,255,0.85)" }, "<"); // Change bg overlay color from black to white

  // Scroll from main content to outro

  let outroScroll = gsap.timeline({
    scrollTrigger: {
      trigger: outroSection,
      start: "top 50%",
      end: "top 0%",
      scrub: true,
      //markers: true
    } // end ScrollTrigger
  });

  outroScroll.to(bgVidWrap, { opacity: 100 });
  outroScroll.to(bgOverlay, { backgroundColor: "rgba(0,0,0,0.25)" }, "<");

  // Learn More Button Scroll

  var scrollMore = gsap.to(window, {
    duration: 1,
    scrollTo: { y: firstContent, offsetY: 0.1 * innerHeight },
    paused: true
  });

// Event Handlers 

  $(moreButton).click(function () {
    scrollMore.restart();
  });
}); // End doc ready

