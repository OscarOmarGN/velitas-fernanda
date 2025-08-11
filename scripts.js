
/* slider galeria */

// const sliderGaleria = document.querySelector('.slider-galeria');
// const imagenes = sliderGaleria.querySelectorAll('img');

// let index = 1;

// setInterval(function(){
  
//   let porcentaje = index * -100;
  
//   sliderGaleria.style.transform = `translatex(${porcentaje}%)`;
//   index++;

//   if(index > (imagenes.length - 1)){
//     index = 1;
//   }

// }, 4000);

/* slider automatico y manual  */

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

const nav = document.querySelector('.navegacion');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if(value > 280){
    nav.style.backgroundColor = 'rgb(245, 177, 189)';
    nav.style.padding = '1rem 0';
  } else {
    nav.style.backgroundColor = 'rgba(252, 214, 220, 0.555)';
    nav.style.padding = '.6rem 0';
  }
});






