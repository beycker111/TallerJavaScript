import Electrodomestico from "./Electrodomestico.js";

class Televisor extends Electrodomestico{
    constructor(consumo, procedencia, tamano, tieneSincronizadorTDT){
        super(consumo, procedencia);
        this.tamano = tamano;
        this.tieneSincronizadorTDT = tieneSincronizadorTDT;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;

        if(this.tamano > 40){
            precio = precio * 1.3;
        }
        if(this.tieneSincronizadorTDT){
            precio = precio + 250000;
        }

        return precio;
    }
}

export default Televisor;