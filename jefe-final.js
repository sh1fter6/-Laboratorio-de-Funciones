function subtotal(precio, cantidad = 1) {
    return precio * cantidad;
}

function aplicarIva(monto) {
    return monto + (monto * 0.19);
}

function aplicarDescuento(monto, porcentaje = 0) {
    return monto - (monto * porcentaje / 100);
}

function generarBoleta(producto, precio, cantidad = 1, descuento = 0) {
    const sub = subtotal(precio, cantidad);
    const conIva = aplicarIva(sub);
    const total = aplicarDescuento(conIva, descuento);

    const totalFormateado = "$" + total.toLocaleString("es-CL");

    if (descuento > 0) {
        return `${producto} x${cantidad} (${descuento}% dcto) = ${totalFormateado}`;
    } else {
        return `${producto} x${cantidad} = ${totalFormateado}`;
    }
}

// Pruebas
console.log(generarBoleta("Café", 2500, 2));
console.log(generarBoleta("Té", 1800, 1, 10));