const contenidoTienda = document.getElementById("contenidoTienda")
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
let saludo = prompt("Hola, ingresa tu nombre y apellido por favor")
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
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito);
    })
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal.header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carrito.className = "modal-content"
        carrito.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio}</p>
         `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc +el.precio, 0);

    const totalCompra =document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `total a pagar: $ ${total}`;
    modalContainer.append(totalCompra)
});