/*  Objects
   
    Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente 
    consta de algunas variables y funciones, que se denominan propiedades y métodos cuando 
    están dentro de objetos).

    Como llevamos un objeto del mundo fisico a un lenguaje de programacion. 
    Un objeto en el mundo real tiene diferentes propiedades y cosas especificas. 
    Si nosotros queremos replicar ciertas propiedades y cambiar ciertas cosas, solo replicamos 
    el objeto para modificar esas propiedades 
*/

/* 
    Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la 
    definición e iniciación de una variable. 

    Para crear un objeto se crea una nueva variable y las propiedades se encierran entre llaves*/

    var objeto ={

    }; 

/*  Crearemos un nuevo objeto */
    var miauto  ={
        marca:  "Toyota ", // Estas son propiedades
        modelo: "Corolla",
        annio:  2020,
        // Esto es un metodo del objeto
        detalledelauto: function(){
            console.log(`Auto ${this.modelo} ${this.annio}`) 
        }
    };

/*  Para llamar el objeto podemos acceder con el nombre del objeto */
    miauto

/*  Para poder acceder a los valores de un objeto usamos el nombre del objeto + . +la propiedad del objeto */
    miauto.marca
    miauto.annio

/*  Para acceder al metodo de un objeto usamos el nombredelobjeto.nombredelmetodo(); */
    miauto.detalledelauto();

/*  Este es otro objeto */
    var persona = {};

    var persona = {
        nombre: ['Bob', 'Smith'],
        edad: 32,
        genero: 'masculino',
        intereses: ['música', 'esquí'],

        // Creamos un metodo para llamar las propiedades del objeto
        bio: function () {
          alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
        },
        
        // Creamos un metodo para saludar 
        saludo: function() {
          alert('Hola, Soy '+ this.nombre[0] + '. ');
        }
      };

/*  Como crear una funcion contructora 
    Basicamente creamos un template para empezar a utilizar objetos */
    // funcion forma de hacer tareas o procesos
    
    function auto(marca, modelo, annio){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio; 
    }

    // Para empezar a contruir el objeto podemos hacer lo siguiente :
    var autonuevo = new auto("Tesla","Model",2020);

    var autonuevo2 = new auto("Nissan", "Kicks", 2020);
    var autonuevo3 = new auto("Nissan", "Casqai", 2020);
