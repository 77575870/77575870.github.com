
/*declaracion de variables*/
var contenedor_login_register = document.querySelector(".contenedor_login-register");
var formulario_login = document.querySelector(".fomrulario_login");
var formulario_register = document.querySelector(".fomrulario_register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "l";


}