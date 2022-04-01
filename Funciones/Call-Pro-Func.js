//Funcion
function saludar(){
    console.log("Hola");
}
saludar();

//Funcion Flecha
let saludar1 = () => {
    console.log("Hola LET");
}

saludar1();


//Returno
let saludar2 = () =>"Hola Returnar";

console.log(saludar2());

//Funcion con Retorno
let sumar = (a, b) => a+b;
console.log(sumar(12,4));

let sumar2= (a,b,c) => {

    return a+b+c;
}

console.log(sumar2(2,6,19));

// Callback

let restar = (a, b, cb)=>{
    let resta = a-b;
    cb(resta);

};
restar(10, 5, function(resta){
    console.log(resta);
});


//Callback

let mayorEdad = (edad, cb) =>{

    if (edad >=18){
    cb('Felicidad es mayor de edad');
    }
    else{
        cb('Eres un bebe');
    }

};

mayorEdad(19, function(respuesta){
    console.log(respuesta);

});


let precio = (valor, cb) =>{

    if(valor >= 20000 && valor <= 30000){
        cb('El valor del producto es mayor de 20.000 y menor que 30.000');

    }
    else if (valor >= 30000 && valor <= 40000 ) {
        cb('El valor del producto es mayor de 30.000 y menor que 40.000');

    }
    else if (valor >= 40000 && valor <= 50000){
        cb('El valor del producto es mayor de 40.000 y menor que 50.000');

    }

    else {
        cb('El valor es mayor que 50.000');
    }    
};

precio(30001, function(res){
    console.log(res);

});

let producto= (numero, cb)=>{

    if(numero==1 ){
        cb('Eligio el producto #1');
    }
    else if(numero==2){
        cb('Eligio el producto #2');

    }
    else if(numero==3){
        cb('Eligio el producto #3');
    }

    else{
        cb('Eligio otro producto');
    }
} 

producto(2, function(mostrar){
    console.log(mostrar);

});


total = (cantidad, cb)=>{

    if(cantidad==1){
        cb('La cantidad es #1');

    }
    else if(cantidad==2){
        cb('La cantidad es #2');
    }

    else if(cantidad==4){
        cb('La cantidad es #4');
    }
    
    else if(cantidad==5){
        cb('La cantidad es #5');
    }
    else{
        cb('Es otra cantidad');
    }
}

total(8, function(indique){
    console.log(indique);

});


//Crear variable con funcion Callback

var  precio_1 = (producto , callback) =>{

    if(producto > 20000){
        callback('Precio es mayor a 20000');
    }
    else{
        callback('El precio es menor de 20000');
    }

};

precio_1(25000,function(respuesta){
    console.log(respuesta);

})

