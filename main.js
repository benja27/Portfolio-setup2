
// 
let generator = document.querySelector('.header-menu-hamburguer')

// 
let target1 = document.querySelector('.header-menu-hamburguer img')
let target2 = document.querySelector('.header-menu-hamburguer i')

let modal = document.querySelector('.menu-mobil')

let header = document.querySelector('.hero')
let logo = document.querySelector('.header > p')

console.log(target2)


generator.addEventListener('click', ()=>{ 
   target1.classList.toggle('hide') 
   target2.classList.toggle('show') 
   modal.classList.toggle('show')
   header.classList.toggle('blur')
   logo.classList.toggle('blur')
})