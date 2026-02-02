import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, title) => {
    // 1. Verbo HTTP: PATCH
    // Se usa para ACTUALIZAR PARCIALMENTE un recurso.
    // Solo se modifican los campos enviados; el resto (userId, body) se mantiene igual.
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title
        })
    })

    // 2. Análisis del Código de Estado
    // Esperamos un 200 OK.

    // 3. Estructura de la respuesta JSON
    // Devuelve el objeto completo (con las modificaciones aplicadas y los datos viejos preservados).
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
