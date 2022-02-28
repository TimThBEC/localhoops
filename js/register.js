// LOCALHOOPS Register Page

var version = 1;

$(document).ready(function () {
    console.log("register.js v" + 1);
  
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
  
  