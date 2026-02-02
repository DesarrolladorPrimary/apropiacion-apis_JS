import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, userId, title, body) => {
    // 1. Verbo HTTP: PUT
    // Se usa para ACTUALIZAR COMPLETAMENTE un recurso existente.
    // Reemplaza todo el objeto. Si faltan campos en el body, se pierden en el recurso.
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

    // 2. Análisis del Código de Estado
    // Esperamos un 200 OK.

    // 3. Estructura de la respuesta JSON
    // Contiene el objeto completo tal como quedó guardado en la base de datos.
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
