const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const listarReservas = async () => {
    const reservas = await fetch(SOUND_URL, {
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
  
    let htmlReservas = "";
  
    reservas.forEach((reserva) => {
      htmlReservas += `
          <tr>
                    <th scope="row">${reserva.numero}</th>
                    <td>${reserva.cliente}</td>
                    <td>${reserva.name}</td>
                    <td></td>
                    <td>          
                      <a href="excluir-reserva.html?id=${reserva._id}" class="btn btn-danger">excluir</a>
                    </td>
                  </tr>
          `;
    });

  tbody.innerHTML = htmlReservas;
  
  };

listarReservas();


