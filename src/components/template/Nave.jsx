'use client'
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav(props) {
    const className = props.className
    const links = props.links
    const activeSegment = useSelectedLayoutSegment()
    
    function renderLink() {
        return links?.map(({ name, path, icon }) => (
            <Link key={name} href={path} className={`${activeSegment==path? 'border-b-4 border-white-500' : ''} text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>
                <span className="flex gap-1 items-center">
                    {icon}
                    {name}
                </span>                
            </Link>
        ))
    }

    return (
        <nav className={`${className}`}>
            {renderLink()}
            {props.children}
        </nav>
    )
}



