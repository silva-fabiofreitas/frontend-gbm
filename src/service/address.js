export const BASEURL = 'http://127.0.0.1:8000'

// --------Populate select------------- //

export async function getState(){
    const resp = await fetch(`${BASEURL}/estado/`)
    const register = await resp.json()
    return register
}

export async function getCity(){
    const resp = await fetch(`${BASEURL}/cidade/`)
    const register = await resp.json()
    return register
}

export async function getDistrict(){
    const resp = await fetch(`${BASEURL}/bairro/`)
    const register = await resp.json()
    return register
}

export async function getGender(){
    const resp = await fetch(`${BASEURL}/genero/`)
    const register = await resp.json()
    return register
}

export async function getRisk(){
    const resp = await fetch(`${BASEURL}/risco/`)
    const register = await resp.json()
    return register
}

export async function getTypeOccurrence(){
    const resp = await fetch(`${BASEURL}/tipo-correncia/`)
    const register = await resp.json()
    return register
}

export async function getTypeTrafficAccident(){
    const resp = await fetch(`${BASEURL}/tipo-acidente-transito/`)
    const register = await resp.json()
    return register
}

export async function getUnitType(){
    const resp = await fetch(`${BASEURL}/tipo-unidade/`)
    const register = await resp.json()
    return register
}

// --------- CRUD-------------- //

export async function getRegister(){
    const resp = await fetch(`${BASEURL}/registro-correncia/`, {
        cache:'no-store'

    })
    const register = await resp.json()
    return register['results']
}

export const addRegister = async (data) => {
    const resp = await fetch(`${BASEURL}/registro-correncia/`, {
        method:'POST',
        headers: {
            'Content-Type': "application/json",

        },
        body: JSON.stringify(data)
    })
    const newRegister = await resp.json();

    return newRegister
}

export const putRegister = async (data, id) => {
    const resp = await fetch(`${BASEURL}/registro-correncia/${id}/`, {
        method:'PUT',
        headers: {
            'Content-Type': "application/json",

        },
        body: JSON.stringify(data)
    })
    const newRegister = await resp.json();

    return newRegister
}

export const deleteRegister = async (id) => {
    const resp = await fetch(`${BASEURL}/registro-correncia/${id}/`, {
        method:'DELETE',
        headers: {
            'Content-Type': "application/json",

        },
    })    
    return resp.status
}
