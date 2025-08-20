//menu
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.navegacion');
const navItem = document.querySelectorAll('.nav-item')

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('abrir') && nav.classList.contains('ocultar')) {
    menuBtn.classList.remove('abrir');
    menuBtn.classList.add('cerrar');
    nav.classList.remove('ocultar')
    nav.classList.add('mostrar');
  } else if (menuBtn.classList.contains('cerrar') && nav.classList.contains('mostrar')) {
    menuBtn.classList.remove('cerrar');
    menuBtn.classList.add('abrir');
    nav.classList.remove('mostrar');
    nav.classList.add('ocultar');
  }
});

navItem.forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(() => {
      menuBtn.classList.remove('cerrar');
      menuBtn.classList.add('abrir');
      nav.classList.remove('mostrar');
      nav.classList.add('ocultar');
    }, 1000);
  })
});

//silider


const sliderGaleria = document.querySelector('.slider-galeria');
const imagenSlider = document.querySelectorAll('.slider-galeria-img');
const dotContainer = document.querySelector('.dots-container');
const botonDerecha = document.querySelector('.boton-derecha');
const botonIzquierda = document.querySelector('.boton-izquierda');

let index = 0;
let interval;


imagenSlider.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotContainer.appendChild(dot);

  if(index === 0){
    dot.classList.add('active');
  }
  
  dot.setAttribute('index', index);
  dot.addEventListener('click', () => {
    goImage(index);
  })


});

function updateSlider(){
  sliderGaleria.style.transform = `translateX(${index * -100}%)`;
  updateDot();
}

function nextSlide(){
  index = (index + 1) % imagenSlider.length;
  updateSlider();
}

function preSlide(){
  index = (index - 1 + imagenSlider.length) % imagenSlider.length;
  updateSlider();
}

botonDerecha.addEventListener('click', () => {
  nextSlide();
})

botonIzquierda.addEventListener('click', () => {
  preSlide();
})

function goImage(indice){
  index = indice;
  updateSlider();
  resetInterval();
}

function updateDot(){

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  })
}

function autoSlider(){
  nextSlide();
}

interval = setInterval(autoSlider, 4000);

function resetInterval(){
  clearInterval(interval);
  interval = setInterval(autoSlider, 4000);
}

document.querySelector('.slider-galeria-content').addEventListener('click', resetInterval);

// scroll de la barra

// const nav = document.querySelector('.navegacion');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if(value > 580){
    nav.style.backgroundColor = 'rgb(245, 177, 189)';
    nav.style.padding = '1rem 0';
  } else {
    nav.style.backgroundColor = 'rgba(252, 214, 220, 0.555)';
    nav.style.padding = '.6rem 0';
  }
});








