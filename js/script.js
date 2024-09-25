function changeTheme(theme, button) {
    // Remover a classe "active" de todos os botões
    let buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Adicionar a classe "active" ao botão clicado
    button.classList.add('active');

    let images = {
        nature: [
            'img/foto4.png',
            'img/foto5.png',
            'img/foto6.png'
        ],
        tecnologia: [
            'img/foto7.png',
            'img/foto8.png',
            'img/foto9.png'
        ],
        esportes: [
            'img/foto1.png',
            'img/foto2.png',
            'img/foto3.png'
        ],
        arte: [
            'img/foto4.png',
            'img/foto5.png',
            'img/foto6.png'
        ],
        cidades: [
            'img/foto7.png',
            'img/foto8.png',
            'img/foto9.png'
        ]  
    };

    document.getElementById('img1').src = images[theme][0];
    document.getElementById('img2').src = images[theme][1];
    document.getElementById('img3').src = images[theme][2];
}
