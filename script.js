<script>

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
salvarFirebase();  

}
