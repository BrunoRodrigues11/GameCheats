import { playerCheats } from "../api_cheats/dados.js";

let card = document.getElementById("card_player");

// Iterar sobre o array de objetos
playerCheats.forEach((codigo) => {
  // Criar elemento de card content
  let card_content = document.createElement("div");
  card_content.classList.add("card");
  card_content.classList.add("mt-3");
  card_content.classList.add("card__cheat")
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
  codigoTitulo.textContent = codigo.nome;
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
