export default function Select(props) {
    const name = props.name
    const className = props.className
    const options = props.options
    const id = props.id
    const selected = props.selected
        
    return (
        <select id={id} name={name} className={className} value={selected} onChange={e=>true}>
            {props.children}
            {
                options.map((obj, index)=>(
                    <option key={index} value={obj.name}>{obj.name}</option>
            ))
            }
        </select>
    )
}