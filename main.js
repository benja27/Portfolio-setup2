import openMenu from './js/hamburguer.js';
import createCardProject from './js/works.js';
import createModal from './js/modalWindow.js';
import validation from './js/validacionForm.js';
import { getInfo, setInfo } from './js/localStorage.js';
import { ArraycardsInfo } from './js/works.js';
import { setModal } from './js/modalWindow.js';
import { updateModalInfo } from './js/modalWindow.js';


document.addEventListener('DOMContentLoaded', () => {  
  createCardProject();
  createModal();
  getInfo();
  
});

document.querySelector("body").addEventListener('scroll', (e) => {
  if(window.scrollY > 0 ){
    console.log(e)
    // setModal(3)
  }
  console.log("asdfdas")
});


document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('.menu-mobil a')) || (e.target.matches('.header-menu-hamburguer *'))) {
    openMenu();
  }

  const btns = document.querySelectorAll('.btn-modal');

  // btns.forEach((btn) => {
  //   btn.addEventListener('click', () => {
  //     const id = btn.getAttribute('data-id');
  //     alert(id)
  //     const card = ArraycardsInfo.find((element) => element.id == id);
  //     createModal(card);
  //   });
  // });

  if (e.target.matches('.btn-modal')) {
    
    const id = e.target.getAttribute('data-id');
    
    console.log(id)
    
    updateModalInfo(id);

    // document.querySelector(".modal-title").innerHTML = ArraycardsInfo[id].name;
    // let img_modal = document.querySelector(".work-main-img")
    // img_modal.src = ArraycardsInfo[id].featuredImage
    // console.log(img_modal)

    // setTimeout(()=>{
    //   document.querySelector(".work-main-img").src = ArraycardsInfo[id].featuredImage
    // },300)

    


  } 
});

document.getElementById('myForm').addEventListener('submit', (e) => {
  if (!validation()) {
    e.preventDefault();
  }
});

document.getElementById('myForm').addEventListener('change', () => {
  setInfo();
});

