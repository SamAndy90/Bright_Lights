// Ініціалізація SWIPER
export const slider = new Swiper('.swiper', {
    // Стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Кількість слайдів для показу
    slidesPerView: 2,
    // Відступи мід слайдами
    spaceBetween: 20,
    // Швидкість
    speed: 800,
    // Безкінечний слайдер
    loop: true,
    // Відключення функціоналу, якщо слайдів менше чим потрібно
    watchOverflow: true,

    // Автопрокрутка
    autoplay: {
        // Пауза між прокруткою
        delay: 2200,
        // Закінчити на останньому слайді
        stopOnLastSlide: false,
        // Відключити після ручного переключення
        disableOnInteraction: true,
    },


    // Курсор перетаскування
    grabCursor: true,
    // Чутливість свайпа
    touchRatio: 1,
    // Кут спрацювання свайпу/перетаскування
    touchAngle: 45,
    // Вкл/викл перетягування на ПК
    simulateTouch: true,
    // Управління клавіатурою
    keyboard: {
        // Вкл/Викл
        enabled: true,
        // Вкл/Викл тільки коли слайдер в межах в'юпорта
        onlyInViewport: true,
        // Вкл/Викл управління кнопками pageUp, pageDown
        pageUpDone: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    // Вільний режим
    // freeMode: true,

    // Стартовий слайд
    // initialSlide: 1,
    // Активний слайд по центру
    // centeredSlides: true,
    // Автовисота
    // autoHeight: false,
    // Кількість пролистуємих слайдів
    // slidesPerGroup: 1,
    

    // Навігація по хешу (добавити в слайди data-hash="любе ім'я")
    // hashNavigation: {
        // Відслідковувати стан
    //     watchState: true,
    // },

    // Кількість дубдлюючих слайдів (скролл відключати, не працює з мультирядністю)
    // loopedSlides: 3, // для slidesPerView: auto,

    // Навігація
    // Булети, теперішнє положення, прогрес-бар
    // pagination: {
    //     el: '.swiper-pagination',
        // Булети
        // type: 'bullets', // за замовчуванням
        // clickable: true,
        // Динамічні булети
        // dynamicBullets: true,
        // Кастомні булети
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

        // type: 'fraction',
        // Кастомна фракція
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' з <span class="' + totalClass + '"</span>';
        // },

        // type: 'progressbar',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // 
    //     draggable: true,
    // },



    // Переключення по кліку на слайд (працює херово)
    // slideToClickedSlide: true,


    // Управління колесом миші
    // mousewheel: {
    // Чутливість колеса миші
    // sensitivity: 1,
    // Клас об'єкта, на якому буде спрацьовувати колесо миші
    // eventsTarget: '.swiper-slider',  // якщо на сторінці декілька слайдерів - будуть прокручуватися усі, краще не включати
    // },

    // Справа на ліво  -  прописати dir="rtl" для основного контейнера swiper (відключити центровку)

    // Кількість рядів
    // slidesPerColumn: 2, (можливо не працює)
    // grid: {
    //     rows: 2,
    // },



    // Вертикальний слайдер
    // direction: 'vertical',

    // =====  EFFECTS  ===========================================
    // Ефекти переключення слайдів

    // Листання
    // effect: 'slide', // за замовчуванням

    // Зміна прозорості
    // effect: 'fade',
    // // Доповнення до 'fade'
    // fadeEffect: {
    //     // Паралельна зміна прозорості
    //     crossFade: true,
    // },

    // Переворот
    // effect: 'flip',
    // Доповнення до 'flip'
    // flipEffect: {
    //     // Тінь
    //     slideShadows: true,
    //     // Показ лише активного слайду
    //     limitRotation: true,
    // },

    // Куб
    // effect: 'cube',
    // Доповнення до 'cube'
    // cubeEffect: {
    //     // Настройка тіні
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },

    // Ефект потоку
    // effect: 'coverflow',
    // Доповнення до 'cube'
    // coverflowEffect: {
    //     // Кут
    //     rotate: 50,
    //     // Накладення
    //     stretch: 30,
    //     // Тінь
    //     slideShadows: true,
    // },


    // ======  АДАПТИВ  =================================
    // MobileFirst
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    // },

    // Співвідношення сторін
    // Починаючи з версії 5.3.0, можна вказувати співвідношення сторін (висота на ширину)
    // breakpoints: {
    //     '@0.75': {
    //         slidesPerView: 1,
    //     },
    //     '@1.00': {
    //         slidesPerView: 2,
    //     },
    //     '@1.50': {
    //         slidesPerView: 3,
    //     },
    // },


    // ======  LAZY LOADING  (оптимізація загрузки)  =================================
    // Щоб включити: 
    // для картинки: class='swiper-lazy';
    // шлях до картинки виносим в data-src;
    // для src - добавляєм картинку на 1px.
    // після картинки можна добавити пустий div щоб вивести анімацію підгрузки.

    // Відключити передзагрузку картинок
    // preloadImages: false,
    // // Lazy Loading
    // lazy: {
    //     // Підгружати на старті переключення слайду
    //     loadOnTransitionStart: false,
    //     // Підгрузити попередню та наступну картинки
    //     loadPrevNext: false,  // краще для користувача true !!!
    // },
    // // Наступні дві настройки включати коли slidesPerView = auto || slidesPerView > 1
    // // Слідкування за видимими слайдами
    // watchSlidesProgress: true,
    // // Добавлення класу видимим класам
    // watchSlidesVisibility: true,


    // ======  ZOOM  =================================
    // Для обгортки картинки добавляєм клас class="swiper-zoom-container"
    // Для попапа потрібні сторонні плагіни галереї!!!
    // ZOOM картинки
    // zoom: {
    //     // Макс. збільшення
    //     maxRatio: 5,
    //     // Мін. збільшення
    //     minRatio: 1,
    // },


    // ======  MINI Slider, PreView, мініатюри  =================================
    // Мініатюри (превю)
    // thumbs: {
    //     // Swiper з мініатюрами та його настройки
    //     swiper: {
    //         el: '.mini-swiper',
    //         slidesPerView: 3,
    //     }
    // },

    // ======  Slider in slider  =================================
    // Для коректної роботи перетаскування чи свайпу, для дочірнього слайдера
    // nested: true,

    // Переключення по кліку на слайд (працює херово) для коректної роботи булетів (для дочірнього слайдера)
    // slideToClickedSlide: false,

    // ======  Два синхронні слайдера з розділяючим об'єктом =================================
    // Передача управління (лише в одну сторону)
    // controller: {
    //     control: textSlider,
    // },

    // ======  Slider в табах  =================================
    // Обновить свайпер при зміні елементів слайдера
    // observer: true,
    // // Обновить свайпер при зміні батьківських елементів слайдера
    // observeParents: true,
    // // Обновить свайпер при зміні дочірніх елементів слайдера
    // observeSlideChildren: true,


    // ======  Віртуальні слайди  =================================
    // Формування слайдів
    // virtual: {
    //     slides: (function () {
    //         let slide = [];
    //         for (let i = 0; i < 500; i++) {
    //             slide.push(`<div class="swiper-slide-info">Слайд №${i}</div>`);
    //         };
    //         return slide;
    //     }()),
    // },


    // =========  Події  ============================================
    // on: {
    //     // Подія ініціалізаії
    //     init: function () {
    //         console.log('Слайдер запущений');
    //     },
    //     // Подія зміни слайду
    //     slideChange: function () {
    //         console.log('Слайд переключений');
    //     },
    // },

});


