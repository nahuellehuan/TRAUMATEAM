//Recuperar el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Función que musetra los productos en el carrito
const mostrarCarrito = ()=>{
    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";

    if(carrito.length===0){
        lista.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }
   

    carrito.forEach((item,indice)=>{
        const producto = document.createElement("article")
        producto.classList.add("producto")
        producto.innerHTML=`
        <h5>${item.nombre}</h5>
        <h8><p class="precio">$${item.precio}</p></h8>
        <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        <br></br>
        `;
        lista.appendChild(producto)
      });


}

//Elimina un producto del carrito
const eliminarDelCarrito=(indice)=>{
    carrito.splice(indice,1)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarCarrito();
}

//Simule la compra
const realizarCompra =()=>{
    alert("Compra realizada con éxito.")
    localStorage.removeItem("carrito")
    window.location.href=("index.html")
}

//Inicializar el carrito al cargar la pagina
mostrarCarrito()