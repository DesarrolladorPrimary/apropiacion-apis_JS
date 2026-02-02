import PromptSync from "prompt-sync";
let input = PromptSync()

const obtenerUsuario = async (id) => {
    const response = fetch(`http://localhost:3000/users/${id}`)
    let data = (await response).json()
    return data
}

const solicitudPeti = async () => {
    let id = input("Ingrese el id de un usuario: ");
    const userData = await obtenerUsuario(id)
    return userData
}

solicitudPeti().then(user => console.log(user));

