let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".service-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});



// When the user scrolls down 20px from the top of the document, show the button

var c = 0;
window.onscroll = function (event) {
    if (c < 1) {
        if (window.scrollY > 1000) {
            alert('Welcome to Sydney rental Services');
            c = c + 1;
        }
    }

}
