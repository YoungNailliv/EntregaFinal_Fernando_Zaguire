import elementosHtml from "../elements/main.elements";
import { crearCliente } from "../models/models";
import crearElementoApp from "../models/ventanasPrograma.model";
import Swal from 'sweetalert2';

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];



export const resetInputs = () => {
    elementosHtml.inputNombreCliente.value = "";
    elementosHtml.inputRutCliente.value = "";
    elementosHtml.inputDireccionCliente.value = "";
    elementosHtml.inputEmailCliente.value = "";
    elementosHtml.inputTelefonoCliente.value = "";
    elementosHtml.inputReferenciaCliente.value = "";
}

export const borrarCliente = (id) => {
    Swal.fire({
        title:"Seguro quieres eliminar este cliente?",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
    }).then(res =>{
        if(res.isConfirmed){
            clientes = clientes.filter(cliente => cliente.idCliente!== id);
            console.log(clientes)
            localStorage.setItem("clientes", JSON.stringify(clientes));
            cargarListadoClientes()
            Swal.fire({
                title: "Cliente Eliminado",
                timer:1000,
                showConfirmButton:false,
            })
        }
    })

}



export const cargarListadoClientes = () => {

    elementosHtml.cardsClientes.innerHTML = ""

    clientes.forEach(cliente => {
        let datos = (Object.values(cliente));
        let tarjeta = crearElementoApp.crearCardCliente(...datos)

        let btnBorrarCliente = document.createElement("button");
        btnBorrarCliente.classList = "btnCard eliminarCard";
        btnBorrarCliente.innerHTML = `<img src="./assets/x.svg" alt="">3`
        btnBorrarCliente.onclick = () => borrarCliente(cliente.idCliente);

        tarjeta.appendChild(btnBorrarCliente);

        elementosHtml.cardsClientes.appendChild(tarjeta);


    });

}

export const ventanaCrearCliente = () => {
    let cliente = crearCliente();
    clientes.push(cliente);
    console.log(clientes)
    resetInputs();
    localStorage.setItem("clientes", JSON.stringify(clientes));
    cargarListadoClientes();
    Swal.fire({
        title: "Cliente Creado!",
        icon: "success",
        timer:1000,
        showConfirmButton: false,
        
    })

}