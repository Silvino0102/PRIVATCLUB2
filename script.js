js
// Importar Firebase (para módulos ES6, se estiver usando bundler ou ESModules)
// Se estiver usando via <script> no HTML, ignore essa parte
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
javascript
function liberarAcesso() {
  document.getElementById("menu").style.display = "block";
}

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SUA_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Registro
function criarConta(email, senha) {
  auth.createUserWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Conta criada com sucesso!");
    })
    .catch(error => {
      alert("Erro: " + error.message);
    });
}

// Login
function entrar(email, senha) {
  auth.signInWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Login bem-sucedido!");
    })
    .catch(error => {
      alert("Erro: " + error.message);
    });
}
// Exemplo de uso:
document.getElementById("btnRegistrar").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  criarConta(email, senha);
});

document.getElementById("btnEntrar").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  entrar(email, senha);
});
