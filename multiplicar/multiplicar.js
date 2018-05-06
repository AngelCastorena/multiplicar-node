const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `Tabla del ${base} ${(base * i)}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`Tabla-${base}.txt`)
            console.log('The file has been saved!');
        });
    });
}

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(base + ' * ' + i + ' = ' + (base * i));

    }
}

module.exports = {
    crearArchivo,
    listarTabla
}