function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDe Teclas = document.querySelectorAll)('.tecla');

//para 
for (let contador = 0; contador < listaDe Teclas.length; contador++){

    const tecla = listaDe Teclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}';//template string 

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}