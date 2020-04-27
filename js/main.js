
// Parte 2 Desenvolva páginas web com JavaScript

// Manipulando elemento da página

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    
}
 function redirecionar(){
    window.open("https://github.com/fabiocamposh/aula_javascript");
    //window.location.href = "https://github.com/fabiocamposh/aula_javascript";
}

//function trocar(){  // Serve apenas para um elemento
function trocar(elemento){
    // Serve apenas um elemento
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

//function voltar(){  Serve apenas para um elemento
function voltar(elemento){
    elemento.innerHTML = "Passa o mouse aqui";
    // Serve apenas para um elemento
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    
}
function load(){
    alert("Página carregada! ");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
// function

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Brasil", "Brasil", "Corinthians"));
*/

// Local OK

/*
// OK
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/

// Global OK

/*
// OK
var validar;

function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaIdade(idade)
console.log(validar);
*/

// Assim le a variável Global, leitura está dando 0

/*
// Aqui a leitura está dando 0
var validar = 0;
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaIdade(idade)
console.log(validar);
*/

// OK

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaIdade(idade)
console.log(validar);
*/

// Condicionais, Laços de repetição e Date

// Consulta de idade OK

/*
var idade = prompt("Qual sua idade?");
//condicional
if (idade >= 18){
    alert("Maior de idade! Acesso permitido!");
}else{
    alert("Menor de idade! Acesso negado!");
};
*/

// Contas Mult. Div. Soma. Sub. OK

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
function multi(n3, n4){
    return n3 * n4;
}
alert(multi(3, 10));
function sub(n5, n6){
    return n5 - n6;
}
alert(sub(30, 15));
function div(n7, n8){
    return n7 / n8;
}
alert(div(60, 2));
*/

// function troca de nome ou elemento OK

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Brasil", "Brasil", "Corinthinas"));
*/

// Trabalhando com variáveis

// OK

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade));
*/

// OK

/*
var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
validaIdade(idade)
console.log(validar);
*/

// OK

/*
var n1 = 5;
var n2 = 3;
console.log(n1 * n2);

var nome = "Fabio Campos ";
var idade = 29;
var idade2 = 10;
var frase = "O Brasil é o melhor time do Mundo. ";

alert( nome +" tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);

console.log(frase.replace("Brasil", "Corinthians")); //Troca o nome do time
console.log(frase.toUpperCase());  //Coloca tadas as letras em maiuscula
alert(frase.replace("Brasil", "Corinthians"));
*/



// Parte 1 introdução ao JavaScript
// array

/*
var lista = [ "maçã", "pera", "laranja"];
// Imprime a lista
console.log(lista);
// Acrescenstar mais item na lista
lista.push("uva");
console.log(lista);
// Transforma a lista em string
console.log(lista.toString());
//  Separa a lista pelo elemento entre aspas
console.log(lista.join(" - "));  
// Tamanho da lista
console.log(lista.length);
// Reverte a posição
console.log(lista.reverse());
// Retira o último elemento da lista
lista.pop();
console.log(lista);
*/

// Dicionário 

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

// Listas de dicionário

/*
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


// Laço de repetição

// while

/*
var count = 0;

while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
    //count = count + 1;
};
*/
// for

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

// Date
/*
var d = new Date();
alert(d.getMonth() +1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getTime());
alert(d.getHours());
*/