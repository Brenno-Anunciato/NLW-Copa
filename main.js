//Arquivos SVF tirados do figma
// FUNÇÃO PARA CRIAR O JOGO COM O TIME 1 A HORA E O TIME 2. CHAMANDO AS BANDEIRAS
function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="banderia da ${player2}">
  </li>
  `
}

//FUNÇÃO PARA CRIAR OS CARTÕES COM DIA E MÊS E OS JOGOS
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

//Aqui chamaremos as funções createCard com data e dia e os games que chama a função createGame, que tem o time1, hora e time 2
 document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland") + 
    createGame("portugal", "16:00", "uruguai") ) +
    createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))

