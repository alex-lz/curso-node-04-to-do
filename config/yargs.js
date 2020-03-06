const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completa la tarea o pendiente'
}

const argv = require('yargs')
.command('crear','Crea una tarea por hacer', {
    descripcion
})
.command('listar','Muestra una lista con todas las tareas', {
    completado
})
.command('actualizar','Actualiza el estado completo de una tarea', {
    descripcion,
    completado
})
.command('borrar','Elimina una tarea por hacer', {
    descripcion
})
.help()
.argv

// Nota "process" es un objeto de node contiene "process.argv" es donde estan los argumentos de la consola

module.exports = {
    argv
}