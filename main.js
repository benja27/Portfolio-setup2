
// 
let generator = document.querySelector('.header-menu-hamburguer')
// 

let target1 = document.querySelector('.header-menu-hamburguer img')
let target2 = document.querySelector('.header-menu-hamburguer i')

let modal = document.querySelector('.menu-mobil')

let header = document.querySelector('.hero')

let logo = document.querySelector('.header > p')


document.documentElement.addEventListener('click', e=>{
  console.log(e.target)

  if(e.target.matches('#uno')){
    modal.classList.toggle('show')
    header.classList.toggle('blur')
   logo.classList.toggle('blur')
  }
  if(e.target.matches('#dos')){
    modal.classList.toggle('show')
    header.classList.toggle('blur')
   logo.classList.toggle('blur')
  }
  if(e.target.matches('#tres')){
    modal.classList.toggle('show')
    header.classList.toggle('blur')
   logo.classList.toggle('blur')
  }
})


generator.addEventListener('click', ()=>{ 
   target1.classList.toggle('hide') 
   target2.classList.toggle('show') 
   modal.classList.toggle('show')
   header.classList.toggle('blur')
   logo.classList.toggle('blur')
})