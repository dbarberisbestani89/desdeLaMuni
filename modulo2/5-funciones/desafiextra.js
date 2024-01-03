/// Función para convertir un string a mayúsculas utilizando .toUpperCase():

function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

// Ejemplo de uso:
const textoEnMinusculas = "hola, mundo";
const textoEnMayusculas = convertirAMayusculas(textoEnMinusculas);
console.log(textoEnMayusculas); // Esto mostrará "HOLA, MUNDO"

///Función para determinar el tipo de dato de un parámetro utilizando typeof:
function tipoDeDato(dato) {
    return typeof dato;
}

// Ejemplo de uso:
const ejemplo = 42;
const tipo = tipoDeDato(ejemplo);
console.log(`El tipo de dato es: ${tipo}`); // Esto mostrará "El tipo de dato es: number"

///Función para calcular la edad de los perros:
function calcularEdadPerros(aniosHumanos) {
    return aniosHumanos * 7;
}

// Ejemplo de uso:
const aniosHumanos = 5;
const aniosPerros = calcularEdadPerros(aniosHumanos);
console.log(`La edad en años de perros es: ${aniosPerros}`);

//Función para calcular el valor de una hora de trabajo:
function valorHoraTrabajo(salarioMensual, diasTrabajados, horasDiarias) {
    return salarioMensual / (diasTrabajados * horasDiarias);
}

// Ejemplo de uso:
const salarioMensual = 3000;
const diasTrabajados = 20;
const horasDiarias = 8;
const valorHora = valorHoraTrabajo(salarioMensual, diasTrabajados, horasDiarias);
console.log(`El valor de una hora de trabajo es: $${valorHora}`);