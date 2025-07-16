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
  slidesPerView: 1, // 💡 하나만 꽉 차게 보여줌
  loop: true,
  spped: 300,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// 메뉴토글
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show'); // show 클래스 토글
});
