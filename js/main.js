
$(document).ready(() => {
  $('.nav__burger').click((event) => {
    $('.nav__burger, .nav').toggleClass('active')
    $('body').toggleClass('lock') // then the menu is open the scroll is locked
  })

  // then, when we click on the link, the default is returned to the burger
  $('.nav__item').click((event) => {
    $('.nav__burger, .nav').toggleClass('active')
  })
  // Smooth scrolling of pages
  let $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

  // When hovering or focusing on #btn_home, the opacity of the overlay changes
  $('.btn').hover((event) => {
    $('.overlay, .home__title, .home__description').toggleClass('opacity--1')
  })
})

//============ Page observer ============//
const contactStory = document.querySelector('.contact__story');
const contactForm = document.querySelector('.contact__form');
const contactSubtitle = document.querySelector('.contact__subtitle');
const contactPlatforms = document.querySelector('.contact__platforms');
const targets = document.querySelectorAll('div[id]');
const links = document.querySelectorAll('.nav__item');
const options = {
  root: document.querySelector('home'),
  rootMargin: '0px',
  threshold: 0.7
};

function activeLink(element) {
  element.classList.add('active__link');
};

function removeActiveLink(element) {
  element.classList.remove('active__link');
};

const loadID = function (entries, observer) {
  entries.forEach(entry => {
    links.forEach(link => {
      if (entry.isIntersecting && entry.target.id === link.hash.substring(1)) {
        return activeLink(link);
      }
      if (entry.isIntersecting && entry.target.id !== link.hash.substring(1))
        return removeActiveLink(link);
    });
    if (entry.target.id === 'contact__page') {
      contactStory.classList.add('contact__story--visible');
      contactForm.classList.add('contact__form--visible');
      contactSubtitle.classList.add('contact__subtitle--visible');
      contactPlatforms.classList.add('contact__platforms--visible');
    } else {
      contactStory.classList.remove('contact__story--visible');
      contactForm.classList.remove('contact__form--visible');
      contactSubtitle.classList.remove('contact__subtitle--visible');
      contactPlatforms.classList.remove('contact__platforms--visible');
    };
  });
};

const observer = new IntersectionObserver(loadID, options);

targets.forEach(target => {
  observer.observe(target);
});

//============ End of page observer ============//

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
