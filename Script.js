
const iconToggle = document.querySelector('.toggle-icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const iconClose = document.querySelector('.close-icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })

})


// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active');
    }

window.addEventListener('scroll', scrollHeader);


/* Hero type effect */
const typed = document.querySelector('.typed');

if(typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');

    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}


/* Scroll sction active link */
const sections = document.querySelectorAll('.section[id]');

function scrollActive() {
    const scrollY = window.pageXOffset;

    sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute('id' );

    if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
    } else {
        document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
         }
    })
}

window.addEventListener('scroll', scrollActive);



/* Resume Scroll sction */
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resum');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page =>{
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop -120;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume-tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume-tabs  a[href *=' + sectionId + ']').classList.remove('current');
             }

    }) 
}

window.addEventListener('scroll', resumeActive);


/* Features Section */
let filterItems = document.querySelectorAll('.features-filters li');

function activeFeatures() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activeFeatures);
})


let mixerFeatures = mixitup('.features-wrap-container', {
    selectors: {
        target: '.features-item'
    },
    animation: {
        duration: 300
    }
})


/* Projects Section */
let filterthems = document.querySelectorAll('.projects-filters li');

function activeProjects() {
    filterthems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterthems.forEach(el => {
    el.addEventListener('click', activeProjects);
})


/* References Section */
var swiper = new Swiper(".references-container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

/* Services Section */

