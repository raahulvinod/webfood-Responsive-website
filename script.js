//---- Menu
const divToShow = 'nav .menu';
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector('.m-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')){
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible');
        }
    }, 250);
})

//Automatically close by click outside menu
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divToShow);

    if (!isClosest && divPopup.classList.contains('show')){
        divPopup.classList.remove('show');
        document.body.classList.remove("menu-visible");
    };
})

//-------------Search---------------
const sTrigger = document.querySelector('.s-trigger');
const addClass = document.querySelector('.site');
sTrigger.addEventListener('click', () => {
    addClass.classList.toggle('showsearch')
})


//-----------Slider-------------------
const sliderThumb = new Swiper('.thumb-nav', {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: false,
        breakpoints: {
            992: {
                direction: 'vertical'
            }
        }
  });
  const theSlider = new Swiper('.thumb-big', {
        slidePerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        thumbs: {
            swiper: sliderThumb,
        }
});

//-----------TABBED PRODUCTS-------------------
const tabbedNav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidesPerView: 6,
    centeredSlides: true,
    slidesPerGroup: false,
});
const theTab = new Swiper('.tabbed-item', {
    loop: true,
    slidePerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav,
    }
});

//--------- On Scroll Transition
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    })
})

const box = document.querySelectorAll('.animate');
      box.forEach((el) => {
        io.observe(el);
      })