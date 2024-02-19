import {
  playerCheatsPS,
  worldCheatsPS,
  vehicleCheatsPS,
  playerCheatsXBX,
  worldCheatsXBX,
  vehicleCheatsXBX,
  playerCheatsCOMP,
  worldCheatsCOMP,
  vehicleCheatsCOMP,
} from "../api_cheats/dados_gta5.js";

function createCheatsCard(list_cheats, idCard) {
  let card = document.getElementById(idCard);

  // Iterar sobre o array de objetos
  list_cheats.forEach((codigo) => {
    // Criar elemento de card content
    let card_content = document.createElement("div");
    card_content.classList.add("card");
    card_content.classList.add("mt-3");
    card_content.classList.add("card__cheat");
    card_content.dataset.veiculoId = codigo.id;
    card_content.dataset.ilustracao = codigo.ilustracao;
    card.appendChild(card_content);

    // Criar elemento card body
    let card_body = document.createElement("div");
    card_body.classList.add("card-body");
    card_content.appendChild(card_body);

    // Criar elemento de card
    let card_container = document.createElement("div");
    card_container.classList.add("card__container");
    card_body.appendChild(card_container);

    // Criar elemento de titulo
    const codigoTitulo = document.createElement("h5");
    codigoTitulo.textContent = `${codigo.id} - ${codigo.nome}`;
    card_container.appendChild(codigoTitulo);

    // Criar elemento de imagemn
    let card_img = document.createElement("div");
    card_img.classList.add("card__codigo");
    card_container.appendChild(card_img);

    // Iterar sobre o array de imagens dentro de cada objeto
    codigo.imagems.forEach((imagem) => {
      // Criar elemento de imagem
      const codigoImg = document.createElement("img");
      codigoImg.classList.add("img");
      codigoImg.src = imagem;
      codigoImg.alt = "icone do cheat";

      card_img.appendChild(codigoImg);
    });
  });
}

createCheatsCard(playerCheatsPS, "card_player_PS");
createCheatsCard(worldCheatsPS, "card_world_PS");
createCheatsCard(vehicleCheatsPS, "card_vehicle_PS");

createCheatsCard(playerCheatsXBX, "card_player_XBX");
createCheatsCard(worldCheatsXBX, "card_world_XBX");
createCheatsCard(vehicleCheatsXBX, "card_vehicle_XBX");

createCheatsCard(playerCheatsCOMP, "card_player_COMP");
createCheatsCard(worldCheatsCOMP, "card_world_COMP");
createCheatsCard(vehicleCheatsCOMP, "card_vehicle_COMP");

// Modal de veiculos
const cardsSection = document.getElementById("card_vehicle_PS");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.getElementsByClassName("close")[0];

// Adicione um evento de clique a seção de cards
cardsSection.addEventListener("click", function (event) {
  const veiculoId = event.target.closest(".card").dataset.veiculoId;
  const ilustracao = event.target.closest(".card").dataset.ilustracao;

  if (veiculoId) {
    modalImage.src = ilustracao;
    modal.style.display = "block";
  }
});

// Feche o modal se o usuário clicar no botão de fechar
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

// Feche o modal se o usuário clicar fora do modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
