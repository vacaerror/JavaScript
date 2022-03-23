'use stric'


function singleTread(){

    process.argv[3] = 'Estamos aprendiendo Node.JS';
    process.argv[4] = 19;
    process.argv[5] = null;
    process.argv[6] = true;

    console.log('------------------------------');
    console.log('       EL PROCESO DE NODE.JS');
    console.log('Id del proceso ' + process.pid);
    console.log('Titulo ' +  process.title);
    console.log('Directorio de Node' + process.execPath);
    console.log('Directorio Actual '+ process.cwd());
    console.log('Version de Node '+ process.version);
    console.log('Version de dependencias '+ process.versions);
    console.log('Plataforma SO ' +  process.plataform);
    console.log('Arquitectura S.O ' +  process.arch);
    console.log('Tiempo activo de Node ' + process.uptime());
    console.log('Argumentos del proceso: '+ process.argv );
    console.log('------------------------------');
   

    var key=0;
    for (key in process.argv){
        console.log(process.argv[key]);

    }
  
}

singleTread();

var num1= 20;
var num2= 40;

document.write(num1+num2);