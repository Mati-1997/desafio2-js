let nombre = prompt("Hola! Ingresa tu nombre");
console.log("Bienvenido " + nombre + " a Ray Ban Argentina.");

console.log("A continuación te presentamos nuestros productos en promoción:");

function producto(identificador, nombre, color, codigo, tamaño, precio) {
  this.identificador = identificador;
  this.nombre = nombre;
  this.color = color;
  this.codigo = codigo;
  this.tamaño = tamaño;
  this.precio = precio;
}

const producto1 = new producto(
  "Producto 1",
  "Erika polarizado",
  "Negro gris degrade",
  "RB4171 622/t3",
  "Standard",
  22500
);

const producto2 = new producto(
  "Producto 2",
  "Club Master",
  "Negro verde",
  "RB3016 W0365",
  "Standard",
  22000
);

const producto3 = new producto(
  "Producto 3",
  "Hightstreet",
  "Carey marron degrade",
  "RB4324 710/51",
  "Standard",
  24000
);

const producto4 = new producto(
  "Producto 4",
  "Nina",
  "Negro verde",
  "RB4314 601/31",
  "Standard",
  23600
);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

let compraProducto1 = prompt(
  "Por favor selecciona cuantas unidades queres comprar: " +
    producto1.identificador +
    producto1.nombre +
    producto1.color
);
let compraProducto2 = prompt(
  "Por favor selecciona cuantas unidades queres comprar: " +
    producto2.identificador +
    producto2.nombre +
    producto2.color
);
let compraProducto3 = prompt(
  "Por favor selecciona cuantas unidades queres comprar: " +
    producto3.identificador +
    producto3.nombre +
    producto3.color
);
let compraProducto4 = prompt(
  "Por favor selecciona cuantas unidades queres comprar: " +
    producto4.identificador +
    producto4.nombre +
    producto4.color
);

console.log(
  "Tu selección para " +
    producto1.identificador +
    producto1.nombre +
    producto1.color +
    " fue " +
    compraProducto1 +
    " unidades. Subtotal=" +
    producto1.precio * compraProducto1
);

console.log(
  "Tu selección para " +
    producto2.identificador +
    producto2.nombre +
    producto2.color +
    " fue " +
    compraProducto2 +
    " unidades. Subtotal=" +
    producto2.precio * compraProducto2
);

console.log(
  "Tu selección para " +
    producto3.identificador +
    producto3.nombre +
    producto3.color +
    " fue " +
    compraProducto3 +
    " unidades. Subtotal=" +
    producto3.precio * compraProducto3
);

console.log(
  "Tu selección para " +
    producto4.identificador +
    producto4.nombre +
    producto4.color +
    " fue " +
    compraProducto4 +
    " unidades. Subtotal=" +
    producto4.precio * compraProducto4
);

let subtotal1 = compraProducto1 * producto1.precio;
let subtotal2 = compraProducto2 * producto2.precio;
let subtotal3 = compraProducto3 * producto3.precio;
let subtotal4 = compraProducto4 * producto4.precio;
let subtotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;

let envio = prompt(
  "Selecciona metodo de envio" +
    " 1-Motomensajeria CABA $500" +
    " 2-Motomensajria GBA $2000 " +
    " 3-Correo $650 " +
    " 4-Expreso $4000"
);
let precioEnvio = 0;
switch (envio) {
  case "1":
    console.log("El costo de envio es de 500");
    if ((envio = 1)) {
      precioEnvio = precioEnvio + 500;
    }
    break;

  case "2":
    console.log("El costo de envio es de 2000");
    if ((envio = 2)) {
      precioEnvio = precioEnvio + 2000;
    }
    break;

  case "3":
    console.log("El costo de envio es de 650");
    if ((envio = 3)) {
      precioEnvio = precioEnvio + 650;
    }
    break;

  case "4":
    console.log("El costo de envio es de 4000");
    if ((envio = 4)) {
      precioEnvio = precioEnvio + 4000;
    }
    break;

  default:
    alert("Valor no valido");
    break;
}

let total = parseInt(subtotal + precioEnvio);
console.log("El total es de " + total);

alert("El monto a abonar es " + total);

function destinatario(
  identificador,
  nombre,
  calle,
  localidad,
  provincia,
  celular,
  cp
) {
  this.identificador = identificador;
  this.nombre = nombre;
  this.calle = calle;
  this.localidad = localidad;
  this.provincia = provincia;
  this.celular = celular;
  this.cp = cp;
}

const destinatario1 = new destinatario(
  "Destinatario",
  prompt("Por favor ingresa el nombre de la persona que recibe el pedido"),
  prompt("Por favor ingresa el domicilio"),
  prompt("Por favor ingresa la localidad"),
  prompt("Por favor ingresa la provincia"),
  prompt("Por favor ingresa un numero de contacto"),
  prompt("Por favor ingresa el codigo postal")
);

console.log(destinatario1);

function tarjeta(identificador, numero, vencimiento, nombre, codigo, dni) {
  this.identificador = identificador;
  this.numero = numero;
  this.vencimiento = vencimiento;
  this.nombre = nombre;
  this.codigo = codigo;
  this.dni = dni;
}

const tarjeta1 = new tarjeta(
  "Tarjeta",
  prompt("Por favor ingresa los 16 digitos de tu tarjeta"),
  prompt("Por favor ingresa la fecha de vencimiento de tu tarjeta"),
  prompt("Por favor ingresa tu nombre completo como figuta en tu tarjeta"),
  prompt("Por favor ingresa el codigo de seguridad de tu tarjeta"),
  prompt("Por favor ingresa tu dni")
);

console.log(tarjeta1);
console.log("Tu pago fue realizado correctamente.");
console.log("En las proximas 24 horas estaremos despachando tu pedido.");
console.log("Muchas gracias por tu compra!");
