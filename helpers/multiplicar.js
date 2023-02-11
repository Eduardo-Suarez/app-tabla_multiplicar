//Requerimos el paquete
const fs = require("fs");
const colors = require("colors");
colors.enable();

//Creamos la funcion
//El async es que lleva el try y despues el catch.
const crearTabla = async (base = 5, listar = false, limite) => {

    try {
        
        
        //Variable salida hace referencia a donde se va a guardar el resultado del ciclo for.
        let salida, consola = ""
       
        

        for (let i = 1; i <= limite; i++){
                            // el \n representa salto de linea.
        salida +=`${base} x ${i} = ${base * i }\n`
        //hacemos esto para remover el codigo de los colores en nuestro archivo txt.7
        consola +=`${base} ${"x".red} ${i} = ${base * i }\n`
        }

        //Si listar esta en true se ejecutan los console.log.
        if (listar){

            console.log("=========================".yellow);
            console.log("Table Multiplicar del:", colors.blue(base));
            console.log("==========================".yellow);
            console.log(consola);
        }

        
        //esta es la manera como se usa el fs.writeFile donde recibe 3 valores.
        //1. el nombre que se le quiere dar.
        //2. los valores que vamos a guardar.
        //3. por ultimo el callback donde vamos a arrojar el error y un console.log que nos haga saber que todo esta funcionando bien.
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`

    } catch (err) {
        throw ( console.log('A ocurrido un error'), err )
    }


    

}

//Exportamos la funcion.
module.exports = {
    //El primer crear Tabla apunta al numero que nosostros le queremos dar de referencia
    crearTabla
}