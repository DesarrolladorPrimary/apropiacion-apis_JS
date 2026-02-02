import PromptSync from "prompt-sync"

let prompt = PromptSync();

const peticion = async (id, title, body) => {
    // 1. Verbo HTTP: POST
    // Se usa para CREAR un nuevo recurso.
    const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userId": id,
            "title": title,
            "body": body
        })
    })

    // 2. Análisis del Código de Estado
    // Esperamos un 201 Created, que indica que el recurso se creó correctamente.

    // 3. Estructura de la respuesta JSON
    // json-server devuelve el objeto creado, incluyendo el nuevo 'id' autogenerado.
    // 4. Diferencia: POST genera un ID nuevo, PUT/PATCH trabajan sobre uno existente.
    let data = await response.json()
    return data
}


const createPost = async () => {

    let id = prompt("Ingrese el id del usuario: ")
    let title = prompt("Ingrese el titulo de la publicacion: ")
    let body = prompt("Ingrese el contenido de la publicacion: ")
    const response = await peticion(id, title, body);

    return response
}


createPost().then(publi => console.log(publi))
