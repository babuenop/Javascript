/* Metodos para recorrer un array */

var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo:2500 },
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

/*Metodo Filter*/
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados
/* La respuesta sera:
    (2) [{…}, {…}]
        0: {Nombre: "Libro", costo: 320}
        1: {Nombre: "Teclado", costo: 500}
        length: 2
        __proto__: Array(0)

*/

/* Metodo de Map */ 
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre 
})

nombreArticulo

/*  Al llamar la variable nos traera:
    Genera un nuevo array con los nombres de los articulos
    (7) ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]
*/

/* Metodo Find 
    Para buscar un articulo con la caracteristica que le voy a dar. 
*/
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

encuentraArticulo

/* Resultado 
    {nombre: "Laptop", costo: 20000}
    costo: 20000
    nombre: "Laptop"
    __proto__: Object

*/

/* Metodo for each 
    No genera un nuevo array     
*/ 
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

/* Resultado 
    Hace un recorrido por el array 
    Bici
    Tv
    Libro
    Celular
    Laptop
    Teclado
    Audifonos
*/


/* Metodo some();
    Se genera un nuevo array, donde se hace la validacion de lo que nosotros querramos. 
*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});

articulosBaratos

/* Resultado */
true
