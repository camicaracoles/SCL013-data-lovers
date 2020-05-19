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

//función para mostrar a los pokémon en orden.

function mostrarTarjeta(pokemon) {
  function crearElementosTipo(arregloTipos) { 
    if (!arregloTipos){
      console.log("pokemonSinTipo") 
      return ""
    }
    const htmlTipos = arregloTipos.map((tipo) => {
      return `<div class="cajaTipoTarjeta ${tipo}">${tipo}</div>` 
    });
    return htmlTipos.join('');
  }
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
    ${crearElementosTipo(primerPokemon.type)}
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
    location.reload();
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

function AHastaZ () {
  const sorted = pokemones.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  document.getElementById("miniTarjetas").innerHTML = " ";
  for (let index = 0; index < sorted.length; index++) {
    mostrarTarjeta (sorted[index]);  
  }
 
}


//Filtro Z-A

function ZHastaA () {
  const sorted = pokemones.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } 
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }).reverse();


  
  document.getElementById("miniTarjetas").innerHTML = " ";
  for (let index = 0; index < sorted.length; index++) {
    mostrarTarjeta (sorted[index]);  
  }
 
}



//función para filtrar pokémon, por info del imput.

function filtrarInput () {
  let contenedorResultado = []
 
  let contenedorInput = document.getElementById("numTexto").value;
  for (let index = 0; index < pokemones.length; index++) {
     if (contenedorInput == pokemones[index].name || contenedorInput == pokemones[index].num)  {
      contenedorResultado.push(pokemones[index]);
    }
  }
  console.log(contenedorResultado)
  document.getElementById("miniTarjetas").innerHTML = " ";
  for (let index = 0; index < contenedorResultado.length; index++) {
    mostrarTarjeta (contenedorResultado[index]);  
  }
 
}

