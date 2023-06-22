
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
const header = document.querySelector('.header');
let mainPage = document.querySelector('body');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    burger.classList.remove('is-active')
    menu.classList.remove('is-open')

    if(mainPage.classList.contains('main-page')) {
      e.preventDefault() 
    } else {
      return
    }

    let yourHeight = header.offsetHeight;
    console.log(yourHeight)

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    
    var scrolledY = window.screenY;

    if(scrolledY) {
      window.scroll(0, scrolledY - yourHeight)
    }
  })
}

// (function(document, history, location) {
//   var HISTORY_SUPPORT = !!(history && history.pushState);

//   var anchorScrolls = {
//     ANCHOR_REGEX: /^#[^ ]+$/,
//     OFFSET_HEIGHT_PX: 50,

//     /**
//      * Establish events, and fix initial scroll position if a hash is provided.
//      */
//     init: function() {
//       this.scrollToCurrent();
//       window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
//       document.body.addEventListener('click', this.delegateAnchors.bind(this));
//     },

//     getFixedOffset: function() {
//       return this.OFFSET_HEIGHT_PX;
//     },

//     /**
//      * If the provided href is an anchor which resolves to an element on the
//      * page, scroll to it.
//      * @param  {String} href
//      * @return {Boolean} - Was the href an anchor.
//      */
//     scrollIfAnchor: function(href, pushToHistory) {
//       var match, rect, anchorOffset;

//       if(!this.ANCHOR_REGEX.test(href)) {
//         return false;
//       }

//       match = document.getElementById(href.slice(1));

//       if(match) {
//         rect = match.getBoundingClientRect();
//         anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
//         window.scrollTo(window.pageXOffset, anchorOffset);

//         // Add the state to history as-per normal anchor links
//         if(HISTORY_SUPPORT && pushToHistory) {
//           history.pushState({}, document.title, location.pathname + href);
//         }
//       }

//       return !!match;
//     },


//     scrollToCurrent: function() {
//       this.scrollIfAnchor(window.location.hash);
//     },


//     delegateAnchors: function(e) {
//       var elem = e.target;

//       if(
//         elem.nodeName === 'A' &&
//         this.scrollIfAnchor(elem.getAttribute('href'), true)
//       ) {
//         e.preventDefault();
//       }
//     }
//   };

//   window.addEventListener(
//     'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
//   );
// })(window.document, window.history, window.location);


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