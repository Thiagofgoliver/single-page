// configuração do lightbox


lightbox.option({
    'imageFadeDuration':300,
    'fadeDuration':300,
    'albumLabel': "foto  %1  de %2",

    'resizeDuration':300,
})

//inicializaçao da pluglin  aos animate js


AOS.init();

//variaveis para selecionar os elementos

const FIELD_IDADE = document.getElementById('idade')

const TXT_IDADE = document.getElementById('txt-idade')

//txt-idade mostra o valor do banco  idade 

TXT_IDADE.innerText = FIELD_IDADE.value


//atualizar a idade com evento de usuario

FIELD_IDADE.addEventListener('change',()=> {
    TXT_IDADE.innerText = FIELD_IDADE.value
})
