export default function validation() {
  const email = document.getElementById('email').value;
  const regex = /^[a-z0-9@.]+$/;
  if (regex.test(email)) {
    return true;
  }
  const error = document.querySelector('.email-error');
  error.classList.toggle('d-none');
  return false;
}