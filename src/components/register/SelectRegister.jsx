import Select from "../template/Select";
import {getCity, getDistrict, getState} from '@/service/address'
import {use} from 'react'

const statePromisse =  getState()
const cityPromisse =  getCity()
const districtPromisse =  getDistrict()

export function SelectState(){
    const data = use(statePromisse)    
    return (
        <Select name='state' options={data} className='select w-full max-w-xs select-sm peer block mt-2' >
            <option defaultValue value="">Selecione a UF</option>
        </Select>
    )
}
export function SelectCity(){
    const data = use(cityPromisse)    
    return (
        <Select name='city' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione a Cidade</option>
        </Select>
    )
}
export function SelectDistrict(){
    const data = use(districtPromisse)    
    return (
        <Select name='district' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione o Bairro</option>
        </Select>
    )
}