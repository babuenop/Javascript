user = prompt("Piedra, Papel o Tijera");
val = ["Piedra", "Papel", "Tijera"];
cpu = val[Math.floor(Math.random() * val.length)];
resultado = 0

/* 
   En este ejemplo realizaremos el juego de Piedra, Papel y Tijera
   haciendo uso de Switch 
   Switch esta hecho para validar casos 
   En el parentesis usamos "true" para validar que cada caso sea igual 
*/

switch (true){
    case user=="Papel" && cpu=="Piedra": 
        resultado="Gana el usuario con Papel";
        break;
    case user=="Piedra" && cpu=="Tijera":
        resultado="Gana el usuario con Piedra";
        break
    case user=="Tijera" && cpu=="Papel":
        resultado="Gana el usuario con Tijera";
        break
    case user==cpu:
        resultado="Empate";
        break    
    //Default funciona como la parte negativa del IF
    default: 
        resultado="Gano cpu";
}
console.log("cpu dice: *" + cpu +"*, user dice: *"+ user + "* **El resultado es: " + resultado+" **");