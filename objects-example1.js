/* Ejemplo para ingresar diferentes propiedades de un objeto en un array */
    var carro ={
        marca:"",
        modelo:"",
        annio: ""
        
    };

    var cantidad = prompt("Cuantos modelos de autos quiere ingresar");
    var carros = [];

    function IngresarCarro() {
            carro.marca = prompt("Ingrese la marca"),
            carro.modelo = prompt("Ingrese el modelo"),
            carro.annio = prompt("Ingrese el año")
            var carroIn = carros.push(carro); 
    }

    