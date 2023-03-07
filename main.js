const hamburguerIcon = document.querySelector('.header-menu-hamburguer img');
const closeIcon = document.querySelector('.header-menu-hamburguer i');
const menuMobil = document.querySelector('.menu-mobil');
const headerBlur = document.querySelector('.hero');
const logoBlur = document.querySelector('.header > a');

document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('.menu-mobil a')) || (e.target.matches('.header-menu-hamburguer *'))) {
    menuMobil.classList.toggle('show');
    headerBlur.classList.toggle('blur');
    logoBlur.classList.toggle('blur');
    hamburguerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  }
});
