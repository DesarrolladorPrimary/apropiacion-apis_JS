const getUsuarios = async () => {
    const url = ' http://localhost:3000/users';
    const response = await fetch(url);
    let data = await response.json()
    return data
}


getUsuarios().then(data => console.log(data))


