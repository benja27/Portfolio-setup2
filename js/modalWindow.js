import { ArraycardsInfo } from "./works.js";


export function setModal(id){

  if(id === undefined){
    id = 0
  }else{
    alert(id)
    id = id
  }

  return  `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog d-lg-flex"><div class="modal-content py-4 px-4 col-lg-10">      

    <!-- modal header ------------------------ -->

    <div class="modal-header p-0   ">
      <h2 class="modal-title fw-bold work-title ps-lg-2" id="exampleModalLabel">${ArraycardsInfo[id].name}</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <!-- canopy-------------------------- -->

    <ul class="work-list px-0 py-1 mt-0 align-items-center ">
      <h4 class="fw-bold fs-6 ps-lg-2" >Storage</h4>
      <li class="work-list-item wlim align-items-center">
        <img src="./assets/Counter.svg" alt="" />
        Front End Dev
      </li>
      <li class="work-list-item wlim">
        <img src="./assets/Counter.svg" alt="" />
        2023
      </li>
    </ul>
    
    <!-- modal body -------------------->
    
    <div class="modal-body p-0 ">

      <article class="work-modal w-100 p-0">
        <img id="test" class="work-main-img p-2 mx-auto" alt="image of the first proyect" src="${ArraycardsInfo[id].featuredImage}"/>

        <aside class="work-info p-0 d-lg-flex gap-4 pt-lg-4">            
          <article class="work-description col-lg-7">
            <p>
              ${ArraycardsInfo[id].description}
            </p>
          </article>
          <div class="col-lg-auto " >
            <ul class="work-tech px-lg- ">
              <li> ${ArraycardsInfo[id].technologies[0]}  </li>
              <li> ${ArraycardsInfo[id].technologies[1]}  </li>
              <li class="mt-lg-2" > ${ArraycardsInfo[id].technologies[2]} </li>
            </ul>
            <article class="work-button d-flex justify-content-evenly gap-2 ">
              <a href="${ArraycardsInfo[id].link_live_version}" type="button" target="_blank" class="btn btn-see-project d-lg-flex align-items-center py-lg-0 gap-2">                
                See project
                <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href="${ArraycardsInfo[id].link_to_source}" target="_blank" type="button" class="btn btn-see-project gap-2">              
                See code
                <i class="fa-brands fa-square-github"></i>
              </a>
            </article>
          </div>            
        </aside>
      </article>

    </div>      
  </div>
</div>
</div>
`;  
}

export const updateModalInfo = (id) => {
  document.querySelector(".modal-title").innerHTML = ArraycardsInfo[id].name;
  let img_modal = document.querySelector(".modal-cont-default .work-main-img")
  img_modal.setAttribute("src", ArraycardsInfo[id].featuredImage)
  document.querySelector(".modal-cont-default .work-description p").innerHTML = ArraycardsInfo[id].description;

  document.querySelector(".modal-cont-default .work-tech li:nth-child(1)").innerHTML = ArraycardsInfo[id].technologies[0];
  document.querySelector(".modal-cont-default .work-tech li:nth-child(2)").innerHTML = ArraycardsInfo[id].technologies[1];
  document.querySelector(".modal-cont-default .work-tech li:nth-child(3)").innerHTML = ArraycardsInfo[id].technologies[2];

  document.querySelector(".modal-cont-default .btn-see-project:nth-child(1)").setAttribute("href", ArraycardsInfo[id].link_live_version);
  document.querySelector(".modal-cont-default .btn-see-project:nth-child(2)").setAttribute("href", ArraycardsInfo[id].link_to_source);
  
}






export default function createModal(id) {

  const whoGetIt = document.querySelector('body');
  const whatIsSent = document.createElement('div');
  whatIsSent.className = 'modal-cont-default';
  whatIsSent.innerHTML = setModal(id);
  whoGetIt.appendChild(whatIsSent);
}