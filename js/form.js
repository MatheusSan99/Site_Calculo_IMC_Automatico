/*
    add.EventListener = Escutador de eventos, ou seja, quando eu clicar no lugar selecionado, a função será executada, 
    e o event.preventdefault é pra evitar o comportamento padrão nos formulários, que é diferente do resto 

    var form = Obtem o form

    funcao montaTr = monta uma TR a partir dos dados do paciente.

    tem que por o TR criado dentro do TBody(tabela-pacientes) para poder adicionar o paciente na tabela.
    tabela.appendChild(pacienteTr); pega a tabela e adiciona o paciente na tabela.

    form.reset(); reseta o formulário após o envio.

    function obtemPacienteDoFormulario(form)
    cria um objeto e passar as propriedades(caracteristicas)
    e pega os valores do input de cada elemento. 

    o paciente é uma TR, com varias TDS, cada TD com seu dado, então se eu quero criar um paciente,
    é a mesma coisa que criar uma TR com a função document.createElement(); 
    adicionando a classe, para os novos pacientes ficarem iguais aos anteriores.
    Naturalmente é necessário criar as TD's tb
    usando a função para criar as TD'S dos pacientes
    porém só criar é insuficiente, é necessário agrupar os elementos, TR é pai, as TD são filhos.
    para colocar um elemento dentro do outro se usa a função (nomepai).appendChild(nomefilho);
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
event.preventDefault();

var form = document.querySelector("#form-adiciona");

var paciente = obtemPacienteDoFormulario(form);

var erros = validaPaciente(paciente);

if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
}
adicionaPacienteNaTabela(paciente);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";  

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {

        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li); 
    });
}
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente
}
function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add(".paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;  
    }
    function montaTd(dado,classe) {
        var td = document.createElement("td"); 
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    }

    function validaPaciente(paciente) {
        
        var erros = [];

        if (paciente.nome.length == 0) {
            erros.push("O Nome não pode ser em branco! ");
        }

        if (!validaPeso(paciente.peso)) erros.push("O Peso é inválido!");
        if(!validaAltura(paciente.altura)) erros.push("A Altura é inválida!");

        if (paciente.gordura.length == 0) {
            erros.push("A Gordura não pode ser em branco!");
        }
        if (paciente.peso.length == 0) {
            erros.push("O Campo Peso não pode ser em branco!");
        }
        if (paciente.altura.length == 0) {
            erros.push("O Campo Altura não pode ser em branco!");
        }
 
        return erros;
    }
