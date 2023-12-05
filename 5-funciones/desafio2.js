// Primera función - Callback
function calcularMontoHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    // Definir precios base por tipo de hamburguesa
    const preciosBase = {
        CarneAlaParrilla: 1800,
        Pollo: 1500,
        Vegetariana: 1200,
    };

    // Calcular el precio base de la hamburguesa
    const precioBase = preciosBase[tipoHamburguesa] || 0;

    // Calcular el costo de los adicionales seleccionados
    const costoAdicionales = (jamon ? 30 : 0) + (queso ? 25 : 0) + (salsaTomate ? 5 : 0) + (mayonesa ? 5 : 0) + (mostaza ? 5 : 0) + (tomate ? 15 : 0) + (lechuga ? 10 : 0) + (cebolla ? 10 : 0);

    // Calcular el monto total a pagar
    const montoTotal = precioBase + costoAdicionales;

    return montoTotal;
}

// Segunda función
function mensajeTotalPagar(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const monto = calcularMontoHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

    console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${monto}`);
}

// Ejemplo de uso
mensajeTotalPagar("Diego", "Barberis", "CarneAlaParrilla", true, true, false, true, false, true, false, false);
