function defaultOnLoadCheats(idContainer, idTab) {
  let container_default, tab_default;
  container_default = document.getElementById(idContainer).style.display =
    "block";
  tab_default = document.getElementById(idTab).className += " active";
}

defaultOnLoadCheats("ps_cheats", "tab__ps");

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
