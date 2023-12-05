let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

// Filtrar estudiantes aprobados
let aprobados = estudiantes.filter(estudiante => estudiante.aprobado);

// Filtrar estudiantes desaprobados
let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado);

// Mostrar los resultados
console.log('Aprobados:', aprobados);
console.log('Desaprobados:', desaprobados);

////otro ejercicio:
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(adelantar){
    return adelantar - 1
});
console.log(horariosAtrasados);

//otro ejercicio:
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(estado, total){
    return estado + total;
});
console.log(totalVueltas);

//otro ejercicio:
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(item => {
    console.log(item);
});