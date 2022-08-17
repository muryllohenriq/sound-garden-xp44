const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const formCadastroEvento = document.querySelector('#cadastro-evento')

formCadastroEvento.addEventListener('submit', async (event) => {
    //evita que a página seja recarregada
    event.preventDefault();

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    // alert(inputNome.value)
    // conversão de data para padrão do banco de dados
    const fullDateTime = new Date(inputData.value);

    // criando objeto com os dados do evento
    const novoEventoObj = {
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(","),
        "description": inputDescricao.value,
        "scheduled": fullDateTime.toISOString(),
        "number_tickets": inputLotacao.value
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