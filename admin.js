import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.onload = async function () {

  const db = window.db;

  const usuarios = await getDocs(collection(db, "usuarios"));

  console.log("Usuários cadastrados:");

  usuarios.forEach((doc) => {
    console.log(doc.id, doc.data());
  });

};
