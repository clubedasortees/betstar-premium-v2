
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 
import {
getFirestore,
doc,
getDoc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyDqWJLQCgt70h3eZXaJjEZWJ0CL7wA8gu4",
  authDomain: "betstar-premium-v2.firebaseapp.com",
  projectId: "betstar-premium-v2",
  storageBucket: "betstar-premium-v2.firebasestorage.app",
  messagingSenderId: "468025575746",
  appId: "1:468025575746:web:1fcb558335714f7858e0db",
  measurementId: "G-J7HZ1JFR55"
};

const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 
let usuarioAtual = null;
 
const db = getFirestore(app);
window.db = db;
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
onAuthStateChanged(auth, (user) => {

  if(user){

    usuarioAtual = user;

    console.log("Usuário logado:", user.email);

  }

}); 
window.salvarFirebase = async function() {

  if(!usuarioAtual){
    console.log("Usuário não logado");
    return;
  }

 await setDoc(
  doc(db, "usuarios", usuarioAtual.uid),
  {
    saldo: parseInt(document.getElementById("saldo").innerHTML),
    investido: parseInt(document.getElementById("investido").innerHTML),
    lucrototal: parseInt(document.getElementById("lucroTotal").innerHTML),
    ultimolucro: parseInt(document.getElementById("ultimoLucro").innerHTML),
    operacoes: parseInt(document.getElementById("operacoes").innerHTML),
    patrimonio: parseInt(document.getElementById("patrimonio").innerHTML),
    roi: parseInt(document.getElementById("roi").innerHTML),
    crescimento: parseInt(document.getElementById("crescimento").innerHTML),
    vip: document.getElementById("vip").innerHTML,
    email: usuarioAtual.email
  }
);

  console.log("Dados salvos no Firebase!");

}
  
async function testeFirebase(){

await setDoc(
doc(db,"teste","conexao"),
{
status:"online",
data:new Date().toLocaleString()
}
);

console.log("Teste salvo no Firestore!");

}

// testeFirebase();
  
console.log("Firebase conectado!")

window.auth = auth;
window.db = db;
window.usuarioAtual = () => usuarioAtual;
window.cadastrar = async function(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try{

    await createUserWithEmailAndPassword(auth, email, senha);

    alert("Conta criada com sucesso!");

  }catch(erro){

    console.log(erro);
    alert("ERRO: " + erro.code + " | " + erro.message);

  }

}

window.entrar = async function(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try{

await signInWithEmailAndPassword(auth, email, senha);
    const usuarioAtual = auth.currentUser;

const docRef = doc(db, "usuarios", usuarioAtual.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {

  const dados = docSnap.data();

  document.getElementById("saldo").innerHTML = dados.saldo;
  document.getElementById("investido").innerHTML = dados.investido;
  document.getElementById("investido2").innerHTML = dados.investido;
  document.getElementById("lucroTotal").innerHTML = dados.lucrototal;
  document.getElementById("vip").innerHTML = dados.vip;

  atualizarVIP();
}
alert("Login realizado com sucesso!");

salvarFirebase();

  }catch(erro){

    console.log(erro);
    alert("ERRO: " + erro.code + " | " + erro.message);

}

} 
