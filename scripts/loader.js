const loader          = document.querySelector('.loading-container');
const main            = document.querySelector('body');

const logoAppear      = document.querySelector('.logo');
const navAppear       = document.querySelectorAll('.menu');
const cvButton        = document.querySelector('.cv-load');
const socialAppear    = document.querySelector('.social-container');
const introPageAppear = document.getElementById('intro');


let loadingTime = 0;

document.body.style.overflowY = 'hidden';

window.onload = function(){
    loadingTime = Math.floor(performance.now());
    if(loadingTime < 1000){
        setTimeout(() =>{
            stopLoading();
        }, 2000)
    }
    else{
        stopLoading();
    }
}

function stopLoading (){
    loader.style.opacity = '0';
    loader.style.display = 'none';
    main.style.overflowY = 'scroll';

    setTimeout(() =>{
        logoAppear.classList.add('appear');
        setTimeout(() =>{
            setTimeout(() =>{
                navAppear[0].style.opacity = 1;
            },100);
            setTimeout(() =>{
                navAppear[1].style.opacity = 1;
            },200);
            setTimeout(() =>{
                navAppear[2].style.opacity = 1;
            },300);
            setTimeout(() =>{
                navAppear[3].style.opacity = 1;
            },400);
            setTimeout(() =>{
                cvButton.classList.add('appear');
            }, 500);
            setTimeout(() =>{
                introPageAppear.classList.add('appear');
                setTimeout(() =>{
                    socialAppear.classList.add('appear');
                },200);
            },500);
        }, 200);
    },200);
    
    
    
    
    
}

