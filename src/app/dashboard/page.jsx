export default function Dashboard(props){
    const style = props.style
    return (
        <div className={`footer flex items-center justify-center ${style}`}>
            {props.children}
            Dashboard
        </div>
    )

} 