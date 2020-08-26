/*  Array 
    The JavaScript Array class is a global object that is used 
    in the construction of arrays; which are high-level, list-like objects.
*/

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

/*  Console.lenght
    Para conocer la longitud del array usamos console.lengt 
*/

    console.log(frutas.lenght); 

/*  Metodos para mutar el array 
    con .push agregamos elementos al final del array 
*/

    var masfrutas =frutas.push("uvas");

/*  Para eliminar el ultimo elemento del array usamos namearray.pop
*/

    var ultimo = frutas.pop("uvas");

/*  Para agregar elementos al array al inicio de la lista usamos namearray.unshift("elemento");
*/
    var primero = frutas.unshift("Uvas");

/* Para eliminar el primer elemento del array usamos namearray.shift("Uvas"):
*/
    var borrarfruta = frutas.shift("Uvas");

/* Para borrar un elemento en especifico de un array usamos 
     con .indexof podemos buscar la posicion del elemento. 
*/
    var posicion = frutas.indexOf("Cereza"); 



/*  Reference:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
