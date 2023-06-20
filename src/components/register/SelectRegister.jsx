import { use, useContext } from 'react'
import _Select from 'react-select';

import Select from "../template/Select";
import { getCity, getDistrict, getGender, getRisk, getState, getTypeOccurrence, getTypeTrafficAccident, getUnitType } from '@/service/address'
import { GlobalContext } from './_Form';

const statePromisse = getState()
const cityPromisse = getCity()
const districtPromisse = getDistrict()
const genderPromisse = getGender()
const riskPromisse = getRisk()
const typeOccurrencePromisse = getTypeOccurrence()
const typeTrafficAccidentrPromisse = getTypeTrafficAccident()
const unitTypePromisse = getUnitType()

export function SelectState(props) {
    const data = use(statePromisse)
    const id = props.id

    return (
        <Select id={id} name='state' options={data} className='select w-full max-w-xs select-sm peer block mt-2' >
            <option value="">Selecione a UF</option>
        </Select>
    )
}
export function SelectCity(props) {
    const data = use(cityPromisse)
    const id = props.id
    return (
        <Select id={id} name='city' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione a Cidade</option>
        </Select>
    )
}

export function SelectDistrict(props) {
    const data = use(districtPromisse)
    const id = props.id
    return (
        <Select id={id} name='district' options={data} className='select w-full max-w-xs select-sm peer block mt-2'>
            <option defaultValue value="">Selecione o Bairro</option>
        </Select>
    )
}

export function SelectGender(props) {
    const data = use(genderPromisse)
    const id = props.id

    return (
        <Select id={id} name='gender' options={data}  className={`${props?.className} select w-full max-w-xs select-sm peer block mt-2`}>
            <option defaultValue value="">Selecione o Genero</option>
        </Select>  
    )
}

export function SelectRisk(props) {
    const data = use(riskPromisse)
    const id = props.id
    const options = data.map((v)=>{
        return {id:v.id, name:v.rating}
    })

    return (
        <Select id={id} name='risk' options={options} className={`${props?.className} select w-full max-w-xs select-sm peer block mt-2`}>
            <option defaultValue value="">Classificação de risco</option>
        </Select>  
    )
}

export function SelectTypeOccurrence(props) {
    const data = use(typeOccurrencePromisse)
    const id = props.id

    return (
        <Select id={id} name='type_of_occurrence' options={data} className={`${props?.className} select w-full max-w-xs select-sm peer block mt-2`}>
            <option defaultValue value="">Tipo de ocorrência</option>
        </Select>  
    )
}

export function SelectTypeTrafficAccident(props) {
    const data = use(typeTrafficAccidentrPromisse)
    const id = props.id

    return (
        <Select id={id} name='type_of_traffic_accident' options={data} className={`${props?.className} select w-full max-w-xs select-sm peer block mt-2`}>
            <option defaultValue value="">Tipo de acidente</option>
        </Select>  
    )
}

export function SelectUnitType(props) {
    const data = use(unitTypePromisse)
    const id = props.id

    return (
        <Select id={id} name='unit_type' options={data} className={`${props?.className} select w-full max-w-xs select-sm peer block mt-2`}>
            <option defaultValue value="">Tipo de unidade</option>
        </Select>  
    )
}




