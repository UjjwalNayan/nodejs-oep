function validate() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    if (email === "theujjwalnayan@gmail.com" && password === "adminlogin123") {
        alert("Login Succesfull");
        window.open("/admin")
    }
    else {
        alert("Wrong email or password");
    }
}