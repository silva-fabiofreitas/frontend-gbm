'use client'
import { useState } from "react";
import Nav from "../template/Nave"
import { motion, AnimatePresence } from 'framer-motion'

import { AiOutlineRadarChart } from 'react-icons/ai'
import { BsMap } from 'react-icons/bs'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


export default function Sidebar(props) {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }

    const linksHeader = [
        { name: 'Classificação', path: 'dashboard/classificacao', icon: <HiOutlinePresentationChartLine size={25} /> },
        { name: 'Perfil', path: 'dashboard/perfil', icon: <AiOutlineRadarChart size={25} /> },
        { name: 'Mapa', path: 'dashboard/mapa', icon: <BsMap size={25} /> },
    ]
    return (
        <>
            <div className="relative">
                <button onClick={handleToggle} className="btn-sidebar" ><MdOutlineKeyboardArrowLeft /></button>
                <aside className={`${props.className} transition-all ${toggle && '!w-16'}`} >
                    <Nav
                        links={linksHeader}
                        className='flex flex-col gap-4 p-4' classNameLink={'text-neutral-300 pr-4'}
                        toggle={toggle}
                    />
                    {props.children}
                </aside>

            </div>
        </>
    )
}