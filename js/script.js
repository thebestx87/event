// 메뉴 토글 (모바일용)
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const nav = document.querySelector('nav ul');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// 상단 메인 슬라이드
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

// 하단 추천 슬라이드 (카드 느낌)
new Swiper('.discover-swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
