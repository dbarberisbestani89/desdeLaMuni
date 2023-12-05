let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursado es "+this.horario;
    }
}
//console.log(curso);
//console.log("la cantidad de alumnos de este curso es de  "+curso.cantidadDeAlumnos);
console.log(curso.notificaciones());

//funcion consturctora:

function Cursos(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Cursos(50, ["Javier", "Gerardo"], "de 19 a 20 hs.");
let cursoDeMarketing = new Cursos(33, ["Diego", "Matias"], "de 17 a 20 hs.");
console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);