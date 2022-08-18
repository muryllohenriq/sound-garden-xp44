const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const findID = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    return id;
}

const exibirDetalhesEvento = async () => {
    const dadosEvento = await fetch(SOUND_URL + "/" + findID(), {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
    }).then((response) => response.json());
}

const listarReservas = async () => {
    const eventos = await fetch(SOUND_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((responsta) => {
      //retorna lista em array de objetos
      return responsta.json();
    });
  
    // console.log(eventos);
  
    const tbody = document.querySelector(".lista-reservas tbody");
  
    let htmlEventos = "";
  
    eventos.forEach((evento) => {
      htmlEventos += `
          <tr>
                    <th scope="row">${evento.numero}</th>
                    <td>${evento.cliente}</td>
                    <td>${evento.name}</td>
                    <td></td>
                    <td>          
                      <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
                    </td>
                  </tr>
          `;
    });

  tbody.innerHTML = htmlEventos;
  
  };

listarReservas();


