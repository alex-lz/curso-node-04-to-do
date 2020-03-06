// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./tareas/toDO')
const colors = require('colors')


let comando = argv._[0]

switch( comando ) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion)
        console.log(tarea)
        break;

    case 'listar':
        let lista = toDo.getLista(/*argv.completado*/);
        for(let tarea of lista) {
            console.log('=====Tarea por hacer====='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ' + tarea.completado)
            console.log('========================='.green)
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break;
    
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion)
        console.log(borrado)
        break;

    default:
        console.log('comando desconocido')
}

// node app crear -d "Pasear al perro"
// node app crear -d "Alimentar a los peces"
// node app crear -d "Hacer ejercicio"
// node app listar
// node app actualizar -d "Pasear al perro" -c true
// node app borrar -d "Pasear al perro"