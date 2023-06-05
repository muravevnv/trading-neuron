
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
let body = document.querySelector('body')
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


    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function checkCookies() {
        let cookieNote = document.getElementById('cookie_note');
        let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');
        // Если куки cookies_policy нет или она просрочена, то показываем уведомление
        if (!getCookie('cookies_policy')) {
            cookieNote.classList.add('show');
        }
        cookieBtnAccept.addEventListener('click', function () {
            setCookie('cookies_policy', 'true', 365);
            cookieNote.classList.remove('show');
        });
    }
    checkCookies();

    let scrollBtn = document.querySelector('.scroll-top');

    document.addEventListener('scroll', function(){
      if(window.pageYOffset > 1500) {
        scrollBtn.classList.add('is-visible')
      } else {
        scrollBtn.classList.remove('is-visible');
      }
    })

    scrollBtn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })