
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

// const anchors = document.querySelectorAll('a[href*="#"]')
// const header = document.querySelector('.header');


// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//     burger.classList.remove('is-active')
//     menu.classList.remove('is-open')

//     if(mainPage.classList.contains('main-page')) {
//       e.preventDefault() 
//     } else {
//       return
//     }

//     let yourHeight = header.offsetHeight;
//     console.log(yourHeight)

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
    
//     var scrolledY = window.screenY;

//     if(scrolledY) {
//       window.scroll(0, scrolledY - yourHeight)
//     }
//   })
// }


let mainPage = document.querySelector('body');

var links = document.querySelectorAll('[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    var el = document.querySelector(this.hash);

    if(mainPage.classList.contains('main-page')) {
      e.preventDefault() 
      burger.classList.remove('is-active')
      menu.classList.remove('is-open')

      } else {

        return
      }

    if (el) {
      window.scrollTo(0, el.getBoundingClientRect().top - 20);
    }
    e.preventDefault();
  }, false);
}

let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu');

function toggleMenu() {
  menu.classList.toggle('is-open')
}

burger.addEventListener('click', function() {
  this.classList.toggle('is-active');
  toggleMenu()
})



  let scrollBtn = document.querySelector('.scroll-top');

  document.addEventListener('scroll', function(){
    if(window.pageYOffset > 700) {
      scrollBtn.classList.add('is-visible')
    } else {
      scrollBtn.classList.remove('is-visible');
    }
  })

  scrollBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })

  var modalButtons = document.querySelectorAll(".js-open-modal"),
  overlay = document.querySelectorAll(".modal-overlay"),
  closeButtons = document.querySelectorAll(".modal-close");


modalButtons.forEach(function (item) {
  
  item.addEventListener("click", function (e) {

    e.preventDefault();

    var modalId = this.getAttribute("data-modal"),
      modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      );

    modalElem.classList.add("is-open");
  }); 
}); 

closeButtons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var parentModal = this.closest(".modal");
    parentModal.classList.remove("is-open");

  });
}); 

overlay.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var parentModal = this.closest(".modal");
    parentModal.classList.remove("is-open");

  });
}); 



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