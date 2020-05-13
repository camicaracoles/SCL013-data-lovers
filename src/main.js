// declaro un array para guardar los pokemones destacados a travéz de una función. 

let destacados = []

for (let index = 0; index < pokemones.length; index++) {
  const pokemon_destacado = pokemones[index];
  if (pokemones[index].destacado === true) {
    destacados.push(pokemon_destacado);
  }
}

// declaro una función que me permita tomar la imagen que esta en el (destacado-uno, -dos, -tres) 
// y cambiarla por ootra a la azar del arreglo pokemones_destacados.

function cambiar() {
  Math.floor(Math.random() * 11);
  let destacadoAzar = Math.floor(Math.random() * 11);
  let imagenAzarNombre = destacados[destacadoAzar].num;
  let imagenAzarUrl = '../img/' + imagenAzarNombre + '.png';
  let nodoImagen = document.getElementById("unoImagen");
  nodoImagen.src = imagenAzarUrl;

  Math.floor(Math.random() * 11);
  destacadoAzar = Math.floor(Math.random() * 11);
  imagenAzarNombre = destacados[destacadoAzar].num;
  imagenAzarUrl = '../img/' + imagenAzarNombre + '.png';
  nodoImagen = document.getElementById("dosImagen");
  nodoImagen.src = imagenAzarUrl;

  Math.floor(Math.random() * 11);
  destacadoAzar = Math.floor(Math.random() * 11);
  imagenAzarNombre = destacados[destacadoAzar].num;
  imagenAzarUrl = '../img/' + imagenAzarNombre + '.png';
  nodoImagen = document.getElementById("tresImagen");
  nodoImagen.src = imagenAzarUrl;

}

function mostrarTarjeta(pokemon) {
  let primerPokemon = pokemon;
  let paraNodo = document.createElement("div");
  let htmlTarjeta = `
 <div id="tarjetaUno">
 <div class="franjaUno">
   <div class="imgTarjeta">
     <img src="../img/${primerPokemon.num}.png" class="contenedorImgTarjeta" /></img>
   </div>
 </div>
 <div class="franjaDosTarjeta">
   <div class="textNumTarjeta">N° ${primerPokemon.num} </div>
 </div>
 <div class="franjaTresTarjeta">
   <div class="nameTarjeta">${primerPokemon.name}</div>
 </div>
 <div class="franjaCuatroTarjeta">
     <div Class="cajaTipoTarjeta">planta</div>
 </div>
 `
  let miniTarjetas = document.getElementById("miniTarjetas");
  miniTarjetas.appendChild(paraNodo);
  paraNodo.innerHTML = htmlTarjeta;
}

//Declaro for para repetir las tarjetas y declarar 8 pokémon.

for (let index = 0; index <= 7; index++) {
  mostrarTarjeta(pokemones[index])
}

//Declaro función para cambiar a los siguientes pokémon

let indexFragmento = 0;
const cantidadElemento = 8;

function cambiarSiguiente() {
  let elementoFragmentoActual = [];

  const inicioFragmento = indexFragmento * cantidadElemento;
  const finFragmento = inicioFragmento + cantidadElemento;

  for (let index = inicioFragmento; index < finFragmento; index++) {
    elementoFragmentoActual.push(pokemones[index])
  }

  indexFragmento = indexFragmento + 1;

  let miniTarjetas = document.getElementById("miniTarjetas");
  miniTarjetas.innerHTML = "";
  for (let index = 0; index < elementoFragmentoActual.length; index++) {
    mostrarTarjeta(elementoFragmentoActual[index]);
  }

}

//Crear función para ver cual es el valor que eligio el usuario en el selec
function selectOption() {
  let selectFiltro = document.getElementById("filtro").value;
  if (selectFiltro === "numeroInferior") {
    mostrarTarjeta(pokemon);
  } else if (selectFiltro === "numeroSuperior") {
    MayorAMenor();
  } else if (selectFiltro === "a_z") {
    AHastaZ();
  } else {
    ZHastaA();
  }
}

//Declarar funciones de filtros
//Filtro de mayor a menor.

function MayorAMenor() {
  indexFragmento = 0;
  const dataMayorMenor = pokemones.reverse();
  for (let index = 0; index <= 7; index++) {
    mostrarTarjeta(dataMayorMenor[index]);
  }
  cambiarSiguiente();
}

