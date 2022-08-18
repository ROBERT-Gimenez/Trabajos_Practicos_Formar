const fs = require('fs')
let tareasjson=fs.readFileSync('./tareas.json')
let tareas = fs.readFileSync('./tareas.json','utf-8');//leemos el archivo json
let tareasParseadas = JSON.parse(tareas)

let FuncionesdeTareas={
    archivo:'./tareas.json',
    leerJson: function(){
        let tareasParseadas = JSON.parse(tareas)
        let tareasjson = fs.readFileSync(this.archivo,'utf-8');//leemos el archivo json
        return tareasParseadas

    }

}
module.exports = FuncionesdeTareas