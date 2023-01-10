// ========  Webp  ========================================================
import * as saFunctions from './modules/functions.js';
saFunctions.isWebp();

// ========  BURGER  ========================================================
import './modules/burger.js';

// ========  PLAYER  ========================================================
import './modules/player.js';

// ========  SWIPER  ========================================================
import Swiper, { Autoplay, Keyboard, Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay, Keyboard],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 3,
	speed: 700,
    watchOverflow: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    autoplay: {
        delay: 2200,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    grabCursor: true,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,

	keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDone: true,
    },
});

document.querySelector('.prev').onclick = () => {
	swiper.slidePrev();
}
document.querySelector('.next').onclick = () => {
	swiper.slideNext();
}