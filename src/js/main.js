// Abre a aba de cheats por padrão
function defaultOnLoadCheats(idContainer, idTab) {
  let container_default, tab_default;
  container_default = document.getElementById(idContainer).style.display =
    "block";
  tab_default = document.getElementById(idTab).className += " active";
}

defaultOnLoadCheats("ps_cheats", "tab__ps");

// Abre as abas de cheats
function openPlataformCheats(evt, plataforma) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(plataforma).style.display = "block";
  evt.currentTarget.className += " active";
}

// Pesquisar cheats
let searchInput = document.getElementById("searchInput");
let selectSection = document.getElementById("selectSection");
let btnSearch = document.getElementById("btnSearch");

function searchCheat() {
  // Obtendo o valor digitado no input de pesquisa
  let searchTerm = searchInput.value.toLowerCase();

  // Iterando sobre os cards de cheats e mostrando apenas os que correspondem ao termo pesquisado
  let cheatsCard = document.getElementsByClassName("card__cheat");
  for (let cheat of cheatsCard) {
    let cheatTitle = cheat.querySelector("h5").textContent.toLowerCase();
    if (cheatTitle.includes(searchTerm)) {
      cheat.style.display = "block"; // Mostra o card
    } else {
      cheat.style.display = "none"; // Esconde o card
    }
  }
}

// Quando o usuário digita algo no input de pesquisa, chama a função searchCheat
searchInput.addEventListener("input", searchCheat);
// btnSearch.addEventListener("click", searchCheat);

// Filtrar cheats por plataforma
function filterCheats() {
  // Obtendo o valor selecionado no select
  let selectTerm = selectSection.value.toLowerCase();

  // Iterando sobre os cards de cheats e mostrando apenas os que correspondem ao termo pesquisado
  let cheatsCard = document.getElementsByClassName("card__cheat");
  for (let cheat of cheatsCard) {
    let cheatSection = cheat.dataset.secao.toLowerCase();
    if (cheatSection.includes(selectTerm)) {
      cheat.style.display = "block"; // Mostra o card
    } else {
      cheat.style.display = "none"; // Esconde o card
    }
  }
}

// Quando o usuário seleciona uma opção no select, chama a função filterCheats
selectSection.addEventListener("change", filterCheats);
