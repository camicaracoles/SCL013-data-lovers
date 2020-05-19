const pokemones = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "text": `Bulbasaur es un Pokémon de tipo planta/veneno 
    introducido en la primera generación. Bulbasaur es un
    Pokémon cuadrúpedo de color verde y manchas más
    oscuras de formas geométricas. Su cabeza representa
    cerca de un tercio de su cuerpo. En su frente se ubican
    tres manchas que pueden cambiar dependiendo del
    ejemplar.
    Este Pokémon tiene plantado un bulbo en el lomo desde que nace.
    Esta semilla crece y se desarrolla a lo largo del ciclo de vida
    de Bulbasaur a medida que suceden sus evoluciones. El bulbo
    absorbey almacena la energía solar que Bulbasaur necesita para crecer.
    Dicen que cuanta más luz consuma la semilla, más olor producirá
    cuando se abra.
    El bulbo de Bulbasaur le ayuda a defenderse de los enemigos y
    desde él puede disparar ataques tales como rayo solar y drenadoras
    entre otros.`,
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }, {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
      "Fire"
    ],
    "height": "0.61 m",
    "weight": "8.5 kg",
    "candy": "Charmander Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "multipliers": [1.65],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "005",
      "name": "Charmeleon"
    }, {
      "num": "006",
      "name": "Charizard"
    }]
  }, {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  }, {
    "id": 6,
    "num": "006",
    "name": "Charizard",
    "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
    "type": [
      "Fire",
      "Flying"
    ],
    "height": "1.70 m",
    "weight": "90.5 kg",
    "candy": "Charmander Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "13:34",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }, {
      "num": "005",
      "name": "Charmeleon"
    }]
  }, {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
    "type": [
      "Water"
    ],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Squirtle Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.58,
    "avg_spawns": 58,
    "spawn_time": "04:25",
    "multipliers": [2.1],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "008",
      "name": "Wartortle"
    }, {
      "num": "009",
      "name": "Blastoise"
    }]
  }, {
    "id": 8,
    "num": "008",
    "name": "Wartortle",
    "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
    "type": [
      "Water"
    ],
    "height": "0.99 m",
    "weight": "22.5 kg",
    "candy": "Squirtle Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "07:02",
    "multipliers": [1.4],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }],
    "next_evolution": [{
      "num": "009",
      "name": "Blastoise"
    }]
  }, {
    "id": 9,
    "num": "009",
    "name": "Blastoise",
    "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
    "destacado": true,
    "type": [
      "Water"
    ],
    "height": "1.60 m",
    "weight": "85.5 kg",
    "candy": "Squirtle Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0067,
    "avg_spawns": 0.67,
    "spawn_time": "00:06",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }, {
      "num": "008",
      "name": "Wartortle"
    }]
  }, {
    "id": 10,
    "num": "010",
    "name": "Caterpie",
    "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
    "type": [
      "Bug"
    ],
    "height": "0.30 m",
    "weight": "2.9 kg",
    "candy": "Caterpie Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 3.032,
    "avg_spawns": 303.2,
    "spawn_time": "16:35",
    "multipliers": [1.05],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "next_evolution": [{
      "num": "011",
      "name": "Metapod"
    }, {
      "num": "012",
      "name": "Butterfree"
    }]
  }, {
    "id": 11,
    "num": "011",
    "name": "Metapod",
    "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
    "type": [
      "Bug"
    ],
    "height": "0.71 m",
    "weight": "9.9 kg",
    "candy": "Caterpie Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 0.187,
    "avg_spawns": 18.7,
    "spawn_time": "02:11",
    "multipliers": [
      3.55,
      3.79
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "010",
      "name": "Caterpie"
    }],
    "next_evolution": [{
      "num": "012",
      "name": "Butterfree"
    }]
  }, {
    "id": 12,
    "num": "012",
    "name": "Butterfree",
    "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
    "type": [
      "Bug",
      "Flying"
    ],
    "height": "1.09 m",
    "weight": "32.0 kg",
    "candy": "Caterpie Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:23",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "010",
      "name": "Caterpie"
    }, {
      "num": "011",
      "name": "Metapod"
    }]
  }, {
    "id": 13,
    "num": "013",
    "name": "Weedle",
    "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "0.30 m",
    "weight": "3.2 kg",
    "candy": "Weedle Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 7.12,
    "avg_spawns": 712,
    "spawn_time": "02:21",
    "multipliers": [
      1.01,
      1.09
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "014",
      "name": "Kakuna"
    }, {
      "num": "015",
      "name": "Beedrill"
    }]
  }, {
    "id": 14,
    "num": "014",
    "name": "Kakuna",
    "img": "http://www.serebii.net/pokemongo/pokemon/014.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "0.61 m",
    "weight": "10.0 kg",
    "candy": "Weedle Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 0.44,
    "avg_spawns": 44,
    "spawn_time": "02:30",
    "multipliers": [
      3.01,
      3.41
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "013",
      "name": "Weedle"
    }],
    "next_evolution": [{
      "num": "015",
      "name": "Beedrill"
    }]
  }, {
    "id": 15,
    "num": "015",
    "name": "Beedrill",
    "img": "http://www.serebii.net/pokemongo/pokemon/015.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Weedle Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.051,
    "avg_spawns": 5.1,
    "spawn_time": "04:50",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "013",
      "name": "Weedle"
    }, {
      "num": "014",
      "name": "Kakuna"
    }]
  }, {
    "id": 16,
    "num": "016",
    "name": "Pidgey",
    "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "0.30 m",
    "weight": "1.8 kg",
    "candy": "Pidgey Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 15.98,
    "avg_spawns": 1.598,
    "spawn_time": "01:34",
    "multipliers": [
      1.71,
      1.92
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "017",
      "name": "Pidgeotto"
    }, {
      "num": "018",
      "name": "Pidgeot"
    }]
  }, {
    "id": 17,
    "num": "017",
    "name": "Pidgeotto",
    "img": "http://www.serebii.net/pokemongo/pokemon/017.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.09 m",
    "weight": "30.0 kg",
    "candy": "Pidgey Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 1.02,
    "avg_spawns": 102,
    "spawn_time": "01:30",
    "multipliers": [1.79],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "016",
      "name": "Pidgey"
    }],
    "next_evolution": [{
      "num": "018",
      "name": "Pidgeot"
    }]
  }, {
    "id": 18,
    "num": "018",
    "name": "Pidgeot",
    "img": "http://www.serebii.net/pokemongo/pokemon/018.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.50 m",
    "weight": "39.5 kg",
    "candy": "Pidgey Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.13,
    "avg_spawns": 13,
    "spawn_time": "01:50",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "016",
      "name": "Pidgey"
    }, {
      "num": "017",
      "name": "Pidgeotto"
    }]
  }, {
    "id": 19,
    "num": "019",
    "name": "Rattata",
    "img": "http://www.serebii.net/pokemongo/pokemon/019.png",
    "type": [
      "Normal"
    ],
    "height": "0.30 m",
    "weight": "3.5 kg",
    "candy": "Rattata Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 13.05,
    "avg_spawns": 1.305,
    "spawn_time": "01:55",
    "multipliers": [
      2.55,
      2.73
    ],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "020",
      "name": "Raticate"
    }]
  }, {
    "id": 20,
    "num": "020",
    "name": "Raticate",
    "img": "http://www.serebii.net/pokemongo/pokemon/020.png",
    "type": [
      "Normal"
    ],
    "height": "0.71 m",
    "weight": "18.5 kg",
    "candy": "Rattata Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.41,
    "avg_spawns": 41,
    "spawn_time": "01:56",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "019",
      "name": "Rattata"
    }]
  }, {
    "id": 21,
    "num": "021",
    "name": "Spearow",
    "img": "http://www.serebii.net/pokemongo/pokemon/021.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "0.30 m",
    "weight": "2.0 kg",
    "candy": "Spearow Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 4.73,
    "avg_spawns": 473,
    "spawn_time": "12:25",
    "multipliers": [
      2.66,
      2.68
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "022",
      "name": "Fearow"
    }]
  }, {
    "id": 22,
    "num": "022",
    "name": "Fearow",
    "img": "http://www.serebii.net/pokemongo/pokemon/022.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.19 m",
    "weight": "38.0 kg",
    "candy": "Spearow Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.15,
    "avg_spawns": 15,
    "spawn_time": "01:11",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "021",
      "name": "Spearow"
    }]
  }, {
    "id": 23,
    "num": "023",
    "name": "Ekans",
    "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
    "type": [
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "6.9 kg",
    "candy": "Ekans Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.27,
    "avg_spawns": 227,
    "spawn_time": "12:20",
    "multipliers": [
      2.21,
      2.27
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "024",
      "name": "Arbok"
    }]
  }, {
    "id": 24,
    "num": "024",
    "name": "Arbok",
    "img": "http://www.serebii.net/pokemongo/pokemon/024.png",
    "type": [
      "Poison"
    ],
    "height": "3.51 m",
    "weight": "65.0 kg",
    "candy": "Ekans Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "01:50",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "023",
      "name": "Ekans"
    }]
  }, {
    "id": 25,
    "num": "025",
    "name": "Pikachu",
    "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
    "type": [
      "Electric"
    ],
    "height": "0.41 m",
    "weight": "6.0 kg",
    "candy": "Pikachu Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.21,
    "avg_spawns": 21,
    "spawn_time": "04:00",
    "multipliers": [2.34],
    "weaknesses": [
      "Ground"
    ],
    "next_evolution": [{
      "num": "026",
      "name": "Raichu"
    }]
  }, {
    "id": 26,
    "num": "026",
    "name": "Raichu",
    "img": "http://www.serebii.net/pokemongo/pokemon/026.png",
    "type": [
      "Electric"
    ],
    "height": "0.79 m",
    "weight": "30.0 kg",
    "candy": "Pikachu Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0076,
    "avg_spawns": 0.76,
    "spawn_time": "23:58",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "prev_evolution": [{
      "num": "025",
      "name": "Pikachu"
    }]
  }, {
    "id": 27,
    "num": "027",
    "name": "Sandshrew",
    "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
    "type": [
      "Ground"
    ],
    "height": "0.61 m",
    "weight": "12.0 kg",
    "candy": "Sandshrew Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.11,
    "avg_spawns": 111,
    "spawn_time": "01:58",
    "multipliers": [2.45],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "028",
      "name": "Sandslash"
    }]
  }, {
    "id": 28,
    "num": "028",
    "name": "Sandslash",
    "img": "http://www.serebii.net/pokemongo/pokemon/028.png",
    "type": [
      "Ground"
    ],
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Sandshrew Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.037,
    "avg_spawns": 3.7,
    "spawn_time": "12:34",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "027",
      "name": "Sandshrew"
    }]
  }, {
    "id": 29,
    "num": "029",
    "name": "Nidoran ♀ (Female)",
    "img": "http://www.serebii.net/pokemongo/pokemon/029.png",
    "type": [
      "Poison"
    ],
    "height": "0.41 m",
    "weight": "7.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.38,
    "avg_spawns": 138,
    "spawn_time": "01:51",
    "multipliers": [
      1.63,
      2.48
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "030",
      "name": "Nidorina"
    }, {
      "num": "031",
      "name": "Nidoqueen"
    }]
  }, {
    "id": 30,
    "num": "030",
    "name": "Nidorina",
    "img": "http://www.serebii.net/pokemongo/pokemon/030.png",
    "type": [
      "Poison"
    ],
    "height": "0.79 m",
    "weight": "20.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.088,
    "avg_spawns": 8.8,
    "spawn_time": "07:22",
    "multipliers": [
      1.83,
      2.48
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "029",
      "name": "Nidoran(Female)"
    }],
    "next_evolution": [{
      "num": "031",
      "name": "Nidoqueen"
    }]
  }, {
    "id": 31,
    "num": "031",
    "name": "Nidoqueen",
    "img": "http://www.serebii.net/pokemongo/pokemon/031.png",
    "type": [
      "Poison",
      "Ground"
    ],
    "height": "1.30 m",
    "weight": "60.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "12:35",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "029",
      "name": "Nidoran(Female)"
    }, {
      "num": "030",
      "name": "Nidorina"
    }]
  }, {
    "id": 32,
    "num": "032",
    "name": "Nidoran ♂ (Male)",
    "img": "http://www.serebii.net/pokemongo/pokemon/032.png",
    "type": [
      "Poison"
    ],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.31,
    "avg_spawns": 131,
    "spawn_time": "01:12",
    "multipliers": [
      1.64,
      1.7
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "033",
      "name": "Nidorino"
    }, {
      "num": "034",
      "name": "Nidoking"
    }]
  }, {
    "id": 33,
    "num": "033",
    "name": "Nidorino",
    "img": "http://www.serebii.net/pokemongo/pokemon/033.png",
    "type": [
      "Poison"
    ],
    "height": "0.89 m",
    "weight": "19.5 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.083,
    "avg_spawns": 8.3,
    "spawn_time": "09:02",
    "multipliers": [1.83],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "032",
      "name": "Nidoran(Male)"
    }],
    "next_evolution": [{
      "num": "034",
      "name": "Nidoking"
    }]
  }, {
    "id": 34,
    "num": "034",
    "name": "Nidoking",
    "img": "http://www.serebii.net/pokemongo/pokemon/034.png",
    "destacado": true,
    "type": [
      "Poison",
      "Ground"
    ],
    "height": "1.40 m",
    "weight": "62.0 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "12:16",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "032",
      "name": "Nidoran(Male)"
    }, {
      "num": "033",
      "name": "Nidorino"
    }]
  }, {
    "id": 35,
    "num": "035",
    "name": "Clefairy",
    "img": "http://www.serebii.net/pokemongo/pokemon/035.png",
    "type": [
      "Normal"
    ],
    "height": "0.61 m",
    "weight": "7.5 kg",
    "candy": "Clefairy Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "03:30",
    "multipliers": [
      2.03,
      2.14
    ],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "036",
      "name": "Clefable"
    }]
  }, {
    "id": 36,
    "num": "036",
    "name": "Clefable",
    "img": "http://www.serebii.net/pokemongo/pokemon/036.png",
    "type": [
      "Normal"
    ],
    "height": "1.30 m",
    "weight": "40.0 kg",
    "candy": "Clefairy Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "03:29",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "035",
      "name": "Clefairy"
    }]
  }, {
    "id": 37,
    "num": "037",
    "name": "Vulpix",
    "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
    "type": [
      "Fire"
    ],
    "height": "0.61 m",
    "weight": "9.9 kg",
    "candy": "Vulpix Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.22,
    "avg_spawns": 22,
    "spawn_time": "13:43",
    "multipliers": [
      2.74,
      2.81
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "038",
      "name": "Ninetales"
    }]
  }, {
    "id": 38,
    "num": "038",
    "name": "Ninetales",
    "img": "http://www.serebii.net/pokemongo/pokemon/038.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.9 kg",
    "candy": "Vulpix Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0077,
    "avg_spawns": 0.77,
    "spawn_time": "01:32",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "037",
      "name": "Vulpix"
    }]
  }, {
    "id": 39,
    "num": "039",
    "name": "Jigglypuff",
    "img": "http://www.serebii.net/pokemongo/pokemon/039.png",
    "type": [
      "Normal"
    ],
    "height": "0.51 m",
    "weight": "5.5 kg",
    "candy": "Jigglypuff Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.39,
    "avg_spawns": 39,
    "spawn_time": "08:46",
    "multipliers": [1.85],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "040",
      "name": "Wigglytuff"
    }]
  }, {
    "id": 40,
    "num": "040",
    "name": "Wigglytuff",
    "img": "http://www.serebii.net/pokemongo/pokemon/040.png",
    "type": [
      "Normal"
    ],
    "height": "0.99 m",
    "weight": "12.0 kg",
    "candy": "Jigglypuff Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.018,
    "avg_spawns": 1.8,
    "spawn_time": "12:28",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "039",
      "name": "Jigglypuff"
    }]
  }, {
    "id": 41,
    "num": "041",
    "name": "Zubat",
    "img": "http://www.serebii.net/pokemongo/pokemon/041.png",
    "type": [
      "Poison",
      "Flying"
    ],
    "height": "0.79 m",
    "weight": "7.5 kg",
    "candy": "Zubat Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 6.52,
    "avg_spawns": 652,
    "spawn_time": "12:28",
    "multipliers": [
      2.6,
      3.67
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "042",
      "name": "Golbat"
    }]
  }, {
    "id": 42,
    "num": "042",
    "name": "Golbat",
    "img": "http://www.serebii.net/pokemongo/pokemon/042.png",
    "type": [
      "Poison",
      "Flying"
    ],
    "height": "1.60 m",
    "weight": "55.0 kg",
    "candy": "Zubat Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.42,
    "avg_spawns": 42,
    "spawn_time": "02:15",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "041",
      "name": "Zubat"
    }]
  }, {
    "id": 43,
    "num": "043",
    "name": "Oddish",
    "img": "http://www.serebii.net/pokemongo/pokemon/043.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.51 m",
    "weight": "5.4 kg",
    "candy": "Oddish Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.02,
    "avg_spawns": 102,
    "spawn_time": "03:58",
    "multipliers": [1.5],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "044",
      "name": "Gloom"
    }, {
      "num": "045",
      "name": "Vileplume"
    }]
  }, {
    "id": 44,
    "num": "044",
    "name": "Gloom",
    "img": "http://www.serebii.net/pokemongo/pokemon/044.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.79 m",
    "weight": "8.6 kg",
    "candy": "Oddish Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.064,
    "avg_spawns": 6.4,
    "spawn_time": "11:33",
    "multipliers": [1.49],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "043",
      "name": "Oddish"
    }],
    "next_evolution": [{
      "num": "045",
      "name": "Vileplume"
    }]
  }, {
    "id": 45,
    "num": "045",
    "name": "Vileplume",
    "img": "http://www.serebii.net/pokemongo/pokemon/045.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "1.19 m",
    "weight": "18.6 kg",
    "candy": "Oddish Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0097,
    "avg_spawns": 0.97,
    "spawn_time": "23:58",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "043",
      "name": "Oddish"
    }, {
      "num": "044",
      "name": "Gloom"
    }]
  }, {
    "id": 46,
    "num": "046",
    "name": "Paras",
    "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
    "type": [
      "Bug",
      "Grass"
    ],
    "height": "0.30 m",
    "weight": "5.4 kg",
    "candy": "Paras Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.36,
    "avg_spawns": 236,
    "spawn_time": "01:42",
    "multipliers": [2.02],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "next_evolution": [{
      "num": "047",
      "name": "Parasect"
    }]
  }, {
    "id": 47,
    "num": "047",
    "name": "Parasect",
    "img": "http://www.serebii.net/pokemongo/pokemon/047.png",
    "type": [
      "Bug",
      "Grass"
    ],
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Paras Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.074,
    "avg_spawns": 7.4,
    "spawn_time": "01:22",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "046",
      "name": "Paras"
    }]
  }, {
    "id": 48,
    "num": "048",
    "name": "Venonat",
    "img": "http://www.serebii.net/pokemongo/pokemon/048.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "30.0 kg",
    "candy": "Venonat Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.28,
    "avg_spawns": 228,
    "spawn_time": "02:31",
    "multipliers": [
      1.86,
      1.9
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "049",
      "name": "Venomoth"
    }]
  }, {
    "id": 49,
    "num": "049",
    "name": "Venomoth",
    "img": "http://www.serebii.net/pokemongo/pokemon/049.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "1.50 m",
    "weight": "12.5 kg",
    "candy": "Venonat Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "048",
      "name": "Venonat"
    }]
  }, {
    "id": 50,
    "num": "050",
    "name": "Diglett",
    "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
    "type": [
      "Ground"
    ],
    "height": "0.20 m",
    "weight": "0.8 kg",
    "candy": "Diglett Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.40,
    "avg_spawns": 40,
    "spawn_time": "02:22",
    "multipliers": [2.69],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "051",
      "name": "Dugtrio"
    }]
  }, {
    "id": 51,
    "num": "051",
    "name": "Dugtrio",
    "img": "http://www.serebii.net/pokemongo/pokemon/051.png",
    "type": [
      "Ground"
    ],
    "height": "0.71 m",
    "weight": "33.3 kg",
    "candy": "Dugtrio",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "12:37",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "050",
      "name": "Diglett"
    }]
  }, {
    "id": 52,
    "num": "052",
    "name": "Meowth",
    "img": "http://www.serebii.net/pokemongo/pokemon/052.png",
    "type": [
      "Normal"
    ],
    "height": "0.41 m",
    "weight": "4.2 kg",
    "candy": "Meowth Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.86,
    "avg_spawns": 86,
    "spawn_time": "02:54",
    "multipliers": [1.98],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "053",
      "name": "Persian"
    }]
  }, {
    "id": 53,
    "num": "053",
    "name": "Persian",
    "img": "http://www.serebii.net/pokemongo/pokemon/053.png",
    "type": [
      "Normal"
    ],
    "height": "0.99 m",
    "weight": "32.0 kg",
    "candy": "Meowth Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "02:44",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "052",
      "name": "Meowth"
    }]
  }, {
    "id": 54,
    "num": "054",
    "name": "Psyduck",
    "img": "http://www.serebii.net/pokemongo/pokemon/054.png",
    "type": [
      "Water"
    ],
    "height": "0.79 m",
    "weight": "19.6 kg",
    "candy": "Psyduck Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.54,
    "avg_spawns": 254,
    "spawn_time": "03:41",
    "multipliers": [2.27],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "055",
      "name": "Golduck"
    }]
  }, {
    "id": 55,
    "num": "055",
    "name": "Golduck",
    "img": "http://www.serebii.net/pokemongo/pokemon/055.png",
    "type": [
      "Water"
    ],
    "height": "1.70 m",
    "weight": "76.6 kg",
    "candy": "Psyduck Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.087,
    "avg_spawns": 8.7,
    "spawn_time": "23:06",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "054",
      "name": "Psyduck"
    }]
  }, {
    "id": 56,
    "num": "056",
    "name": "Mankey",
    "img": "http://www.serebii.net/pokemongo/pokemon/056.png",
    "type": [
      "Fighting"
    ],
    "height": "0.51 m",
    "weight": "28.0 kg",
    "candy": "Mankey Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "12:52",
    "multipliers": [
      2.17,
      2.28
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "057",
      "name": "Primeape"
    }]
  }, {
    "id": 57,
    "num": "057",
    "name": "Primeape",
    "img": "http://www.serebii.net/pokemongo/pokemon/057.png",
    "type": [
      "Fighting"
    ],
    "height": "0.99 m",
    "weight": "32.0 kg",
    "candy": "Mankey Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.031,
    "avg_spawns": 3.1,
    "spawn_time": "12:33",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "056",
      "name": "Mankey"
    }]
  }, {
    "id": 58,
    "num": "058",
    "name": "Growlithe",
    "img": "http://www.serebii.net/pokemongo/pokemon/058.png",
    "type": [
      "Fire"
    ],
    "height": "0.71 m",
    "weight": "19.0 kg",
    "candy": "Growlithe Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "03:57",
    "multipliers": [
      2.31,
      2.36
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "059",
      "name": "Arcanine"
    }]
  }, {
    "id": 59,
    "num": "059",
    "name": "Arcanine",
    "img": "http://www.serebii.net/pokemongo/pokemon/059.png",
    "type": [
      "Fire"
    ],
    "height": "1.91 m",
    "weight": "155.0 kg",
    "candy": "Growlithe Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "03:11",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "058",
      "name": "Growlithe"
    }]
  }, {
    "id": 60,
    "num": "060",
    "name": "Poliwag",
    "img": "http://www.serebii.net/pokemongo/pokemon/060.png",
    "type": [
      "Water"
    ],
    "height": "0.61 m",
    "weight": "12.4 kg",
    "candy": "Poliwag Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 2.19,
    "avg_spawns": 219,
    "spawn_time": "03:40",
    "multipliers": [
      1.72,
      1.73
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "061",
      "name": "Poliwhirl"
    }, {
      "num": "062",
      "name": "Poliwrath"
    }]
  }, {
    "id": 61,
    "num": "061",
    "name": "Poliwhirl",
    "img": "http://www.serebii.net/pokemongo/pokemon/061.png",
    "type": [
      "Water"
    ],
    "height": "0.99 m",
    "weight": "20.0 kg",
    "candy": "Poliwag Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.13,
    "avg_spawns": 13,
    "spawn_time": "09:14",
    "multipliers": [1.95],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "060",
      "name": "Poliwag"
    }],
    "next_evolution": [{
      "num": "062",
      "name": "Poliwrath"
    }]
  }, {
    "id": 62,
    "num": "062",
    "name": "Poliwrath",
    "img": "http://www.serebii.net/pokemongo/pokemon/062.png",
    "type": [
      "Water",
      "Fighting"
    ],
    "height": "1.30 m",
    "weight": "54.0 kg",
    "candy": "Poliwag Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "01:32",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "060",
      "name": "Poliwag"
    }, {
      "num": "061",
      "name": "Poliwhirl"
    }]
  }, {
    "id": 63,
    "num": "063",
    "name": "Abra",
    "img": "http://www.serebii.net/pokemongo/pokemon/063.png",
    "type": [
      "Psychic"
    ],
    "height": "0.89 m",
    "weight": "19.5 kg",
    "candy": "Abra Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.42,
    "avg_spawns": 42,
    "spawn_time": "04:30",
    "multipliers": [
      1.36,
      1.95
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "064",
      "name": "Kadabra"
    }, {
      "num": "065",
      "name": "Alakazam"
    }]
  }, {
    "id": 64,
    "num": "064",
    "name": "Kadabra",
    "img": "http://www.serebii.net/pokemongo/pokemon/064.png",
    "destacado": true,
    "type": [
      "Psychic"
    ],
    "height": "1.30 m",
    "weight": "56.5 kg",
    "candy": "Abra Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.027,
    "avg_spawns": 2.7,
    "spawn_time": "11:25",
    "multipliers": [1.4],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "063",
      "name": "Abra"
    }],
    "next_evolution": [{
      "num": "065",
      "name": "Alakazam"
    }]
  }, {
    "id": 65,
    "num": "065",
    "name": "Alakazam",
    "img": "http://www.serebii.net/pokemongo/pokemon/065.png",
    "type": [
      "Psychic"
    ],
    "height": "1.50 m",
    "weight": "48.0 kg",
    "candy": "Abra Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0073,
    "avg_spawns": 0.73,
    "spawn_time": "12:33",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "063",
      "name": "Abra"
    }, {
      "num": "064",
      "name": "Kadabra"
    }]
  }, {
    "id": 66,
    "num": "066",
    "name": "Machop",
    "img": "http://www.serebii.net/pokemongo/pokemon/066.png",
    "type": [
      "Fighting"
    ],
    "height": "0.79 m",
    "weight": "19.5 kg",
    "candy": "Machop Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.49,
    "avg_spawns": 49,
    "spawn_time": "01:55",
    "multipliers": [
      1.64,
      1.65
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "067",
      "name": "Machoke"
    }, {
      "num": "068",
      "name": "Machamp"
    }]
  }, {
    "id": 67,
    "num": "067",
    "name": "Machoke",
    "img": "http://www.serebii.net/pokemongo/pokemon/067.png",
    "type": [
      "Fighting"
    ],
    "height": "1.50 m",
    "weight": "70.5 kg",
    "candy": "Machop Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "10:32",
    "multipliers": [1.7],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "066",
      "name": "Machop"
    }],
    "next_evolution": [{
      "num": "068",
      "name": "Machamp"
    }]
  }, {
    "id": 68,
    "num": "068",
    "name": "Machamp",
    "img": "http://www.serebii.net/pokemongo/pokemon/068.png",
    "type": [
      "Fighting"
    ],
    "height": "1.60 m",
    "weight": "130.0 kg",
    "candy": "Machop Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0068,
    "avg_spawns": 0.68,
    "spawn_time": "02:55",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "066",
      "name": "Machop"
    }, {
      "num": "067",
      "name": "Machoke"
    }]
  }, {
    "id": 69,
    "num": "069",
    "name": "Bellsprout",
    "img": "http://www.serebii.net/pokemongo/pokemon/069.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "4.0 kg",
    "candy": "Bellsprout Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.15,
    "avg_spawns": 115,
    "spawn_time": "04:10",
    "multipliers": [1.57],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "070",
      "name": "Weepinbell"
    }, {
      "num": "071",
      "name": "Victreebel"
    }]
  }, {
    "id": 70,
    "num": "070",
    "name": "Weepinbell",
    "img": "http://www.serebii.net/pokemongo/pokemon/070.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "6.4 kg",
    "candy": "Bellsprout Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "09:45",
    "multipliers": [1.59],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "069",
      "name": "Bellsprout"
    }],
    "next_evolution": [{
      "num": "071",
      "name": "Victreebel"
    }]
  }, {
    "id": 71,
    "num": "071",
    "name": "Victreebel",
    "img": "http://www.serebii.net/pokemongo/pokemon/071.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "1.70 m",
    "weight": "15.5 kg",
    "candy": "Bellsprout Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0059,
    "avg_spawns": 0.59,
    "spawn_time": "12:19",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "069",
      "name": "Bellsprout"
    }, {
      "num": "070",
      "name": "Weepinbell"
    }]
  }, {
    "id": 72,
    "num": "072",
    "name": "Tentacool",
    "img": "http://www.serebii.net/pokemongo/pokemon/072.png",
    "type": [
      "Water",
      "Poison"
    ],
    "height": "0.89 m",
    "weight": "45.5 kg",
    "candy": "Tentacool Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.81,
    "avg_spawns": 81,
    "spawn_time": "03:20",
    "multipliers": [2.52],
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "073",
      "name": "Tentacruel"
    }]
  }, {
    "id": 73,
    "num": "073",
    "name": "Tentacruel",
    "img": "http://www.serebii.net/pokemongo/pokemon/073.png",
    "type": [
      "Water",
      "Poison"
    ],
    "height": "1.60 m",
    "weight": "55.0 kg",
    "candy": "Tentacool Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.082,
    "avg_spawns": 8.2,
    "spawn_time": "23:36",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "072",
      "name": "Tentacool"
    }]
  }, {
    "id": 74,
    "num": "074",
    "name": "Geodude",
    "img": "http://www.serebii.net/pokemongo/pokemon/074.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "height": "0.41 m",
    "weight": "20.0 kg",
    "candy": "Geodude Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 1.19,
    "avg_spawns": 119,
    "spawn_time": "12:40",
    "multipliers": [
      1.75,
      1.76
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "next_evolution": [{
      "num": "075",
      "name": "Graveler"
    }, {
      "num": "076",
      "name": "Golem"
    }]
  }, {
    "id": 75,
    "num": "075",
    "name": "Graveler",
    "img": "http://www.serebii.net/pokemongo/pokemon/075.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "height": "0.99 m",
    "weight": "105.0 kg",
    "candy": "Geodude Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.071,
    "avg_spawns": 7.1,
    "spawn_time": "04:53",
    "multipliers": [
      1.64,
      1.72
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "prev_evolution": [{
      "num": "074",
      "name": "Geodude"
    }],
    "next_evolution": [{
      "num": "076",
      "name": "Golem"
    }]
  }, {
    "id": 76,
    "num": "076",
    "name": "Golem",
    "img": "http://www.serebii.net/pokemongo/pokemon/076.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "height": "1.40 m",
    "weight": "300.0 kg",
    "candy": "Geodude Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0047,
    "avg_spawns": 0.47,
    "spawn_time": "12:16",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "prev_evolution": [{
      "num": "074",
      "name": "Geodude"
    }, {
      "num": "075",
      "name": "Graveler"
    }]
  }, {
    "id": 77,
    "num": "077",
    "name": "Ponyta",
    "img": "http://www.serebii.net/pokemongo/pokemon/077.png",
    "type": [
      "Fire"
    ],
    "height": "0.99 m",
    "weight": "30.0 kg",
    "candy": "Ponyta Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.51,
    "avg_spawns": 51,
    "spawn_time": "02:50",
    "multipliers": [
      1.48,
      1.5
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "078",
      "name": "Rapidash"
    }]
  }, {
    "id": 78,
    "num": "078",
    "name": "Rapidash",
    "img": "http://www.serebii.net/pokemongo/pokemon/078.png",
    "type": [
      "Fire"
    ],
    "height": "1.70 m",
    "weight": "95.0 kg",
    "candy": "Ponyta Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "04:00",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "077",
      "name": "Ponyta"
    }]
  }, {
    "id": 79,
    "num": "079",
    "name": "Slowpoke",
    "img": "http://www.serebii.net/pokemongo/pokemon/079.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "height": "1.19 m",
    "weight": "36.0 kg",
    "candy": "Slowpoke Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.05,
    "avg_spawns": 105,
    "spawn_time": "07:12",
    "multipliers": [2.21],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "080",
      "name": "Slowbro"
    }]
  }, {
    "id": 80,
    "num": "080",
    "name": "Slowbro",
    "img": "http://www.serebii.net/pokemongo/pokemon/080.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "height": "1.60 m",
    "weight": "78.5 kg",
    "candy": "Slowpoke Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.036,
    "avg_spawns": 3.6,
    "spawn_time": "02:56",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "079",
      "name": "Slowpoke"
    }]
  }, {
    "id": 81,
    "num": "081",
    "name": "Magnemite",
    "img": "http://www.serebii.net/pokemongo/pokemon/081.png",
    "type": [
      "Electric"
    ],
    "height": "0.30 m",
    "weight": "6.0 kg",
    "candy": "Magnemite Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.71,
    "avg_spawns": 71,
    "spawn_time": "04:04",
    "multipliers": [
      2.16,
      2.17
    ],
    "weaknesses": [
      "Fire",
      "Water",
      "Ground"
    ],
    "next_evolution": [{
      "num": "082",
      "name": "Magneton"
    }]
  }, {
    "id": 82,
    "num": "082",
    "name": "Magneton",
    "img": "http://www.serebii.net/pokemongo/pokemon/082.png",
    "type": [
      "Electric"
    ],
    "height": "0.99 m",
    "weight": "60.0 kg",
    "candy": "Magnemite Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.023,
    "avg_spawns": 2.3,
    "spawn_time": "15:25",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Water",
      "Ground"
    ],
    "prev_evolution": [{
      "num": "081",
      "name": "Magnemite"
    }]
  }, {
    "id": 83,
    "num": "083",
    "name": "Farfetch'd",
    "img": "http://www.serebii.net/pokemongo/pokemon/083.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "0.79 m",
    "weight": "15.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.0212,
    "avg_spawns": 2.12,
    "spawn_time": "01:09",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ]
  }, {
    "id": 84,
    "num": "084",
    "name": "Doduo",
    "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.40 m",
    "weight": "39.2 kg",
    "candy": "Doduo Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.52,
    "avg_spawns": 52,
    "spawn_time": "05:10",
    "multipliers": [
      2.19,
      2.24
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "085",
      "name": "Dodrio"
    }]
  }, {
    "id": 85,
    "num": "085",
    "name": "Dodrio",
    "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.80 m",
    "weight": "85.2 kg",
    "candy": "Doduo Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.22,
    "avg_spawns": 22,
    "spawn_time": "02:12",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "084",
      "name": "Doduo"
    }]
  }, {
    "id": 86,
    "num": "086",
    "name": "Seel",
    "img": "http://www.serebii.net/pokemongo/pokemon/086.png",
    "type": [
      "Water"
    ],
    "height": "1.09 m",
    "weight": "90.0 kg",
    "candy": "Seel Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.28,
    "avg_spawns": 28,
    "spawn_time": "06:46",
    "multipliers": [
      1.04,
      1.96
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "087",
      "name": "Dewgong"
    }]
  }, {
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
    "type": [
      "Water",
      "Ice"
    ],
    "height": "1.70 m",
    "weight": "120.0 kg",
    "candy": "Seel Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.013,
    "avg_spawns": 1.3,
    "spawn_time": "06:04",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "086",
      "name": "Seel"
    }]
  }, {
    "id": 88,
    "num": "088",
    "name": "Grimer",
    "img": "http://www.serebii.net/pokemongo/pokemon/088.png",
    "type": [
      "Poison"
    ],
    "height": "0.89 m",
    "weight": "30.0 kg",
    "candy": "Grimer Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.052,
    "avg_spawns": 5.2,
    "spawn_time": "15:11",
    "multipliers": [2.44],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "089",
      "name": "Muk"
    }]
  }, {
    "id": 89,
    "num": "089",
    "name": "Muk",
    "img": "http://www.serebii.net/pokemongo/pokemon/089.png",
    "type": [
      "Poison"
    ],
    "height": "1.19 m",
    "weight": "30.0 kg",
    "candy": "Grimer Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "01:28",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "088",
      "name": "Grimer"
    }]
  }, {
    "id": 90,
    "num": "090",
    "name": "Shellder",
    "img": "http://www.serebii.net/pokemongo/pokemon/090.png",
    "type": [
      "Water"
    ],
    "height": "0.30 m",
    "weight": "4.0 kg",
    "candy": "Shellder Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.52,
    "avg_spawns": 52,
    "spawn_time": "07:39",
    "multipliers": [2.65],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "091",
      "name": "Cloyster"
    }]
  }, {
    "id": 91,
    "num": "091",
    "name": "Cloyster",
    "img": "http://www.serebii.net/pokemongo/pokemon/091.png",
    "type": [
      "Water",
      "Ice"
    ],
    "height": "1.50 m",
    "weight": "132.5 kg",
    "candy": "Shellder Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.015,
    "avg_spawns": 1.5,
    "spawn_time": "02:33",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "090",
      "name": "Shellder"
    }]
  }, {
    "id": 92,
    "num": "092",
    "name": "Gastly",
    "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
    "type": [
      "Ghost",
      "Poison"
    ],
    "height": "1.30 m",
    "weight": "0.1 kg",
    "candy": "Gastly Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.79,
    "avg_spawns": 79,
    "spawn_time": "04:21",
    "multipliers": [1.78],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "093",
      "name": "Haunter"
    }, {
      "num": "094",
      "name": "Gengar"
    }]
  }, {
    "id": 93,
    "num": "093",
    "name": "Haunter",
    "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
    "type": [
      "Ghost",
      "Poison"
    ],
    "height": "1.60 m",
    "weight": "0.1 kg",
    "candy": "Gastly Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.052,
    "avg_spawns": 5.2,
    "spawn_time": "00:10",
    "multipliers": [
      1.56,
      1.8
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "092",
      "name": "Gastly"
    }],
    "next_evolution": [{
      "num": "094",
      "name": "Gengar"
    }]
  }, {
    "id": 94,
    "num": "094",
    "name": "Gengar",
    "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
    "destacado": true,
    "type": [
      "Ghost",
      "Poison"
    ],
    "height": "1.50 m",
    "weight": "40.5 kg",
    "candy": "Gastly Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0067,
    "avg_spawns": 0.67,
    "spawn_time": "03:55",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "092",
      "name": "Gastly"
    }, {
      "num": "093",
      "name": "Haunter"
    }]
  }, {
    "id": 95,
    "num": "095",
    "name": "Onix",
    "img": "http://www.serebii.net/pokemongo/pokemon/095.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "height": "8.79 m",
    "weight": "210.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "01:18",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ]
  }, {
    "id": 96,
    "num": "096",
    "name": "Drowzee",
    "img": "http://www.serebii.net/pokemongo/pokemon/096.png",
    "type": [
      "Psychic"
    ],
    "height": "0.99 m",
    "weight": "32.4 kg",
    "candy": "Drowzee Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 3.21,
    "avg_spawns": 321,
    "spawn_time": "01:51",
    "multipliers": [
      2.08,
      2.09
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "097",
      "name": "Hypno"
    }]
  }, {
    "id": 97,
    "num": "097",
    "name": "Hypno",
    "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
    "type": [
      "Psychic"
    ],
    "height": "1.60 m",
    "weight": "75.6 kg",
    "candy": "Drowzee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "02:17",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "096",
      "name": "Drowzee"
    }]
  }, {
    "id": 98,
    "num": "098",
    "name": "Krabby",
    "img": "http://www.serebii.net/pokemongo/pokemon/098.png",
    "type": [
      "Water"
    ],
    "height": "0.41 m",
    "weight": "6.5 kg",
    "candy": "Krabby Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.12,
    "avg_spawns": 212,
    "spawn_time": "03:33",
    "multipliers": [
      2.36,
      2.4
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "099",
      "name": "Kingler"
    }]
  }, {
    "id": 99,
    "num": "099",
    "name": "Kingler",
    "img": "http://www.serebii.net/pokemongo/pokemon/099.png",
    "type": [
      "Water"
    ],
    "height": "1.30 m",
    "weight": "60.0 kg",
    "candy": "Krabby Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.062,
    "avg_spawns": 6.2,
    "spawn_time": "03:44",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "098",
      "name": "Krabby"
    }]
  }, {
    "id": 100,
    "num": "100",
    "name": "Voltorb",
    "img": "http://www.serebii.net/pokemongo/pokemon/100.png",
    "type": [
      "Electric"
    ],
    "height": "0.51 m",
    "weight": "10.4 kg",
    "candy": "Voltorb Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.65,
    "avg_spawns": 65,
    "spawn_time": "04:36",
    "multipliers": [
      2.01,
      2.02
    ],
    "weaknesses": [
      "Ground"
    ],
    "next_evolution": [{
      "num": "101",
      "name": "Electrode"
    }]
  }, {
    "id": 101,
    "num": "101",
    "name": "Electrode",
    "img": "http://www.serebii.net/pokemongo/pokemon/101.png",
    "type": [
      "Electric"
    ],
    "height": "1.19 m",
    "weight": "66.6 kg",
    "candy": "Voltorb Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "04:10",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "prev_evolution": [{
      "num": "100",
      "name": "Voltorb"
    }]
  }, {
    "id": 102,
    "num": "102",
    "name": "Exeggcute",
    "img": "http://www.serebii.net/pokemongo/pokemon/102.png",
    "type": [
      "Grass",
      "Psychic"
    ],
    "height": "0.41 m",
    "weight": "2.5 kg",
    "candy": "Exeggcute Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.78,
    "avg_spawns": 78,
    "spawn_time": "09:09",
    "multipliers": [
      2.7,
      3.18
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "103",
      "name": "Exeggutor"
    }]
  }, {
    "id": 103,
    "num": "103",
    "name": "Exeggutor",
    "img": "http://www.serebii.net/pokemongo/pokemon/103.png",
    "type": [
      "Grass",
      "Psychic"
    ],
    "height": "2.01 m",
    "weight": "120.0 kg",
    "candy": "Exeggcute Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "12:34",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "102",
      "name": "Exeggcute"
    }]
  }, {
    "id": 104,
    "num": "104",
    "name": "Cubone",
    "img": "http://www.serebii.net/pokemongo/pokemon/104.png",
    "type": [
      "Ground"
    ],
    "height": "0.41 m",
    "weight": "6.5 kg",
    "candy": "Cubone Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.61,
    "avg_spawns": 61,
    "spawn_time": "01:51",
    "multipliers": [1.67],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "105",
      "name": "Marowak"
    }]
  }, {
    "id": 105,
    "num": "105",
    "name": "Marowak",
    "img": "http://www.serebii.net/pokemongo/pokemon/105.png",
    "type": [
      "Ground"
    ],
    "height": "0.99 m",
    "weight": "45.0 kg",
    "candy": "Cubone Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "03:59",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "104",
      "name": "Cubone"
    }]
  }, {
    "id": 106,
    "num": "106",
    "name": "Hitmonlee",
    "img": "http://www.serebii.net/pokemongo/pokemon/106.png",
    "type": [
      "Fighting"
    ],
    "height": "1.50 m",
    "weight": "49.8 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "03:59",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ]
  }, {
    "id": 107,
    "num": "107",
    "name": "Hitmonchan",
    "img": "http://www.serebii.net/pokemongo/pokemon/107.png",
    "type": [
      "Fighting"
    ],
    "height": "1.40 m",
    "weight": "50.2 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:58",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ]
  }, {
    "id": 108,
    "num": "108",
    "name": "Lickitung",
    "img": "http://www.serebii.net/pokemongo/pokemon/108.png",
    "type": [
      "Normal"
    ],
    "height": "1.19 m",
    "weight": "65.5 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "02:46",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 109,
    "num": "109",
    "name": "Koffing",
    "img": "http://www.serebii.net/pokemongo/pokemon/109.png",
    "type": [
      "Poison"
    ],
    "height": "0.61 m",
    "weight": "1.0 kg",
    "candy": "Koffing Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.20,
    "avg_spawns": 20,
    "spawn_time": "08:16",
    "multipliers": [1.11],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "110",
      "name": "Weezing"
    }]
  }, {
    "id": 110,
    "num": "110",
    "name": "Weezing",
    "img": "http://www.serebii.net/pokemongo/pokemon/110.png",
    "type": [
      "Poison"
    ],
    "height": "1.19 m",
    "weight": "9.5 kg",
    "candy": "Koffing Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.016,
    "avg_spawns": 1.6,
    "spawn_time": "12:17",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "109",
      "name": "Koffing"
    }]
  }, {
    "id": 111,
    "num": "111",
    "name": "Rhyhorn",
    "img": "http://www.serebii.net/pokemongo/pokemon/111.png",
    "type": [
      "Ground",
      "Rock"
    ],
    "height": "0.99 m",
    "weight": "115.0 kg",
    "candy": "Rhyhorn Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.63,
    "avg_spawns": 63,
    "spawn_time": "03:21",
    "multipliers": [1.91],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "next_evolution": [{
      "num": "112",
      "name": "Rhydon"
    }]
  }, {
    "id": 112,
    "num": "112",
    "name": "Rhydon",
    "img": "http://www.serebii.net/pokemongo/pokemon/112.png",
    "type": [
      "Ground",
      "Rock"
    ],
    "height": "1.91 m",
    "weight": "120.0 kg",
    "candy": "Rhyhorn Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:50",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "prev_evolution": [{
      "num": "111",
      "name": "Rhyhorn"
    }]
  }, {
    "id": 113,
    "num": "113",
    "name": "Chansey",
    "img": "http://www.serebii.net/pokemongo/pokemon/113.png",
    "type": [
      "Normal"
    ],
    "height": "1.09 m",
    "weight": "34.6 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.013,
    "avg_spawns": 1.3,
    "spawn_time": "04:46",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 114,
    "num": "114",
    "name": "Tangela",
    "img": "http://www.serebii.net/pokemongo/pokemon/114.png",
    "type": [
      "Grass"
    ],
    "height": "0.99 m",
    "weight": "35.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.228,
    "avg_spawns": 22.8,
    "spawn_time": "23:13",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ]
  }, {
    "id": 115,
    "num": "115",
    "name": "Kangaskhan",
    "img": "http://www.serebii.net/pokemongo/pokemon/115.png",
    "type": [
      "Normal"
    ],
    "height": "2.21 m",
    "weight": "80.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.0086,
    "avg_spawns": 0.86,
    "spawn_time": "02:40",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 116,
    "num": "116",
    "name": "Horsea",
    "img": "http://www.serebii.net/pokemongo/pokemon/116.png",
    "type": [
      "Water"
    ],
    "height": "0.41 m",
    "weight": "8.0 kg",
    "candy": "Horsea Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.13,
    "avg_spawns": 113,
    "spawn_time": "02:53",
    "multipliers": [2.23],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "117",
      "name": "Seadra"
    }]
  }, {
    "id": 117,
    "num": "117",
    "name": "Seadra",
    "img": "http://www.serebii.net/pokemongo/pokemon/117.png",
    "type": [
      "Water"
    ],
    "height": "1.19 m",
    "weight": "25.0 kg",
    "candy": "Horsea Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "03:18",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "116",
      "name": "Horsea"
    }]
  }, {
    "id": 118,
    "num": "118",
    "name": "Goldeen",
    "img": "http://www.serebii.net/pokemongo/pokemon/118.png",
    "type": [
      "Water"
    ],
    "height": "0.61 m",
    "weight": "15.0 kg",
    "candy": "Goldeen Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.18,
    "avg_spawns": 218,
    "spawn_time": "03:14",
    "multipliers": [
      2.15,
      2.2
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "119",
      "name": "Seaking"
    }]
  }, {
    "id": 119,
    "num": "119",
    "name": "Seaking",
    "img": "http://www.serebii.net/pokemongo/pokemon/119.png",
    "type": [
      "Water"
    ],
    "height": "1.30 m",
    "weight": "39.0 kg",
    "candy": "Goldeen Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.08,
    "avg_spawns": 8,
    "spawn_time": "05:21",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "118",
      "name": "Goldeen"
    }]
  }, {
    "id": 120,
    "num": "120",
    "name": "Staryu",
    "img": "http://www.serebii.net/pokemongo/pokemon/120.png",
    "type": [
      "Water"
    ],
    "height": "0.79 m",
    "weight": "34.5 kg",
    "candy": "Staryu Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.95,
    "avg_spawns": 195,
    "spawn_time": "22:59",
    "multipliers": [
      2.38,
      2.41
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "121",
      "name": "Starmie"
    }]
  }, {
    "id": 121,
    "num": "121",
    "name": "Starmie",
    "img": "http://www.serebii.net/pokemongo/pokemon/121.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "height": "1.09 m",
    "weight": "80.0 kg",
    "candy": "Staryu Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "06:57",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "120",
      "name": "Staryu"
    }]
  }, {
    "id": 122,
    "num": "122",
    "name": "Mr. Mime",
    "img": "http://www.serebii.net/pokemongo/pokemon/122.png",
    "type": [
      "Psychic"
    ],
    "height": "1.30 m",
    "weight": "54.5 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "01:51",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ]
  }, {
    "id": 123,
    "num": "123",
    "name": "Scyther",
    "img": "http://www.serebii.net/pokemongo/pokemon/123.png",
    "type": [
      "Bug",
      "Flying"
    ],
    "height": "1.50 m",
    "weight": "56.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.14,
    "avg_spawns": 14,
    "spawn_time": "05:43",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ]
  }, {
    "id": 124,
    "num": "124",
    "name": "Jynx",
    "img": "http://www.serebii.net/pokemongo/pokemon/124.png",
    "type": [
      "Ice",
      "Psychic"
    ],
    "height": "1.40 m",
    "weight": "40.6 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.35,
    "avg_spawns": 35,
    "spawn_time": "05:41",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Steel"
    ]
  }, {
    "id": 125,
    "num": "125",
    "name": "Electabuzz",
    "img": "http://www.serebii.net/pokemongo/pokemon/125.png",
    "type": [
      "Electric"
    ],
    "height": "1.09 m",
    "weight": "30.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.074,
    "avg_spawns": 7.4,
    "spawn_time": "04:28",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ]
  }, {
    "id": 126,
    "num": "126",
    "name": "Magmar",
    "img": "http://www.serebii.net/pokemongo/pokemon/126.png",
    "type": [
      "Fire"
    ],
    "height": "1.30 m",
    "weight": "44.5 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "20:36",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ]
  }, {
    "id": 127,
    "num": "127",
    "name": "Pinsir",
    "img": "http://www.serebii.net/pokemongo/pokemon/127.png",
    "type": [
      "Bug"
    ],
    "height": "1.50 m",
    "weight": "55.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.99,
    "avg_spawns": 99,
    "spawn_time": "03:25",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ]
  }, {
    "id": 128,
    "num": "128",
    "name": "Tauros",
    "img": "http://www.serebii.net/pokemongo/pokemon/128.png",
    "type": [
      "Normal"
    ],
    "height": "1.40 m",
    "weight": "88.4 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.12,
    "avg_spawns": 12,
    "spawn_time": "00:37",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 129,
    "num": "129",
    "name": "Magikarp",
    "img": "http://www.serebii.net/pokemongo/pokemon/129.png",
    "type": [
      "Water"
    ],
    "height": "0.89 m",
    "weight": "10.0 kg",
    "candy": "Magikarp Candy",
    "candy_count": 400,
    "egg": "2 km",
    "spawn_chance": 4.78,
    "avg_spawns": 478,
    "spawn_time": "14:26",
    "multipliers": [
      10.1,
      11.8
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "130",
      "name": "Gyarados"
    }]
  }, {
    "id": 130,
    "num": "130",
    "name": "Gyarados",
    "img": "http://www.serebii.net/pokemongo/pokemon/130.png",
    "destacado": true,
    "type": [
      "Water",
      "Flying"
    ],
    "height": "6.50 m",
    "weight": "235.0 kg",
    "candy": "Magikarp Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0032,
    "avg_spawns": 0.32,
    "spawn_time": "02:15",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "129",
      "name": "Magikarp"
    }]
  }, {
    "id": 131,
    "num": "131",
    "name": "Lapras",
    "img": "http://www.serebii.net/pokemongo/pokemon/131.png",
    "type": [
      "Water",
      "Ice"
    ],
    "height": "2.49 m",
    "weight": "220.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.006,
    "avg_spawns": 0.6,
    "spawn_time": "08:59",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ]
  }, {
    "id": 132,
    "num": "132",
    "name": "Ditto",
    "img": "http://www.serebii.net/pokemongo/pokemon/132.png",
    "type": [
      "Normal"
    ],
    "height": "0.30 m",
    "weight": "4.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 133,
    "num": "133",
    "name": "Eevee",
    "img": "http://www.serebii.net/pokemongo/pokemon/133.png",
    "type": [
      "Normal"
    ],
    "height": "0.30 m",
    "weight": "6.5 kg",
    "candy": "Eevee Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 2.75,
    "avg_spawns": 275,
    "spawn_time": "05:32",
    "multipliers": [
      2.02,
      2.64
    ],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "134",
      "name": "Vaporeon"
    }, {
      "num": "135",
      "name": "Jolteon"
    }, {
      "num": "136",
      "name": "Flareon"
    }]
  }, {
    "id": 134,
    "num": "134",
    "name": "Vaporeon",
    "img": "http://www.serebii.net/pokemongo/pokemon/134.png",
    "type": [
      "Water"
    ],
    "height": "0.99 m",
    "weight": "29.0 kg",
    "candy": "Eevee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "10:54",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "133",
      "name": "Eevee"
    }]
  }, {
    "id": 135,
    "num": "135",
    "name": "Jolteon",
    "img": "http://www.serebii.net/pokemongo/pokemon/135.png",
    "type": [
      "Electric"
    ],
    "height": "0.79 m",
    "weight": "24.5 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "02:30",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "prev_evolution": [{
      "num": "133",
      "name": "Eevee"
    }]
  }, {
    "id": 136,
    "num": "136",
    "name": "Flareon",
    "img": "http://www.serebii.net/pokemongo/pokemon/136.png",
    "type": [
      "Fire"
    ],
    "height": "0.89 m",
    "weight": "25.0 kg",
    "candy": "Eevee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "07:02",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "133",
      "name": "Eevee"
    }]
  }, {
    "id": 137,
    "num": "137",
    "name": "Porygon",
    "img": "http://www.serebii.net/pokemongo/pokemon/137.png",
    "type": [
      "Normal"
    ],
    "height": "0.79 m",
    "weight": "36.5 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "02:49",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 138,
    "num": "138",
    "name": "Omanyte",
    "img": "http://www.serebii.net/pokemongo/pokemon/138.png",
    "type": [
      "Rock",
      "Water"
    ],
    "height": "0.41 m",
    "weight": "7.5 kg",
    "candy": "Omanyte Candy",
    "candy_count": 50,
    "egg": "10 km",
    "spawn_chance": 0.14,
    "avg_spawns": 14,
    "spawn_time": "10:23",
    "multipliers": [2.12],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "next_evolution": [{
      "num": "139",
      "name": "Omastar"
    }]
  }, {
    "id": 139,
    "num": "139",
    "name": "Omastar",
    "img": "http://www.serebii.net/pokemongo/pokemon/139.png",
    "type": [
      "Rock",
      "Water"
    ],
    "height": "0.99 m",
    "weight": "35.0 kg",
    "candy": "None",
    "egg": "Omanyte Candy",
    "spawn_chance": 0.0061,
    "avg_spawns": 0.61,
    "spawn_time": "05:04",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "prev_evolution": [{
      "num": "138",
      "name": "Omanyte"
    }]
  }, {
    "id": 140,
    "num": "140",
    "name": "Kabuto",
    "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
    "text": `Kabuto es un Pokémon fósil de tipo roca/agua introducido en la primera generación que se considera 
    extinto. Es la contraparte de Omanyte. Posee un caparazón en forma de domo (es resucitado a partir del fósil 
    domo) con el que se defendía de sus depredadores, pero si se le derribaba de costado era presa fácil, es 
    parecido a los trilobites (artrópodos extintos en el Pérmico). También se parece a los cangrejos herradura 
    o cangrejos cacerola (artrópodos quelicerados, que hoy en día se consideran fósiles vivientes, pues se conocen 
    desde el Cámbrico hasta la actualidad), o a los triops. Se relaciona a Kabuto con estos tres por la forma del 
    fósil (obsérvese su forma en el subsuelo). En tierra era sumamente lento, pero algo veloz en el agua, cazaba 
    peces con sus garras afiladas parecidas a una hoz. En el EP091, toda una isla estaba sujeta por una gran 
    cantidad de Kabuto dormidos, pero al despertar la isla se hundió. Según la Pokédex, sobrevive a kilómetros 
    de profundidad. Se dice que su caparazón posee una sustancia que otorga la vida eternal.`,
    "type": [
      "Rock",
      "Water"
    ],
    "height": "0.51 m",
    "weight": "11.5 kg",
    "candy": "Kabuto Candy",
    "candy_count": 50,
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "00:05",
    "multipliers": [
      1.97,
      2.37
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "next_evolution": [{
      "num": "141",
      "name": "Kabutops"
    }]
  }, {
    "id": 141,
    "num": "141",
    "name": "Kabutops",
    "img": "http://www.serebii.net/pokemongo/pokemon/141.png",
    "text":`
    Kabutops es un Pokémon fósil de tipo roca/agua introducido en la primera generación que se considera extinto. 
    Es la evolución de Kabuto y contraparte de Omastar. Kabutops esta basado en un Trilobites, una clase de artrópodos 
    prehistóricos que no poseen parientes vivos actuales. Se extinguieron hace 250 millones de años aproximadamente.
    Posee unas increíbles navajas muy afiladas como brazos con los que lanza poderosos ataques hacia sus enemigos. 
    En la primera generación se le consideraba extinto. Es un Pokémon con una agilidad física increíble que lo 
    convierte en un ente muy preciado para los entrenadores ya consolidados. Se dice que sus brazos junto con sus 
    navajas afiladas son huesos descubiertos, lo que quiere decir, que si pensamos en la prehistoria sus brazos no 
    estaban descubiertos. Se han encontrado fósiles de Kabutops gigantes, conocido entre los investigadores como 
    Kabutops maximus, que datan de hace 300 millones de años.`,
    "type": [
      "Rock",
      "Water"
    ],
    "height": "1.30 m",
    "weight": "40.5 kg",
    "candy": "Kabuto Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0032,
    "avg_spawns": 0.32,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "prev_evolution": [{
      "num": "140",
      "name": "Kabuto"
    }]
  }, {
    "id": 142,
    "num": "142",
    "name": "Aerodactyl",
    "img": "http://www.serebii.net/pokemongo/pokemon/142.png",
    "text": `Aerodactyl es un Pokémon de tipo roca/volador introducido en la primera generación. 
    Es un Pokémon fósil, a partir de la sexta generación puede megaevolucionar en Mega-Aerodactyl. 
    Aerodactyl era un Pokémon carnívoro, atacaba con sus agudos colmillos al cuello de su presa, 
    aunque de vez en cuando también comía bayas. Sus alas tenían potentes músculos para poder volar, 
    sin embargo, no era muy buen volador por lo que le resultaba difícil atrapar Pokémon al vuelo. 
    También posee un chirriante alarido.
    Vivía en estado salvaje en las selvas tropicales de hace millones de años. A pesar de que tenía 
    gran tamaño lo más probable es que esté basado en un Eudimorphodon, debido a la forma que tenía 
    la punta de su cola (que debía actuar de timón) y a la forma de su boca (está dentada y no tiene 
    forma de pico). Los dos cuernos se asemejaban a una especie de gran cuerno que poseen algunos pterosaurios.`, 
    "type": [
      "Rock",
      "Flying"
    ],
    "height": "1.80 m",
    "weight": "59.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.018,
    "avg_spawns": 1.8,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Ice",
      "Rock",
      "Steel"
    ]
  }, {
    "id": 143,
    "num": "143",
    "name": "Snorlax",
    "img": "http://www.serebii.net/pokemongo/pokemon/143.png",
    "text": `Snorlax come muchísimos kilos de comida al día. Lo único que hará será echarse
    a dormir hasta que vuelva a despertarse por el hambre. Cuando este Pokémon duerme, si 
    por alguna razón lo despiertas, se enfadará mucho y te atacará ferozmente, aunque después 
    de perseguirte se volverá a dormir. Snorlax se encuentra a menudo en las montañas y los bosques. 
    Sin embargo, a veces deambula en las calles de las ciudades: incluso llega a dormir en ellas, 
    cortando el tráfico violentamente.
    Los Snorlax se comen todo lo que es comestible. No son realmente muy exigentes. Al encontrar algo 
    nuevo en su territorio, un Snorlax lo pondrá en su boca para ver si es algo que se puede comer.`,
    "destacado": true,
    "type": [
      "Normal"
    ],
    "height": "2.11 m",
    "weight": "460.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.016,
    "avg_spawns": 1.6,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ]
  }, {
    "id": 144,
    "num": "144",
    "name": "Articuno",
    "img": "http://www.serebii.net/pokemongo/pokemon/144.png",
    "texto": `Articuno es un Pokémon legendario del tipo hielo/volador introducido en la primera generación. 
    Es la primera de las tres aves legendarias, las otras son Zapdos y Moltres. En Pokémon Platino, Pokémon 
    X y Pokémon Y es un Pokémon errante.
    Es normalmente visto en los glaciares. Habitualmente, los Articuno tienen un sentido del honor muy desarrollado 
    (lo mismo sucede con el resto de individuos pertenecientes al trío de Aves legendarias). Si se siente acorralado, 
    se encerrará en una gruesa capa de hielo para evitar ser capturado. Es un Pokémon solitario, pero de carácter 
    territorial; congelará todo el paisaje a su alrededor hasta que se sienta cómodo.
    Articuno habita en las Islas Espuma, también conocida como la isla de hielo. Raramente se le puede ver en otros 
    lugares debido a que, al ser legendario, se logra esconder muy bien; pero viaja por todo el mundo trayendo el invierno.`,
    "destacado": true,
    "type": [
      "Ice",
      "Flying"
    ],
    "height": "1.70 m",
    "weight": "55.4 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Rock",
      "Steel"
    ]
  }, {
    "id": 145,
    "num": "145",
    "name": "Zapdos",
    "img": "http://www.serebii.net/pokemongo/pokemon/145.png",
    "text": `Zapdos es un Pokémon legendario de tipo eléctrico/volador introducido en la primera generación. 
    Es la segunda de las tres aves legendarias de Kanto junto a Moltres y Articuno. En Pokémon Platino, 
    Pokémon X y Pokémon Y es un Pokémon errante. Zapdos es una de las tres aves legendarias de Kanto. Se trata 
    de una enorme ave con un pico largo y puntiagudo con un plumaje amarillo y erizado debido a los cúmulos de 
    electricidad que almacena en él.
    Zapdos es un Pokémon solitario. Le encanta surcar las tormentas eléctricas para recargar su cuerpo de electricidad 
    porque es uno de los Pokémon eléctricos con mayor capacidad de absorción de electricidad: puede almacenar en el 
    interior de su cuerpo y entre su plumaje enormes cargas eléctricas capaces de provocar desastres naturales si son 
    liberadas de forma violenta.
    Zapdos es el más irascible y orgulloso de los tres pájaros legendarios. Sólo permite a los entrenadores más avanzados
    el honor de combatir contra él. `,
    "destacado": true,
    "type": [
      "Electric",
      "Flying"
    ],
    "height": "1.60 m",
    "weight": "52.6 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock"
    ]
  }, {
    "id": 146,
    "num": "146",
    "name": "Moltres",
    "img": "http://www.serebii.net/pokemongo/pokemon/146.png",
    "text": `Moltres es un Pokémon legendario de tipo fuego/volador introducido en la primera generación. 
    Es la tercera de las tres aves legendarias de Kanto junto a Zapdos y Articuno. En Pokémon Platino, 
    Pokémon X y Pokémon Y es un Pokémon errante.
    Moltres es un enorme pájaro de color amarillento, con una cresta llameante en la cabeza y unas patas de 
    color marrón rojizo. Sus alas y su cola están envueltas en llamas (Se asemeja mucho a un Fénix).
    Es una de las 3 aves legendarias. Fue creado, al igual que Articuno y Zapdos, para mantener el balance 
    del clima por el calor que provoca, de ahí viene que Articuno y Moltres se tengan un odio especial.
    Su temperatura corporal supera los 4000 °C.`,
    "destacado": true,
    "type": [
      "Fire",
      "Flying"
    ],
    "height": "2.01 m",
    "weight": "60.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ]
  }, {
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
    "text":`Su nombre proviene de las palabras en inglés dragon (dragón) y tiny (pequeñito). 
    A pesar de esto, por lo que se podría pensar que es un dragón pequeño, Dratini puede alcanzar 
    hasta 1,8 de metros de longitud. Durante mucho tiempo se le consideró un Pokémon mítico. Vivían 
    en grandes colonias bajo el agua y no se tuvo constancia de ello hasta hace poco. Durante años 
    se dudó de su existencia, hasta que se encontró una colonia submarina. Habita en las profundidades 
    de mares o lagos. Curiosamente, una de estas colonias es una zona de agua en concreto de la Zona 
    Safari (Kanto). También hay otras colonias en el Monte corona y la zona donde hay más y era conocida 
    por pocas personas es la Guarida Dragón en Ciudad Endrino. Aparte de esa colonia se sabe que ahora 
    habitan bastantes en el océano. También es posible encontrarlos en las zonas de agua adyacentes a 
    la Torre Duodraco.`, 
    "type": [
      "Dragon"
    ],
    "height": "1.80 m",
    "weight": "3.3 kg",
    "candy": "Dratini Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 0.30,
    "avg_spawns": 30,
    "spawn_time": "06:41",
    "multipliers": [
      1.83,
      1.84
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "148",
      "name": "Dragonair"
    }, {
      "num": "149",
      "name": "Dragonite"
    }]
  }, {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
    "text":`Su nombre proviene de las palabras en inglés dragon (dragón) y debonair (elegante y desenvuelto). 
    También puede tratarse de un juego de palabras con air (aire, probablemente en referencia a su habilidad 
    para modificar el clima).
    Dragonair vive en mares y lagos. Su cuerpo desprende un aura que tranquiliza a los seres de su alrededor. 
    Almacena una cantidad enorme de energía dentro de su cuerpo. Se cree que puede alterar las condiciones 
    climáticas de sus alrededores (lo que se puede comprobar en el anime) descargando energía de sus cristales 
    de su cuello y su cola.
    Este Pokémon posee una belleza espectacular y es anhelado por entrenadores que, de igual forma, buscan 
    Pokémon para los concursos de belleza.` ,
    "type": [
      "Dragon"
    ],
    "height": "3.99 m",
    "weight": "16.5 kg",
    "candy": "Dratini Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "11:57",
    "multipliers": [2.05],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }],
    "next_evolution": [{
      "num": "149",
      "name": "Dragonite"
    }]
  }, {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
    "text":`Dragonite es un gran Pokémon dragón, con varias características marcadas. Puede volar, 
    escupir tanto fuego como agua o hielo, utilizar la electricidad, que genera mediante sus antenas 
    pero el cómo lo hacen, es desconocido, pero podría ser porque el material del que están hechas permite 
    reunir una enorme carga estática, además de eso posee una inteligencia cercana a la humana. Además, 
    igual que su preevolución, salvan a gente que se está ahogando y marineros perdidos en el mar.
    Dragonite es un Pokémon muy leal a cualquier entrenador que encuentren digno de ellos. Podría sacrificar 
    su vida sólo para salvar a su entrenador. Los Dragonite viven mucho más que una persona ya que son dragones, 
    pero siempre se acuerdan de sus entrenadores. Algunos Dragonite tienen más de 300 años.` ,
    "destacado": true,
    "type": [
      "Dragon",
      "Flying"
    ],
    "height": "2.21 m",
    "weight": "210.0 kg",
    "candy": "Dratini Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0011,
    "avg_spawns": 0.11,
    "spawn_time": "23:38",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }, {
      "num": "148",
      "name": "Dragonair"
    }]
  }, {
    "id": 150,
    "num": "150",
    "name": "Mewtwo",
    "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
    "text": `Mewtwo es un Pokémon legendario y artificial de tipo psíquico introducido en la primera generación. 
    Fue creado por el doctor Fuji a partir del ADN de Mew. A partir de la sexta generación puede megaevolucionar 
    en Mega-Mewtwo X o en Mega-Mewtwo Y, convirtiéndose, junto con Mega-Rayquaza, en el Pokémon con la suma de 
    estadísticas de combate más altas.
    Mewtwo es el resultado de las ambiciones de los seres humanos en la creación de una reproducción genéticamente 
    realzada (o más bien mejorada) de Mew.
    Es uno de los primeros Pokémon creados por la ciencia. Los científicos que lo crearon soñaron con crear al Pokémon 
    más fuerte del mundo, y según el Dr. Fuji lo lograron. Se considera único, debido al hecho de que solo uno fue genéticamente creado.
    Mewtwo es sumamente hábil con sus poderes psíquicos: puede volar mediante la levitación, comunicarse telepáticamente, reflejar ataques 
    como hiperrayo, bloquear las habilidades especiales de los demás Pokémon y tomar el mando de la mente de otra criatura viva mediante hipnosis. 
    Es capaz de conservar su energía permaneciendo totalmente inmóvil, liberándola en combate para potenciar así sus ataques.`,
    "destacados": true,
    "type": [
      "Psychic"
    ],
    "height": "2.01 m",
    "weight": "122.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ]
  }, {
    "id": 151,
    "num": "151",
    "name": "Mew",
    "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
    "text": `Mew es un Pokémon singular de tipo psíquico introducido en la primera generación.
    Es el ancestro de todos los Pokémon, ya que tiene todos los genes de los Pokémon existentes. 
    Además, es el único Pokémon capaz de aprender todas las máquinas técnicas (MT), máquinas ocultas
    (MO) y movimientos del tutor de movimientos.
    La forma de Mew es derivada del gato esfinge, ya que es de aspecto felino y color rosado. Además, 
    se dice que este Pokémon sí tiene pelo, solo que a tamaño microscópico, igual que el verdadero animal. 
    Mew tiene grandes poderes psíquicos y los usa para esconderse o se oculta transformándose en otro Pokémon.
    A pesar de su apariencia adorable, Mew es uno de los Pokémon más poderosos. También es uno de los más inteligentes. 
    Puede hacerse invisible cuando quiera; intenta no hacerse notar cuando se acerca a la gente. Se cree que contiene la 
    composición genética de todos los otros Pokémon y que puede realizar cualquier movimiento que puedan hacer estos. `,
    "destacado": true,
    "type": [
      "Psychic"
    ],
    "height": "0.41 m",
    "weight": "4.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ]
  }]



