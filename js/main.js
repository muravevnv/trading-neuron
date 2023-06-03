
const instrumentsSlider = new Swiper('.instruments-slider',{
  slidesPerView: 'auto',
  spaceBetween: 20,
  allowTouchMove: true,

  breakpoints: {
    
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      allowTouchMove: false,
    }
  }
})

const calculationSlider = new Swiper('.calculation-slider',{
  slidesPerView: 'auto',
  spaceBetween: 20,
  allowTouchMove: true,

  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      allowTouchMove: false,
    }
  }
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('.modal-overlay');
let modalOverlay = document.querySelector('.modal-close');

let modalBtn = document.querySelectorAll('.js-open-modal');

function showModal(){
  modal.classList.add('is-open');
  body.classList.add('is-fixed')
}

function closeModal() {
  modal.classList.remove('is-open');
  body.classList.remove('is-fixed')
}

modalBtn.forEach(function(item){
  item.addEventListener('click', showModal)
})

document.addEventListener('click', function(event){
  let target = event.target;
  if(target == modalCloseBtn || target == modalOverlay) {
    closeModal();
  }
})

let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu');

function toggleMenu() {
  menu.classList.toggle('is-open')
}


burger.addEventListener('click', function() {
  this.classList.toggle('is-active');
  toggleMenu()
})