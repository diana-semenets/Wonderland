
  let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuItems = document.querySelector(".menu__list");
    menuBtn.addEventListener("click", (function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    }));
    menu.addEventListener("click", (e => {
        if (e.target === menu) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    }));


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
   
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == menuBtn;
        const menu_is_active = menu.classList.contains("active");
    
        if (!its_menu && !its_btnMenu && menu_is_active) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

let placeBtn = document.querySelector(".header__place-text");
let place = document.querySelector('.header__place-list');
placeBtn.addEventListener("click", (function() {
    place.classList.toggle("active-place");    
}));


window.onscroll = function () {
  myFunction();
};
    
const header = document.querySelector("header");
const sticky = header.offsetTop;
    
function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
}


const swiper = new Swiper('.bestsellers__slider', {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  speed:800,
  spaceBetween: 100,
  observer: true,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    320: {
        slidesPerView: 1.1,
        spaceBetween: 0,
        autoHeight: true,
    },
      370: {
          slidesPerView: 1.5,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      800: {
        slidesPerView: 2.5,
        spaceBetween: 20,
    },
      998: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
     
  },
  

});

const gallerySlider = new Swiper('.gallery__slider', {
    // Optional parameters
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3.5,
    loop: true,
    speed:800,
    spaceBetween: 30,
    observer: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 300,
        
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.18,
            spaceBetween: 0,
        },
          370: {
              slidesPerView: 1.23,
              spaceBetween: 0,
          },
          420: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            coverflowEffect: {
                rotate: 0,
                depth: 100,
                
            },
        },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
              },
        },
          600: {
            slidesPerView: 2.27,
            spaceBetween: 30,
        },
          700: {
            slidesPerView: 2.56,
            spaceBetween: 30,
        },
          768: {
              slidesPerView: 2.65,
              spaceBetween: 30,
          },
          800: {
            slidesPerView: 2.9,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
          998: {
              slidesPerView: 3.35,
              spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3.45,
            spaceBetween: 30,
        },
          1500: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
         
         
      },
  
  });



  
  let accordion = document.querySelector('.faq__card');
  let items = accordion.querySelectorAll('.accordion__item');
  let title = accordion.querySelectorAll('.accordion__title');
  
  function toggleAccordion() {
    let thisItem = this.parentNode;
    
    items.forEach(item => {
      if (thisItem == item ) {
        // if this item is equal to the clicked item, open it.
        thisItem.classList.toggle('active');
        return;
      } 
      // otherwise, remove the open class
      item.classList.remove('active');
    });
  }
  
  title.forEach(question => question.addEventListener('click', toggleAccordion));


  const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
btn.addEventListener('click', () => {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
});
});

function closeMode() {
modal.classList.add('hide');
modal.classList.remove('show');
document.body.style.overflow = '';
};

modalCloseBtn.addEventListener('click', closeMode);

modal.addEventListener('click', (e) => {
if (e.target === modal) {
closeMode();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
closeMode();
}
});



const modalSocials = document.querySelectorAll("[data-modalsocial]"), 
    modalSocial = document.querySelector(".modalsocial"), 
    modalSocialCloseBtn = document.querySelector("[data-closesocial]"),
    socialIcons = document.querySelector('.modal__social-items');

    modalSocials.forEach((btn => {
        btn.addEventListener("click", (() => {
            modalSocial.classList.add("show");
            modalSocial.classList.remove("hide");
            document.body.style.overflow = "hidden";
        }));
    }));
    function closeModeSocial() {
        modalSocial.classList.add("hide");
        modalSocial.classList.remove("show");
        document.body.style.overflow = "";
    }
    modalSocialCloseBtn.addEventListener("click", closeModeSocial);
    socialIcons.addEventListener("click", closeModeSocial);
    modalSocial.addEventListener("click", (e => {
        if (e.target === modalSocial) closeModeSocial();
    }));
    document.addEventListener("keydown", (e => {
        if (e.code === "Escape" && modalSocial.classList.contains("show")) closeModeSocial();
    }));