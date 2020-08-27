const argv = require('./config/yargs').argv;
const colors = require('colors');
const colors2 = require('colors/safe');
/*
Movido a fichero de configuración

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //obligatorio
            alias: 'b' //alias
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true, //obligatorio
            alias: 'b' //alias
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() //genera ayuda automaticamente, para usar con node app comando --help
    .argv;
*/


const multiplicar = require('./multiplicar/multiplicar');
//Si lo hicieramos así, tendríamos que llamar al paquete con el prefijo multiplicar.
//Si queremos poder usar la función sin más, podemos usar desestructuración.

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(multiplicar);

//let base = 's';
/*
//console.log(process.argv);
let argv = process.argv;
//Esta gestión de los parámetros hace que el parámetro tenga dependencia posicional
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);
*/

let argv2 = process.argv;

//console.log('Base: ' + argv.base);
//console.log('Limite: ' + argv.limite);
console.log(argv);

let comando = argv._[0].toLowerCase();
switch (comando) {
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`se ha creado el archivo `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');

}