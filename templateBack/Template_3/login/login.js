// Get the Sidebar
var sidebar = document.getElementById("sidebar");
var overlayBg = document.getElementById("overlay");


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
    var navHeight = document.getElementById("nav").clientHeight;
    sidebar.style.top = navHeight + 'px';
    overlayBg.style.top = navHeight + 'px';
  }
}

function OpenDropdown(el) {
  document.getElementById("dropdown-form").style.display = "block";
  document.getElementById("form-lable").textContent = el.innerText + ":";

  document.getElementById("login-buttons").classList.remove('login-btn-on');
  document.getElementById("login-buttons").classList.add('login-btn-off');

  document.getElementById("dropdown-form").classList.remove('login-form-off');
  document.getElementById("dropdown-form").classList.add('login-form-on');
}

function CloseDropdown(el) {
  document.getElementById("login-buttons").classList.remove('login-btn-off');
  document.getElementById("login-buttons").classList.add('login-btn-on');

  document.getElementById("dropdown-form").classList.remove('login-form-on');
  document.getElementById("dropdown-form").classList.add('login-form-off');
}