//Filtro A-Z

//function AHastaZ() {
  //const arrayName = pokemones.name;
  //arrayName.sort()
  //const ordenado = arrayName.sort()
  //for (let index = 0; index <= 7; index++) {
   // mostrarTarjeta(ordenado[index]);
  //}
  //mostrarTarjeta(pokemon);
  //cambiarSiguiente();

//}
//Filtro Z-A
//function ZHastaA() {
  //utilizar la función de ariba con reverse.

//Arreglo de tipos, con su texto 

//función para comparar y enviar info de pokemon a tarjeta.html

//function mostrarPokemon(pokemon) {
  //declaro función para utilizar los tipos del arreglo
  //let pokemonElegido = pokemon;
  //let paraNodo = document.createElement("div");
  //let htmlTarjeta = `
  //<div id="contenedorPrincipal">
  //<div id="fotoCarnet">
      //<div id="textoNameCarnet">&nbsp &nbsp ${pokemonElegido.name}</div>
      //<img src="../img/${pokemonElegido.num}.png" id="fotoPokemonCarnet" /></img>
  //</div>
 // <div id="textopokemon">${pokemonElegido.text} </div>
//</div>
//<div id="contenedorDelMedio">
 // <div id="tipoDebilidad">//
     // <div id="tipoText">Tipo</div>
      //<div class="cantidadTipo">
         // <div class="formaTipo">planta</div>
      //</div>
      //<div id="debelidadText">Debilidad</div>
     //<div class="cantidad">
          //<div class="formaTipoDebilidad">fuego</div>
     // </div>
  //</div>
  //<div id="categorias">
      //<div id="primeraSeccion">
         // <div id="conjuntoUno">
              //<div id="altura">Altura</div>
              //<div class="resultadoAltura">0,71 m</div>
              //<div id="peso">Peso</div>
              //<div class="resultadoPeso">6,9 kg</div>
              //<div id="tipoCaramelo">Tipo de Caramelo</div>
              //<div class="resultadoTipoCaramelo">Bulbasaur Candy</div>
          //</div>
         // <div id="conjuntoDos">
              //<img src="../img/pokemongo.png" id="apoyoGo" /></img>
         //</div>
     // </div>
      //<div id="segundaSeccion">
          //<div id="caramelosEvolucion">Caramelos para evolución</div>
          //<div class="resultadoevolucion">25</div>
          //<div id="cantidadKilometros">Cantidad de kilometros para el huevo</div>
         //<div class="resultadoKilometros">2 km</div>
          //<div id="probabilidad">Probabilidad de aparecer</div>
          //<div class="resultadoProbabilidad">0.69</div>
          //<div id="Multiplicadores">Multiplicadores</div>
         // <div class="resultadoMultiplicadores">[1.58]</div>
     // </div>
      //<div id="imagenApoyo"></div>
  //</div>
//</div>
//<div id="franjaTextEvoluciones">
  //<div id="btnInfoEvoluciones">Evoluciones</div>
//</div>
//<div class="franjaEvoluciones">
  //<div class="miniTarjetaEvolucion">
     // <div class="textoMiniEvolucion">Bulbasaur &nbsp &nbsp &nbsp N°001 </div>
      //<div class="imagenMiniEvolucion">
         // <img src="../img/001.png" class="imagenEvolucion" /></img>
      //</div>
      //<div class="espacioTipoEvolucion">
         // <div Class="cajaTipoTarjeta">planta</div>
     // </div>
  //</div>
  //<div class="espacioFlechaNegra">
      //<div class="imagenFlechaEvolucion">
          //<img src="../img/flechaEvolucion.png" class="flechaEvolucion" /></img>
      //</div>
  //</div>
//</div>`

//let miniTarjetas = document.getElementById("miniTarjetas");
//miniTarjetas.appendChild(paraNodo);
//paraNodo.innerHTML = htmlTarjeta;


//function valorInput(){
//let valorInput= document.getElementById("numTexto").value;
//for (let index = 0; index < pokemones.length; index++) {
//if(valorInput === pokemones[index].id) {}

 
 //enviar a tarjeta.html con el pokmón designado.