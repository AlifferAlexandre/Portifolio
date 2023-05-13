/*animação navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*Edição de Selecionadores ativos*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove ('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });
    /*Reponsividade*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    /* remover navbar ao clikar*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* scroll*/
ScrollReveal({
    // reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'botton' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // typed js

    const typed = new Typed('.multiple-text', {
        strings: ['Desenvolvedor FrontEnd', 'Estudante', 'Gamer'],
        typedSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop: true
    });

    /*Swiper*/

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        gradCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      /*dark*/
      let darkModeIcon = document.querySelector('#darkMode-icon');

      darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
      };