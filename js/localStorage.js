export default function setInfo() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const coments = document.getElementById('comment').value;
  const info = {
    name,
    email,
    coments,
  };
  localStorage.setItem('formInfo', JSON.stringify(info));
}

export function getInfo() {
  const data = JSON.parse(localStorage.getItem('formInfo'));
  if (data.name !== '') {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('comment').value = data.coments;
  }
}

export { setInfo };