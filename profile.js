import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , updateEmail ,  sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore , collection, addDoc,updateDoc ,doc  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref ,uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
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

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
const updateBtn = document.getElementById('updateBtn')
updateBtn.addEventListener("click",async()=>{
const newpassword = document.getElementById('newpassword').value

   let  userid = localStorage.getItem('userid')
    console.log(userid)
    const washingtonRef = doc(db, "users", "sHPCis6fqCifNHdjhYxe");

    // Set the "capital" field of the city 'DC'
    try{

        await updateDoc(washingtonRef, {
            userpassword : newpassword, 
            capital: true
        });
    }
    catch(e){
        console.log(e)
    }

})

const filePic = document.getElementById('filePic')
const profilePicBtn = document.getElementById('file')











const logOut = document.getElementById('logOut')
logOut.addEventListener("click",()=>{

    window.location.href = './'
})
let file = document.getElementById('file')
const editprofilePic = document.getElementById('editprofilePic')

editprofilePic.addEventListener("click",()=>{
    file.style.display = 'block'
})