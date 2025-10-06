class santiago{

    //atributos de la clase
    nombre = "";
    edad = "";
    genero = "";
    tipoBoleto = "";

    //constructor
    constructor(paramNombre, paramEdad,paramGenero, paramTipoBoleto){
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.genero = paramGenero;
        this.tipoBoleto = paramTipoBoleto;

    }

    //setter
    setNombre(paramNombre){this.nombre = paramNombre;}
    setEdad(paramEdad){this.edad = paramEdad;}
    setGenero(paramGenero){this.genero = paramGenero;}
    setTipoBoleto(paramTipoBoleto){ this.tipoBoleto = paramTipoBoleto;}

    //getter
    getNombre(){return this.nombre;}
    getedad(){return this.edad;}
    getGenero(){return this.edad;}
    getTipoBoleto(){return this.TipoBoleto;}

    //mostrar los valores de los atributos
    ToString(){
        return "pasajeros" +
             "nombre" + this.getNombre() +
             "Edad" + this.getedad() +
             "Genero" + this.getGenero() +
             "Tipo de Boleto" + this.getTipoBoleto() +
    }
    


}