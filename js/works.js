export const ArraycardsInfo = [
  {
    id: 0,
    name: 'Medical Appointment',
    description: 'A web app that allows you to make an appointment with a doctor, and the doctor can see the appointments that he has for the day.',
    featuredImage: './assets/projects/medi.gif',
    technologies: ['Ruby', 'Rails', 'React jS'],
    link_live_version: 'https://doctorappoinments.netlify.app/',
    link_to_source: 'https://github.com/benja27/Doctor-Appoinments---Front-End',
  },
  {
    id: 1,
    name: 'Budget App',
    description: 'Full stack web app to manage your budget, includes a login and register form, and a dashboard to manage your budget.',
    featuredImage: './assets/projects/budget_app.gif',
    technologies: ['Ruby', 'Rails', 'Bootstrap'],
    link_live_version: 'https://www.google.com',
    link_to_source: 'https://github.com/benja27/awsome-books2.0',
  },
  {
    id: 2,
    name: 'Marketplace online',
    description: 'A web app the calculates the distance between you and the food business you want to buy from, and shows you the ones that are closer to you.',
    featuredImage: './assets/projects/market.gif',
    technologies: ['React', 'Firebase', 'Redux'],
    link_live_version: 'https://react-ponmelocal.netlify.app/',
    link_to_source: 'https://github.com/benja27/ReactPonmeLocal',
  },
  {
    id: 3,
    name: 'Real Time Forex exchange rates',
    description: 'A web app that shows you the real time exchange rates of the most important currencies in the world.',
    featuredImage: './assets/projects/forex_viewer_gif.gif',
    technologies: ['React', 'API', 'Redux'],
    link_live_version: 'https://forex-viewer.netlify.app/',
    link_to_source: 'https://github.com/benja27/forex-currency-exchange-rate',
  },
];

function createCardBodydinamically(CardInfoFromArray) {
  const cardbody = `<img
  class="work-main-img"
  alt="image of the first proyect"
  src=" ${CardInfoFromArray.featuredImage} "
  alt=""
/>
<aside class="work-info">
  <h2 class="work-title"> ${CardInfoFromArray.name}    </h2>
  <ul class="work-list">
    <h4>Full Stack</h4>
    <li class="work-list-item">
      <img src="./assets/Counter.svg" alt="" />
      Full Stack Dev
    </li>
    <li class="work-list-item">
      <img src="./assets/Counter.svg" alt="" />
      2023
    </li>
  </ul>
  <article class="work-description">
    <p>
       ${CardInfoFromArray.description}
    </p>
  </article>
  <ul class="work-tech">
    <li> ${CardInfoFromArray.technologies[0]} </li>
    <li> ${CardInfoFromArray.technologies[1]} </li>
    <li> ${CardInfoFromArray.technologies[2]} </li>
  </ul>
  <button type="button" class="btn btn-modal btn-primary" data-id=${CardInfoFromArray.id} data-bs-toggle="modal" data-bs-target="#exampleModal">
    See project
  </button>
</aside>`;

  return cardbody;
}

export default function createCardProject() {
  for (let i = 0; i < ArraycardsInfo.length; i += 1) {
    const div = document.createElement('article');
    div.className = 'work';
    div.innerHTML = createCardBodydinamically(ArraycardsInfo[i]);
    const contenedor = document.querySelector('.works-container');
    contenedor.appendChild(div);
  }
}