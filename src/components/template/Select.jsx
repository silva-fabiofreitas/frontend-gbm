export default function Select(props) {
    const name = props.name
    const className = props.className
    const options = props.options
    
    
    return (
        <select name={name} className={className} >
            {props.children}
            {
                options.map((obj, index)=>(
                    <option key={index} value={obj.id}>{obj.name}</option>
            ))
            }
        </select>
    )
}