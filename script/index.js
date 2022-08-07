const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const shadowOverlay = document.getElementById('shadow');

const toggleSwitchNavbar = () => {
  navbar.classList.toggle('active');
}

navbarToggle.addEventListener('click', () => {
  navbar.classList.add('active');
  shadowOverlay.classList.add('active');
});

shadowOverlay.addEventListener('click', () => {
  navbar.classList.remove('active');
  shadowOverlay.classList.remove('active');
});