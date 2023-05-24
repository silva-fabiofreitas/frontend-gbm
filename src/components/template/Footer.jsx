export default function Footer(props){
    const style = props.style
    return (
        <footer className={`footer flex items-center justify-center ${style}`}>
            {props.children}
        </footer>
    )

} 