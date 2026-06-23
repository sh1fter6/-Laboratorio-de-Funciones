function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

function mensajeAcceso(edad) {
    if (!esMayorDeEdad(edad)) {
        return "Acceso denegado"
    }
    else {
        return "Acceso permitido"
    }
}
console.log(mensajeAcceso(20));
console.log(mensajeAcceso(15));
