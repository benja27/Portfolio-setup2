const generator = document.querySelector('.header-menu-hamburguer');

const target1 = document.querySelector('.header-menu-hamburguer img');
const target2 = document.querySelector('.header-menu-hamburguer i');

const modal = document.querySelector('.menu-mobil');

const header = document.querySelector('.hero');

const logo = document.querySelector('.header > p');

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#uno')) {
    modal.classList.toggle('show');
    header.classList.toggle('blur');
    logo.classList.toggle('blur');
    target1.classList.toggle('hide');
    target2.classList.toggle('show');
  }
  if (e.target.matches('#dos')) {
    modal.classList.toggle('show');
    header.classList.toggle('blur');
    logo.classList.toggle('blur');
    target1.classList.toggle('hide');
    target2.classList.toggle('show');
  }
  if (e.target.matches('#tres')) {
    modal.classList.toggle('show');
    header.classList.toggle('blur');
    logo.classList.toggle('blur');
    target1.classList.toggle('hide');
    target2.classList.toggle('show');
  }
});

generator.addEventListener('click', () => {
  target1.classList.toggle('hide');
  target2.classList.toggle('show');
  modal.classList.toggle('show');
  header.classList.toggle('blur');
  logo.classList.toggle('blur');
});