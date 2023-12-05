//Definir una array que contenga un cojunto de seis prod. electrodomesticos:
let electrodomesticos = ["licuadora","plancha", "tostadora", "batidora", "microondas", "pimer"];

//acceder de manera arbitraria:
let arbitaria = electrodomesticos [3];
console.log(arbitaria);

//extraer el primer elemento y agregarlo al final:
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log(electrodomesticos);

//agragar al final del array 2 nuevos productos:
let nuevosProductos = electrodomesticos.push("horno electrico", "cafetera");
console.log(electrodomesticos);

//mostrar cant. de elementos:
console.log(electrodomesticos.length);

//buscar y decir si existe:
let productoBuscado = "cafeter";
if(electrodomesticos.indexOf(productoBuscado) !== -1){
    console.log("Producto encontrado");
}else{
    console.log("El producot no existe");
}

//unificar:
let unificarElementos = electrodomesticos.join(" ");
console.log(unificarElementos);

//determinar la cantda de elementos:
console.log(unificarElementos.length);

//cambiar de nombre:
let cambioProducto = unificarElementos.replace("batidora", "Multiprocesadora");
console.log(cambioProducto);

//con esto armar un nuevo array:
let nuevoArray = cambioProducto.split(" ");
console.log(nuevoArray);
