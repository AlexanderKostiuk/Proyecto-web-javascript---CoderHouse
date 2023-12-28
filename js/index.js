const productos = [
    {
        titulo: "Jack daniels",
        imagen: "./assets/whiskies/jack_daniels.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "jack-daniels",
        },
        precio: "1000"
    },

    {
        titulo: "Old Parr 12 años",
        imagen: "./assets/whiskies/old_parr_12_años.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "old-parr",
        },
        precio: "1000"
    },

    {
        titulo: "Johnnie walker 18 años 750 ml",
        imagen: "./assets/whiskies/johnnie_walker/johnnie_walker_18_años.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "johnnie-walker",
        },
        precio: "130000"
    },

    {
        titulo: "Johnnie Walker Red Label 1L",
        imagen: "./assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "johnnie-walker",
        },
        precio: "1000"
    },

    {
        titulo: "Johnnie Walker Double Black 750 ml",
        imagen: "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "johnnie-walker",
        },
        precio: "1000"
    },

    {
        titulo: "Johnnie walker black label 750 ml",
        imagen: "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "johnnie-walker",
        },
        precio: "1000"
    },

    {
        titulo: "Johnnie walker swing 750 ml",
        imagen: "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg",
        categoria: {
            nombre: "whiskies",
            marca: "johnnie-walker",
        },
        precio: "1000"
    },
    /*----------------------------------CERVEZAS------------------------------------*/
    {
        titulo: "Amstel Lager lata 473 ml",
        imagen: "./assets/cervezas/amstel_lager_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "amstel",
        },
        precio: "1000"
    },
    {
        titulo: "Amstel Lager lata 710 ml",
        imagen: "./assets/cervezas/amstel_lager_lata_710ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "amstel",
        },
        precio: "1000"
    },
    {
        titulo: "Blue Moon Belgian White Lata 473 ml",
        imagen: "./assets/cervezas/blue_moon_belgian_white_lata_473ml.jpg",
        categoria: {
            nombre: "cervezass",
            marca: "blue-moon",
        },
        precio: "1000"
    },
    {
        titulo: "heineken lata 473 ml",
        imagen: "./assets/cervezas/heineken_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "heineken",
        },
        precio: "1000"
    },
    {
        titulo: "heineken 710 ml",
        imagen: "./assets/cervezas/heineken_lata_710ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "heineken",
        },
        precio: "1000"
    },

    {
        titulo: "Iguana pilsen",
        imagen: "./assets/cervezas/iguana_pilsen_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "iguana",
        },
        precio: "1000"
    },
    {
        titulo: "imperial golden lata 473 ml ",
        imagen: "./assets/cervezas/imperial_golden_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "1000"
    },
    {
        titulo: "imperial golden lata 710 ml ",
        imagen: "./assets/cervezas/imperial_golden_lata_710ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "1000"
    },
    {
        titulo: "imperial ipa lata 473 ml",
        imagen: "./assets/cervezas/imperial_ipa_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "1000"
    },
    {
        titulo: "imperial lager lata 473 ml",
        imagen: "./assets/cervezas/imperial_lager_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "1000"
    },
    {
        titulo: "imperial lager lata 710 ml",
        imagen: "./assets/cervezas/imperial_lager_lata_710ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "1000"
    },
    {
        titulo: "imperial roja lata 473 ml",
        imagen: "./assets/cervezas/imperial_roja_lata_473ml.jpg",
        categoria: {
            nombre: "cervezas",
            marca: "imperial",
        },
        precio: "30000"
    },
];

const contenedor_productos = document.querySelector("#contenedor-productos");

function carga_productos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
            <h3 class="producto-titulo">${producto.titulo.toUpperCase()}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar id="${producto.marca}">Agregar al carrito <i class="bi bi-basket2"></i></button>
            `;
        contenedor_productos.append(div);
    })
}

carga_productos()