
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// 슬라이드 기능

document.addEventListener('DOMContentLoaded', () => {
  // 기존 슬라이드 관련 코드 모두 여기 안에 넣기
  const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) currentIndex = slide.length -1;
    else if (index >= slide.length) currentIndex = 0;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// 초기 슬라이드 표시
showSlide(0);
});
new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});



// 이벤트 페이지 랜덤 이벤트 카드 생성
const eventCardsContainer = document.getElementById('event-cards');

const events = [
    {
        img: 'images/event1.jpg',
        title: '서울-오사카 항공권 이벤트',
        desc: '오사카 인기 숙박 지원까지!'
    },
    {
        img: 'images/event2.jpg',
        title: '부산-제주 숙박 할인',
        desc: '호텔+항공 패키지 최대 30% OFF'
    },
    {
        img: 'images/event3.jpg',
        title: '서울-방콕 여행 이벤트',
        desc: '항공+리조트 특별 프로모션'
    },
    {
        img: 'images/event4.jpg',
        title: '대구-홍콩 특가 항공권',
        desc: '즉시 예약 시 무료 픽업 서비스'
    },
    {
        img: 'images/event5.jpg',
        title: '광주-싱가포르 여행 패키지',
        desc: '럭셔리 호텔 최대 25% 할인'
    },
    {
        img: 'images/event6.jpg',
        title: '인천-발리 항공+숙박',
        desc: '7월 한정 특별 이벤트!'
    }
];

function getRandomEvents(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('event-card');

    card.innerHTML = `
        <img src="${event.img}" alt="${event.title}" />
        <div class="content">
            <h4>${event.title}</h4>
            <p>${event.desc}</p>
        </div>
    `;

    return card;
}

function loadRandomEvents() {
    if (!eventCardsContainer) return;
    eventCardsContainer.innerHTML = '';

    const randomEvents = getRandomEvents(events, 5);
    randomEvents.forEach(event => {
        const card = createEventCard(event);
        eventCardsContainer.appendChild(card);
    });
}

loadRandomEvents();
