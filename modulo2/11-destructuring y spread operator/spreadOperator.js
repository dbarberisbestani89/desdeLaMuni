let peliculasAccion = ["End Game", "Iron Man 3", "Capitan America"];
let peliculasComedia = ["Mi pobre angelito", "¿Que paso ayer?"];

let peliculas = [...peliculasAccion,    ...peliculasComedia];

console.log(peliculas);

///////
let generoComedias = {
    nombreGenero : "Comedia",
    popularidad : 3
}

let miPobreAngelito = {
    nombre : "Mi pobre angelito",
    duracion : 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre : "¿Que paso ayer?",
    duracion : 110,
    ...generoComedias
}

console.log(miPobreAngelito);
console.log(quePasoAyer);

///////otro caso:
function peliculasVistas(...nombreDePeliculas){
    for( let i = 0; i < nombreDePeliculas.length; i++){
        console.log("La persona ya vio "+ nombreDePeliculas[i]);
    }
}

peliculasVistas("End game", "Iron Man 3", "Mi pobre angelito","¿Que paso aye?");
