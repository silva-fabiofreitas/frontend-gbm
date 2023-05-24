export default function Main(props){
    const style = props.style
    return (
        <main className={`main ${style}`}>
            {props.children}
        </main>
    )

} 