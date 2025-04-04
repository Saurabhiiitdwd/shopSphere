let username = document.getElementById("username");
let password = document.getElementById("password");
function login() {
    if (username.value === "admin" && password.value === "1234") {
        document.getElementById("login").style.display = "none";
        document.getElementById("shopsphereInterface").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Invalid username or password!";
    }
}

function logout() {
    document.getElementById("shopsphereInterface").style.display = "none";
    document.getElementById("login").style.display = "block";
    username.value="";
    password.value="";
}
