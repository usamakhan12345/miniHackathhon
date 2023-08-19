import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getFirestore ,  collection, addDoc,serverTimestamp ,onSnapshot, query, where, getDocs   } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-t2X9xHVEJD_CwMbdK_uExz-YW0u2qTA",
  authDomain: "test-6ede7.firebaseapp.com",
  databaseURL: "https://test-6ede7-default-rtdb.firebaseio.com",
  projectId: "test-6ede7",
  storageBucket: "test-6ede7.appspot.com",
  messagingSenderId: "760589649087",
  appId: "1:760589649087:web:cf1112c6264d1c271f720a",
  measurementId: "G-PP5B5MP7BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// const auth = getAuth();





const publishBlogs = document.getElementById('publishBlogs')
const logOut = document.getElementById('logOut')
logOut.addEventListener("click",()=>{
    try{
        signOut(auth).then(() => {
            console.log("user sign out")
          }).catch((error) => {
            console.log(error)
          });
    }
    catch(error){
        console.log(error)
    }

})

publishBlogs.addEventListener("click", async()=>{
    const blogsTitle = document.getElementById('title').value
    const userBlogs = document.getElementById('blogs').value
    try{
        const docRef = await addDoc(collection(db, "userblogs"), {
            blogsTitle : blogsTitle,
            userBlogs : userBlogs ,
            time : serverTimestamp()
            
              });
          console.log("Document written with ID: ", docRef.id);
    }
    catch(error){
        console.log(error)
    }
})

const getDetails =async ()=>{
    
const querySnapshot = await getDocs(collection(db, "users"));

querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

})
}


const getData = async()=>{

const querySnapshot = await getDocs(collection(db, "userblogs"));

querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data().img);
    let blogss = document.getElementById('blogss')
    blogss.innerHTML += `
    <div class="container shadow p-3 mb-5 bg-body rounded" id="maincontainer" >
    <div class="row">
        <div class="col-lg-2">
            <img src=${doc.data().img} id="myimg" style="border-radius: 10px;" width="120px"  alt="">
        </div>
        <div class="col-lg-2">
    
        </div>
        <div class="col-lg-8">
    <h4>${doc.data().blogsTitle}</h4>
    <p style="font-size: small;">${doc.data().time}</p>
        </div>
    </div>
    
    <p style="font-size: small;">${doc.data().userBlogs}</p>
    <br>
    <div class="row">
        <div class="col-lg-2">
            <p onclick="del('${doc.id}')" style="color: blue;">
                Delete
            </p>
        </div>
        <div class="col-lg-2">
            <p onclick="edit('${doc.id}')" style="color: blue;">
                Edit
            </p>
        </div>
    </div>
    </div>
    
    
    `
});
}
getData();
// }
// getData()