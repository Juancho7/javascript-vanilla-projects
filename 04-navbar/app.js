let btnToggle = document.querySelector('#toggle-nav');
let links = document.querySelector('#links-mobile');

btnToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
