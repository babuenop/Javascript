/* Ejemplo para ingresar diferentes propiedades de un objeto en un array */
    var carro ={
        marca:"",
        modelo:"",
        annio: function(){
            console.log(`auto ${this.marca} ${this.modelo}`)
        }
    };

    var cantidad = prompt("Cuantos modelos de autos quiere ingresar");
    var carros = [];


    function IngresarCarro() {
        while(cantidad>0){
            carro.marca = prompt("Ingrese la marca"),
            carro.modelo = prompt("Ingrese el modelo"),
            carro.annio = prompt("Ingrese el año")
            var carroIn = carros.push(carro); 
            cantidad = cantidad-1;   
        }
        console.log(carros);       
    }

IngresarCarro();
    
    