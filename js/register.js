// LOCALHOOPS Register Page

$(document).ready(function () {
    console.log("register.js loaded and ready");
  
    $(".reg-itm__contr").mouseenter(function () {
      regItemHover(this);
    });
  
    $(".reg-itm__contr").mouseleave(function () {
      regItemHover(this);
    });
  }); // End doc ready
  
  function regItemHover(regItem) {
    if (window.matchMedia("(min-width: 991px)").matches) {
      $(regItem).toggleClass("reg-hvr__card");
      $(regItem).children("h3").toggleClass("reg-hvr__h");
      $(regItem).children("p").toggleClass("reg-hvr__p");
    }
  }
  
  