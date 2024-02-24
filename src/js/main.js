const BLOCK_DISPLAY = "block";
const NONE_DISPLAY = "none";
const ACTIVE_CLASS = "active";

// Abre a aba de cheats por padrão
function defaultTabCheat(idContainer, idTab) {
  document.getElementById(idContainer).style.display = BLOCK_DISPLAY;
  document.getElementById(idTab).classList.add(ACTIVE_CLASS);
}

const cheatsContainerId = "ps_cheats";
const tabId = "tab__ps";

defaultTabCheat(cheatsContainerId, tabId);

// Abre as abas de cheats
function openPlataformCheats(evt, plataforma) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = NONE_DISPLAY;
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(ACTIVE_CLASS, "");
  }
  document.getElementById(plataforma).style.display = BLOCK_DISPLAY;
  evt.currentTarget.classList.add(ACTIVE_CLASS);
}

// Pesquisar cheats
const searchInput = document.getElementById("searchInput");
const selectSection = document.getElementById("selectSection");

function searchCheat() {
  const searchTerm = searchInput.value.toLowerCase();
  const cheatsCard = Array.from(document.getElementsByClassName("card__cheat"));
  const cheatBanner = Array.from(
    document.getElementsByClassName("card__banner")
  );

  for (const cheat of cheatsCard) {
    const cheatTitle = cheat.querySelector("h5").textContent.toLowerCase();
    const cheatSection = cheat.dataset.secao.toLowerCase();

    if (cheatTitle.includes(searchTerm)) {
      cheat.style.display = BLOCK_DISPLAY;
      filterBannerCheats(cheatSection);
    } else {
      cheat.style.display = NONE_DISPLAY;
    }
  }

  // Verificar se o searchTerm está vazio e exibir todos os banners nesse caso
  if (searchTerm === "") {
    for (const banner of cheatBanner) {
      banner.style.display = BLOCK_DISPLAY;
    }
  }
}

searchInput.addEventListener("input", searchCheat);

// Filtrar cheats por secao
function filterCheats() {
  const selectTerm = selectSection.value.toLowerCase();
  const cheatsCard = Array.from(document.getElementsByClassName("card__cheat"));
  for (const cheat of cheatsCard) {
    const cheatSection = cheat.dataset.secao.toLowerCase();
    if (cheatSection.includes(selectTerm)) {
      cheat.style.display = BLOCK_DISPLAY;
    } else {
      cheat.style.display = NONE_DISPLAY;
    }
  }
  filterBannerCheats(selectTerm);
}

function filterBannerCheats(selectTerm) {
  const cheatBanner = Array.from(
    document.getElementsByClassName("card__banner")
  );
  for (const banner of cheatBanner) {
    const bannerSection = banner.dataset.secao.toLowerCase();
    banner.style.display = bannerSection.includes(selectTerm)
      ? BLOCK_DISPLAY
      : NONE_DISPLAY;
  }
}

selectSection.addEventListener("change", filterCheats);

// Limpar pesquisa e filtro
const btnSearchClear = document.getElementById("btnSearchClear");

function clearSearchFilter() {
  searchInput.value = "";
  selectSection.value = "";
  searchCheat();
  filterCheats();
}

btnSearchClear.addEventListener("click", clearSearchFilter);
