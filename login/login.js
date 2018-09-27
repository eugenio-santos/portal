// Get the Sidebar
var ElById = document.getElementById.bind(document);
var sidebar = ElById("sidebar");
var overlayBg = ElById("overlay");
var distritos = ElById('distritos');
var divFindEscolas = ElById('find-escola');
var searchEscola = ElById('search-escola');
var escolas = ElById('sel-escola');

// Toggle between showing and hiding the sidebar, and add overlay effect
function toggle_sidebar() {
  if (sidebar.classList.contains('on')) {
    sidebar.classList.remove('on');
    sidebar.classList.add('off');
    overlayBg.style.display = "none";
  } else {
    sidebar.classList.remove('off');
    sidebar.classList.add('on');
    overlayBg.style.display = "block";
  }
}

var mediaQuery = window.matchMedia("(min-width: 801px)")
removeAnimationClasses(mediaQuery) // Call listener function at run time
mediaQuery.addListener(removeAnimationClasses) // Attach listener function on state changes
function removeAnimationClasses(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    sidebar.classList.remove('off');
    sidebar.classList.remove('on');
    overlayBg.style.display = "none";
  } else {
    var navHeight = ElById("nav").clientHeight;
    sidebar.style.top = navHeight + 'px';
    overlayBg.style.top = navHeight + 'px';
  }
}

function OpenDropdown(el) {
  /*ElById("login-buttons").style.maxHeight = null;
  ElById('dropdown-form').style.maxHeight = "500px";*/
  ElById("dropdown-form").style.display = "block";
  ElById("form-lable").textContent = el.innerText + ":";

  ElById("select-escola").classList.remove('login-btn-on');
  ElById("select-escola").classList.add('login-btn-off');

  ElById("dropdown-form").classList.remove('login-form-off');
  ElById("dropdown-form").classList.add('login-form-on');
}

function CloseDropdown(el) {
  /*ElById("login-buttons").style.maxHeight = "500px";
  ElById('dropdown-form').style.maxHeight = null;*/
  ElById("select-escola").classList.remove('login-btn-off');
  ElById("select-escola").classList.add('login-btn-on');

  ElById("dropdown-form").classList.remove('login-form-on');
  ElById("dropdown-form").classList.add('login-form-off');
}

distritos.onchange = function (ev) {
  console.log("change");
  if (divFindEscolas.style.maxHeight) {
    divFindEscolas.style.maxHeight = null;
  } else {

    divFindEscolas.style.maxHeight = "500px";
  }
}

escolas.onchange = function (ev) {
  ElById("login-buttons").style.maxHeight = "500px";
}

