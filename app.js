import { ventanaCrearCliente, cargarListadoClientes, resetInputs } from "./src/managers/app.manager";

const main = () => {
    cargarListadoClientes();
    formAgregarCliente.onsubmit = (event) => {
        event.preventDefault();
        ventanaCrearCliente()
    };
};

main();

