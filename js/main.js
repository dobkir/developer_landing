
$(document).ready(() => {
  $('.nav__burger').click((event) => {
    $('.nav__burger, .nav').toggleClass('active')
    $('body').toggleClass('lock') // then the menu is open the scroll is locked
  })

  // then, when we click on the link, the default is returned to the burger
  $('.nav__item').click((event) => {
    $('.nav__burger, .nav').toggleClass('active')
  })

  //================== Smooth scrolling of pages ==================//

  // The link must contain something other than the hash
  const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const id = link.getAttribute('href').substring(1)
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })

  // When hovering or focusing on #btn_home, the opacity of the overlay changes
  $('.btn').hover((event) => {
    $('.overlay, .home__title, .home__description').toggleClass('opacity--1')
  })
})
//=============== End of Smooth scrolling of pages ===============//



//============ Page observer ============//
// init the observer
const options = {
  root: document.querySelector('home'),
  rootMargin: '80px',
  threshold: 0.8
}

// init animated elems on contact page
const contactStory = document.querySelector('.contact__story');
const contactForm = document.querySelector('.contact__form');
const contactSubtitle = document.querySelector('.contact__subtitle');
const contactPlatforms = document.querySelector('.contact__platforms');
const contactsArr = [contactStory, contactForm, contactSubtitle, contactPlatforms];

// init the observer
const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  observer.observe(section);
});

// simple function to use for callback in the intersection observer
function changeNav(entries, observer) {
  entries.forEach((entry) => {
    // verify the element is intersecting
    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      // remove old active class
      document.querySelector('.active__link').classList.remove('active__link');
      // get id of the intersecting section
      let id = entry.target.getAttribute('id');
      // find matching link & add appropriate class
      let truthyLink = document.querySelector(`[href="#${id}"]`);
      truthyLink.classList.add('active__link');
      // animation of contacts on contact page
      contactsArr.forEach(elem => {
        if (id === 'contact__page') {
          elem.classList.add('visible');
        } else {
          elem.classList.remove('visible');
        }
      })
    }
  });
}

//==================== End of the page observer =================//



//============ Contact page copy e-mail to clipboard ============//

//====== Create input or textarea
function copyToClipboard(str) {
  let area = document.createElement('textarea');

  document.body.appendChild(area);
  area.value = str;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}
//====== copy operation message
function ui_copyDone(btn) {
  let contentSaved = btn.innerHTML;

  btn.innerHTML = 'copied <i class="fa fa-smile-o"></i>';
  btn.classList.add('copied'); // for CSS selector ".copied" add any details

  setTimeout(function () {
    btn.innerHTML = contentSaved;
    btn.classList.remove('copied');
  }, 1500);
}

setAutoCopyFeatures()

/***/

function setAutoCopyFeatures() {
  onclick_copySelf(); /* class="js-copy" */
  onclick_copyFrom(); /* class="js-copy-btn", "js-copy-target" */

  function onclick_copySelf() {
    let copy = document.querySelectorAll('.js-copy');

    for (let i = 0; i < copy.length; i++) {
      copy[i].addEventListener('click', function () {
        copyToClipboard(this.textContent);
        ui_copyDone(this);
      });
    }
  }

  function onclick_copyFrom() {
    let btn = document.querySelectorAll('.js-copy-btn');

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {
        let div = document.querySelectorAll('.js-copy-target');

        copyToClipboard(div[i].textContent);
        ui_copyDone(this);
      });
    }
  }
}

//======================== Swiper slider ========================//
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//==================== End of  Swiper slider ====================//
