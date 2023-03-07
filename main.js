const hamburguerContainer = document.querySelector('.header-menu-hamburguer');

const hamburguerIcon = document.querySelector('.header-menu-hamburguer img');
const closeIcon = document.querySelector('.header-menu-hamburguer i');

const menuIcon = document.querySelector('.menu-mobil');

const headerBlur = document.querySelector('.hero');

const logoBlur = document.querySelector('.header > p');

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#uno')) {
    menuIcon.classList.toggle('show');
    headerBlur.classList.toggle('blur');
    logoBlur.classList.toggle('blur');
    hamburguerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  }
  if (e.target.matches('#dos')) {
    menuIcon.classList.toggle('show');
    headerBlur.classList.toggle('blur');
    logoBlur.classList.toggle('blur');
    hamburguerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  }
  if (e.target.matches('#tres')) {
    menuIcon.classList.toggle('show');
    headerBlur.classList.toggle('blur');
    logoBlur.classList.toggle('blur');
    hamburguerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  }
});

hamburguerContainer.addEventListener('click', () => {
  hamburguerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
  menuIcon.classList.toggle('show');
  headerBlur.classList.toggle('blur');
  logoBlur.classList.toggle('blur');
});