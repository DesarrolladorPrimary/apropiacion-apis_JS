import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, title, body) => {
    const response = fetch(` http://localhost:3000/posts`, {
        method: "POST",
        headers : {
            "Content-Type": "Application/json"
        },
        body:  JSON.stringify({
            "userId": id,
            "title" : title,
            "body" : body
        })
    })

    let data = (await response).json()
    return data
}


const createPost = async ()=> {

    let id = prompt("Ingrese el id del usuario: ")
    let title = prompt("Ingrese el titulo de la publicacion: ")
    let body = prompt("Ingrese el contenido de la publicacion: ")
    const response = await peticion(id, title, body);

    return response
}


createPost().then(publi => console.log(publi))
