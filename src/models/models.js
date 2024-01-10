import elementosHtml from "../elements/main.elements"

//Cliente

export const crearCliente = () => {
    let datosCliente = {  
        idCliente:Date.now().toString(36),
        nombreCliente:elementosHtml.inputNombreCliente.value || "",
        rutCliente:elementosHtml.inputRutCliente.value || "",
        direccionCliente:elementosHtml.inputDireccionCliente.value || "",
        emailCliente:elementosHtml.inputEmailCliente.value || "",
        telefonoCliente:elementosHtml.inputTelefonoCliente.value || "",
        referenciaCliente:elementosHtml.inputReferenciaCliente.value || "",
    }
    return datosCliente;
}