
        function mostrarnombre() {
            const nombre = documento.getelementid(nombre).value;
            const rrsultado = document.getelementid("resultado");

            if(nombre.trip() === "") {
                resultado.textcontent = "hola," + nombre +"";
            }
        }

       var lista = []
       function insertarlista(){
         // const nombre = document.getElementById("nombres").value;
         var  valoraleatorio = Math.floor(Math.random()*10);
         const resultado = document.getElementById("resultado");

         lista.push(valoraleatorio);
         resultado.textcontent = lista.toString();


       // crear nuevo boton
        const nuevoboton = document.createElement("button")
        nuevoboton.classList.add("boton-lista");
        nuevoboton.textcontent = valoraleatorio;
        
      //agregar al contenedor
      resultado.appendchild(nuevoboton);

      // forzar animacion css con pequeño retraso
      settimeout(() => {
        nuevoboton.classList.add("visible");
      }, 10)
      console.log(lista.toString())
    
    }
    
    
    //lista =¨[8,10,6,7,10,10,5,...]
    function eliminarlista(){
      // el valor del elemento (pedir el input al usuario)
      const input = document.getElementById8("input").value;
      //el elemento esta incluido en la lista?
      console.log("input del usuario:", input)
      while(lista.incluides(input)){
        //eliminar el elemento
        var pos = lista.indexOf(input)
        
      }

      alert(input)

      // eliminar el elemento y si hay repetidor igual eliminar
      //actualizar la lista

    }