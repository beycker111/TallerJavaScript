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
const IMPORTADO = 350000;

function calcularFacturas(){

    
    console.log("Factura del primer TV Consumo B Internacional: " + tvConsumoBInternacional[0].calcularPrecioFinal());

    
    for(let i = 0; i < 2; i++){
        console.log("Factura de la nevera de consumo C Internacional en la posición " + (+i+(1)) + ": " + neveraConsumoCinternacional[i].calcularPrecioFinal());
    }

    for(let i = 0; i < 5; i++){
        console.log("Factura del electrodomestico general de consumo B Nacional en la posición " + (+i+(1)) + ": " + eGenConsumoBNacional[i].calcularPrecioFinal());
    }
    
}

function verInventario(){

    console.log("Electrodomesticos generales consumo B Nacional:");
    console.log(eGenConsumoBNacional);
    console.log("Neveras generales consumo A Nacional:");
    console.log(neveraConsumoANacional);
    console.log("Televisores consumo C Internacional:");
    console.log(tvConsumoCInternacional);
    console.log("Televisores consumo B Internacional:");
    console.log(tvConsumoBInternacional);
    console.log("Televisores consumo A Nacional:");
    console.log(tvConsumoAnacional);
    console.log("Electrodomesticos generales consumo A Internacional:");
    console.log(eGenConsumoAinternacional);
    console.log("Neveras consumo C Internacional:");
    console.log(neveraConsumoCinternacional);
}

document.getElementById('Facturas').onsubmit = function() { 
    calcularFacturas();
    return false;
}

document.getElementById('VerInventario').onsubmit = function() { 
    verInventario();
    return false;
}

document.getElementById('ElectrodomesticoOtro').onsubmit = function() { 
    
    var consumo = document.getElementById('consumoEO').value;
    var procedencia = document.getElementById('procedenciaEO').value;
    var cantidad = document.getElementById('cantidadEO').value;

    if(consumo === 'A'){
        if(procedencia === "NACIONAL"){

        }else{
            for(let i = 0; i < +cantidad; i++){
                let TempEGenConsumoAInternacional = new ElectrodomesticoOtro(A, IMPORTADO);
                eGenConsumoAinternacional.push(TempEGenConsumoAInternacional);
            }
        }
    }else if(consumo === 'B'){
        if(procedencia === "NACIONAL"){
            for(let i = 0; i < +cantidad; i++){
                let TempEGenConsumoBNacional = new ElectrodomesticoOtro(B, NACIONAL);
                eGenConsumoBNacional.push(TempEGenConsumoBNacional);
            }
        }else{

        }
    }else if(consumo === 'C'){
        if(procedencia === "NACIONAL"){

        }else{

        }
    }

    console.log(eGenConsumoAinternacional);
    console.log(eGenConsumoBNacional);
    return false;
};

document.getElementById('Televisor').onsubmit = function() { 
    
    var consumo = document.getElementById('consumoTV').value;
    var procedencia = document.getElementById('procedenciaTV').value;
    var tamano = document.getElementById('tamanoTV').value;
    var sincronizadorTV = document.getElementById('sincronizadorTV').value;
    var cantidad = document.getElementById('cantidadTV').value;

    if(consumo === 'A'){
        if(procedencia === "NACIONAL"){
            for(let i = 0; i < +cantidad; i++){
                let boolSincroTDT = false;
                if(sincronizadorTV === 'true'){
                    boolSincroTDT = true;
                }else if(tieneSincronizadorTDT === 'false'){
                    boolSincroTDT = false;
                }
                let TempTvConsumoAnacional = new Televisor(A, NACIONAL, +tamano, boolSincroTDT);
                tvConsumoAnacional.push(TempTvConsumoAnacional);
            }
        }else{
            
        }
    }else if(consumo === 'B'){
        if(procedencia === "NACIONAL"){
            
        }else{
            for(let i = 0; i < +cantidad; i++){
                let boolSincroTDT = false;
                if(sincronizadorTV === 'true'){
                    boolSincroTDT = true;
                }else if(sincronizadorTV === 'false'){
                    boolSincroTDT = false;
                }
                let TempTvConsumoBInternacional = new Televisor(B, IMPORTADO, +tamano, boolSincroTDT);
                tvConsumoBInternacional.push(TempTvConsumoBInternacional);
            }
        }
    }else if(consumo === 'C'){
        if(procedencia === "NACIONAL"){

        }else{
            for(let i = 0; i < +cantidad; i++){
                let boolSincroTDT = false;
                if(sincronizadorTV === 'true'){
                    boolSincroTDT = true;
                }else if(sincronizadorTV === 'false'){
                    boolSincroTDT = false;
                }
                let TempTvConsumoCInternacional = new Televisor(C, IMPORTADO, +tamano, boolSincroTDT);
                tvConsumoCInternacional.push(TempTvConsumoCInternacional);
            }
        }
    }

    console.log(tvConsumoAnacional);
    console.log(tvConsumoBInternacional);
    console.log(tvConsumoCInternacional);
    return false;
};

document.getElementById('Nevera').onsubmit = function() { 
    
    var consumo = document.getElementById('consumoNEV').value;
    var procedencia = document.getElementById('procedenciaNEV').value;
    var capacidad = document.getElementById('capacidadNEV').value;
    var cantidad = document.getElementById('cantidadNEV').value;

    if(consumo === 'A'){
        if(procedencia === "NACIONAL"){
            for(let i = 0; i < +cantidad; i++){
                let TempNeveraConsumoANacional = new Nevera(A, NACIONAL, +capacidad);
                neveraConsumoANacional.push(TempNeveraConsumoANacional);
            }
        }else{
            
        }
    }else if(consumo === 'B'){
        if(procedencia === "NACIONAL"){
            
        }else{

        }
    }else if(consumo === 'C'){
        if(procedencia === "NACIONAL"){

        }else{
            for(let i = 0; i < +cantidad; i++){
                let TempNeveraConsumoCinternacional = new Nevera(C, IMPORTADO, +capacidad);
                neveraConsumoCinternacional.push(TempNeveraConsumoCinternacional);
            }
        }
    }

    console.log(neveraConsumoANacional);
    console.log(neveraConsumoCinternacional);
    return false;
};

//pedirDatos();
//calcularFacturas();
//console.log(eGenConsumoBNacional);
//console.log(neveraConsumoANacional);
//console.log(tvConsumoCInternacional);
//console.log(tvConsumoBInternacional);
//console.log(tvConsumoAnacional);
//console.log(eGenConsumoAinternacional);
//console.log(neveraConsumoCinternacional);
