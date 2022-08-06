// functionality to open and close search box
const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');

searchBtn.addEventListener('click', () => {
  if (searchForm.classList.contains('header__search-form--open')) {
    searchForm.classList.remove('header__search-form--open');
    searchBtn.classList.remove('far','fa-times');
    searchBtn.classList.add('fas','fa-search');
  } else {
    searchForm.classList.add('header__search-form--open');
    searchBtn.classList.remove('fas','fa-search');
    searchBtn.classList.add('far','fa-times');
  }
});

// functionality to open and close side menu
const menu = document.querySelector('.side-menu');
const menuBtn = document.getElementById('menu-btn');
const menuOverly = document.querySelector('.side-menu-overly');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.add('side-menu--show');
  menuOverly.style.display = 'block';
  body.style.overflow = 'hidden';
  
  // background fade animation 
  let op = 0;
  let id;
  id = setInterval(animated,1)
  function animated () {
    if (op >= 0.85) {
      clearInterval(id)
    } else {
      op += .01;
      menuOverly.style.backgroundColor = `rgba(6, 6, 6, ${op})`;
    }
  }
});

menuOverly.addEventListener('click', () => {
  menu.classList.remove('side-menu--show');
  body.removeAttribute('style');

  // background fade animation
  let op = 0.85;
  let id;
  id = setInterval(animated,1)
  function animated () {
    if (op <= 0.01) {
      clearInterval(id)
      menuOverly.style.display = 'none';
    } else {
      op -= .01;
      menuOverly.style.backgroundColor = `rgba(6, 6, 6, ${op})`;
    }
  }
});

// niny-slider setting
const slider1 = tns({
  container: '.slider-1',
  mouseDrag: true,
  autoplay: true,
  autoplayDirection: 'backward',
  autoplayTimeout: 3000,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: '#control-1',
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

const slider2 = tns({
  container: '.slider-2',
  mouseDrag: true,
  autoplay: true,
  autoplayDirection: 'backward',
  autoplayTimeout: 3500,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: '#control-2',
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
