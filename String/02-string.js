const producto = "Monitor de 20 Pulgadas";
console.log(producto);

const nevera = "Marca Haceb";
console.log(nevera.length);


//Longuitud de letras del texto
console.log(producto.length);


//Conocer la posición de una palabra
console.log(producto.indexOf('monitor'));


//Includes muestra sale false o true o muestra
console.log(producto.includes('monitor'));

//Concatenar String 

const productoNevera = "Nevera de 220 litros ";
const precio= '3 millones';

console.log(productoNevera.concat(precio));

console.log(productoNevera+precio);

console.log(productoNevera.concat('en descuento'));

console.log("El producto " +  productoNevera + "tiene un valor de " + precio);

console.log(`El producto ${producto} tiene un valor de ${precio}` );