const hamburguerIcon = document.querySelector('.header-menu-hamburguer img');
const closeIcon = document.querySelector('.header-menu-hamburguer i');
const menuMobil = document.querySelector('.menu-mobil');
const headerBlur = document.querySelector('.hero');
const logoBlur = document.querySelector('.header > a');
const header = document.querySelector('.header');

export default function openMenu() {
  menuMobil.classList.toggle('show');
  headerBlur.classList.toggle('blur');
  header.classList.toggle('sticky');
  logoBlur.classList.toggle('blur');
  hamburguerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
}