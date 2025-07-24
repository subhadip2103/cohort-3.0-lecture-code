window.onload = updateUI;
async function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    await axios.post("http://localhost:3000/signup", {
        username: username,
        password: password
    })
    alert('You are signed in')
}
async function signin() {
    let username= document.getElementById("signin-username").value;
    let password= document.getElementById("signin-password").value;

    let response=await axios.post("http://localhost:3000/signin",{
        username:username,
        password:password
    })
    
    localStorage.setItem("token",response.data.token);
    updateUI()
}
function logout() {
    localStorage.removeItem("token");
    getuserinformation()
    updateUI()
}
async function getuserinformation() {
    let response=await axios.get("http://localhost:3000/me",{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    document.querySelector(".userinfo-display").innerHTML=`Username:${response.data.username}`
}
function updateUI() {
  const token = localStorage.getItem("token");

  if (token) {

    document.getElementById("auth-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    getuserinformation();
  } else {
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("user-section").style.display = "none";
  }
}
