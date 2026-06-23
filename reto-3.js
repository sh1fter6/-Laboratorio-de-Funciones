
function calcularEnvio(distancia, costoPorKm = 500) {
    let Envio = distancia * costoPorKm
    console.log("El envio cuesta: " + Envio)
}

calcularEnvio(10);
calcularEnvio(10, 800);