import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id) => {
    // 1. Verbo HTTP: DELETE
    // Se usa para ELIMINAR un recurso existente.
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE"
    })

    // 2. Análisis del Código de Estado
    // Generalmente 200 OK o 204 No Content.

    // 3. Estructura de la respuesta JSON
    // json-server devuelve un objeto vacío {} como confirmación.
    let data = await response.json()
    return data
}


const deletePost = async () => {

    let id = prompt("Ingrese el id del post a eliminar: ")
    const response = await peticion(id);

    return response
}


deletePost().then(res => console.log(res))
