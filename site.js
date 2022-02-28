/*

SITE JS CUT & PASTE -----------------------------------------------------------------

*/

$(document).ready(function () {
    console.log("site.js loaded and ready");
  
    // Explore menu events
  
    // Hover-in for minimized Explore tab
    $("#explore-tab-js").mouseenter(function () {
      exploreMenuShowHide();
    });
  
    // Hover-out for maximized Explore menu
    $("#explore-menu-js").mouseleave(function () {
      exploreMenuShowHide();
    });
  
    // Hover-in/out for individual items on Explore menu
    $(".mega__link-blk-js").hover(
      function () {
        megaItemHover(this);
      },
      function () {
        megaItemHover(this);
      }
    );
  }); // End doc ready
  
  // Explore menu functions
  
  function exploreMenuShowHide() {
    if (window.matchMedia("(min-width: 991px)").matches) {
      $("#explore-menu-js").slideToggle(200);
      $("#explore-tab-js").toggleClass("tab-hover-js");
      $("#explore-tab-js").children("p").toggleClass("text-red-js");
    }
  }
  
  function megaItemHover(menuItem) {
    if (window.matchMedia("(min-width: 991px)").matches) {
      $(menuItem).toggleClass("active-menu-item-js");
      $(menuItem).children("p").toggleClass("text-white-js");
    }
  }
  