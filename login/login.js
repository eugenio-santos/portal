// Get the Sidebar
var ElById = document.getElementById.bind(document);

var sidebar = ElById("sidebar");
var overlayBg = ElById("overlay");
var distritos = ElById('distritos');
var divFindEscolas = ElById('find-escola');
var searchEscola = ElById('search-escola');
var escolas = ElById('sel-escola');
var loginBtns = ElById("login-buttons");
var userEscola = ElById('user-escola');
var userPess = ElById('user-pess');

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
  console.log(el.id);
  if (el.id === "Escolas") {
    userEscola.style.display = "block";
    userPess.style.display = "none";
  } else {
    userEscola.style.display = "none";
    userPess.style.display = "block";
  }
  ElById("dropdown-form").style.display = "block";
  console.log(searchEscola.value);

  ElById("form-lable").textContent = escolas.value + " - " + distritos.value;

  ElById("select-escola").classList.remove('login-btn-on');
  ElById("select-escola").classList.add('login-btn-off');

  ElById("dropdown-form").classList.remove('login-form-off');
  ElById("dropdown-form").classList.add('login-form-on');
}

function CloseDropdown(el) {
  ElById("select-escola").classList.remove('login-btn-off');
  ElById("select-escola").classList.add('login-btn-on');

  ElById("dropdown-form").classList.remove('login-form-on');
  ElById("dropdown-form").classList.add('login-form-off');
}

distritos.onchange = function (ev) {
  divFindEscolas.style.maxHeight = "500px";
}

escolas.onchange = function (ev) {
  console.log('change');
  loginBtns.style.maxHeight = "500px";
}

searchEscola.onkeyup = function (ev) {
  var keyword = this.value.toLowerCase();
  for (let i = 0; i < escolas.length; i++) {
    escolas.options[i].text.toLowerCase().includes(keyword) ?
      escolas.options[i].style.display = "block" :
      escolas.options[i].style.display = "none"
  }
}

