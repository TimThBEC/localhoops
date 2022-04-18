// LOCALHOOPS homepage js

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

var version = 2.6;

var popUpOn = false; // Set to true to turn on popup
var devToolsOn = false; // Set to true to turn on GSAP Dev Tools

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introVid = ".intro__vid-js"; // Lion explosion video
var introImg = ".intro__img-js"; // Golden Lion graphic
var introContainer = ".hero__intro-contr-js"; // Container for video and graphic
var titleMain1 = ".title__main-1-js"; // LOCAL text
var titleMain2 = ".title__main-2-js"; // HOOPS text
var subtitle = ".title__sub-js"; // TRAINING ACADEMY text
var tagline = ".title__tag-js"; // SIAH text
var heroTitles = ".hero__titles-js"; // All text and elements on intro page

var misssonScroll = ".mission__scroll-js"; // Mission scroll section
var missionKP = ".mission__scroll-js .key-pt-js"; // Key points in coaches section

var coaches = ".coaches-js"; // Coaches section
var coachesKP = ".coaches-js .key-pt-js"; // Key points in coaches section
var coachesBG = ".coaches__bg-js"; // Coaches background video

var academy = ".academy-js"; // Academy section
var academyKP = ".academy-js .key-pt-js"; // Key points in academy section
var oshe = ".oshe-js"; // Oshe video

var testimonials = ".testimonials-js"; // Testimonials section
var testimonialsKP = ".testimonials-js .key-pt-js"; // Key points in testimonials section
var testimonialsBG = ".testimonials__bg-js"; // Testimonials BG image

var offerings = ".offerings-js"; // Offerings section
var offeringsKP = ".offerings-js .key-pt-js"; // Key points in offerings section
var offeringsContent = ".offerings__contr-js"; // Container for offerings cards

var close = ".close-js"; // Close section
var closeKP = ".close-js .key-pt-js"; // Key points in close section
var closeSlider = ".close__slider-js"; // Picture slider in close section

var bballOutlines = ".bball-outlines"; // Paths in basketball outline embed
var bballVid = ".vid__skills-trng-js"; // Skills training video inside basketball

var tenYrGraphic = ".ten-yr-js";

var star1 = "#star1";
var star2 = "#star2";
var star3 = "#star3";
var star4 = "#star4";
var star5 = "#star5";
var star6 = "#star6";
var star7 = "#star7";
var star8 = "#star8";
var star9 = "#star9";
var star10 = "#star10";

var starPath1 = "#starPath1";
var starPath2 = "#starPath2";
var starPath3 = "#starPath3";
var starPath4 = "#starPath4";
var starPath5 = "#starPath5";
var starPath6 = "#starPath6";
var starPath7 = "#starPath7";
var starPath8 = "#starPath8";
var starPath9 = "#starPath9";
var starPath10 = "#starPath10";

var allStars =
  "#star1, #star2, #star3, #star4, #star5, #star6, #star7, #star8, #star9, #star10";

var starEase = "back.out(1)";
var starRotate = "360deg";
var starScale = 0;
var starDuration = 0.5;
var starStagger = "<+=0.05";

var tenYrLion = "#ten-yr-lion";
var tenYrNbrs = "#ten-yr-numbers";
var tenYrTagline = ".ten-yr__tag-js";
var tenYrNbrsTag = "#ten-yr-numbers, .ten-yr__tag-js";
var numbersDelay = ">-0.25"; // Bigger number means less delay

var darkGold = "#7f6400";
var superLightGray = "#eae9ea";
var blackPurpleGradient = "linear-gradient(135deg, #000000, 60%, #230773)";

// Page Intro Timeline - Title entries, lion graphic appearance, explsion video fade to background video

var introTL = gsap.timeline({
  id: "intro",
  paused: true
});

// Intro Fade Scroll Timeline - Title fade and lion move on first scroll

var introFade = gsap.timeline({
  id: "introFade",
  scrollTrigger: {
    trigger: misssonScroll,
    start: "33.33% bottom",
    end: "80% top",
    //markers: true,
    scrub: true
  }
});

// Mission Scroll Timeline

var missionFadeTL = gsap.timeline({
  id: "missionFade",
  scrollTrigger: {
    trigger: misssonScroll,
    start: "33.33% bottom",
    end: "33.33% top",
    //markers: true,
    scrub: true
  }
});

