// MATTHIAS T. DENU
// CS 5610 HW2
// 2018-01-20

(function () {
  "use strict"; // disable automatic creation of global
  var paragraphs;
  var links;

  function init() {
    // put the paragraphs to display in an array
    paragraphs =
    [document.querySelector(`section:nth-child(${2})`),
      document.querySelector(`section:nth-child(${3})`),
      document.querySelector(`section:nth-child(${4})`)];

      // put the corresponding links in an array
      links =
      [document.querySelector(`.clearfix ul li:nth-child(${1})`),
        document.querySelector(`.clearfix ul li:nth-child(${2})`),
        document.querySelector(`.clearfix ul li:nth-child(${3})`)];



        // add event listeners for each paragraph
        /*** look at the closures I had to use to do this loop -- lolwtf? ****/
        for(var i = 0; i < paragraphs.length; i++) {
          console.log(links[i]);
          (function(_i){
            links[_i].addEventListener("click", (function(){ display(_i);}));
          })(i);
        }
      }

      // display the paragraph for the corresponding link, hiding the rest
      function display(linkNumber) {
        var bug;
        console.log(`linkNumber: ${linkNumber}`);
        for(var i = 0; i < paragraphs.length; i++) {
          bug = paragraphs[i];
          if(i == linkNumber) {
            console.log(`display: ${bug.innerHTML.slice(0,5)}`);
            bug.setAttribute("style", "display: block;");
          } else {
            console.log(`hide: ${bug.innerHTML.slice(0, 5)}`);
            bug.setAttribute("style", "display: none;");
          }
        }
      }

      init();

    })();
