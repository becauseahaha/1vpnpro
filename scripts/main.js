if (window.innerWidth <= 425 && Swiper !== undefined) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 28,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        }
    });
}

document.querySelectorAll('.js-scroll-to-buy').forEach(el => {
    el.addEventListener('click', (e) => {
        document.getElementById('buy').scrollIntoView({ behavior: 'smooth', block: (window.innerWidth <= 425 ? 'start' : 'center') });
    })
});

document.querySelectorAll('.popup__close').forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.closest('.popup').classList.remove('is-shown');
        window.location.hash = "";
    })
});

if (window.location.hash == '#popup-success') {
    document.getElementById('popup-success').classList.add('is-shown');
}
if (window.location.hash == '#popup-fail') {
    document.getElementById('popup-fail').classList.add('is-shown');
}

var rellax = new Rellax('.js-parallax', {
    breakpoints: [425, 1024, 1920],
    center: true
});