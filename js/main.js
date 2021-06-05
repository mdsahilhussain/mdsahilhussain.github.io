$(document).ready(function() {
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');


    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });
});

let toTop = document.querySelector(".totop")

window.addEventListener("scroll", () => {
    if (window.pageXOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})

// javaScript function for slider
$(document).ready(function() {
    $('.slideshow').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        slideToShow: 1,
        autopalySpeed: 1500,
        infintie: true,
        loop: true
    });
});

$(document).ready(function() {
    $('.img_fill').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        slideToShow: 1,
        autopalySpeed: 1500,
        infintie: true,
        loop: true,
        prevArrow: ".prevArrow",
        nextArrow: ".nextArrow",
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false,
                dots: false,
                slideToShow: 1,
                autopaly: true,
                autopalySpeed: 1500,
                infintie: true,
                loop: true
            }
        }]
    });
});

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}