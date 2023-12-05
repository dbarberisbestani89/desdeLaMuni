// Importar el módulo peliculas.js
const peliculas = require('./peliculas'); // Asegúrate de proporcionar la ruta correcta

// Mostrar el detalle de cada película
console.log("Detalle de Películas Favoritas:");

peliculas.forEach(pelicula => {
  console.log(`
    Título: ${pelicula.title}
    ID: ${pelicula.id}
    Rating: ${pelicula.rating}
    Premios: ${pelicula.awards}
    Duración: ${pelicula.length} minutos
    Precio: $${pelicula.price}
    Género: ${pelicula.genre}
    -----------------------------------
  `);
});

const fs = require('fs'); // Importar el módulo de sistema de archivos de Node.js

// Ruta del archivo mensaje.txt
const rutaArchivo = 'mensaje.txt';

// Leer el contenido del archivo
fs.readFile(rutaArchivo, 'utf8', (err, contenido) => {
  if (err) {
    console.error(`Error al leer el archivo ${rutaArchivo}: ${err.message}`);
    return;
  }

  // Mostrar el contenido del archivo por consola
  console.log(`Contenido del archivo ${rutaArchivo}:\n\n${contenido}`);
});

