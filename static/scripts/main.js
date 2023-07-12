const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const moreButton = document.querySelector('#moreAbout')

// Sections
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

// ScrollTo
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

function scrollTo(elementId) {
  var element = document.getElementById(elementId);
  var navbarHeight = document.getElementById('navbar').offsetHeight;

  if (element) {
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - navbarHeight;

    window.scrollBy({
      top: offsetPosition,
      left: 0,
      behavior: 'smooth'
    });
  }
}

moreButton.addEventListener('click', changeSection);
moreButton.addEventListener("click", function(e) {
  document.querySelector("#about").classList.add("current");
});

const homeLink = document.querySelector("#homeLink"), aboutLink = document.querySelector("#aboutLink"), contactLink = document.querySelector("#contactLink");

homeLink.addEventListener('click', changeSection);
homeLink.addEventListener("click", function(e) {
  document.querySelector("#home").classList.add("current");
});
aboutLink.addEventListener('click', changeSection);
aboutLink.addEventListener("click", function(e) {
  document.querySelector("#about").classList.add("current");
});
contactLink.addEventListener('click', changeSection);
contactLink.addEventListener("click", function(e) {
  document.querySelector("#contact").classList.add("current");
});

// Mobile touch
let touchstartX = 0;
let touchendX = 0;

function handleTouch() {
  const threshold = 100;

  const currentLink = document.querySelector('.navbar-nav a.current');
  const currentIndex = Array.from(navLinks).indexOf(currentLink);

  if (touchendX < touchstartX - threshold) {

    if (currentIndex < navLinks.length - 1) {
      currentLink.classList.remove('current');
      const nextLink = navLinks[currentIndex + 1];
      nextLink.classList.add('current');
  
      const target = nextLink.getAttribute('href');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.querySelector(target).classList.add('active');
    }
    
  } else if (touchendX > touchstartX + threshold) {
    if (currentIndex > 0) {
      currentLink.classList.remove('current');
      const prevLink = navLinks[currentIndex - 1];
      prevLink.classList.add('current');

      const target = prevLink.getAttribute('href');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.querySelector(target).classList.add('active');
    }
  }

  if (currentIndex === 0 && touchendX < touchstartX) {
    touchendX = touchstartX;
  }
}

document.addEventListener('touchstart', function(event) {
  touchstartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].clientX;
  handleTouch();
});

window.addEventListener('scroll', function() {
  var minhaDiv = document.getElementById('services');
  var posicao = minhaDiv.getBoundingClientRect().top;
  var alturaDaTela = window.innerHeight;

  if (posicao < alturaDaTela) {
    minhaDiv.classList.add('aparecendo');
  } else {
    minhaDiv.classList.remove('aparecendo');
  }
});

// Email
function sendEmail() {
  var subject = document.getElementById("subject").value;
  var text = document.getElementById("text").value;
  var email = "saofranciscoveterinaria@gmail.com";

  var mailToLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
  window.location.href = mailToLink;
}

// Toast
window.addEventListener('DOMContentLoaded', function() {
  var toast = new bootstrap.Toast(document.querySelector('.toast'));
  
  var delay = Math.floor(Math.random() * (30000 - 25000 + 1)) + 25000;
  
  setTimeout(function() {
      toast.show();
  }, delay);
});


var names = ["Dr. Percival", "Dra. Myrna"];
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function updateDoctorName() {
  var doctorName = document.getElementById("doctor-name");
  doctorName.innerText = names[getRandomIndex(names.length)];
}

updateDoctorName();

