
function investir(){

let saldo =
parseInt(document.getElementById("saldo").innerHTML);

let investido =
parseInt(document.getElementById("investido").innerHTML);

saldo = saldo - 100;

investido = investido + 100;

document.getElementById("saldo").innerHTML = saldo;

document.getElementById("investido").innerHTML = investido;
document.getElementById("investido2").innerHTML = investido;

let operacoes =
parseInt(document.getElementById("operacoes").innerHTML);

operacoes = operacoes + 1;

document.getElementById("operacoes").innerHTML =
operacoes;

let percentual =
Math.floor((investido / 10000) * 100);

document.getElementById("percentualVip").innerHTML =
percentual;

// Atualiza Painel Financeiro
let patrimonio = saldo + investido;

document.getElementById("patrimonio").innerHTML =
patrimonio;

let lucroTotal =
parseInt(document.getElementById("lucroTotal").innerHTML);

let roi = 0;

if(investido > 0){
roi = Math.floor((lucroTotal / investido) * 100);
}

document.getElementById("roi").innerHTML =
roi;

let crescimento =
Math.floor(((patrimonio - 10000) / 10000) * 100);

document.getElementById("crescimento").innerHTML =
crescimento;

atualizarVIP();

salvarDados();
if (typeof salvarFirebase === "function") {
    salvarFirebase();
}  

}

function rendimento(){

let saldo =
parseInt(document.getElementById("saldo").innerHTML);

let investido =
parseInt(document.getElementById("investido").innerHTML);

let lucro =
Math.floor(investido * 0.05);

let lucroTotal =
parseInt(document.getElementById("lucroTotal").innerHTML);

lucroTotal = lucroTotal + lucro;

document.getElementById("lucroTotal").innerHTML = lucroTotal;

document.getElementById("ultimoLucro").innerHTML = lucro;

saldo = saldo + lucro;

let patrimonio = saldo + investido;

document.getElementById("patrimonio").innerHTML =
patrimonio;

let roi = 0;

if(investido > 0){
roi = Math.floor((lucroTotal / investido) * 100);
}

document.getElementById("roi").innerHTML =
roi;

let crescimento =
Math.floor(((patrimonio - 10000) / 10000) * 100);

document.getElementById("crescimento").innerHTML =
crescimento;

document.getElementById("saldo").innerHTML = saldo;

document.getElementById("investido").innerHTML = investido;

atualizarVIP();

salvarDados();

}

function salvarDados(){

localStorage.setItem(
"saldo",
document.getElementById("saldo").innerHTML
);

localStorage.setItem(
"investido",
document.getElementById("investido").innerHTML
);

localStorage.setItem(
"lucroTotal",
document.getElementById("lucroTotal").innerHTML
);

localStorage.setItem(
"ultimoLucro",
document.getElementById("ultimoLucro").innerHTML
);

localStorage.setItem(
"operacoes",
document.getElementById("operacoes").innerHTML
);

localStorage.setItem(
"patrimonio",
document.getElementById("patrimonio").innerHTML
);

localStorage.setItem(
"roi",
document.getElementById("roi").innerHTML
);

localStorage.setItem(
"crescimento",
document.getElementById("crescimento").innerHTML
);
  
if (typeof salvarFirebase === "function") {
    salvarFirebase();
}
}
function atualizarVIP(){

let investido =
parseInt(document.getElementById("investido").innerHTML);

let vip = "Bronze 🥉";

if(investido >= 1000){
vip = "Prata 🥈";
}

if(investido >= 5000){
vip = "Ouro 🥇";
}

if(investido >= 10000){
vip = "Diamante 💎";
}

document.getElementById("barraVip").value = investido;

let percentual =
Math.floor((investido / 10000) * 100);

document.getElementById("percentualVip").innerHTML =
percentual;

document.getElementById("vip").innerHTML = vip;

}

function atualizarMercado(){

let online =
Math.floor(Math.random() * 50) + 100;

let volume =
Math.floor(Math.random() * 500000) + 1000000;

let rentabilidade =
Math.floor(Math.random() * 5) + 3;

document.getElementById("online").innerHTML = online;

document.getElementById("volume").innerHTML = volume;

document.getElementById("rentabilidade").innerHTML = rentabilidade;

}
window.onload = function(){

if(localStorage.getItem("saldo")){

document.getElementById("saldo").innerHTML =
localStorage.getItem("saldo");

}

if(localStorage.getItem("investido")){

document.getElementById("investido").innerHTML =
localStorage.getItem("investido");

}

  document.getElementById("investido2").innerHTML =
document.getElementById("investido").innerHTML;

if(localStorage.getItem("lucroTotal")){

document.getElementById("lucroTotal").innerHTML =
localStorage.getItem("lucroTotal");

}

if(localStorage.getItem("ultimoLucro")){

document.getElementById("ultimoLucro").innerHTML =
localStorage.getItem("ultimoLucro");

}

if(localStorage.getItem("operacoes")){

document.getElementById("operacoes").innerHTML =
localStorage.getItem("operacoes");

}

if(localStorage.getItem("patrimonio")){

document.getElementById("patrimonio").innerHTML =
localStorage.getItem("patrimonio");

}

if(localStorage.getItem("roi")){

document.getElementById("roi").innerHTML =
localStorage.getItem("roi");

}

if(localStorage.getItem("crescimento")){

document.getElementById("crescimento").innerHTML =
localStorage.getItem("crescimento");

}

let saldo =
parseInt(document.getElementById("saldo").innerHTML);

if(saldo < 100){
alert("Saldo insuficiente!");
return;
}

let investido =
parseInt(document.getElementById("investido").innerHTML);

let lucroTotal =
parseInt(document.getElementById("lucroTotal").innerHTML);


let patrimonio = saldo + investido;

document.getElementById("patrimonio").innerHTML =
patrimonio;

let roi = 0;

if(investido > 0){
roi = Math.floor((lucroTotal / investido) * 100);
}

document.getElementById("roi").innerHTML =
roi;

let crescimento =
Math.floor(((patrimonio - 10000) / 10000) * 100);

document.getElementById("crescimento").innerHTML =
crescimento;

atualizarVIP();

atualizarMercado();

setInterval(atualizarMercado,3000);
}
  
