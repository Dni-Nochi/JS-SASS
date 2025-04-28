const prevButtonElem = document.getElementById('prev');
const nextButtonElem = document.getElementById('next');
const slides = document.querySelectorAll('.mainF__slides-wrap');
let currentIndex = Math.floor(Math.random() * 5);  



function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'left', 'right');
    console.log(slide)
    if (index === currentIndex) {
      slide.classList.add('active');
      slide.style.opacity = '1';
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('left');
      slide.style.opacity = '0.5';
    } else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add('right');
      slide.style.opacity = '0.5';
    } else if (slide.classList.contains('mainF__slides-wrap')){
      slide.style.opacity = '0';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

document.addEventListener('DOMContentLoaded', () => {
  updateSlides();
});

prevButtonElem.addEventListener('click', prevSlide)
nextButtonElem.addEventListener('click', nextSlide)


function openText() {
  slides.forEach((slide) => {
    slide.addEventListener('mouseover', () => {
      const slideText = slide.querySelector('.mainF__slides-text')
      slideText.style.opacity = '1'
      console.log(slideText)
    })

    slide.addEventListener('mouseout', () => {
      const slideText = slide.querySelector('.mainF__slides-text')
      slideText.style.opacity = '0'
    })
  })
}

openText()
export {openText};