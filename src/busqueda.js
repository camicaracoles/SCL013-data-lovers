//función para mostarar los tipos en busqueda avanzada


function TiposBusqueda(tipo) {
    console.log("TiposBusqueda")
    let primerTipo = tipo;
    let paraNodo = document.createElement("div");
    let htmlTarjeta = `
    <div class="busquedaPorTipo">
        <div class="tipos">${primerTipo.nameOriginal}</div>
        <div class="btnTipo">T</div>
        <div class="btnDebilidad">D</div>
    </div>
   `
    let busquedaTipos = document.getElementById("busquedaPorTipo");
    busquedaTipos.appendChild(paraNodo);
    paraNodo.innerHTML = htmlTarjeta;
}

//Declaro for para repetir los tipos

for (let index = 0; index < tipos.length; index++) {
    TiposBusqueda(tipos[index])
}
  