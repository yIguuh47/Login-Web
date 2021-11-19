function logar(){
    const txtUser = document.getElementById("txUser").value
    const txtPass = document.getElementById("txPassword").value

    if(txtUser && txtPass == "admin"){
        window.location.href = "../view/pagina.html"
        alert("Foi!")
    } else {
        alert("Erro tente novamente")
    }

}