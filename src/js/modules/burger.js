// -------------  BURGER  ----------------

let mainBody = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

function openBurger () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    mainBody.classList.toggle('lock');
};
burger.addEventListener('click', openBurger)
menu.addEventListener('click', openBurger);


let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    };
})




// -------------   Scroll для JQuery  -------------
// Анімує в момент показу на екрані, висоту показу можна регулювати.
/*
$(function () {
    $(window).scroll(function() {
        $('.l-h2').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+700) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
});
*/