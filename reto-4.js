function clasificarNota(nota) {
    if (nota < 4.0) {
        return "Reprobado"
    }
    else if (nota < 7.0) {
        return "Aprobado"
    }
    else if (nota === NaN) {
        return "Por favor ingrese un número"
    }

}

console.log(clasificarNota(5.5));
console.log(clasificarNota(3.9));
console.log(clasificarNota(4.0));