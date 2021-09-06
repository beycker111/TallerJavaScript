class Electrodomestico{
    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    calcularPrecioFinal(){}
}

class Televisor extends Electrodomestico{
    constructor(consumo, procedencia, tamano, tieneSincronizadorTDT){
        super(consumo, procedencia);
        this.tamano = tamano;
        this.tieneSincronizadorTDT = tieneSincronizadorTDT;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;

        if(this.tamano > 40){
            precio = this.precio * 1.3;
        }
        if(this.tieneSincronizadorTDT){
            precio = this.precio + 250000;
        }

        return precio;
    }
}

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;

        
    }
}

class ElectrodomesticoOtro extends Electrodomestico{
    constructor(consumo, procedencia){
        super(consumo, procedencia);
    }
}

let televisor1 = new Televisor(12, "Nacional", 123, false);
console.log(televisor1.consumo + " " + televisor1.procedencia + " " + televisor1.tamano + " " + televisor1.tieneSincronizadorTDT);