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
    projectId: "foodweb-1",
    storageBucket: "foodweb-1.appspot.com",
    messagingSenderId: "972452450365",
    appId: "1:972452450365:web:ce9c445b5ad2c36f571a54",
    measurementId: "G-DHBQPKZM0E"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //code Auth
  var datab  = firebase.database().ref('data');
  function UserRegister(){
  var email = document.getElementById('eemail').value;
  var password = document.getElementById('lpassword').value;
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
      
  }).catch(function (error){
      var errorcode = error.code;
      var errormsg = error.message;
  });
  }
  const auth = firebase.auth();
  function SignIn(){
      var email = document.getElementById('eemail').value;
      var password = document.getElementById('lpassword').value;
      const promise = auth.signInWithEmailAndPassword(email,password);
      promise.catch( e => alert(e.msg));
      window.open("https://www.google.com","_self");
  }
  document.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault();
      var userInfo = datab.push();
      userInfo.set({
          name: getId('fname'),
          email : getId('eemail'),
          password : getId('lpassword')
      });
      alert("Successfully Signed Up");
      console.log("sent");
      document.getElementById('form').reset();
  });
  function  getId(id){
      return document.getElementById(id).value;
  }