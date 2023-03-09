const modalWindow = `
<div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog d-lg-flex">
  <div class="modal-content py-4 px-4 col-lg-10">      

    <!-- modal header ------------------------ -->

    <div class="modal-header p-0   ">
      <h2 class="modal-title fw-bold work-title ps-lg-2" id="exampleModalLabel">Tonic</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <!-- canopy-------------------------- -->

    <ul class="work-list px-0 py-1 mt-0 align-items-center ">
      <h4 class="fw-bold fs-6 ps-lg-2" >CANOPY</h4>
      <li class="work-list-item wlim align-items-center">
        <img src="./assets/Counter.svg" alt="" />
        Back End Dev
      </li>
      <li class="work-list-item wlim">
        <img src="./assets/Counter.svg" alt="" />
        2015
      </li>
    </ul>
    
    <!-- modal body -------------------->
    
    <div class="modal-body p-0 ">

      <article class="work-modal w-100 p-0">
        <img class="work-main-img p-2 mx-auto" alt="image of the first proyect" src="./assets/Snapshoot Portfolio.svg"/>

        <aside class="work-info p-0 d-lg-flex gap-4 pt-lg-4">            
          <article class="work-description col-lg-7">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
            </p>
          </article>
          <div class="col-lg-auto " >
            <ul class="work-tech px-lg- ">
              <li>html</li>
              <li>css</li>
              <li class="mt-lg-2" >javaScript</li>
            </ul>
            <article class="work-button d-flex justify-content-evenly gap-2 ">
              <button type="button" class="btn btn-see-project d-lg-flex align-items-center py-lg-0 gap-2">
                See project
                <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <button type="button" class="btn btn-see-project gap-2">
                see Source
                <i class="fa-brands fa-square-github"></i>
              </button>
            </article>
          </div>            
        </aside>
      </article>

    </div>      
  </div>
</div>
</div>



`;

export default function createModal() {
  const whoGetIt = document.querySelector('body');
  const whatIsSent = document.createElement('div');
  whatIsSent.innerHTML = modalWindow;

  whoGetIt.appendChild(whatIsSent);
}