import Televisor from "./Televisor.js";
import Nevera from "./Nevera.js";
import ElectrodomesticoOtro from "./ElectrodomesticoOtro.js";

var eGenConsumoBNacional = [];
var neveraConsumoANacional = [];
var tvConsumoCInternacional = [];
var tvConsumoBInternacional = [];
var tvConsumoAnacional = [];
var eGenConsumoAinternacional = [];
var neveraConsumoCinternacional = [];

const A = 450000;
const B = 350000;
const C = 250000;
const NACIONAL = 250000;
const INTERNACIONAL = 350000;

function pedirDatos(){
    
    //5
    for(let i = 1; i <= 5; i++){
        let TempEGenConsumoBNacional = new ElectrodomesticoOtro(B, NACIONAL);
        eGenConsumoBNacional.push(TempEGenConsumoBNacional);
    }

    //10
    for(let i = 1; i <= 1; i++){
        let capacidad = prompt("Nevera consumo A Nacional #" + i + " - Ingrese la capacidad de la nevera");
        let TempNeveraConsumoANacional = new Nevera(A, NACIONAL, +capacidad);
        neveraConsumoANacional.push(TempNeveraConsumoANacional);
    }

    //7
    for(let i = 1; i <= 1; i++){
        let tamano = prompt("Televisor consumo C Internacional #" + i + " - Ingrese el tamaño del televisor");
        let tieneSincronizadorTDT = prompt("Televisor consumo C Internacional  #" + i + " - Tiene sincronizador TDT? Ingrese 'si' o 'no'");
        var boolSincroTDT = false;
        if(tieneSincronizadorTDT === 'si'){
            boolSincroTDT = true;
        }else if(tieneSincronizadorTDT === 'no'){
            boolSincroTDT = false;
        }
        let TempTvConsumoCInternacional = new Televisor(C, INTERNACIONAL, +tamano, boolSincroTDT);
        tvConsumoCInternacional.push(TempTvConsumoCInternacional);
    }

    //13
    for(let i = 1; i <= 1; i++){
        let tamano = prompt("Televisor consumo B Internacional #" + i + " - Ingrese el tamaño del televisor");
        let tieneSincronizadorTDT = prompt("Televisor consumo B Internacional  #" + i + " - Tiene sincronizador TDT? Ingrese 'si' o 'no'");
        var boolSincroTDT = false;
        if(tieneSincronizadorTDT === 'si'){
            boolSincroTDT = true;
        }else if(tieneSincronizadorTDT === 'no'){
            boolSincroTDT = false;
        }
        let TempTvConsumoBInternacional = new Televisor(B, INTERNACIONAL, +tamano, boolSincroTDT);
        tvConsumoBInternacional.push(TempTvConsumoBInternacional);
    }

    //3
    for(let i = 1; i <= 1; i++){
        let tamano = prompt("Televisor consumo A Nacional #" + i + " - Ingrese el tamaño del televisor");
        let tieneSincronizadorTDT = prompt("Televisor consumo A Nacional  #" + i + " - Tiene sincronizador TDT? Ingrese 'si' o 'no'");
        var boolSincroTDT = false;
        if(tieneSincronizadorTDT === 'si'){
            boolSincroTDT = true;
        }else if(tieneSincronizadorTDT === 'no'){
            boolSincroTDT = false;
        }
        let TempTvConsumoAnacional = new Televisor(A, NACIONAL, +tamano, boolSincroTDT);
        tvConsumoAnacional.push(TempTvConsumoAnacional);
    }

    //8
    for(let i = 1; i <= 1; i++){
        let TempEGenConsumoAInternacional = new ElectrodomesticoOtro(A, INTERNACIONAL);
        eGenConsumoAinternacional.push(TempEGenConsumoAInternacional);
    }

    //12
    for(let i = 1; i <= 2; i++){
        let capacidad = prompt("Nevera consumo C Internacional #" + i + " - Ingrese la capacidad de la nevera");
        let TempNeveraConsumoCinternacional = new Nevera(C, INTERNACIONAL, +capacidad);
        neveraConsumoCinternacional.push(TempNeveraConsumoCinternacional);
    }

}

function calcularFacturas(){

    
    console.log("Factura del primer TV Consumo B Internacional: " + tvConsumoBInternacional[0].calcularPrecioFinal());

    
    for(let i = 0; i < 2; i++){
        console.log("Factura de la nevera de consumo C Internacional en la posición " + (+i+(1)) + neveraConsumoCinternacional[i].calcularPrecioFinal());
    }

    for(let i = 0; i < 5; i++){
        console.log("Factura del electrodomestico general de consumo B Nacional en la posición " + (+i+(1)) + eGenConsumoBNacional[i].calcularPrecioFinal());
    }
    
}

pedirDatos();
calcularFacturas();
console.log(eGenConsumoBNacional);
console.log(neveraConsumoANacional);
console.log(tvConsumoCInternacional);
console.log(tvConsumoBInternacional);
console.log(tvConsumoAnacional);
console.log(eGenConsumoAinternacional);
console.log(neveraConsumoCinternacional);
