## Aplicación de consola(comandos) de un ToDo

Aplicacion para crear tares por hacer


Ejecuta este comando para instalar 
las dependecias de la aplicación

```
npm install
```

* Crear tareas por hacer

```
node app crear -d "Pasear al perro"
node app crear -d "Alimentar a los peces"
node app crear -d "Hacer ejercicio"
```

* Listar todas las tareas

```
node app listar
```

* Actualizar una tarea, especifica la descripcion
y el completado por defecto es "true"

```
node app actualizar -d "Pasear al perro" -c
node app actualizar -d "Pasear al perro" -c false
node app actualizar -descripcion "Pasear al perro" -completado true
```

* Borrar una tarea

```
node app borrar -d "Pasear al perro"
```