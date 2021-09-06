import Electrodomestico from "./Electrodomestico.js";

class ElectrodomesticoOtro extends Electrodomestico{
    constructor(consumo, procedencia){
        super(consumo, procedencia);
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;
        return precio;
    }
}

export default ElectrodomesticoOtro;