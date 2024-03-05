
const numero = document.querySelector(".cardNumberBox");
const nomeC = document.querySelector(".cardName");
const mes = document.querySelector(".Mesbtn");
const ano = document.querySelector(".AnoInput");
const cvv = document.querySelector(".cvvbtn");
const botão = document.querySelector(".submitBtn");

numero.oninput = () => {
    document.querySelector(".cardNumber").innerText = numero.value;
};
  
nomeC.oninput = () => {
    document.querySelector(".NomeCard").innerText = nomeC.value;
};
  
mes.oninput = () => {
    document.querySelector(".valorMes").innerText = mes.value;
};
  
ano.oninput = () => {
    document.querySelector(".valorAno").innerText = ano.value;
};
  
cvv.onmouseenter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
};

cvv.onmouseleave = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
};
  
cvv.oninput = () => {
    document.querySelector(".box").innerText = cvv.value;
};


document.addEventListener('DOMContentLoaded', function () {

botão.addEventListener('click', function () {
  alert('Cadastrado com sucesso');
  });
});