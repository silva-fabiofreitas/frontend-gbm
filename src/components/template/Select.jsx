export default function Select(props) {
    const name = props.name
    const className = props.className
    const options = props.options
    const id = props.id
    
    
    return (
        <select id={id} name={name} className={className} >
            {props.children}
            {
                options.map((obj, index)=>(
                    <option key={index} value={obj.name}>{obj.name}</option>
            ))
            }
        </select>
    )
}