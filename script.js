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
        slidePerView: 3,
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