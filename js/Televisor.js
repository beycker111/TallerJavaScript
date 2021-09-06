import Electrodomestico from "./Electrodomestico.js";

class Televisor extends Electrodomestico{
    constructor(consumo, procedencia, tamano, tieneSincronizadorTDT){
        super(consumo, procedencia);
        this.tamano = tamano;
        this.tieneSincronizadorTDT = tieneSincronizadorTDT;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;

        console.log(precio);
        if(this.tamano > 40){
            precio = precio * 1.3;
            console.log(precio);
        }
        if(this.tieneSincronizadorTDT){
            precio = precio + 250000;
            console.log(precio);
        }

        return precio;
    }
}

export default Televisor;