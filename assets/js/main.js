
// Hero type effect
var typed3 = new Typed('.typed', {
    strings: ['I\'am: <strong>Web Developer</strong>', 'I\'am: <strong>Videographer</strong>', 'I\'am: <strong>Desaigner</strong>', 'I\'am: <strong>Photographer</strong>'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    smartBackspace: true,
    loop: true
  });

// aos
    AOS.init({
      duration: 700
    });

// Portfolio 
var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

// skill 
gsap.from(".bar abbr", {
  scrollTrigger: ".bar",
  left: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1
});

gsap.from(".bar span", {
  scrollTrigger: ".bar",
  width: "0px",
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1
});


// Team
new Swiper('.team-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

// form
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
