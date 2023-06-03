const baseUrl = 'http://127.0.0.1:8000'

export async function getRegister(){
    const resp = await fetch(`${baseUrl}/endereco/`)
    const register = await resp.json()
    return register
}

export async function getState(){
    const resp = await fetch(`${baseUrl}/estado/`)
    const register = await resp.json()
    return register
}

export async function getCity(){
    const resp = await fetch(`${baseUrl}/cidade/`)
    const register = await resp.json()
    return register
}

export async function getDistrict(){
    const resp = await fetch(`${baseUrl}/bairro/`)
    const register = await resp.json()
    return register
}

export const addRegister = async (data) => {
    const resp = await fetch(`${baseUrl}/endereco/`, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    const newRegister = await resp.json();
    return newRegister
}
