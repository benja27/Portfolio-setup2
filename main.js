import openMenu from './js/hamburguer.js';
import createCardProject from './js/works.js';
import createModal from './js/modalWindow.js';

document.addEventListener('DOMContentLoaded', () => {
  createCardProject();
  createModal();
});

document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('.menu-mobil a')) || (e.target.matches('.header-menu-hamburguer *'))) {
    openMenu();
  }
});
