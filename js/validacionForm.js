export default function validation(){
  let form = document.querySelector('.contact-form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let email = document.getElementById('email').value
  
    console.log(email)
    let regex = /^[a-z@.]+$/
  
    if (regex.test(email)){
      form.submit()
    }else{
      let error = document.querySelector('.email-error')
      error.classList.toggle('d-none')
    }
  })
}







