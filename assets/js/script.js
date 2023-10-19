// Criei uma função do menu hamburguer, que fecha ao ser clicado no link

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const botao = document.querySelector('.container__botao');

const form = document.querySelector('#contato-form');

btn1.addEventListener('click', () => {
    botao.checked = false;
})

btn2.addEventListener('click', () => {
    botao.checked = false;
})

btn3.addEventListener('click', () => {
    botao.checked = false;
})

btn4.addEventListener('click', () => {
    botao.checked = false;
})

// Aqui fica uma função para que funcione o slider corretamente

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
  
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderLink = document.querySelector('.slider-link');
  
    prevButton.addEventListener('click', function() {
      changeSlide(-1);
    });
  
    nextButton.addEventListener('click', function() {
      changeSlide(1);
    });
  
    sliderLink.addEventListener('click', function() {
      const currentSlide = document.querySelector('.slide:nth-child(' + (currentIndex + 1) + ')');
      const slideLink = currentSlide.getAttribute('data-link');
      window.open(slideLink, '_blank');
    });
  
    function changeSlide(n) {
      currentIndex += n;
      showSlide();
    }
  
    function showSlide() {
      const slider = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slide');
  
      if (currentIndex > slides.length - 1) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
  
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    setInterval(() => {
      changeSlide(1);
    }, 6000);
});

// Aqui é uma função para enviar uma mensagem de alerta ao usuario enviar o formulario.

form.addEventListener('submit', () => alert('Formulario enviado com sucesso!'))