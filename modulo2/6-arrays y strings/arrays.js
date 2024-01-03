//Arrays
let nombres = ["Nacho","Dario", "Javier"];
let edades = [34, 28, 48, 43];
let valoresDeVerdad = [true, false, false];
let variados = ["Nacho", 34, true, false, edades];

//un dato concreto dentro de un array:
console.log(valoresDeVerdad);
console.log(valoresDeVerdad[0]);

//arrays dentro de arrays:
console.log(variados[4][1]);

///ejercicios del playground:
let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]
let datos = ["hola","mundo!"];
let datos1 = ["hola","hola!"];
console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);
console.log(datos);
console.log(datos1);

////ejemplo de join:
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);
  
/////ejemplo con pop:
let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  let alumnoEgresado = estudiantes.pop();
  console.log(alumnoEgresado);

  ////ejemplo con push:
  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  let nuevoEstudiante1 = {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS'
  };
  let nuevoEstudiante2 = {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android'
  };
  estudiantes.push(nuevoEstudiante1);
  estudiantes.push(nuevoEstudiante2);
  console.log(estudiantes);

  /////ejemplo de shift:
  let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantes.shift();
console.log(alumnoDeBaja); 

//ejemplo de unshift:
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  let nuevoEstudiante1 = {
    nombre: 'Mariana',
    promedio: 9,
    curso: 'Full Stack'
  };
  let nuevoEstudiante2 = {
    nombre: 'Francisco',
    promedio: 2,
    curso: 'Android'
  };
  estudiantes.unshift(nuevoEstudiante1);
  estudiantes.unshift(nuevoEstudiante2);
  console.log(estudiantes);