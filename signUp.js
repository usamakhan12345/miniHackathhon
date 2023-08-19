 // Import the functions you need from the SDKs you need
 import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAuth ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , updateEmail ,  sendEmailVerification , GoogleAuthProvider , signInWithPopup ,} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

 import { getFirestore , collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyD-t2X9xHVEJD_CwMbdK_uExz-YW0u2qTA",
   authDomain: "test-6ede7.firebaseapp.com",
   projectId: "test-6ede7",
   storageBucket: "test-6ede7.appspot.com",
   messagingSenderId: "760589649087",
   appId: "1:760589649087:web:4282e4bd592fffcb1f720a",
   measurementId: "G-835XXRWF6N"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider();
 const auth = getAuth(app);
 const db = getFirestore(app);
 


 const login = document.getElementById('login') 
 login.addEventListener("click",()=>{
    window.location.href = './Login.html'
 })
let signUpGoogle = document.getElementById('googleBtn')
let signUpBtn = document.getElementById('signUpBtn')

let userfirstname = document.getElementById('userfirstname')
    let userLastName = document.getElementById('userLastName')
     let userEmail = document.getElementById('useremail')
     let userpassword = document.getElementById('userpassword')
signUpBtn.addEventListener("click",()=>{
  createUserWithEmailAndPassword(auth, userEmail.value , userpassword.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    localStorage.setItem('userid',user.uid)
    msg.className = 'green'
    msg.innerHTML = "User Successfully Registered!"
    msg.style.color = 'green'
    let usersignUpData = {
      userName : userfirstname.value,
      userLastName : userLastName.value,
      userEmail : userEmail.value,
      userpassword : userpassword.value
    
    }
    
    
      console.log(usersignUpData)
      try{
        const docRef = await addDoc(collection(db, "users"), {
          ...usersignUpData
        });
        console.log("Document written with ID: ", docRef.id);
      }
      catch(e){
      console.log(e)
    
      }
    setTimeout(()=>{
      msg.innerHTML = ""
    window.location.href = './login.html'

    },1500)
    

    

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    if(errorMessage.includes("invalid-email")){
         msg.innerHTML = "Please Enter Valid Email"  
         setTimeout(()=>{
          msg.innerHTML = ""
        },2000)  
    }
    else if (errorMessage.includes('weak-password')){
        msg.innerHTML = "Password must be 6 character"
        setTimeout(()=>{
          msg.innerHTML = ""
        },2000)
    }
    else if(errorMessage.includes("email-already-in-use")){
      msg.innerHTML = "Email already in use"
      setTimeout(()=>{
        msg.innerHTML = ""
      },2000)
    }
    

    // ..
  });


})
