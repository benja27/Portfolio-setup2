import openMenu from './js/hamburguer.js';

document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('.menu-mobil a')) || (e.target.matches('.header-menu-hamburguer *'))) {
    openMenu();
  }
});

// prueba -----------------------------------------

const Arraycards = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './assets/Snapshoot Portfolio.svg',
    technologies: ['Html', 'Css', 'Javascript'],
    link_live_version: 'https://www.google.com',
    link_to_source: 'https://www.google.com',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './assets/Snapshoot Portfolio2.svg',
    technologies: ['Html', 'Css', 'Javascript'],
    link_live_version: 'https://www.google.com',
    link_to_source: 'https://www.google.com',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './assets/Snapshoot Portfolio3.svg',
    technologies: ['Html', 'Css', 'Javascript'],
    link_live_version: 'https://www.google.com',
    link_to_source: 'https://www.google.com',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './assets/Snapshoot Portfolio4.svg',
    technologies: ['Html', 'Css', 'Javascript'],
    link_live_version: 'https://www.google.com',
    link_to_source: 'https://www.google.com',
  },

];

function cbody(c) {
  const cardbody = `<img
  class="work-main-img"
  alt="image of the first proyect"
  src=" ${c.featuredImage} "
  alt=""
/>
<aside class="work-info">
  <h2 class="work-title"> ${c.name}    </h2>
  <ul class="work-list">
    <h4>CANOPY</h4>
    <li class="work-list-item">
      <img src="./assets/Counter.svg" alt="" />
      Back End Dev
    </li>
    <li class="work-list-item">
      <img src="./assets/Counter.svg" alt="" />
      2015
    </li>
  </ul>
  <article class="work-description">
    <p>
       ${c.description}
    </p>
  </article>
  <ul class="work-tech">
    <li> ${c.technologies[0]} </li>
    <li> ${c.technologies[1]} </li>
    <li> ${c.technologies[2]} </li>
  </ul>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
See project
</button>
</aside>`;

  return cardbody;
}

for (let i = 0; i < Arraycards.length; i += 1) {
  const div = document.createElement('article');
  div.className = 'work';
  div.innerHTML = cbody(Arraycards[i]);
  const contenedor = document.querySelector('.works-container');
  contenedor.appendChild(div);
}
