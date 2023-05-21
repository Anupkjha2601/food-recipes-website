// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";


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

  var email = document.getElementById('eemail');
  var password = document.getElementById('lpassword');
  var name = document.getElementById('fname');
  


  //code Auth
  window = function UserRegister(e){
 e.preventDefault();
 var obj = {
    name : name.value,
    email : email.value,
    password : name.password,
 }
  createUserWithEmailAndPassword(auth, obj.email, obj.password).then(function(success){
      alert("Signup Successfully");
  }).catch(function (error){
      var errorcode = error.code;
      var errormsg = error.message;
      console.log(errorcode + errormsg);
  });

console.log(obj);
  }
//   const auth = firebase.auth();
//   function SignIn(){
//       var email = document.getElementById('eemail').value;
//       var password = document.getElementById('lpassword').value;
//       if(email != "" && password != ""){
//       const promise = auth.signInWithEmailAndPassword(email,password);
//       promise.catch( e => alert(e.msg));
//       window.open("https://www.google.com","_self");
//       }
//   }
// //   if(email != "" && password != ""){
//   document.getElementById('form').addEventListener('submit', (e) => {
//       e.preventDefault();
//       var userInfo = datab.push();
//       userInfo.set({
//           name: getId('fname'),
//           email : getId('eemail'),
//           password : getId('lpassword')
//       });
//       alert("Successfully Signed Up");
//       console.log("sent");
//       document.getElementById('form').reset();
//   });
//   function  getId(id){
//       return document.getElementById(id).value;
//   }
// }