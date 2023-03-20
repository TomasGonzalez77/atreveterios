const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
let saludo = prompt("Hola, ingresa tu nombre y apellido por favor");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}"
    <h3>${product.nombre}</h3>
    <p class="precio">$ ${product.precio}</p>
    `;

    contenidoTienda.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repetir = carrito.some((repetirProduct) => repetirProduct.id === product.id);

        if (repetir === true) {
            carrito.map((prod) => {
                if (prod.id === product.id)
                    prod.cantidad++;
            });
        } else {

            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,

            });
        }
        console.log(carrito);
        carritoCounter();
    });
});