var missionTL = gsap.timeline({
  id: "mission",
  scrollTrigger: {
    trigger: misssonScroll,
    start: "33.33% bottom",
    end: "80% top",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Coaches Scroll Timeline

var coachesTL = gsap.timeline({
  id: "coaches",
  scrollTrigger: {
    trigger: coaches,
    start: "top 66%",
    end: "top 10%",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Academy Scroll Timeline

var academyTL = gsap.timeline({
  id: "academy",
  scrollTrigger: {
    trigger: academy,
    start: "top 66%",
    end: "top 10%",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Testimonials Scroll Timeline

var testimonialsTL = gsap.timeline({
  id: "testimonials",
  scrollTrigger: {
    trigger: testimonials,
    start: "top bottom",
    end: "top 10%",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Offerings Scroll Timeline

var offeringsTL = gsap.timeline({
  id: "offerings",
  scrollTrigger: {
    trigger: offerings,
    start: "top bottom",
    end: "top top",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Close Scroll Timeline

var closeTL = gsap.timeline({
  id: "close",
  scrollTrigger: {
    trigger: close,
    start: "top 66%",
    end: "top 10%",
    //markers: true,
    once: true,
    scrub: true
  }
});

// Ten Year Graphic Timeline

var tenYrTL = gsap.timeline({
  id: "tenYr",
  scrollTrigger: {
    //markers: true,
    trigger: tenYrGraphic,
    start: "0% 60%",
    end: "0% 60%"
  }
});

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {
  console.log("home.js v" + version);

  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  }); // Scroll to top on refresh

  $("#lionVideo video").removeAttr("loop"); // Stop loop on intro video

  gsapTLs();
  introPlay();
  constructSplide();

  //Pop up event handler

  $(".pop-up__overlay, .pop-up__close-icon").click(popUpShowHide);

  // GSAP Dev Tools

  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}); // End doc ready

/* 
    ---------- Function definitions ----------
*/

function gsapTLs() {
  // Build Intro Timeline

  introTL.to(titleMain1, {
    // Note this is to instead of from to prevent flash on load
    opacity: 1,
    duration: 1.5,
    ease: "none"
  }); // "LOCAL" text opacity

  introTL.from(
    titleMain1,
    {
      x: "50vw",
      scale: (6, 6),
      transformOrigin: "0% 0%",
      duration: 1.5,
      ease: "power2.out"
    },
    "<"
  ); // LOCAL text move and scale

  introTL.from(
    titleMain1,
    {
      color: darkGold,
      duration: 0.5,
      ease: "none"
    },
    "1"
  ); // LOCAL text bg color

  introTL.addLabel("LOCAL Done");

  introTL.to(
    titleMain2,
    {
      opacity: 1,
      duration: 1.5,
      ease: "none"
    },
    "0.75"
  ); // HOOPS text opacity

  introTL.from(
    titleMain2,
    {
      x: "50vw",
      scale: (6, 6),
      transformOrigin: "0% 0%",
      duration: 1.5,
      ease: "power2.out"
    },
    "<"
  ); // HOOPS text move & scale

  introTL.from(
    titleMain2,
    {
      color: darkGold,
      duration: 0.5,
      ease: "none"
    },
    "1.75"
  ); // HOOPS text bg color

  introTL.set(subtitle, { opacity: 1 }, "1.25"); // TRAINING ACADEMY text

  introTL.from(
    subtitle,
    {
      xPercent: -100,
      duration: 1,
      ease: "power2.out"
    },
    "<"
  ); // TRAINING ACADEMY text slide in

  introTL.set(tagline, { opacity: 1 }, "1.75"); // SIAH Text

  introTL.from(
    tagline,
    {
      x: "100vw",
      duration: 1,
      ease: "power2.out"
    },
    "<"
  ); // SIAH text slide in

  introTL.to(
    introVid,
    {
      opacity: 0,
      duration: 0.25
    },
    "2.25"
  ); // Explosion Video fade out

  introTL.to(
    introContainer,
    { backgroundColor: "transparent", duration: 0.25 },
    "<"
  ); // Container bg to transparent so can see bg video

  introTL.to(introImg, { opacity: 1, duration: 0.5 }, "<"); // Golden Lion Graphic opacity

  introTL.from(
    introImg,
    {
      scale: (0.75, 0.75),
      x: 0,
      duration: 1,
      ease: "power2.in"
    },
    "<"
  ); // Golden Lion Graphic move right & scale

  // Build intro fade timeline

  introFade.to(heroTitles, {
    opacity: 0,
    ease: "none"
  });

  introFade.to(
    introContainer,
    {
      y: "-110vh",
      ease: "none"
    },
    "<"
  );

  // Build mission fade scroll timeline

  missionFadeTL.from(misssonScroll, {
    opacity: 0,
    ease: "none"
  });

  // Build mission scroll timeline

  missionTL.to(misssonScroll, {
    backgroundImage: blackPurpleGradient,
    ease: "none"
  });

  missionTL.from(missionKP, {
    scale: (0, 0),
    yPercent: 50,
    ease: "none"
  });

  missionTL.from(
    bballOutlines,
    {
      drawSVG: "0% 0%"
    },
    "<"
  );

  missionTL.from(
    bballVid,
    {
      opacity: 0,
      ease: "none"
    },
    "<.12"
  );

  // Build coaches scroll timeline

  coachesTL.from(coachesKP, {
    scale: (0, 0),
    yPercent: 20,
    ease: "none"
  });

  coachesTL.from(
    coachesBG,
    {
      scale: (1.5, 1.5),
      ease: "none"
    },
    "<"
  );

  // Build academy scroll timeline

  academyTL.from(academyKP, {
    scale: (0, 0),
    yPercent: 20,
    ease: "none"
  });

  academyTL.from(
    oshe,
    {
      x: "-40vw",
      ease: "none"
    },
    "<"
  );

  // Build testimonials scroll timeline

  testimonialsTL.from(testimonialsBG, {
    scale: (1.5, 1.5),
    ease: "none"
  });

  testimonialsTL.from(
    testimonialsKP,
    {
      scale: (0, 0),
      yPercent: 20,
      ease: "none"
    },
    "<"
  );

  // Build offerings scroll timeline

  offeringsTL.from(offeringsKP, {
    scale: (0, 0),
    yPercent: 20,
    ease: "none"
  });

  offeringsTL.from(offeringsContent, {
    //opacity: 0,
    scale: (0, 0),
    ease: "none"
  });

  // Build close scroll timeline

  closeTL.from(closeKP, {
    scale: (0, 0),
    yPercent: 20,
    ease: "none"
  });

  closeTL.from(closeSlider, {
    x: "100vw",
    //scale: (0, 0),
    ease: "none"
  });

  // Build ten year graphic timeline

  tenYrTL.set(allStars, {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%"
  });

  tenYrTL.set(tenYrNbrs, {
    xPercent: 50,
    yPercent: 50,
    transformOrigin: "50% 50%"
  });

  tenYrTL.from(star1, {
    scale: (starScale, starScale),
    rotate: starRotate,
    motionPath: {
      path: starPath1,
      align: starPath1
    },
    duration: starDuration,
    ease: starEase
  });

  tenYrTL.from(
    star2,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath2,
        align: starPath2
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star3,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath3,
        align: starPath3
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star4,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath4,
        align: starPath4
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star5,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath5,
        align: starPath5
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star6,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath6,
        align: starPath6
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star7,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath7,
        align: starPath7
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star8,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath8,
        align: starPath8
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star9,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath9,
        align: starPath9
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    star10,
    {
      scale: (starScale, starScale),
      rotate: starRotate,
      motionPath: {
        path: starPath10,
        align: starPath10
      },
      duration: starDuration,
      ease: starEase
    },
    starStagger
  );

  tenYrTL.from(
    tenYrLion,
    {
      yPercent: -150,
      duration: starDuration / 2,
      ease: starEase
    },
    numbersDelay
  );

  tenYrTL.from(
    //tenYrNbrs,
    tenYrNbrsTag,
    {
      scale: (0, 0),
      duration: starDuration / 2,
      ease: starEase
    },
    "<"
  );
} // End of gsapTLs

function introPlay() {
  // Play intro on first visit or configure intro elements if not first visit

  let previousVisit = sessionStorage.getItem("homepagePreviousVisit");

  if (previousVisit !== "true") {
    // First visit to homepage for this session

    sessionStorage.setItem("homepagePreviousVisit", "true"); // Set session storage to mark initial visit
    $(introVid).show(); // Show intro video (explosion & lion)
    introTL.play(); // Play intro GSAP timeline (ext entrance)

    if (popUpOn) {
      setTimeout(popUpShowHide, 4000);
    }
  } else {
    // Not the first visit to the homepage for this session

    $(introContainer).css("background-color", "transparent"); // Set intro video background to transparent

    gsap.set(introImg, { opacity: 1, scale: (1.25, 1.25) });

    if (window.matchMedia("(min-width: 992px)").matches) {
      gsap.set(introImg, { x: "20vw" });
    }

    let fullTitle = titleMain1 + ", " + titleMain2;
    gsap.set(fullTitle, {
      opacity: 1,
      scale: (1, 1),
      x: 0,
      color: superLightGray
    });
    gsap.set(subtitle, { opacity: 1, scale: (1, 1), xPercent: 0 });
    gsap.set(tagline, { opacity: 1, scale: (1, 1), x: 0 });
  } // End else
} // End introPlay

function popUpShowHide() {
  // Show or hide the pop-up

  $(".pop-up").fadeToggle(1000);
} // End popUpShowHide

function constructSplide() {
  // Construct splide slider

  new Splide(".splide", {
    perPage: 4,
    perMove: 1,
    speed: 2000,
    type: "loop",
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    breakpoints: {
      767: {
        perPage: 1
      }
    }
  }).mount();
} //End constructSplide
