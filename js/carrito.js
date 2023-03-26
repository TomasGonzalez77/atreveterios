//El grueso del funcionamiento de la pagina se puede encontrar aca, se incluyen compentarios aparte ya que es extenso, incluye toda la funcionalidad del carrito
const pintarCarrito = () => {
    //Todo lo que incluye el Header del carrito una vez hagas click en el simbolo 🛒
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "✖";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);
    //Todo lo que aparece en el "body" del producto, incluye los productos seleccionados con su precio y las funcionalidades para sumar, restar o eliminar el producto.
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}"
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio}</p>
        <span class="restar">➖</span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar">➕</span>
        <p>Total ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent)

        //Funcion para restar productos mediante el elemento "Restar ➖"
        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1)
                product.cantidad--;
            pintarCarrito();
            guardadoLocal();
        });
        //Funcion para sumar productos mediante el elemento "Sumar ➕"
        let sumar = (carritoContent.querySelector(".sumar"))
        sumar.addEventListener("click", () => {
            product.cantidad++;
            pintarCarrito();
            guardadoLocal();
        })

        //Prueba mediante console.log
        console.log(carrito.length);

        //Funcion para eliminar productos mediante el elemento "Eliminar 🗑"
        let eliminar = document.createElement("span");
        eliminar.innerText = "🗑";
        eliminar.className = "eliminar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });


    //Funcion para mostrar el total de la compra
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    //Funcion para incorporar el total de la compra mediante texto y se incorpora el boton para abonar la misma.
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `<stripe-buy-button buy-button-id="buy_btn_1MpNvOIYLiw5sRv3okQfnPE2" 
    publishable-key="pk_test_51MpMXHIYLiw5sRv3Q3Zfi3ENkl3Uqx9p3NWQ1bvucqEUBpgUscuX1A0dCsUfERBsagycPcLLVMxH6uFLvdN23IUx00jOF07czs"> 
    <a href="https://buy.stripe.com/test_cN29DN7zI77t1R6144">Abonar compra</a></stripe-buy-button>
    <p class "pagar">Total a pagar: $ ${total}</p> `;

    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito)

//Funcion para eliminar productos del carrito mediante el boton "borrar 🗑"
const eliminarProducto = () => {
    const foundID = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundID;
    })

    carritoCounter();
    guardadoLocal();
    pintarCarrito();
};

//Funcion para que se pueda ver la cantidad de productos en el carrito | JSON para que al refrescar la pagina no haga reset y se pueda ver la cantidad.
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
