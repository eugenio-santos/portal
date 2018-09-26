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
  if (el.classList.contains("active")) {
    el.classList.toggle("active");
    panel.style.maxHeight = null;
  } else {
    CloseOpenSibling(el);
    el.classList.toggle("active");
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
      if (parentPading.substring(0, -2) === 'px') {
        parentPading = parentPading.slice(0, -2);
      }

      var childPadding = parseInt(parentPading) + 10;

      for (var i = 0; i < panel.childNodes.length; i++) {
        if (panel.childNodes[i].tagName === "A") {
          panel.childNodes[i].style.paddingLeft = childPadding + 'px';
        }
      };
    }
  }
}

function CloseOpenSibling(el) {
  var siblings = el.parentElement.childNodes;
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i].tagName === "A" && siblings[i].classList.contains('active')) {
      siblings[i].classList.toggle("active");
      siblings[i].nextElementSibling.style.maxHeight = null;
      return;
    }
  };
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


