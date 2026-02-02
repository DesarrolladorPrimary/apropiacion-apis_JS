import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, title) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title
        })
    })

    let data = await response.json()
    return data
}


const updatePostTitle = async () => {

    let id = prompt("Ingrese el id del post a modificar (solo titulo): ")
    let title = prompt("Ingrese el nuevo titulo de la publicacion: ")
    const response = await peticion(id, title);

    return response
}


updatePostTitle().then(publi => console.log(publi))
