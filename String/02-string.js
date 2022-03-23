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


//Eliminar espacios en blanco
const producto5 = '     Monitor de 20 pulgadas              ';
console.log(producto5);
console.log(producto5.length);

//Eliminar espacio al inicio
console.log(producto5.trimStart());


//Eliminar espacio al final
console.log(producto5.trimEnd());


//Eliminar ambas direccion espacios
console.log(producto5.trimStart().trimEnd());


//Eliminar ambas direccion espacios
console.log(producto5.trim());

const producto6 ='Monitor de 20 pulgadas';

//Reemplazar texto
console.log(producto6.replace('pulgadas','"'));
console.log(producto6.replace('Monitor', 'Monitor Curvo'));

//Extraer o cortar texto
console.log(producto6.slice(0, 10));
console.log(producto6.slice(8));
console.log(producto6.slice(2, 1));


//Alternativa a Slice
console.log(producto6.substring(0, 10));
console.log(producto6.substring(7, 1));

//Circulo para Primera Letra
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

const producto7 ='Monitor de 20 pulgadas';

//Repetir una cadena de texto
const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!!!`);

//Dividir texto
const actividad= "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer , Musica, Escribir, Aprender, Llorar';
console.log(hobbies.split(" ,"));

const producto8= "Monitor de 20 pulgadas";

//Minusculas
console.log(producto8.toLocaleLowerCase());

//Mayusculas
console.log(producto8.toLocaleUpperCase());

//Pasar numero a String

const precio_1 = 300;
console.log(precio_1);
console.log(precio_1.toString());