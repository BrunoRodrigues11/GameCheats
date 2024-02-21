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
function searchCheat() {
  // Obtendo o valor digitado no input de pesquisa
  let searchTerm = document.getElementById("searchInput").value.toLowerCase();
  console.log(searchTerm);

  let cheatsCard = document.getElementsByClassName("card__cheat");

  // Iterando sobre os cards de cheats e mostrando apenas os que correspondem ao termo pesquisado
  for (let cheat of cheatsCard) {
    let cheatTitle = cheat.querySelector("h5").textContent.toLowerCase();
    if (cheatTitle.includes(searchTerm)) {
      cheat.style.display = "block"; // Mostra o card
      console.log("entrou no if");
    } else {
      cheat.style.display = "none"; // Esconde o card
      console.log("entrou no else");
    }
  }
}

let btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", searchCheat);
