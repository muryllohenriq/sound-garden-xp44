const findID = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    return id;
}

const exibirDetalhesEvento = async () => {
    const dadosEvento = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/'+findID(), {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
    }).then((response) => response.json());

    console.log(dadosEvento);

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    inputNome.value = dadosEvento.name;
    inputAtracoes.value = dadosEvento.attractions.join(', ');
    inputDescricao.value = dadosEvento.description
    inputData.value = dadosEvento.scheduled
    inputLotacao.value = dadosEvento.number_tickets
    inputBanner.value = dadosEvento.poster
}

exibirDetalhesEvento();