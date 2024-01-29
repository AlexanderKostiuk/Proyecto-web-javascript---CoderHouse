class Producto {
    constructor(numero_producto, titulo, imagen, categoria, marca, precio) {
        this.numero_producto = numero_producto
        this.titulo = titulo;
        this.imagen = imagen;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}


// VINOS
const V_PROD1 = new Producto("01", "Alma mora blend blanco 750 ml", "./assets/vinos/alma_mora_blend_blanco_750ml.jpg", "vinos", "alma-mora", 2835)
const V_PROD2 = new Producto("02", "Alma mora malbec 750 ml", "./assets/vinos/alma_mora_malbec_750ml.jpg", "vinos", "alma-mora", 2835)
const V_PROD3 = new Producto("03", "Colon cabernet sauvignon 750 ml", "./assets/vinos/colon_cabernet_sauvignon_750ml.jpg", "vinos", "colon", 2835)
const V_PROD4 = new Producto("04", "Colon dulce fresco 750ml", "./assets/vinos/colon_dulce_fresco_750ml.jpg", "vinos", "colon", 3450)
const V_PROD5 = new Producto("05", "Colon malbec 750ml", "./assets/vinos/colon_malbec_750ml.jpg", "vinos", "colon", 3450)
const V_PROD6 = new Producto("06", "Colon rose 750ml", "./assets/vinos/colon_rose_750ml.jpg", "vinos", "colon", 3450)
const V_PROD7 = new Producto("07", "Colon torrontes 750ml", "./assets/vinos/colon_torrontes_750ml.jpg", "vinos", "colon", 3400)
// whiskies
const W_PROD1 = new Producto("08", "Jack daniels", "./assets/whiskies/jack_daniels.jpg", "whiskies", "jack-daniels", 34000)
const W_PROD2 = new Producto("09", "Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 22900)
const W_PROD3 = new Producto("010", "Johnnie walker 18 años 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_18_años.jpg", "whiskies", "johnnie-walker", 155000)
const W_PROD4 = new Producto("011", "Johnnie Walker Red Label 1L", "./assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 19670)
const W_PROD5 = new Producto("012", "Johnnie Walker Double Black 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg", "whiskies", "johnnie-walker", 32600)
const W_PROD6 = new Producto("013", "Johnnie walker black label 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg", "whiskies", "johnnie-walker", 28400)
const W_PROD7 = new Producto("014", "Johnnie walker swing 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg", "whiskies", "johnnie-walker", 62000)
//cervezas
const C_PROD1 = new Producto("015","Amstel Lager lata 473 ml", "./assets/cervezas/amstel_lager_lata_473ml.jpg", "cervezas", "amstel", 920)
const C_PROD2 = new Producto("016","Amstel Lager lata 710 ml", "./assets/cervezas/amstel_lager_lata_710ml.jpg", "cervezas", "amstel", 1400)
const C_PROD3 = new Producto("017","Blue moon lata 473 ml", "./assets/cervezas/blue_moon_belgian_white_lata_473ml.jpg", "cervezas", "blue moon", 1230)
const C_PROD4 = new Producto("018","Heineken lata 473 ml", "./assets/cervezas/heineken_lata_473ml.jpg","cervezas", "heineken", 1320)
const C_PROD5 = new Producto("019","Heineken lata 710 ml", "./assets/cervezas/heineken_lata_710ml.jpg", "cervezas", "heineken", 1930)
const C_PROD6 = new Producto("020","Iguana pilsen", "./assets/cervezas/iguana_pilsen_473ml.jpg", "cervezas", "iguana", 1000)
const C_PROD7 = new Producto("021","imperial golden lata 473 ml", "./assets/cervezas/imperial_golden_lata_473ml.jpg", "cervezas", "imperial", 1040)
const C_PROD8 = new Producto("022","imperial golden lata 710 ml", "./assets/cervezas/imperial_golden_lata_710ml.jpg", "cervezas", "imperial", 1500)
const C_PROD9 = new Producto("023","imperial ipa lata 473 ml", "./assets/cervezas/imperial_ipa_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD10 = new Producto("024","imperial lager lata 473 ml", "./assets/cervezas/imperial_lager_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD11 = new Producto("025","imperial lager lata 710 ml", "./assets/cervezas/imperial_lager_lata_710ml.jpg", "cervezas", "imperial", 1000)
const C_PROD12 = new Producto("026","imperial roja lata 473 ml", "./assets/cervezas/imperial_roja_lata_473ml.jpg", "cervezas", "imperial", 1000)
//aperitivos
const A_PROD1 = new Producto("027","cinzano rosso 1l", "./assets/aperitivos/cinzano_rosso_1l.jpg", "aperitivos", "cinzano", 3500)
const A_PROD2 = new Producto("028","cinzano rosso 450 ml", "./assets/aperitivos/cinzano_rosso_450ml.jpg", "aperitivos", "cinzano", 1670)
const A_PROD3 = new Producto("029","fernet branca 1 lt", "./assets/aperitivos/fernet_branca_1lt.jpg", "aperitivos", "fernet", 9000)
const A_PROD4 = new Producto("030","fernet branca 750 ml", "./assets/aperitivos/fernet_branca_750ml.jpg", "aperitivos", "fernet", 12000)
const A_PROD5 = new Producto("031","fernet buhero negro 700 ml", "./assets/aperitivos/fernet_buhero_negro_700ml.jpg", "aperitivos", "fernet", 7000)
const A_PROD6 = new Producto("032","hesperidina", "./assets/aperitivos/hesperidina_1lt.jpg", "aperitivos", "hesperidina", 7500)
const A_PROD7 = new Producto("033","martini bianco 1lt", "./assets/aperitivos/martini_bianco_1lt.jpg", "aperitivos", "martini", 3700)
const A_PROD8 = new Producto("034","martini extra dry 950 ml", "./assets/aperitivos/martini_extra_dry_950ml.jpg", "aperitivos", "martini", 5300)

const ArrayProductos = [V_PROD1, V_PROD2, V_PROD3, V_PROD4, V_PROD5, V_PROD6, V_PROD7,
                        W_PROD1, W_PROD2, W_PROD3, W_PROD4, W_PROD5, W_PROD6, W_PROD7,
                        C_PROD1, C_PROD2, C_PROD3, C_PROD4, C_PROD5, C_PROD6, C_PROD7,
                        C_PROD8, C_PROD9, C_PROD10, C_PROD11, C_PROD12,
                        A_PROD1, A_PROD2, A_PROD3, A_PROD4, A_PROD5, A_PROD6, A_PROD7,
                        A_PROD8,
                       ]

const contenedor_productos = document.querySelector("#contenedor-productos");
const botones_categorias = document.querySelectorAll(".boton-categoria");
const titulo_categoria = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

function carga_productos(productos_elegidos) {
    contenedor_productos.innerHTML = "";

    productos_elegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
        <h4 class="producto-titulo">${producto.titulo.toUpperCase()}</h4>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.numero_producto}">Agregar al carrito <i class="bi bi-basket2"></i></button>
        `;

        contenedor_productos.append(div);
    })

    actualizarBotonesAgregar();
/*     console.log(botonesAgregar); */
}

carga_productos(ArrayProductos)

botones_categorias.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        //saco el active de todos los botones y coloco el actual al hacer click
        botones_categorias.forEach(boton => boton.classList.remove("active"))
        evento.currentTarget.classList.add("active")
        
        // aca hago que el titulo principal sea el mismo de la categoria elegida
        titulo_categoria.innerText = evento.currentTarget.innerText
        
        // aca hago que la categoría "todos los productos" pueda mostar en pantalla los mismos
        if (evento.currentTarget.id != "todos") {
            //aca voy a hacer el filtro para que al hacer click me muestre en pantalla todos los productos de la categoria elegida
            const productosElegidos = ArrayProductos.filter(producto => producto.categoria === evento.currentTarget.id);
            carga_productos(productosElegidos);
        }
        else {
            carga_productos(ArrayProductos)
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);  
    }) 
}

/* aca traigo lo que hay en el local storage para que cuando se
ponga otro producto en carrito, quede guardado el anterior producto agregado anteriormente  */ 

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero()
} else {
    productosEnCarrito = []
}


function agregarAlCarrito(evento){
    const idBoton = evento.currentTarget.id;
/*     console.log(idBoton) */
    
    const productoAgregado = ArrayProductos.find(producto => producto.numero_producto === idBoton);
  /*   console.log("ACA AGREGUE EL PRODUCTO QUE ELEGI \n", productoAgregado) */

    if (productosEnCarrito.some(producto => producto.numero_producto === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.numero_producto === idBoton);
       
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();
/*     console.log(productosEnCarrito) */
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    Toastify({
        text: "Producto agregado al carrito",
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
}

function actualizarNumero () {
    console.log("productos en carrito LOCAL STORAGE\n", productosEnCarrito)
/*     console.log("PRoductos en carrito \n", productosEnCarrito) */
    
    let nuevoNumero = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numero.innerText = nuevoNumero
}