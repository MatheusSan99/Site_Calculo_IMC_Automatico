/*
 aqui é um pouco mais complexo porém a lógica é a seguinte
 pega o alvo clicado, sobe um grau na hierarquia e apaga o pai do evento clicado 
 meu alvo a ser removido é o TR
            ↓       Outra forma de fazer o mesmo código 
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove(); */

var pacientes = document.querySelector(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
 
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});