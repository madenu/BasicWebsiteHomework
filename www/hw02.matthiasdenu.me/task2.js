// MATTHIAS T. DENU
// CS 5610 HW2
// 2018-01-20
"use strict"; // disable automatic creation of global variables

(function () {

  var result;
  var resultDisplay;
  var outputDisplay;

  // initialize local variables onload
  function init() {
    outputDisplay = document.getElementById("output");
    resultDisplay = document.getElementById("input");
    result = Number(resultDisplay.innerHTML);
    document.getElementById("alert").addEventListener("click", alert);
    document.getElementById("increment").addEventListener("click", increment);
    document.getElementById("prepend").addEventListener("click", prepend);
  }

  // increment and update the value in the input heading
  function increment() {
    result++;
    resultDisplay.innerHTML = result;
  }

  // display input value in an alert
  function alert() {
    window.alert(result);
  }

  // prepend a new paragraph with the given number to the ouput section
  // NOTE: the design choice was made to use prependChild() because it looks cooler
  function prepend() {
    var p = document.createElement("p");
    p.setAttribute("style", "font-size: 3em; font-style: italic;");
    p.innerHTML = result;
    outputDisplay.prepend(p);
  }

  init();


})();
