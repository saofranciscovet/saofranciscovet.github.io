const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const moreButton = document.querySelector('#moreAbout')

function changeSection(e) {
  e.preventDefault();

  const clickedLink = e.target;
  navLinks.forEach(link => {
    link.classList.remove('current');
  });

  clickedLink.classList.add('current');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = clickedLink.getAttribute('href');
  document.querySelector(target).classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', changeSection);
});

navLinks.forEach(link => {
  link.addEventListener('click', changeSection)
});

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    link.classList.add('current');
    console.log(link.classList);
  });
});

moreButton.addEventListener('click', changeSection);
moreButton.addEventListener('click', function(e) {
  document.querySelector('#location').classList.add('current');
})

window.addEventListener('scroll', function() {
  var minhaDiv = document.getElementById('minhaDiv');
  var posicao = minhaDiv.getBoundingClientRect().top;
  var alturaDaTela = window.innerHeight;

  if (posicao < alturaDaTela) {
    minhaDiv.classList.add('aparecendo');
  } else {
    minhaDiv.classList.remove('aparecendo');
  }
});