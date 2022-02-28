// LOCALHOOPS FAQs Page

// Init

// Page connections

var faq = ".faq-js"; // Set of all faqs
var faqAnswerSet = ".faq__answer-wrap-js"; // Set of all answers
var faqArrowSet = ".faq__arrow-js";
var arrowRotate = "rotate__z-90-js";

$(document).ready(function () {
  console.log("faqs.js loaded and ready");

  // Event Handlers

  $(faq).click(function () {
    toggleAnswer(this);
  });
}); // End doc ready

// Functions

// Toggle FAQ Answer

function toggleAnswer(faqClicked) {
  let faqAnswer = $(faqClicked).find(faqAnswerSet);
  let faqArrow = $(faqClicked).find(faqArrowSet);

  $(faqAnswer).slideToggle();
  $(faqArrow).toggleClass(arrowRotate);
}
