$(document).ready(() => {
    $('.nav__burger').click((event) => {
        $('.nav__burger, .nav').toggleClass('active')
        $('body').toggleClass('lock') // чтобы при открытом меню блокировался скролл контента под ним
    })

    // далее возвращаем бургер в дефолт, при клике по ссылке
    $('.nav__item').click((event) => {
        $('.nav__burger, .nav').toggleClass('active')
    })
    // Плавный скролл страниц
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    // При наведении или фокусе на #btn_home, opacity оверлея меняется
    $('.btn').hover((event) => {
        $('.overlay, .home__title, .home__description').toggleClass('opacity--1')
    })
})

//===== Page observer

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
            if (entry.isIntersecting && entry.target.id === link.hash.substring(1))
                return activeLink(link);
            if (entry.isIntersecting && entry.target.id !== link.hash.substring(1))
                return removeActiveLink(link);
        });
    });
};

const observer = new IntersectionObserver(loadID, options);

targets.forEach(target => {
    observer.observe(target);
});

