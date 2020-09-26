/* */
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desig: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desig: 'Ana'
}
const values = Object.values(data)
console.log(values)
console.log(values.length)

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(7, '--:'))
console.log('food '.padEnd(12, '-----'))

/* Async Await */
const helloworld = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello World',3000))
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async()=>{
    const hello = await helloworld()
    console.log(hello)
}

helloAsync()

const anotherFunction = async()=>{
    try {
        const hello = await helloworld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}
anotherFunction()