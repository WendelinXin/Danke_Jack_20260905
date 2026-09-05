
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));

document.querySelectorAll('.memory-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const openLetterBtn = document.getElementById('openLetter');
const envelopeWrap = document.getElementById('envelopeWrap');
const letter = document.getElementById('letter');

openLetterBtn.addEventListener('click', () => {
  envelopeWrap.classList.add('open');
  openLetterBtn.textContent = '信已打開';
  setTimeout(() => {
    letter.classList.add('show');
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 450);
});

const finalReveal = document.getElementById('finalReveal');
const endingCard = document.getElementById('endingCard');
const finalMessage = document.getElementById('finalMessage');

finalReveal.addEventListener('click', () => {
  endingCard.classList.add('hide');
  setTimeout(() => finalMessage.classList.add('show'), 500);
});

const musicBtn = document.getElementById('musicBtn');
const bgm = document.getElementById('bgm');

bgm.volume = 0.25;

musicBtn.addEventListener('click', async () => {

  if (bgm.paused) {

    try {
      await bgm.play();

      musicBtn.textContent = '♫';
      musicBtn.classList.add('playing');
      musicBtn.title = '暫停音樂';

    } catch (error) {
      console.log('音樂播放失敗：', error);
    }

  } else {

    bgm.pause();

    musicBtn.textContent = '♪';
    musicBtn.classList.remove('playing');
    musicBtn.title = '播放音樂';

  }

});
