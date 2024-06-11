
let returnToTopButton = document.getElementById('returnToTop');
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add('active');
  } else {
    returnToTopButton.classList.remove('active');
  }
}

window.addEventListener('scroll', toggleReturnToTopButton);
returnToTopButton.addEventListener('click', scrollToTop);