// ======  Два синхронні слайдера з розділяючим об'єктом =================================
// let textSlider = new Swiper('.text-swiper', {
//     slidesPerView: 2,
//     spaceBetween: 30,
// });

// // Передача управління
// imageSlider.controller.control = textSlider;
// textSlider.controller.control = imageSlider;


// =========  За межами свайпера  ===================================

// Параметри 
// Отримання
// let qSlides = imageSlider.slides.length;
// Зміна
// imageSlider.params.speed = 1000;

// Методи
// imageSlider.update();
// Переключитися на слайд 2, швидкість 800
// imageSlider.slideTo(2, 800);

// Події
// Подія зміни слайду
// imageSlider.on('slideChange', function () {
//     console.log('Слайд переключений');
// });



// ===============================================================================
// =========  Запуск автопрокрутки при наведенні  ================================

// let sliderBlock = document.querySelector('.my-swiper');

// sliderBlock.addEventListener('mouseenter', function (e) {
//     imageSlider.params.autoplay.disableOnInteraction = false;
//     imageSlider.params.autoplay.delay = 500;
//     imageSlider.autoplay.start();
// });
// sliderBlock.addEventListener('mouseleave', function (e) {
//     imageSlider.autoplay.stop();
// });

// new Swiper('.parallax-slider', {
//     parallax: true,
//     speed: 2000,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })