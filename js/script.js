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


const bestSwiper = new Swiper('.best-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
  }
});


// === 공통 header & footer 자동 삽입 ===
window.addEventListener("DOMContentLoaded", () => {
  // 헤더
  if (document.getElementById('header')) {
    fetch('../common/header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;

        // 햄버거 메뉴 작동!
        const toggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector("nav ul");
        if (toggle && nav) {
          toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
          });
        }
      });
  }

  // 푸터
  if (document.getElementById('footer')) {
    fetch('../common/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  }
});
