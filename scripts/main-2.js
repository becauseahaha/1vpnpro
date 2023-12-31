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
        document.getElementById('popup-payment').classList.add('is-shown');
    })
});

if (window.location.hash == '#popup-success') {
    document.getElementById('popup-success').classList.add('is-shown');
}
if (window.location.hash == '#popup-fail') {
    document.getElementById('popup-fail').classList.add('is-shown');
}


let isCaptchaPassed = false;
document.querySelector('input[name=email]').addEventListener('change', validateForm);
document.querySelector('input[name=smart-token]').addEventListener('change', function() {
    fetch("captchaChecker.php?" + new URLSearchParams(data).toString())
    .then(function(serverPromise) { 
        serverPromise.json().then(function(data) { 
            if (data.passed) {
                isCaptchaPassed = true;
                validateForm();
            }
        });
    });  
})
function validateForm() {
    const btn = document.getElementById('submit-btn');
    if (document.querySelector('input[name=email]').checkValidity() && isCaptchaPassed) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}