export async function getRegister(){
    const resp = await fetch("http://127.0.0.1:8000/api/endereco/")
    const register = await resp.json()
    return register
}
