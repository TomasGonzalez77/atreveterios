localStorage.getItem("saludo",);
console.log ("Esta comprando" , saludo);

const verCarrito1JSON = JSON.stringify(verCarrito);
console.log(verCarrito1JSON);

localStorage.setItem("verCarrito", verCarrito1JSON);

const objCarritoJSON = localStorage.getItem("verCarrito");
const objCarrito = JSON.parse(objCarritoJSON);
console.log(objCarrito);