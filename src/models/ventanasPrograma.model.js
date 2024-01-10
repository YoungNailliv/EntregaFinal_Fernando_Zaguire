

//CARDS CLIENTES

const crearCardCliente = (idCliente,nombreCliente,rutCliente,direccionCliente,emailCliente,telefonoCliente,referenciaCliente) => {
    let card = document.createElement("div");
    card.classList = "cardCliente"

    card.innerHTML = `<div class="infoCliente">
        <p class="keyCliente">
            ID: <br>
            Nombre: <br>
            RUT: <br>
            Direccion: <br>
            Email: <br>
            Telefono: <br>
            Contacto <br>
        </p>
        <p class="valueCliente">
            ${idCliente} <br>
            ${nombreCliente} <br>
            ${rutCliente}<br>
            ${direccionCliente}<br>
            ${emailCliente} <br>
            ${telefonoCliente}<br>
            ${referenciaCliente}
        </p>
        </div>`
        ;
        
    return card;
};

export default {
    crearCardCliente
};

{/* <div class="btnsCard">
<button class="btnCard modificarCard "><img src="./assets/pencil.svg" alt=""> </button>
<button class="btnCard eliminarCard" id = "eliminarCliente"><img src="./assets/x.svg" alt=""> </button>
</div> */}