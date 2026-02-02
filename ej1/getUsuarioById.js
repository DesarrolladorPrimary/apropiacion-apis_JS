import PromptSync from "prompt-sync";

let input = PromptSync()


let id = input("Ingrese el id de un usuario: ");

const obtenerUsuario = async()=> {
    const response = fetch(`http://localhost:3000/users/${id}`)
    let data = (await response).json()
    return data
}


obtenerUsuario().then(data => console.log(data));
