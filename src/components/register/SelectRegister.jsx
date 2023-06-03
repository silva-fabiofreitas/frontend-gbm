import Select from "../template/Select";
import {getCity, getDistrict, getState} from '@/service/address'
import {use} from 'react'

const statePromisse =  getState()
const cityPromisse =  getCity()
const districtPromisse =  getDistrict()

export function SelectState(props){
    const data = use(statePromisse)
    const id = props.id    
    return (
        <Select id={id} name='state' options={data} className='select w-full max-w-xs select-sm peer block mt-2' >
            <option defaultValue value="">Selecione a UF</option>
        </Select>
    )
}
export function SelectCity(props){
    const data = use(cityPromisse)
    const id = props.id    
    return (
        <Select id={id} name='city' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione a Cidade</option>
        </Select>
    )
}
export function SelectDistrict(props){
    const data = use(districtPromisse)
    const id = props.id    
    return (
        <Select id={id} name='district' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione o Bairro</option>
        </Select>
    )
}