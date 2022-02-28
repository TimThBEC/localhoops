// LOCALHOOPS Training Page

// Page connections for nested reg cards

var parentItems = ".offering__item-js"; // An object containing all the offerings shown on the page (filtered at the offering__wrap level)
var parentTitles = ".offering__title-js"; // An object containing all the offering titles
var childList = ".regs__list-js"; // An object containing all the instances of the div into which the registrations are to be placed (one per offering)
var childItems = ".reg__item-js"; // An object containing all registration items in the registration collection
var childParentTitles = ".regs__wrap-js .reg__offering-js"; // An object containing the offerings associated with all the registration items in the registrations collection

// Page connections for event handlers

// Doc Ready

$(document).ready(function () {
  console.log("training.js loaded and ready");

  // Load training registrations to offerings
  loadRegs();

  $(childItems).mouseenter(function () {
    cardHover(this);
  });

  $(childItems).mouseleave(function () {
    cardHover(this);
  });
}); // End doc ready

//Functions

// Card hover animation

function cardHover(actionedItem) {
  $(actionedItem).toggleClass("scale-up-js");
}

// Load training registrations to offerings

function loadRegs() {
  let nbrOfferings = $(parentTitles).length;
  let nbrRegs = $(childParentTitles).length;

  for (var i = 0; i < nbrRegs; i++) {
    let regOffering = $(childParentTitles).eq(i); // The offering associated wiht this specific registration instance
    let regOfferingName = $(regOffering).text();

    for (var j = 0; j < nbrOfferings; j++) {
      let offering = $(parentTitles).eq(j);
      let offeringName = $(offering).text();

      if (regOfferingName === offeringName) {
        let registration = regOffering.closest(childItems);
        let offeringItem = offering.closest(parentItems);
        let regsContainer = offeringItem.find(childList);
        registration.clone(true, true).appendTo(regsContainer);
      } // end if
    } // end inner loop through offerings
  } // end outer loop through registration offerings
} // end loadRegs function
