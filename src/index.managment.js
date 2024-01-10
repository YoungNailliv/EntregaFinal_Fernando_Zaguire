import indexElements from "./index.elements";

const usuario = "Coderhouse";
const passwd = "1234";




export const checkNombreUsuario = () => {
    if (indexElements.nombreUsuario.value === usuario){
        indexElements.nombreUsuario.classList.remove("errorInput");
        indexElements.nombreUsuario.classList.add("validInput");
        return true;
    }else{
        indexElements.nombreUsuario.classList.remove("validInput");
        indexElements.nombreUsuario.classList.add("errorInput");
        return false;
    };
};

export const checkPasswdUsuario = () => {
    if (indexElements.passwdUsuario.value === passwd){
        indexElements.passwdUsuario.classList.remove("errorInput");
        indexElements.passwdUsuario.classList.add("validInput");
        return true;
    }else{
        indexElements.passwdUsuario.classList.remove("validInput");
        indexElements.passwdUsuario.classList.add("errorInput");
        return false;
    };
};

export const checkLogin = () => {
    if (checkNombreUsuario() && checkPasswdUsuario()){
        indexElements.contrasenaIncorrecta.className = "";
        window.location.assign("../app.html");
        return true;
    }else{
        indexElements.contrasenaIncorrecta.className = "contrasenaIncorrecta";
        return false;
    };
};
