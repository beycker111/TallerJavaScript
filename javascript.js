class Electrodomestico{
    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
    }
}

class Televisor extends Electrodomestico{
    constructor(consumo, procedencia, tamano, tieneSincronizadorTDT){
        super(consumo, procedencia);
        this.tamano = tamano;
        this.tieneSincronizadorTDT = tieneSincronizadorTDT;
    }
}

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }
}

class ElectrodomesticoOtro extends Electrodomestico{
    constructor(consumo, procedencia){
        super(consumo, procedencia);
    }
}

let televisor1 = new Televisor(12, "Nacional", 123, false);
console.log(televisor1.consumo + " " + televisor1.procedencia + " " + televisor1.tamano + " " + televisor1.tieneSincronizadorTDT);