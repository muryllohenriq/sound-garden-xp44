let time = 5000, //tempo de 5 segundos ou 5000 milisegundos
    posicao = 0, //posição
    banner = document.querySelectorAll(".banner img")
    max = banner.length; // define o máximo a variável max

    //função que troca a imagem
function nextImage() {

    banner[posicao] 
    .classList.remove("selected")
    
    posicao++

    if(posicao >= max)
    posicao = 0

    banner[posicao]
    .classList.add("selected")
}

    // função que inicia
function start() {
    setInterval(() =>{
        nextImage()
    }, time)
}

window.addEventListener("load", start)

// modal
function formulario (){
    let modal = document.querySelector(".modal")
    modal.style.display = "flex";
}

function fecharmodal(){
    let modal = document.querySelector(".modal")
    modal.style.display = "none";
}