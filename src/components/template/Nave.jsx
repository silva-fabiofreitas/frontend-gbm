'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Nav(props) {
    const className = props.className
    const classNameLink = props.classNameLink
    const links = props.links
    const activeSegment = useSelectedLayoutSegment()

    function renderLink() {
        return links?.map(({ name, path, icon }) => (
            <Link
                key={name}
                href={path}
                className={classNameLink}
            >
                {activeSegment == path && (
                    <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[1px] w-full bg-gray-200" />)}
                <div className="flex">
                    <span className={`flex items-center ${classNameLink}`}>{icon}</span>
                    <span className={`flex items-center ${classNameLink} ${props.toggle && 'hidden'}`}>{name}</span>
                </div>

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



