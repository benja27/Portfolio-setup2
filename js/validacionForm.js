export default function validation() {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const regex = /^[a-z@.]+$/;
    if (regex.test(email)) {
      form.submit();
    } else {
      const error = document.querySelector('.email-error');
      error.classList.toggle('d-none');
    }
  });
}