const { describe } = require("yargs");

const argv = require("yargs")
                    //configuramos yarg
                    .option('b', {
                        //nombramos 
                        alias: 'base',
                        //especificamos el tipo del dato
                        type: 'number',
                        //hacemos necesario el requerimiento del dato.
                        demandOption: true,
                        //Añade una descripcion para que sepamos que es lo que hace.
                        describe: "Es la base de la tabla de multiplicar"
                    })
                    //hacemos la comprobacion de si es un numero lo que ingreso el usuario
                    .check((argv, options) => {
                        if (isNaN (argv.base)){
                            throw 'La base debe ser un numero.'
                        }
                        //si no hay un error debemos de regresar true, para que funcione.
                        return true
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: "Muestra la tabla en consola"
                    })
                    .option('h', {
                        alias: 'limite',
                        type: 'number',
                        demandOption: true,
                        describe: "hasta que numero quieres que llegue la tabla de multiplicar."
                    })
                    .argv;

module.exports = argv;