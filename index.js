import indexElements from "./src/index.elements";
import { checkLogin } from "./src/index.managment";

const app = () => {
    console.log("Ejecutando el login");
    indexElements.formLogin.onsubmit = (event) =>{
        if(checkLogin()){
            event.preventDefault();
            checkLogin();
        }else{
            event.preventDefault();
        }
    }
};

app()