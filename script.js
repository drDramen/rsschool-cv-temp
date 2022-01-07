const linkHome = document.querySelector('.link-home');

window.onscroll = function () {
  if (window.pageYOffset > window.innerHeight - 115) {
    linkHome.style.display = 'inline-block';
  } else {
    linkHome.style.display = 'none';
  }
};

linkHome.addEventListener('click', scrollHome);

function scrollHome() {
  window.scrollTo(0, 0);
}
