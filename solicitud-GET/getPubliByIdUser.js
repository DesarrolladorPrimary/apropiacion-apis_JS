import PromptSync from "prompt-sync";

let input = PromptSync()

const obtenerUsuario = async(id)=> {
    const response = fetch(`http://localhost:3000/posts/${id}`)
    let publi = (await response).json()
    return publi
}


const solicitudPeti = async () => {
    let id = input("Ingrese el id de un usuario para obtener su publicacion: ");
    const userData = await obtenerUsuario(id)
    return userData
}


solicitudPeti().then(publi => console.log(publi))
