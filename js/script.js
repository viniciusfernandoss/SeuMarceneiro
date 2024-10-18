function changeTheme(theme, button) {
    // Remover a classe "active" de todos os botões
    let buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Adicionar a classe "active" ao botão clicado
    button.classList.add('active');

    let images = {
        nature: [
            'img/foto4.webp',
            'img/foto1.webp',
            'img/foto2.webp'
        ],
        tecnologia: [
            'img/foto5.webp',
            'img/foto3.webp',
            'img/foto6.webp'
        ],
        esportes: [
            'img/foto1.webp',
            'img/foto4.webp',
            'img/foto7.webp'
        ],
        arte: [
            'img/foto9.webp',
            'img/foto8.webp',
            'img/foto6.webp'
        ],
        cidades: [
            'img/foto7.webp',
            'img/foto5.webp',
            'img/foto1.webp'
        ]  
    };

    document.getElementById('img1').src = images[theme][0];
    document.getElementById('img2').src = images[theme][1];
    document.getElementById('img3').src = images[theme][2];
}


//Convidados mobile
// const swiper = new Swiper('.slider-wrapper', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 30,
  
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true
//     },
  
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         992: {
//             slidesPerView: 2
//         },
//         1024: {
//             slidesPerView: 3
//         }
//     }
// });

const swiperOne = new Swiper('.swiper-servicos-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    navigation: {
        nextEl: '.swiper-servicos-mobile .swiper-button-next',
        prevEl: '.swiper-servicos-mobile .swiper-button-prev',
    },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-servicos-mobile .swiper-pagination',
      clickable: true,
    },
});

const swiperTwo = new Swiper('.swiper-feedback-mobile', {
    slidesPerView: 1, // Exibe 1 card completo e metade do próximo
    spaceBetween: 20, // Espaço entre os slides
    loop: true,
    navigation: {
        nextEl: '.swiper-feedback-mobile .swiper-button-next',
        prevEl: '.swiper-feedback-mobile .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-feedback-mobile .swiper-pagination',
      clickable: true,
    },
});