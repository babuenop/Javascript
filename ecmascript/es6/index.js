/* Con la inclusion de es6 podemos escribir de forma diferente las funciones */

function newFunction (name, age, country){
    var name = name || `Alberto`
    var age = age || 32
    var country = country || `MX`
    console.log(name, age, country)
}

// es6 
function newFunction2 (name=`Alberto`, age=32, country=`PA`){
    console.log(name, age, country)
}

newFunction2()
newFunction2(`Ricardo`, 32, `CO`)

let hola = `Hola`
let world = `Mundo`
let epic = hola + ` `+ world
console.log(epic)
let epic2 = `${hola} ${world}`
console.log(epic2)

/* Multilinea en los String*/

// Asi lo haciamos anteriormente 
let lorem = `Una frase epica que separabamos el un \n` + `segundo reglon una frase`

//con es6 
let lorem2= `Utilizando las comillas francesas podemos utilizar una frese
con un segundo saldo de linea con es6`

console.log(lorem)
console.log(lorem2)


/* DESESTRUCTURACION */

let person = {
    'name' : "Alberto",
    'age' : 32,
    'country' : "PA"
}
console.log(person.name, person.age)

let {name, age, country} = person

console.log(name, age, country)

/* OPERADOR DE PROPAGACION */
// Permite unir dos array y cada uno de sus elementos usando ...para agregar cada elemento
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Caro', 'Isis', 'Andrea']

let education = ['david', ...team1, ...team2]

console.log(education)


// Diferencias entre let y var 
{
    let globallet = 'prueba'
}
{
    var globalvar = 'prueba1'
}
//console.log(globallet) al ejecutar este codigo no me va a permitir llamar a let por que pertenece a otro scope
console.log(globalvar)

// CONST es una constante que no va a cambiar su valor en el tiempo
const a = 'b'
a = 'a' // --> TypeError: Assignment to constant variable.

/* ARRAYS */
let name ='Alberto'
let age ='37'

//es5
obj1 ={name:name, age:age}
console.log(obj1)

obj2 = {name,edad}
console.log(obj2)



