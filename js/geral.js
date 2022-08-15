const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

const preencherCampos = (dados) => {
    const {name, poster, attractions, description, scheduled, number_tickets } = dados

    inputNome.value = name;
    inputAtracoes.value = attractions;
    inputDescricao.value = description;
    inputData.value = scheduled;
    inputLotacao.value = number_tickets;
    inputBanner.value = poster;
}

const getEventoPorId = (id) => {
    fetch(`${SOUND_URL}/events/${id}`)
    .then((response) => response.json())
    .then(preencherCampos);
}