// Abre a aba de cheats por padrão
function defaultOnLoadCheats(idContainer, idTab) {
  const container_default = (document.getElementById(
    idContainer
  ).style.display = "block");
  const tab_default = document.getElementById(idTab).classList.add("active");
}

let cheatsContainerId = "ps_cheats";
let tabId = "tab__ps";

defaultOnLoadCheats(cheatsContainerId, tabId);

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
  evt.currentTarget.classList.add("active");
}

// Pesquisar cheats
const searchInput = document.getElementById("searchInput");
const selectSection = document.getElementById("selectSection");
const btnSearch = document.getElementById("btnSearch");

function searchCheat() {
  // Obtendo o valor digitado no input de pesquisa
  const searchTerm = searchInput.value.toLowerCase();

  // Iterando sobre os cards de cheats e mostrando apenas os que correspondem ao termo pesquisado
  const cheatsCard = Array.from(document.getElementsByClassName("card__cheat"));
  for (const cheat of cheatsCard) {
    const cheatTitle = cheat.querySelector("h5").textContent.toLowerCase();
    cheat.style.display = cheatTitle.includes(searchTerm) ? "block" : "none";
  }
}

// Quando o usuário digita algo no input de pesquisa, chama a função searchCheat
searchInput.addEventListener("input", searchCheat);

// Filtrar cheats por plataforma
function filterCheats() {
  // Obtendo o valor selecionado no select
  const selectTerm = selectSection.value.toLowerCase();

  // Iterando sobre os cards de cheats e mostrando apenas os que correspondem ao termo pesquisado
  const cheatsCard = Array.from(document.getElementsByClassName("card__cheat"));
  for (const cheat of cheatsCard) {
    const cheatSection = cheat.dataset.secao.toLowerCase();
    cheat.style.display = cheatSection.includes(selectTerm) ? "block" : "none";
  }
}

// Quando o usuário seleciona uma opção no select, chama a função filterCheats
selectSection.addEventListener("change", filterCheats);

const cheatBanner = Array.from(document.getElementsByClassName("card__banner"));
console.log(cheatBanner);
