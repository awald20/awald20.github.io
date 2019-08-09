"use strict";

window.addEventListener("resize", function() {
  let windowSize = window.innerWidth;


  if (windowSize > 940) {

  } else if (windowSize <= 940) {
    medWindow();
  }

});

console.log(window.innerWidth);

function medWindow(){

  let mainArticle = document.querySelectorAll(".sm-article");

  mainArticle.forEach(function(element){
      console.log(element);
    element.classList.add("lg-article");
    element.classList.remove("sm-article");
  });

  let headlines = document.querySelectorAll(".sm-article-headline");

  headlines.forEach(function(element){
      console.log(element);
    element.classList.add("lg-article-headline");
    element.classList.remove("sm-article-headline");
  });


  let subheader = document.querySelectorAll(".sm-article-subheader");

  subheader.forEach(function(element){
    element.classList.add("beerbutton");
    element.classList.remove("sm-article-subheader");
  });
}
