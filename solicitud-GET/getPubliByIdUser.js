import PromptSync from "prompt-sync";

let input = PromptSync()

const obtenerUsuario = async (id) => {
    // 1. Verbo HTTP: GET
    // Se utiliza para consultar información existente. No requiere 'body'.
    const response = await fetch(`http://localhost:3000/posts/${id}`)

    // 2. Análisis del Código de Estado (Status Code)
    // Si es exitoso, esperamos un 200 OK.
    // Si no encuentra el post, devolvería un 404 Not Found.
    if (!response.ok) {
        console.error("Error en la petición:", response.status, response.statusText);
    }

    // 3. Estructura de la respuesta JSON
    // Devuelve un objeto con la información de la publicación solicitada.
    let publi = await response.json()
    return publi
}


const solicitudPeti = async () => {
    let id = input("Ingrese el id de un usuario para obtener su publicacion: ");
    const userData = await obtenerUsuario(id)
    return userData
}


solicitudPeti().then(publi => console.log(publi))
