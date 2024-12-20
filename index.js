// Recuperar el carrito del almacenamiento local al cargar la página
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos al carrito
const agregarAlcarrito = (nombre, precio) => {
    // Agregar el producto como un objeto al carrito
    carrito.push({ nombre, precio });

    // Actualizar el contador visual
    actualizarContador();

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Muestra alerta de confirmación
    alert(`Agregaste: ${nombre} al carrito`);
}

// Función para actualizar el contador del carrito
const actualizarContador = () => {
    // Cambiamos el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length;
}

// Inicializar el contador al cargar la página
actualizarContador();

// Guardar el contenido del carrito en el almacenamiento local antes de cerrar la página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
});