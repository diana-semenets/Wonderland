
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

    let contactLink = document.querySelector('.menu__list');
    
    contactLink.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
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
    slidesPerView: 3,
    loop: true,
    speed:800,
    spaceBetween: 0,
    observer: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 0,        
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView:/* 1.8 */ 1.15,
            spaceBetween: 20,
        },
          370: {
              slidesPerView:/* 1.8*/ 1.15,
              spaceBetween: 20,
          },
          385: {
            slidesPerView:/* 1.8*/ 1.15,
            spaceBetween: 20,
        },
          420: {
            slidesPerView:/* 1.8*/ 1.2,
            spaceBetween: 20, 
            effect: "false",          
        },
          500: {
            slidesPerView: 2.15,
            spaceBetween: 20,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
              },
        },
          600: {
            slidesPerView: 2.27,
            spaceBetween: 20,
        },
          700: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
          768: {
              slidesPerView: 2.6,
              spaceBetween: 20,
          },
          800: {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
          998: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1050: {
            slidesPerView: 3.4,
            spaceBetween: 30,
        },
          1100: {
            slidesPerView: 3.5,
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
    modalSocialCloseBtn = document.querySelector("[data-closesocial]");


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

    modalSocial.addEventListener("click", (e => {
        if (e.target === modalSocial) closeModeSocial();
    }));
    document.addEventListener("keydown", (e => {
        if (e.code === "Escape" && modalSocial.classList.contains("show")) closeModeSocial();
    }));




    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    phoneInputs = document.querySelectorAll('input[name="tel"]');

phoneInputs.forEach(item => {
  item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
  });
});

const message = {
  loading: 'Загрузка...',
  success: 'Thank you!'  ,
  failure: 'Что-то пошло не так...'
};

const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
    });
};

form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.appendChild(statusMessage);

        const formData = new FormData(item);

        postData('server.php', formData)
            .then(res => {
                console.log(res);
                showModal();
            })
            .catch(() => 
            statusMessage.textContent = message.success)
            .finally(() => {
                showModal();
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            });
    });
});


const faqContainer = document.querySelector('.faq__container');
const faqBtn = document.querySelector('.faq__btn');

faqBtn.addEventListener("click", (() => {
    faqContainer.classList.toggle("more");
    faqBtn.classList.toggle("more");
}));

const aboutContainer = document.querySelector('.about__container');
const aboutBtn = document.querySelector('.about__btn');

aboutBtn.addEventListener("click", (() => {
    aboutContainer.classList.toggle("more");
    aboutBtn.classList.toggle("more");
}));


function loadStyle(href) {
    let link = document.createElement('link');
    let cssSwiper = document.createElement('link');
    link.rel = 'stylesheet';
    cssSwiper.rel = 'stylesheet'
    link.href = href;
    document.body.appendChild(link);
}
loadStyle('css/style.css');

