// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


const firebaseConfig = {
    apiKey: "AIzaSyDI9sw6Ui9EwkIvYiIkf-cO2gbnO1kwyDI",
    authDomain: "foodweb-1.firebaseapp.com",
    databaseURL: "https://foodweb-1-default-rtdb.firebaseio.com",
    projectId: "foodweb-1",
    storageBucket: "foodweb-1.appspot.com",
    messagingSenderId: "972452450365",
    appId: "1:972452450365:web:ce9c445b5ad2c36f571a54",
    measurementId: "G-DHBQPKZM0E"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

    //Function to sign up
    function signup() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      }
  