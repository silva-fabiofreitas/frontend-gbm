'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav(props) {
    const className = props.className
    const links = props.links
    const activeSegment = useSelectedLayoutSegment()

    function renderLink() {
        return links?.map(({ name, path, icon }) => (
            <Link
                key={name}
                href={path}
                className={`relative text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
            >
                {activeSegment == path && (
                <motion.span
                layoutId="underline"
                 className="absolute left-0 top-full block h-[1px] w-full bg-gray-200" />) }
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



