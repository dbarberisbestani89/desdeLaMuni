for ( let i = 0 ; i < 4; i++ ){ 
    console.log ("¡Hola!");
}

/////ej playground:
function imprimirAzul4() {
    for (let i = 0; i < 4; i++) {
      console.log("Azul");
    }
  }

  ///otro eje:
  function pasandoPorI() {
    for (let i = 0; i <= 4; i++) {
      console.log("acá i tiene el valor de " + i);
    }
  }
////contador de impares:
function noParesDeContarImparesHasta(numero) {
    let contadorImpares = 0;
  
    for (let i = 0; i <= numero; i++) {
      if (i % 2 !== 0) {
        // Si el número es impar, incrementa el contador
        contadorImpares++;
      }
    }
  
    return contadorImpares;
  }
  
  // Ejemplo de uso
  let resultado = noParesDeContarImparesHasta(7);
  console.log(resultado); // Debería mostrar 4

 ////otro ejemplo:
 function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
    }
  }
  
  // Ejemplo de uso
  tablaDeMultiplicar(5);
  
  ///con while:
  function tablaDeMultiplicar(numero) {
    let i = 1;
  
    while (i <= 10) {
      let resultado = numero * i;
      console.log(numero + ' * ' + i + ' = ' + resultado);
      i++;
    }
  }
  
  // Ejemplo de uso
  tablaDeMultiplicar(5);