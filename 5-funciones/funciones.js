// Funcion expresada:

let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}

console.log(sumar(7,9));

//Funcion declarada:

function restar (numeroC, numeroD){
    return numeroC - numeroD
}

console.log(restar(10, 3));

//Ejemplo de scope:

let mensaje = "Hola";

function saludar (){
    let mensaje = "Chau";
    return mensaje;
}

console.log(mensaje);
console.log(saludar());

// ejercicio del playground:
function triple(numero) {
    return 3 * numero;
 }
 triple (3);
 console.log(triple(3));
//otro:
function cuadruple(numero) {
    return 4* numero;
 }
 cuadruple (5);
 console.log(cuadruple(5));

 //otro mas:
 function multiplicar (nuemero1, numero2){
    return nuemero1 * numero2;
}
multiplicar (4, 2);
console.log(multiplicar(4, 2));

// otro mas:

function sePoneLaOlla(diaSemana){
    if (diaSemana === "Domingo") {
        return "¡Pongamos la olla, hoy se comen pastas!"; 
    }else{
        return "Mejor lo dejamos para el domingo";
    }
}

//otro con swtich:
let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia){
	case 'viernes':    	
	console.log('buen finde')
		break;
	case 'lunes':
	console.log('buena semana')
		break;
	default:
    	console.log('buen dia')
	}
}

///otro con switch
function tengoClases(dia) {
	switch (dia){
    	case "lunes":
		console.log("tenés clases");
		break;
		case "miércoles":
		console.log("tenés clases");
		break;
		case "viernes":
		console.log("tenés clases");
		break;
		default:
		console.log("no tenés clases")
	}
}
