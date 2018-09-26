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
var mediaQuery = window.matchMedia("(min-width: 801px)")
removeAnimationClasses(mediaQuery) // Call listener function at run time
mediaQuery.addListener(removeAnimationClasses) // Attach listener function on state changes

