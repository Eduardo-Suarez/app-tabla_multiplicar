//requerimos el paquete
const {crearTabla} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

                   
console.clear()

//Todo esto hace que podamos darle un valor a nuestra variable en la consola. Por defecto si el usuario no ingresa nada tomara el valor de 3.
//const [, , arg3 = 'base = 5'] = process.argv
//const [, base = 3] = arg3.split('=')

//let base = 8;


crearTabla(argv.base, argv.listar, argv.limite)
    .then(crearTabla => console.log(crearTabla, 'se a creado el archivo'.cyan))
    .catch(err => console.log(err))


