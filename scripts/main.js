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
        e.preventDefault()
        document.getElementById('buy').scrollIntoView({ behavior: 'smooth', block: (window.innerWidth <= 425 ? 'start' : 'center') });
    })
});

document.querySelectorAll('.popup__close').forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.closest('.popup').classList.remove('is-shown');
        window.location.hash = "";
    })
});

document.querySelectorAll('.js-link-popup').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('popup-payment').querySelector('input[name=plan]').value =  el.dataset.plan;
        document.getElementById('popup-payment').querySelector('input[name=price]').value = el.dataset.price;
        document.getElementById('popup-payment').classList.add('is-shown');
        return;
        document.getElementById('popup-payment-2').querySelector('iframe').src = el.href;
    })
});

// document.getElementById('email-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let data = {};
//     data['email'] = document.getElementById('email-form').querySelector('input[type=email]').value;
//     fetch("mailer.php?" + new URLSearchParams(data).toString())
//     .then(function(serverPromise) { 
//         serverPromise.json()
//         .then(function(data) { 
//             document.getElementById('popup-payment').classList.remove('is-shown');
//             document.getElementById('popup-payment-2').classList.add('is-shown');
//         });
//     });
// })

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