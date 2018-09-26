// Get the Sidebar
var sidebar = document.getElementById("sidebar");
var overlayBg = document.getElementById("overlay");
var navHeight = document.getElementById("nav").clientHeight;
var dashboard = document.getElementById("dashboard");
var username_menu = document.getElementById("user-menu");
sidebar.style.top = navHeight + 'px';

// Toggle between showing and hiding the sidebar, and add overlay effect
function toggle_sidebar() {
  if (sidebar.style.display === '') {
    sidebar.style.display = 'block';
  }
  if (sidebar.classList.contains('on')) {
    sidebar.classList.remove('on');
    sidebar.classList.add('off');
    overlayBg.style.display = "none";
    dashboard.style.marginLeft = '0px';
  } else if (sidebar.classList.contains('off')) {
    sidebar.classList.remove('off');
    sidebar.classList.add('on');
    overlayBg.style.display = "block";
    dashboard.style.marginLeft = '250px';
  } else {
    sidebar.classList.add('off');
    dashboard.style.marginLeft = '0px';
  }
}

var mediaQuery = window.matchMedia("(min-width: 801px)")
removeAnimationClasses(mediaQuery) // Call listener function at run time
mediaQuery.addListener(removeAnimationClasses) // Attach listener function on state changes
function removeAnimationClasses(mediaQuery) {
  if (mediaQuery.matches) {
    if (sidebar.classList.contains('off')) {
      sidebar.classList.remove('off');
      sidebar.classList.add('on');
      dashboard.style.marginLeft = '250px';
    }
  } else {
    var navHeight = document.getElementById("nav").clientHeight;
    sidebar.style.top = navHeight + 'px';
    overlayBg.style.top = navHeight + 'px';
    if (!sidebar.classList.contains('off')) {
      sidebar.classList.remove('on');
      sidebar.classList.add('off');
      overlayBg.style.display = "none";
    }
  }
}

function OpenSubMenu(el) {
  var panel = el.nextElementSibling;
  el.classList.toggle("active");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";

    if (!panel.classList.contains('top-lvl')) {
      var topLvlPanel = panel.parentElement;

      while (!topLvlPanel.classList.contains('top-lvl')) {
        topLvlPanel.style.maxHeight = topLvlPanel.scrollHeight + panel.scrollHeight + 'px';
        topLvlPanel = topLvlPanel.parentElement;
      }
      topLvlPanel.style.maxHeight = topLvlPanel.scrollHeight + panel.scrollHeight + 'px';
    }

    if (el.classList.contains('sub-item')) {
      var parentPading = window.getComputedStyle(el).paddingLeft;
      if (parentPading.endsWith('px')) {
        parentPading = parentPading.slice(0, -2);
      }

      var childPadding = parseInt(parentPading) + 10;

      panel.childNodes.forEach(function (node) {
        if (node.tagName === "A") {
          node.style.paddingLeft = childPadding + 'px';
        }
      });
    }
  }
}

function toggle_username_menu() {
  if (username_menu.classList.contains('on')) {
    username_menu.classList.remove('on');
    username_menu.classList.add('off');
    //overlayBg.style.display = "none";
  } else if (username_menu.classList.contains('off')) {
    username_menu.classList.remove('off');
    username_menu.classList.add('on');
    //overlayBg.style.display = "block";
  } else {
    username_menu.classList.add('on');
  }
};
