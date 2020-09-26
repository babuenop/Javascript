let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))
console.log(array.flat(3))


let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2]))

/*Eliminar espacios al inicio del texto*/
let hello = '          hello world'
console.log(hello)
console.log(hello.trimStart())

/*Eliminar espacios al final del texto*/
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2]))

let hello = 'hello world                   '
console.log(hello)
console.log(hello.trimEnd())


/* Opcional para pasar el error de catch */

try {

}catch(error){
    error
}
/* Transformar array a objetos */
let entries = [["name","oscar"], ["age",32]]
console.log(Object.fromEntries(entries))

// Imrime { name: 'oscar', age: 32 }

/* Objeto de tipo simbolo */
let mySymbl = `My Symbol`
let symbol = Symbol(mySymbl)
console.log(symbol.description)

//Imprime => My Symbol que es lo que esta en mi segundo objeto
