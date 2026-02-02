import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, nombre, body) => {
    const response = await fetch(`http://localhost:3000/comments`, {
        method: "POST",
        headers : {
            "Content-Type": "Application/json"
        },
        body:  JSON.stringify({
            "postId": id,
            "name" : nombre,
            "body" : body
        })
    })

    let data = await response.json()
    return data
}


const createPost = async ()=> {

    let id = prompt("Ingrese el id del post: ")
    let name = prompt("Ingrese el nombre del comentario: ")
    let body = prompt("Ingrese el contenido del comentario: ")
    const response = await peticion(id, name, body);

    return response
}


createPost().then(publi => console.log(publi))
