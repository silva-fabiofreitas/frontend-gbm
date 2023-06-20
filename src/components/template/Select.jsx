import { useContext } from "react"
import { GlobalContext } from "../register/_Form"

export default function Select(props) {
    const name = props.name
    const className = props.className
    const options = props.options
    const id = props.id
    
    const theContext = useContext(GlobalContext);
    
    const { register, setRegister } = theContext 
    let value = register?.[name]
    
    if (['state', 'city', 'district'].includes(name)) {
        value = register?.address?.[name]
    } else if (['age', 'gender'].includes(name)) {
        value = register?.profile?.[name]
    }
    const updateRegister = (e) => {
        let obj = {}
        if (['state', 'city', 'district'].includes(name)) {
            obj = {address: { ...register?.address, [name]: e.target.value }}
        } else if (['age', 'gender'].includes(name)) {
            obj = { profile: { ...register?.profile, [name]: e.target.value } }
        }
        return {
            ...register,
            [name]: e.target.value,
            ...obj
        }
    }

    return (
        <select id={id} name={name} className={className} value={value} onChange={e => setRegister && setRegister(updateRegister(e))}>
            {props.children}
            {
                options.map((obj, index) => (
                    <option key={index} value={obj.name}>{obj.name}</option>
                ))
            }
        </select>
    )
}