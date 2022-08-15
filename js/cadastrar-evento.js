const PreencherForm = document.querySelector('#formulario')
console.log(PreencherForm);

PreencherForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const PreencherObjeto = new FormData(PreencherForm);
    const atracoes = PreencherObjeto.get('atracoes-input').split(',');

    const body = {
        "name": PreencherObjeto.get('nome-input'),
        "poster": "https://media.istockphoto.com/vectors/indie-music-festival-poster-or-flyer-template-illustration-of-and-vector-id1186892993",
        "attractions": atracoes,
        "description": PreencherObjeto.get('descricao-input'),
        "scheduled": PreencherObjeto.get('data-input'),
        "number_tickets": PreencherObjeto.get('lotacao-input')
    }

    console.log(body);

    fetch('https://xp41-soundgarden-api.herokuapp.com/events',{
        "method": "POST",
        "headers": {"content-type":"application/json"},
        "body": JSON.stringify(body)
    }).then( response => console.log(response)
    ).then (() => {
        alert("Evento criado!")
        window.location.replace("admin.html");
    }
    ).catch( erro => console.error(error))
});