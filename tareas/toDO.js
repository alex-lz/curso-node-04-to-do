const fs = require('fs')

let listaPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json')
    } catch {
        listaPorHacer = []
    }
    
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(porHacer)

    guardarDB();

    return porHacer;
}

const getLista = (/*completado*/) => {
    cargarDB();
   // let nuevaLista = listaPorHacer.filter( t => t.completado == completado ) // return nuevaLista;
   return listaPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listaPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion
    })
    
    // Convierte string a boolean
    completado = String(completado) == "true";

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevaLista = listaPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listaPorHacer.length === nuevaLista.length){
        return false;
    } else {
        listaPorHacer = nuevaLista;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}