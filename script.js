var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      // when window width is >= 640px
      1188: {
        slidesPerView: 4,
        spaceBetween: 24 
      }
    }
  });

  let btnMenu = document.getElementById("btn-abrir");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let btnFechar = document.querySelector(".menu-mobile .btn-fechar");

// Abrir menu
btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu");
    btnMenu.style.display = "none"; // Esconde o botão de abrir
});

// Fechar menu ao clicar no botão de fechar
btnFechar.addEventListener("click", () => {
    fecharMenu();
});

// Fechar menu ao clicar no overlay
overlay.addEventListener("click", () => {
    fecharMenu();
});

function fecharMenu() {
    menu.classList.remove("abrir-menu");
    btnMenu.style.display = "block"; // Faz o botão de abrir reaparecer
}

  
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".text-nav");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove a classe "active" de todos os links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Adiciona a classe "active" ao link clicado
            this.classList.add("active");
        });
    });
});
  