const blogContents = document.querySelectorAll(".blog-content");
const blogMoreLinks = document.querySelectorAll(".blog-more");

blogMoreLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (blogContents[index].style.maxHeight === "500px") {
      blogContents[index].style.maxHeight = "none";
      link.textContent = "See less";
    } else {
      blogContents[index].style.maxHeight = "500px";
      link.textContent = "See more";
    }
  });
});

const login = document.getElementById('login')
login.addEventListener("click",()=>{
    window.location.href = './Login.html'
})

const profile = document.getElementById('profile')
profile.addEventListener("click",()=>{

})