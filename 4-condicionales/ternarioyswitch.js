// if ternario:

let fruta = "Manzana";

let resultado = fruta == "Manzana"?"Buenisimo, me gustan las manzanas":"Ufa, queria manzana";
console.log(resultado);

//switch:

let semaforo = "otro color"

switch(semaforo){
    case "Verde":
        console.log("Puedo cruzar");
        break;
    case "Amarillo":
        console.log("Precaucion");
        break;
    case "Rojo":
        console.log("No cruzar");
        break;
    default:
        console.log("Fuera de Servicio");
        break;
}

//ejercicio playground:
let rodadoMountainBike = 18;
let rodadoAurora = 24;

let marcaRodadoMasGrande = rodadoMountainBike > rodadoAurora ? "Mountain Bike":"Aurora";

console.log("La bicicleta con  mayor rodado es la " + marcaRodadoMasGrande);

//ejercicio 2:
let dia = "viernes"

switch (dia) {
  case "viernes":
  console.log("buen finde");
  break;
  case "lunes":
  console.log("buena semana");
  break;
  default:
  console.log()
  }