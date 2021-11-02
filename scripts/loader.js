const loader = document.querySelector('.loading-container');
const main = document.querySelector('body');

document.body.style.overflowY = 'hidden';

function init(){
    setTimeout(() =>{
        loader.style.opacity = '0';
        loader.style.display = 'none';
        main.style.overflowY = 'scroll';
        // main.style.display = 'block';
        setTimeout(() => 50);
    }, 4000);
}
init();

