const buttonNow = document.getElementById('current');
const buttonCSOB = document.getElementById('CSOB');
const buttonHavas = document.getElementById('Havas');

const nowText = document.getElementById('current-text');
const csobText = document.getElementById('CSOB-text');
const havasText = document.getElementById('Havas-text');

function init(){

    buttonNow.classList.add('apply-hover');

    nowText.style.visibility = 1;
    csobText.style.opacity = 0;
    havasText.style.opacity = 0;

    buttonNow.addEventListener('click', function(e){

        buttonNow.classList.add('apply-hover');
        buttonCSOB.classList.remove('apply-hover');
        buttonHavas.classList.remove('apply-hover');

        csobText.style.opacity = 0;
        csobText.style.visibility = 'hidden';
        havasText.style.opacity = 0;
        havasText.style.visibility = 'hidden';
        setTimeout(function (){
            nowText.style.opacity = 1;
            nowText.style.visibility = 'initial';
        },400);
        
    });

    buttonCSOB.addEventListener('click', function(){

        buttonNow.classList.remove('apply-hover');
        buttonCSOB.classList.add('apply-hover');
        buttonHavas.classList.remove('apply-hover');

        nowText.style.opacity = 0;
        nowText.style.visibility = 'hidden';
        havasText.style.opacity = 0;
        havasText.style.visibility = 'hidden';
        setTimeout(function (){
            csobText.style.opacity = 1;
            csobText.style.visibility = 'initial';
        },400);
    });

    buttonHavas.addEventListener('click', function(){

        buttonNow.classList.remove('apply-hover');
        buttonCSOB.classList.remove('apply-hover');
        buttonHavas.classList.add('apply-hover');


        nowText.style.opacity = 0;
        nowText.style.visibility = 'hidden';
        csobText.style.opacity = 0;
        csobText.style.visibility = 'hidden';
        setTimeout(function (){
            havasText.style.opacity = 1;
            havasText.style.visibility = 'initial';
        },400);
    });
}

init();


let scrollEventHandler = function()
{
   window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);