import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, userId, title, body) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userId": userId,
            "title": title,
            "body": body
        })
    })

    let data = await response.json()
    return data
}


const updatePost = async () => {

    let id = prompt("Ingrese el id del post a actualizar completamente: ")
    let userId = prompt("Ingrese el (nuevo) id del usuario: ")
    let title = prompt("Ingrese el nuevo titulo de la publicacion: ")
    let body = prompt("Ingrese el nuevo contenido de la publicacion: ")
    const response = await peticion(id, userId, title, body);

    return response
}


updatePost().then(publi => console.log(publi))
