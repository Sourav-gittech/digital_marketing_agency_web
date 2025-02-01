// Header Scroll 
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header-scrolled');
    }
    else {
        nav.classList.remove('header-scrolled');
    }
}

// Nav Hide
let navCollapse = document.querySelector('.navbar-collapse.collapse');
let navBar = document.querySelectorAll('.nav-link');
navBar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});

// Owl Carousel 
$(document).ready(function () {
    $('.client-slider-section').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

// Counter section 
document.addEventListener('DOMContentLoaded', () => {
    function showCounter(id, start, end, duration) {
        let obj = document.getElementById(id),
            setCurrent,
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                if (Math.floor(current / 1000) != 0) {
                    let floorValue = Math.floor(current / 1000);
                    let moduleValue = current % 1000;
                    if (moduleValue < 100) {
                        moduleValue = '0' + moduleValue;
                    }
                    setCurrent = floorValue + ',' + moduleValue + '+';
                }
                else {
                    setCurrent = current + '+';
                }
                obj.innerHTML = setCurrent;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    showCounter('completed_project_count', 0, 1150, 300);
    showCounter('happy_client_count', 0, 947, 300);
    showCounter('ongoing_project_count', 0, 112, 3000);
    showCounter('award_wining_count', 0, 52, 3000);
});