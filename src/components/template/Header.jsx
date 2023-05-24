import Logo from './Logo'
import Nave from './Nave'

export default function Header(props) {
    const style = props.style
    return (
        <header className={`header flex items-center justify-center ${style}`}>
           {props.children}
        </header>
    )

} 