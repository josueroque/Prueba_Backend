var random = require("generate-random-data");

async function listarUsuarios() {
    let users = [
        {
            nombre: "Ingenieria Digital",
            correo: "ID@ingenieria.digital",
            rtn: random.mobile(),
            pais: "Honduras",
            telefono: random.mobile(),
            ciudad: "Tegucigalpa",
        },
        {
            nombre: "Asegurame",
            correo: "asegurame@asegurame.com",
            rtn: random.mobile(),
            pais: "Honduras",
            telefono: random.mobile(),
            ciudad: "Tegucigalpa",
        }]

    return users
}


module.exports = { listarUsuarios }