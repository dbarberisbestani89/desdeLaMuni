function calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    // Definir tarifas por tipo de vehículo
    const tarifas = {
        Compacto: 14000,
        Mediano: 17000,
        Camioneta: 28000
    };

    // Calcular el costo base según el tipo de vehículo y días de alquiler
    const costoBase = tarifas[tipoVehiculo] * diasAlquiler;

    // Calcular el costo adicional si se requiere una silla para bebé
    const costoSillaBebe = sillaBebe ? 1200 * diasAlquiler : 0;

    // Calcular el monto total a pagar
    const montoTotal = costoBase + costoSillaBebe;

    return montoTotal;
}

// Ejemplo de uso
const tipoVehiculo = "Compacto";
const diasAlquiler = 5;
const sillaBebe = true;

const montoAPagar = calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe);
console.log(`Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${montoAPagar}`);
