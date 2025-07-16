document.querySelector('.menu-toggle').addEventListener('click', function () {
  const nav = document.querySelector('nav ul');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
