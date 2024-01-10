import indexElements from "./src/index.elements";
import { checkLogin } from "./src/index.managment";

const index = () => {
    console.log("Ejecutando el login");
    indexElements.formLogin.onsubmit = (event) =>{
        event.preventDefault();
        if(checkLogin()){
            event.preventDefault();
            checkLogin();
        }else{
            event.preventDefault();
        }
    }
};

index()