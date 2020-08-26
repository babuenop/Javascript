  user = prompt("Piedra, Papel o Tijera");
  val = ["Piedra", "Papel", "Tijera"];
  cpu = val[Math.floor(Math.random() * val.length)];

alert("Jugador dice: " + user + " - " + "Cpu dice: " + cpu)

if (user!=cpu){
  if(user=="Piedra" && cpu=="Tijera"){
    console.log("Gano el usuario")
    } else if (user=="Papel" && cpu=="Piedra"){
    console.log("Gano el usuario")
    } else if (user=="Tijera" && cpu=="Papel"){
    console.log("Gano el usuario")
    } else {
    console.log("Gano CPU")
    }  
}else{
  console.log("Empate")
}

$(function() {
    $('.back').on('click', function() {
        flipCard(this.id); //Pass the img id to flipCard
    }); 
