const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`Tabla de ${base} `.green);
    console.log('===================='.green);
    for (var i = 1; i <= limite; i++) {
        console.log(`${base}x${i} = ${base*i}`);
    };
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${ base } no es una base válida`);
            return;
        }

        for (var i = 1; i <= limite; i++) {
            //console.log(`${base}x${i} = ${base*i}`);
            data += `${base}x${i} = ${base*i}\n`
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
        crearArchivo,
        listarTabla
    }
    //También se podría exportar definiendo la función en lugar de con let, poniendo module.exports.crearArchivo = ...