const DIV_ELEMENT = "div";
const IMG_ELEMENT = "img";

// Criar cards de banner
export function createBannerCard(list_cheats, idCardBanner, titulo, img) {
  let card_container_banner = document.getElementById(idCardBanner);

  // Criar elemento de card content
  let card_content_banner = document.createElement(DIV_ELEMENT);
  card_content_banner.className = "card mt-3 card__banner";
  card_content_banner.dataset.secao = list_cheats[0].secao;
  card_container_banner.appendChild(card_content_banner);

  // Criar elemento card body
  let card_body_banner = document.createElement(DIV_ELEMENT);
  card_body_banner.classList.add("card-body");
  card_content_banner.appendChild(card_body_banner);

  // Adicionar titulo
  let titulo_container = document.createElement("span");
  titulo_container.className = "text-light card__section";
  card_body_banner.appendChild(titulo_container);

  let titulo_banner = document.createElement("h5");
  titulo_banner.textContent = titulo;
  titulo_container.appendChild(titulo_banner);

  // Adicionar imagem
  let img_banner = document.createElement("img");
  img_banner.src = img;
  img_banner.alt = `Banner do jogo com o texto ${titulo}`;
  card_body_banner.appendChild(img_banner);
}

// Criar cards de cheats
export function createCheatsCard(list_cheats, idCard) {
  let card = document.getElementById(idCard);

  // Iterar sobre o array de objetos
  list_cheats.forEach((codigo) => {
    // Criar elemento de card content
    let card_content = document.createElement(DIV_ELEMENT);
    card_content.className = "card mt-3 card__cheat";

    if (codigo.secao === "Veículos") {
      card_content.dataset.veiculoId = codigo.id;
      card_content.dataset.ilustracao = codigo.ilustracao;
      card_content.dataset.veiculo = codigo.nome;
    }

    card_content.dataset.secao = codigo.secao;
    card.appendChild(card_content);

    // Criar elemento card body
    let card_body = document.createElement(DIV_ELEMENT);
    card_body.classList.add("card-body");
    card_content.appendChild(card_body);

    // Criar elemento de card
    let card_container = document.createElement(DIV_ELEMENT);
    card_container.classList.add("card__container");
    card_body.appendChild(card_container);

    // Criar elemento de titulo
    let codigoTitulo = document.createElement("h5");
    codigoTitulo.classList.add("card__title");
    codigoTitulo.textContent = `${codigo.nome}`;
    card_container.appendChild(codigoTitulo);

    // Criar elemento de botão para abrir o modal de visualização da imagem do veiculo
    if (codigo.secao === "Veículos") {
      // Criar elemento de icone de olho
      let icon = document.createElement(IMG_ELEMENT);
      icon.src = "../assets/icons/eye.png";
      icon.alt = "icone de olho";
      icon.width = "20";
      icon.height = "20";

      // Criar elemento de botão
      let codigoButton = document.createElement("button");
      codigoButton.className = "btn btn-primary btn-sm";
      codigoButton.appendChild(icon);
      codigoTitulo.appendChild(codigoButton);
    }

    // Criar elemento de imagemn
    let card_img = document.createElement(DIV_ELEMENT);
    card_img.classList.add("card__codigo");
    card_container.appendChild(card_img);

    // Iterar sobre o array de imagens dentro de cada objeto
    codigo.imagems.forEach((imagem) => {
      // Criar elemento de imagem
      let codigoImg = document.createElement(IMG_ELEMENT);
      codigoImg.classList.add("img");
      codigoImg.src = imagem;
      codigoImg.alt = "icone do cheat";

      card_img.appendChild(codigoImg);
    });
  });
}

// Criar modal de veiculos
export function createModalVehicles(idCard) {
  // Modal de veiculos
  let cards__section = document.getElementById(idCard);
  let modal__image = document.getElementById("modal__image");
  let modal__title = document.getElementById("modal__title");

  // Adicione um evento de clique a seção de cards
  cards__section.addEventListener("click", (event) => {
    let veiculoId = event.target.closest(".card").dataset.veiculoId;
    let ilustracao = event.target.closest(".card").dataset.ilustracao;
    let veiculo = event.target.closest(".card").dataset.veiculo;

    // Verifica se o veiculoId existe no elemento clicado
    if (veiculoId) {
      showModal(ilustracao, veiculo);
    }
  });
}

// Mostrar o modal
export function showModal(ilustracao, veiculo) {
  modal__image.src = ilustracao;
  modal__image.alt = veiculo;
  modal__title.textContent = veiculo;
  $("#modal").modal("show");
}
