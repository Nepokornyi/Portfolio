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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//---------------
//Elements Reveal
//---------------
setTimeout(function(){
    const fader = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold:0.75,
        rootMargin: "0px 0px 0px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fader.forEach(fader =>{
        appearOnScroll.observe(fader);
    });

},400);
