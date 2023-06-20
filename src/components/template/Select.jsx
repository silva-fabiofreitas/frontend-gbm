export default function Select(props) {
    const name = props.name
    const className = props.className
    const options = props.options
    const id = props.id
    let value = props?.register?.[name]
    
    if (['state', 'city', 'district'].includes(name)) {
        value = props?.register?.address?.[name]
    } else if (['age', 'gender'].includes(name)) {
        value = props?.register?.profile?.[name]
    }
    const updateRegister = (e) => {
        let obj = {}
        if (['state', 'city', 'district'].includes(name)) {
            obj = {address: { ...props?.register?.address, [name]: e.target.value }}
        } else if (['age', 'gender'].includes(name)) {
            obj = { profile: { ...props?.register?.profile, [name]: e.target.value } }
        }
        return {
            ...props.register,
            [name]: e.target.value,
            ...obj
        }
    }

    return (
        <select id={id} name={name} className={className} value={value} onChange={e => props?.setRegister && props?.setRegister(updateRegister(e))}>
            {props.children}
            {
                options.map((obj, index) => (
                    <option key={index} value={obj.name}>{obj.name}</option>
                ))
            }
        </select>
    )
}