export default function validation(e) {
  let form = document.querySelector(e)  
  const email = document.getElementById('email').value;
  const regex = /^[a-z@.]+$/;
  if (regex.test(email)) {
    e.submit();
  } else {
    const error = document.querySelector('.email-error');
    error.classList.toggle('d-none');
  }
}