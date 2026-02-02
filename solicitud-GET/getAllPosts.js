
const peticion = async () => {
    const response = await fetch(`http://localhost:3000/posts`)
    let data = await response.json()
    return data
}


const getAllPosts = async () => {
    console.log("Obteniendo todas las publicaciones para verificar cambios...")
    const response = await peticion();
    return response
}


getAllPosts().then(publis => console.log(publis))
