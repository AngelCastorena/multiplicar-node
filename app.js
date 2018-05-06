const crearArchivo = require('./multiplicar/multiplicar').crearArchivo;
const listarTabla = require('./multiplicar/multiplicar').listarTabla;



let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}