// Paso 1: Crear un array de operaciones bancarias
let operacionesBancarias = [2000, -500, 3000, -2000, 500, -5000, 10000];

// Paso 2: Crear la función para calcular saldos
function calcularSaldos(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;

  for (let i = 0; i < operaciones.length; i++) {
    if (operaciones[i] > 0) {
      saldoDepositos += operaciones[i];
    } else {
      saldoRetiros += Math.abs(operaciones[i]);
    }
  }

  let saldoActual = saldoDepositos - saldoRetiros;

  return { saldoDepositos, saldoRetiros, saldoActual };
}

// Paso 3: Crear la función para obtener la información del cliente
function obtenerInformacionCliente(nombre, apellido, operaciones) {
  let saldos = calcularSaldos(operaciones);

  console.log(`Estimada ${nombre} ${apellido}:`);
  console.log(`El monto total de los depósitos es de: $${saldos.saldoDepositos}.`);
  console.log(`El monto total de los retiros es de: $${saldos.saldoRetiros}.`);
  console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${saldos.saldoActual}.`);
}

// Paso 4: Ejecutar la función con valores específicos
obtenerInformacionCliente("Gloria", "Medina", operacionesBancarias);
