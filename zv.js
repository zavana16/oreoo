function proseslogin() {
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;

    let adminUser = "admin" ;
    let adminPass = "admin";
    
    if (inputUser === adminUser && inputPass === adminPass) {
        alert("login berhasil! mengalihkan ke dashboard....") ;
        window.location.href = "crud/index.html";
    
    } else {
        alert("username tau pasword salah. silahkn coba lagi");
    }
}