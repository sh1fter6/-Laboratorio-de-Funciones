function crearTarjeta(nombre, cargo) {
    function formatear() {
        return nombre + " --- " + cargo
    }
    return formatear();
}

console.log(crearTarjeta("Sebastian", "programador"));
console.log(crearTarjeta("Isabel", "programadora"));

console.log(formatear("Martin", "Gestor de proyectos"));