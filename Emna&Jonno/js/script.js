// Animaçao da navbar

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {

    navbar.style.transform = 'translateY(-100%)';
  } else {
    
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});

// "Ver mais" - btn

const botao1 = document.getElementById("verMaisBtn1");
const section1 = document.getElementById("extraSection1");

botao1.addEventListener("click", () => {
section1.classList.toggle("hidden");

// Alterna o texto do botão
if (section1.classList.contains("hidden")) {
  botao1.textContent = "Ver mais";
} 
else {
  botao1.textContent = "Ver menos";
}
});




const botao2 = document.getElementById("verMaisBtn2");
const section2 = document.getElementById("extraSection2");

botao2.addEventListener("click", () => {
section2.classList.toggle("hidden");

// Alterna o texto do botão
if (section2.classList.contains("hidden")) {
  botao2.textContent = "Ver mais";
} 
else {
  botao2.textContent = "Ver menos";
}
});




const botao3 = document.getElementById("verMaisBtn3");
const section3 = document.getElementById("extraSection3");

botao3.addEventListener("click", () => {
section3.classList.toggle("hidden");

// Alterna o texto do botão
if (section3.classList.contains("hidden")) {
  botao3.textContent = "Ver mais";
} 
else {
  botao3.textContent = "Ver menos";
}
});




const botao4 = document.getElementById("verMaisBtn4");
const section4 = document.getElementById("extraSection4");

botao4.addEventListener("click", () => {
section4.classList.toggle("hidden");

// Alterna o texto do botão
if (section4.classList.contains("hidden")) {
  botao4.textContent = "Ver mais";
} 
else {
  botao4.textContent = "Ver menos";
}
});




const botao5 = document.getElementById("verMaisBtn5");
const section5 = document.getElementById("extraSection5");

botao5.addEventListener("click", () => {
section5.classList.toggle("hidden");

// Alterna o texto do botão
if (section5.classList.contains("hidden")) {
  botao5.textContent = "Ver mais";
} 
else {
  botao5.textContent = "Ver menos";
}
});




const botao6 = document.getElementById("verMaisBtn6");
const section6 = document.getElementById("extraSection6");

botao6.addEventListener("click", () => {
section6.classList.toggle("hidden");

// Alterna o texto do botão
if (section6.classList.contains("hidden")) {
  botao6.textContent = "Ver mais";
} 
else {
  botao6.textContent = "Ver menos";
}
});