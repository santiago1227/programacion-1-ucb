
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

       } 

       // crear nuevo boton
        const nuevoboton = document.createElement("button")
        nuevoboton.classList.add("boton-lista");
        nuevoboton.textcontent = valoraleatorio;
        
      //agregar al contenedor
      resultado.appendchild