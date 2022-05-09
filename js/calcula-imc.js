var titulo = document.querySelector(".titulo");
//  pegar o conteudo de texto de algo
titulo.textContent = "Aparecida Nutricionista";
//  buscar algo do html e trazer para o javascript

var pacientes = document.querySelectorAll(".paciente");
//  for para pegar todos os pacientes do formulario e calcular o imc
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
//  verificação para só executar o imc se ambos forem true
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
   if (!alturaEhValida) {
       alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
   }
   if (alturaEhValida && pesoEhValido) {
   var imc = calculaImc(peso,altura);
   tdImc.textContent = imc;
}
function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    }else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }else {
        return false;
    }
}
}

