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
