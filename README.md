# Poképarada

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Checklist](#6-checklist)

***

## 1. Preámbulo

Pokémon (ポケモン Pokemon) es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340 millones de ejemplares (incluyendo la venta de la versión Pikachu de la consola Nintendo 64), logrando ocupar el segundo lugar de las sagas de videojuegos más vendidos de Nintendo. La franquicia celebró su décimo aniversario el 27 de febrero de 2006.

La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 890. La posibilidad de intercambiarlos le hizo conseguir una popularidad que se plasmó en un éxito de ventas y la consiguiente aparición de una serie animada, películas y diverso merchandising como peluches, juguetes y cartas.

La producción de los videojuegos, serie de anime y demás material para su distribución en occidente fue realizada en Estados Unidos por 4Kids Entertainment hasta noviembre de 2005, momento en que decidió no renovar su contrato con Pokémon USA (una subsidiaria de Pokémon Company). Actualmente esta supervisa todo lo referente al material de Pokémon en su distribución en occidente.

## 2. Resumen del proyecto

En este proyecto podrás encontrar un sitio web donde obtener diferente información sobre Pokémon, tanto como su historia y tips de juegos relacionados como Pokémon Go. La pokédex te permitira filtrar de diferentes formas a los pokémones de la primera generación así convertirte en el mejor Maestro pokemón.

## 3. Objetivos de aprendizaje

El siguiente tablero de trello, contiene todos los objetivos de aprendisaje, ordenados por temas, resaltados con una etiqueta de color, e información de respaldo de cada tema.

https://trello.com/b/eq5i32dy/objetivos-de-aprendizaje (porfavor revisar cada punto para entender como fue la forma de aprendisaje).


## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

Para llevar a cabo la Poképarada, lo primero fue crear formularios generales para jugadores Pokémon Go, donde recopile infromación general sobre páginas similares, y que esperaban de una web.
Luego cree el prototipo de baja fidelidad con bosquejos a mano (adjuntados al trello) de una idea general a base de la información recopilada. 
Elegí a dos usuarios para trabajar con ellos hasta el final del proyecto y definí cuales eran los peticiones más viables y un diseño final.
La poképarada cotiene, información suficiente para que los maestros pokémon puedan conocer a los pókemones individualmene y así crear las mejores defensas y ataques para sus batallas en el juego. De igual forma contiene infomación para poder aprovechar al máximo el juego explicando conceptos y entregando tips de juegos.


### Historias de usuario
En el trello se encuentra todo el respaldo de el tarabajo con los usurios y como fuí creando las historias de cada uno.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

En en el trello antes mencionado, se encuentra respaldo del prototipo de baja fidelidad.

#### Prototipo de alta fidelidad

Link de escritorio:
https://www.figma.com/proto/Thrv6moJtNDchJUfsyN89F/Versi%C3%B3n-Escritorio?node-id=1%3A122&scaling=min-zoom


Link de celu:
https://www.figma.com/proto/Thrv6moJtNDchJUfsyN89F/Versi%C3%B3n-Escritorio?node-id=9%3A1389&scaling=scale-down

En el Trello pueden encontrar videos de los usuarios elegidos para desarrollar el proyecto, usando el prototipo de Figma.

#### Testeos de usabilidad

El proceso de test de usabilidad me permitio entender que lo que los ususarios necesitaban 
era información para poder estar preparados ante una batalla pokémon go, ya que la infomación 
sobre novedades o usos del juego ya estan presente en el mundo web.
El problema de los usuarios era que al comenzar una batalla no sabían con que pokémon se enfrentarían.
Mi solución, es que através de la web ellos puedan obtener la información de como defenderse, que pokémon es 
el adecuado o no para resistir ante otro pokémon.
En la pokédex se puede encontarar toda la información necesaria de cada pokémon para crear estrategias de batalla.

### Pruebas unitarias

---------------------------------------------------


## 7. Consideraciones técnicas

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── pokemon
|  |      ├── pokemon.js
|  |      ├── pokemon.json
|  |      └── README.md
|  ├── data.js 
|  ├── index.html
|  ├── pokedex.html 
|  ├── tarjeta.html  
|  ├── busqueda.html 
|  ├── historia.html 
|  ├── tutorial.html
|  ├── main.js
|  ├── style.css
|  ├── pokedex.css
|  ├── tarjeta.css
|  ├── busqueda.css
|  ├── historia.css
|  └── tuturial.css
└── test
     └── data.spec.js

directory: 6 file: 17
```

## 9. Checklist

* [Si ] Usa VanillaJS.
* [Si ] No hace uso de `this`.
* [Si ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [Si] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [Si] Incluye historias de usuario en `README.md`.
* [Si] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [Si] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [Si] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [Si] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [Si] UI: Permite ordenar data por uno o más campos (asc y desc).
* [si] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
