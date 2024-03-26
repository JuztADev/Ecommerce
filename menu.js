let menu = document.querySelector('.menu');
menu.addEventListener('click',barMenu);
function barMenu(){
    let options = document.querySelector('.options');
    options.classList.toggle('active');
}