const tipos = [
  {
    "id": "bug",
    "nameOriginal": "bicho",
    "color": "#27741B"
  }, {
    "id": "dragon",
    "name": "dragon",
    "color": "#93750E"
  }, {
    "id": "fairy",
    "name": "hada",
    "color": "#E9C5C5"
  }, {
    "id": "fire",
    "name": "fuego",
    "color": "#FB7B1E"
  }, {
    "id": "ghost",
    "name": "fantasma",
    "color": "#3D0657"
  }, {
    "id": "ground",
    "name": "tierra",
    "color": "#866640"
  }, {
    "id": "normal",
    "name": "normal",
    "color": "#FFE898"
  }, {
    "id": "psychic",
    "name": "psíquico",
    "color": "#EF83EB"
  }, {
    "id": "steel",
    "name": "acero",
    "color": "#433313"
  }, {
    "id": "dark",
    "name": "siniestro",
    "color": "#373434"
  }, {
    "id": "electric",
    "name": "eléctrico",
    "color": "#E0E41E"
  }, {
    "id": "fight",
    "name": "lucha",
    "color": "#BC2121"
  }, {
    "id": "flying",
    "name": "volador",
    "color": "#819695"
  }, {
    "id": "grass",
    "name": "planta",
    "color": "#37A425"
  }, {
    "id": "ice",
    "name": "hielo",
    "color": "#52D9D9"
  }, {
    "id": "poison",
    "name": "veneno",
    "color": "#9B5BCE"
  }, {
    "id": "rock",
    "name": "roca",
    "color": "#433313"
  }, {
    "id": "water",
    "name": "agua",
    "color": "#2669CC"
  }
]
