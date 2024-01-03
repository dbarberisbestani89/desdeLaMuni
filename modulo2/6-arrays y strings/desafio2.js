let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

//Función para colocar la película más vendida en mayúsculas y al principio del array:
function colocarPeliculaMasVendidaPrimero(pelicula, lista) {
    // Encontrar el índice de la película más vendida
    let indice = lista.indexOf(pelicula);

    // Colocar la película más vendida en mayúsculas y al principio del array
    if (indice !== -1) {
        lista.splice(indice, 1); // Eliminar la película de la posición original
        lista.unshift(pelicula.toUpperCase()); // Agregar la versión en mayúsculas al principio
    }

    return lista;
}

// Uso de la función
peliculas = colocarPeliculaMasVendidaPrimero('Thor: amor y trueno', peliculas);
console.log(peliculas);

// Estructura para películas próximas a estrenar
let proximasPeliculas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
// Excluir el primer elemento (videojuego) de la estructura
proximasPeliculas.shift();
console.log(proximasPeliculas);

//Función para unir ambas estructuras:
function unirEstructuras(estructura1, estructura2) {
    return estructura1.concat(estructura2);
}

// Uso de la función
let todasLasPeliculas = unirEstructuras(peliculas, proximasPeliculas);
console.log(todasLasPeliculas);
