
function entrar(event){
    event.preventDefault();
    const login = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const banco = [];

    if(login.match(/[0^9]/g) && login.length >= 11 && password.length >= 6){
        banco.push(login,password);
        window.location.href = "/home.html";
    }else if(login.match(/@gmail.com/g) && password.length >= 6){
        banco.push(login,password);
        window.location.href = "/home.html";
    }else{
        alert("Dados invalidos");
    }

}
document.getElementById("submit").addEventListener("click",entrar)