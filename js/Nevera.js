import Electrodomestico from "./Electrodomestico.js";

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;
        
        if(this.capacidad > 120){
            let diferenciaAumento = this.capacidad - 120;
            let diesLitrosAdicionales = Math.round(diferenciaAumento / 10);
            let porcentajeAumento = 0.05 * diesLitrosAdicionales;

            precio = precio * (1 + porcentajeAumento);

        }

        return precio;
    }
}

export default Nevera;