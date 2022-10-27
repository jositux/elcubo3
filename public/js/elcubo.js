// Fade In Page
let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
  setInterval(show, 100);
}

function show() {
  let body = document.body;
  opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'));
  if (opacity < 1) {
    opacity = opacity + 0.3;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

// Click Button Cookies
const button = document.getElementById('AtCookieAlert__Button');
if (button) {
  button.addEventListener('click', (event) => {
    document.getElementsByClassName('app__CookieAlert')[0].classList.add('hidden');
  });
}

// Click search
const search_button = document.getElementsByClassName('iconsearch')[0];
if (search_button) {
  search_button.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cover-search').classList.toggle('hidden');
  });
}

// Close search
const search_close = document.getElementsByClassName('AtSearchFocus__AtIconButtonCloseModal')[0];
if (search_close) {
  search_close.addEventListener('click', (event) => {
    document.getElementById('cover-search').classList.toggle('hidden');
    event.stopPropagation();
  });
}

const search_this_close = document.getElementById('cover-search');
if (search_this_close) {
  search_this_close.addEventListener('click', (event) => {
    search_this_close.classList.toggle('hidden');
    event.stopPropagation();
  });
}

const input_search = document.getElementById('inputsearch');
if (input_search) {
  input_search.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

document.addEventListener('keydown', function (event) {
  if (search_this_close) {
    if (event.key === 'Escape' && !search_this_close.classList.contains('hidden')) {
      search_this_close.classList.toggle('hidden');
    }
  }
});

// Hover links menu
const nav_links = document.querySelectorAll('nav div a.has-submenu');
nav_links.forEach(function (link) {
  link.addEventListener('mouseenter', (e) => {
    var elems = document.querySelectorAll('.submenu');
    [].forEach.call(elems, function (el) {
      el.classList.remove('visible');
    });

    document.getElementsByClassName('submenu-container')[0].style.height = 'auto';
    document.getElementById(link.dataset.submenu).classList.add('visible');

    sub_item = document.querySelector('#' + link.dataset.submenu + ' .submenu-items');

    if (sub_item !== null) {
      let coords_left = getCoords(link).left;
      sub_item.style.left = coords_left + 'px';
    }
  });
});

// Hover Ninos
const link_ninos = document.getElementById('link-ninos');
if (link_ninos) {
  link_ninos.addEventListener('mouseenter', (e) => {
    var elems = document.querySelectorAll('.submenu');
    [].forEach.call(elems, function (el) {
      el.classList.remove('visible');
    });
  });
}

// Leave header
const header_container = document.querySelector('header');

if (header_container) {
  header_container.addEventListener('mouseleave', (e) => {
    var elems = document.querySelectorAll('.submenu');
    [].forEach.call(elems, function (el) {
      el.classList.remove('visible');
    });
    const mouseCircle = document.getElementById('mouse-circle');
    if (mouseCircle) {
      mouseCircle.classList.add('is-hidden');
    }
  });
}

// Menu Mobile
const button_menu_mobile = document.getElementById('menu-mobile-button');
if (button_menu_mobile) {
  button_menu_mobile.addEventListener('click', (e) => {
    document.getElementById('menu-mobile-container').classList.toggle('is-open');
    event.stopPropagation();
  });
}

// Menu Mobile Close
const close_menu_mobile = document.getElementById('menu-mobile-close');
if (close_menu_mobile) {
  close_menu_mobile.addEventListener('click', (e) => {
    document.getElementById('menu-mobile-container').classList.toggle('is-open');
    event.stopPropagation();
  });
}

// Get Coordenadas del elemento
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

var links = document.querySelectorAll('.arrow-down [href^=\'#\']');
var limit = links.length;
for (var n = 0; n < limit; n++) {
  links[n].addEventListener('click', handleClick);
}