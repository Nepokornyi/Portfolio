//Arrow Reveal
//------------

//Get the button
let myArrow = document.getElementById("arrow");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    myArrow.style.visibility = "initial";
  } else {
    myArrow.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scrolls to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ------------
// reveal animation

function reveal (){
  const reveals = document.querySelectorAll('.fade-in');

  for (let i = 0; i < reveals.length; i++) {

      
      let windowHeight = window.innerHeight;
      let revealTop    = reveals[i].getBoundingClientRect().top;
      let revealPoint  = 150;
      
      if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('appear');

      }
      else{
          reveals[i].classList.remove('appear');

      }
  }
}

  // listener
window.addEventListener('scroll', reveal);
// ------------
