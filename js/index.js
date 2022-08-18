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

const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const formCadastroReserva = document.querySelector('#cadastro-reserva')

formCadastroReserva.addEventListener('submit', async (event) => {
    //evita que a página seja recarregada
    event.preventDefault();

    const inputNome = document.getElementById("nome_label");
    const inputEmail = document.getElementById("email_label");
    const inputIngressos = document.getElementById("numero_ingressos");

    // criando objeto com os dados do evento
    const novoEventoObj = {
        "nome": inputNome.value,
        "e-mail": inputEmail.value,
        "ingressos": inputIngressos.value
    };

    // convertendo Obj para JSON
    const novoEventoJSON = JSON.stringify(novoEventoObj);

    // conexão com API para cadastrar novo evento
    // salvando resposta na const
    const resposta = await fetch(SOUND_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: novoEventoJSON
    }).then((response) => {
        return response.json();
    }).then((responseOBJ) => {
        console.log(responseOBJ);
    });
});