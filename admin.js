import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.onload = async function () {

  const db = window.db;

  const usuarios = await getDocs(collection(db, "usuarios"));

  console.log("Usuários cadastrados:");

  let html = "";

usuarios.forEach((doc) => {

    const dados = doc.data();

    html += `
    <div style="background:#222;padding:15px;margin:10px;border-radius:10px;">
        <h3>${dados.email}</h3>
        <p>Saldo: ${dados.saldo}</p>
        <p>Investido: ${dados.investido}</p>
        <p>VIP: ${dados.vip}</p>
    </div>
    `;

});

document.getElementById("listaUsuarios").innerHTML = html;

};
