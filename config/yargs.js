const opt = {
    base: {
        demand: true, //obligatorio
        alias: 'b' //alias
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .help() //genera ayuda automaticamente, para usar con node app comando --help
    .argv;

module.exports = {
    argv
}