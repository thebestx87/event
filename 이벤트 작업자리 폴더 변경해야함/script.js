let participants = [];

function shareKakao() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '여름 여행 이벤트',
      description: '지금 참여하고 여행 혜택 받아가세요!',
      imageUrl: 'YOUR_IMAGE_URL',
      link: {
        mobileWebUrl: 'https://your-event-page.com',
        webUrl: 'https://your-event-page.com'
      }
    }
  });
}

function shareFacebook() {
  const url = encodeURIComponent('https://your-event-page.com');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareTwitter() {
  const text = encodeURIComponent('여름 여행 이벤트! 참여하고 혜택 받아가세요!');
  const url = encodeURIComponent('https://your-event-page.com');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

document.getElementById('participation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const file = document.getElementById('file').files[0];

  participants.push({ name, phone, email, fileName: file ? file.name : '없음' });

  alert(`${name}님, 신청이 완료되었습니다! 연락처: ${phone}, 이메일: ${email}`);
});

function drawWinner() {
  if (participants.length === 0) {
    alert('참여자가 없습니다!');
    return;
  }
  const winner = participants[Math.floor(Math.random() * participants.length)];
  alert(`축하합니다! 당첨자: ${winner.name} (${winner.phone}, ${winner.email})`);
}
