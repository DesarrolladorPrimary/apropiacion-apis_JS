import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE"
    })

    let data = await response.json()
    return data
}


const deletePost = async () => {

    let id = prompt("Ingrese el id del post a eliminar: ")
    const response = await peticion(id);

    return response
}


deletePost().then(res => console.log(res))
