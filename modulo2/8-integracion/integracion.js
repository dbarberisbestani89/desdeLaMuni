function sumatoriaBajoImporte(importes) {
    let suma = 0;
  
    for (let i = 0; i < importes.length; i++) {
      if (importes[i] > 0 && importes[i] <= 1000) {
        suma += importes[i];
      }
    }
  
    return suma;
  }
  
  // Ejemplo de uso
  let importesMensuales = [500, 1200, 800, 300, 1500];
  let resultado = sumatoriaBajoImporte(importesMensuales);
  console.log("La sumatoria bajo importe es: $" + resultado);

//entradas de cine:
function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
      return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible`;
    } else {
      let asientosDisponibles = asientos.length;
      return `Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosDisponibles} asientos disponibles`;
    }
  }
  
  // Ejemplos de uso
  console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
  console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
  
///  otro ejercicio de playground:
function reporteDePasajeros(cantidadDeEstaciones) {
  // Declaramos una variable para almacenar el número de pasajeros
  let cantidadPasajeros = 200;

  // Iteramos sobre las estaciones
  for (let i = 0; i < cantidadDeEstaciones; i++) {
    // Si la estación es la estación Florida
    if (i === 5) {
      // Bajan 80 personas
      cantidadPasajeros -= 80;
      // Suben 120 personas
      cantidadPasajeros += 120;
    } else {
      // Bajan 30 personas
      cantidadPasajeros -= 30;
      // Suben 50 personas
      cantidadPasajeros += 50;
    }

    // Imprimimos el reporte
    console.log("En la estación "+i+" hay "+cantidadPasajeros+" pasajeros arriba del tren");
  }

  // Devolvemos el reporte
  return console.log(cantidadPasajeros);
}
reporteDePasajeros(0); // Devuelve ['En la estación 0 hay 200 pasajeros arriba del tren']
reporteDePasajeros(3); // Devuelve ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren']
reporteDePasajeros(5); // Devuelve ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren', 'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']
