const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com'        //pra buscar a API

const button = document.querySelector('.btn')                         //tirar dúvida

const id = new URLSearchParams(window.location.search).get("id")       //busca o id na página que a gente abrir pra excluir *o id fica na URL do site  

const deletarEvento = async () => {                              //busca a informação dos dados do evento na API de acordo com o id (quando abrimos a janela "excluir evento")
  const dadosEvento = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
    method: "GET",
    redirect: "follow",                                                 //Tirar dúvida
    headers: { "Content-Type": "application/json" }                     //define conteudo
  }).then((response) => response.json())                                //converte o objeto pra json

  //console.log(dadosEvento)
  //constante pra pegar o nome dos campos do evento - baseado no html
  const inputNome = document.getElementById('nome')
  const inputBanner = document.getElementById('banner')
  const inputAtracoes = document.getElementById('atracoes')
  const inputDescricao = document.getElementById('descricao')
  const inputData = document.getElementById('data')
  const inputLotacao = document.getElementById('lotacao')

  inputNome.value = dadosEvento.name
  inputBanner.value = dadosEvento.poster
  inputAtracoes.value = dadosEvento.attractions.join(",")  //separador por vírgula
  inputDescricao.value = dadosEvento.description
  inputData.value = dadosEvento.scheduled
  inputLotacao.value = dadosEvento.number_tickets

}

button.addEventListener("click", async (event) => {

  event.preventDefault()

  await fetch(`${SOUND_URL}/events/${id}`, {
    method: 'DELETE',                                   //depois que puxou a lista com "GET" - agora é deletar com o protocolo "DELETE"
    redirect: "follow",
    headers: { 'content-type': 'application/json' },
  }).then(response => console.log(response))
    .then(() => {
      alert('Evento excluído com sucesso!')
    })
})

deletarEvento()