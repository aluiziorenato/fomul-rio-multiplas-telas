// recebe as classes e id's do html
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check"); // p - bullet - check
const bullet = document.querySelectorAll(".step .bullet");

let current = 1; // inicializa a variável com valor 1

nextBtnFirst.addEventListener("click", function(event){ // escuta o evento de clique no primeiro botão  próximo e inicializa
  // uma função que espera o evento.
  event.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
  slidePage.style.marginLeft = "-25%"; // Defina a margem esquerda de um elemento em -25%
  bullet[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  progressCheck[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  progressText[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  current += 1;  // current valia 1 quando foi acessado dentro da função e foi diminuido em 1 em bullet current, passando a valer zero
  // ao final da função atribui 1 a variável current que passará a valer dois ao sair da função.
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  progressCheck[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  progressText[current - 1].classList.add("active"); // acessa a nodelist através da posição determinada por current e adiciona active ao ao elemento correspondente da nodelist
  current += 1;
  // current valia 2 quando foi acessado dentro da função e foi diminuido em 1 em bullet current, passando a valer 1
  // ao final da função atribui 1 a variável current que passará a valer 3 ao sair da função.
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;// current valia 3 quando foi acessado dentro da função e foi diminuido em 1 em bullet current, passando a valer 2
  // ao final da função atribui 1 a variável current que passará a valer 4 ao sair da função.
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1; // current valia 4 quando foi acessado dentro da função e foi diminuido em 1 em bullet current, passando a valer 3
  // ao final da função atribui 1 a variável current que passará a valer 5 ao sair da função.

  setTimeout(function(){ //chama uma função após alguns milissegundos.
    alert("Sucesso");
    location.reload(); // az com que a página sempre seja recarregada do servidor. Se ele é false ou não estiver especificado, o navegador pode carregar ela do cache.
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active"); //acessa a nodelist e remove o active
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1; // current valia 5 quando foi acessado dentro da função e foi diminuido em 2 em bullet current, passando a valer 3
  // ao final da função diminui 1 a variável current que passará a valer 4 ao sair da função.
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active"); //acessa a nodelist e remove o active
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1; // current valia 4 quando foi acessado dentro da função e foi diminuido em 2 em bullet current, passando a valer 2
  // ao final da função diminui 1 a variável current que passará a valer 3 ao sair da função.
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active"); //acessa a nodelist e remove o active
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;// current valia 3 quando foi acessado dentro da função e foi diminuido em 2 em bullet current, passando a valer 1
  // ao final da função diminui 1 a variável current que passará a valer 0 ao sair da função.
});
