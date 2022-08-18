const process = require('process')
const FuncionesDeTareas = require('./FuncionesdeTareas')
let comando = process.argv[2] && process.argv[2].toLowerCase();

switch (comando){
    case "listar" :
        let listaDeTareas = FuncionesDeTareas.leerJson()
        for (let i = 0; i < listaDeTareas.length; i++){
            console.log(`Tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`)
            console.log("-----------------------------------------------------")
        };
        break
    case undefined:
        console.log("atencion tienes que pasar una accion");
        break
    default:
        console.log("no entiendo que queres hacer")    

}
