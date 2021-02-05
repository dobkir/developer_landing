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
    //    $('#btn_home').hover(
    //        function () {
    //            $('#overlay_home').css('opacity', '.8');
    //        },
    //        function () {
    //            $('#overlay_home').css('opacity', '.15');
    //        });
    // Ну или так
    $('.btn').hover((event) => {
        $('.overlay, .home__title, .home__description').toggleClass('opacity--1')
    })
})

// window.onscroll = () => {
//     let pages = document.querySelectorAll('.page');
//     let navs = document.querySelectorAll('.nav__link');
//     pages.forEach((el, i) => {
//         let top = el.offsetTop - 110;
//         let bottom = top + el.scrollHeight;
//         let scroll = window.scrollY;
//         let id = el.getAttribute('id');
//         if (scroll > top && scroll < bottom) {
//             navs.forEach(el => el.classList.remove('active__link'));
//             document.querySelector('a[href="#' + id + '"]').classList.add('active__link');
//         }

//     })
// };
