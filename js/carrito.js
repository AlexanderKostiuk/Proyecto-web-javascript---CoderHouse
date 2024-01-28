let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)
/* console.log(productosEnCarrito) */

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar"); 
const botonVaciarCarrito = document.querySelector("#carrito-acciones-vaciar");
const botonComprarCarrito = document.querySelector("#carrito-acciones-comprar");
const precioTotal = document.querySelector("#precio-total");

function cargarProductosEnCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                    <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="carrito-producto-titulo">
                        <small>Nombre:</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>cantidad:</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio:</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal:</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.ID_producto}"><i class="bi bi-trash-fill"></i></button>
                </div>
                    </div>
            `
            contenedorCarritoProductos.append(div)
        });
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    };
    
    actualizarBotonesEliminar();
    actualizarPrecioTotal();
}

cargarProductosEnCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);  
    });
}

function eliminarDelCarrito(evento) {
    const idBoton = evento.currentTarget.ID_producto;   
    /* console.log(productoEliminado); */
    const index = productosEnCarrito.findIndex(producto => producto.ID_producto === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosEnCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    Toastify({
        text: "Producto eliminado del carrito",
        duration: 3000,
        offset: {
            y: 50
        },
        destination: "./carrito.html",
/*         newWindow: true, */
        close: true,
        duration: 1500,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left, rgb(50, 50, 100), rgb(0, 0, 0)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosEnCarrito()
}

function actualizarPrecioTotal() {
    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    precioTotal.innerHTML = `$${totalCalculado}`
}

botonComprarCarrito.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
    
    // SWEET ALERT
    Swal.fire({
        title: "Gracias por tu compra!",
        text: "PD: si manejás no tomes.",
        icon: "success",
        confirmButtonText: '<i class="fa-solid fa-thumbs-up"></i>',
        confirmButtonColor: '#080F0F'
      });
}
