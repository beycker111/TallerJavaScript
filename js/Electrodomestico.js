class Electrodomestico {
    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    calcularPrecioFinal(){
        var precio = this.consumo + this.procedencia;
        return precio;
    }
}

export default Electrodomestico;