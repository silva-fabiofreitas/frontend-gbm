'use client'
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav(props) {
    const style = props.style
    const links = props.links
    const activeSegment = useSelectedLayoutSegment()
    
    function renderLink() {
        return links?.map(({ name, path }) => (
            <Link key={name} href={path} className={`${activeSegment==path? 'border-b-4 border-white-500' : ''} text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>
                {name}
            </Link>
        ))
    }

    return (
        <nav className="">
            {renderLink()}
            {props.children}
        </nav>
    )
}



