const form = document.querySelector('form');
const url = document.querySelector('#url');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = encodeURIComponent(document.querySelector('#name').value);
  const year = encodeURIComponent(document.querySelector('#year').value);
  
  url.textContent = `https://localhost:8080/?name=${name}&year=${year}`;