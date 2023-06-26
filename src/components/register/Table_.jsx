'use client'
import { FiEdit, FiTrash } from 'react-icons/fi'
import _Form from './_Form'
import { motion, AnimatePresence, delay } from 'framer-motion'
import { use, useState } from 'react'

export default function Table(props) {
    const data = props.data
    const columns = props.columns

    const { editRegister, openDeleteRegister } = props

    function renderRow() {
        return data?.map((value, index) => (

            <tr
                key={value.id} className="hover hover:bg-sky-600">
                <th>{index}</th>
                <td>{value.address.state}</td>
                <td>{value.address.city}</td>
                <td>{value.address.district}</td>
                <td>{value.address.street}</td>
                <td>{value.profile.age}</td>
                <td>{value.profile.gender}</td>
                <td>{value.risk}</td>
                <td>{value.type_of_occurrence}</td>
                <td>{value.type_of_traffic_accident}</td>
                <td>{value.unit_type}</td>
                <td>{new Date(value.date).toLocaleString('pt-BR', { timeZone: 'UTC' })}</td>
                <td className='flex gap-5 justify-center'>
                    <FiEdit className='transition hover:text-sky-800 hover:scale-125 ease-in-out duration-300' onClick={() => editRegister(value)} cursor='pointer' size={20} />
                    <FiTrash className='transition hover:duration-600 hover:text-orange-800 hover:scale-125 ease-in-out duration-300' onClick={() => openDeleteRegister(value)} cursor='pointer' size={20} />
                </td>
            </tr>

        ))
    }

    function renderCol() {
        return columns?.map((columns, index) => (
            <th key={index} className={columns.className}>{columns.name}</th>
        ))
    }
    const [show, setShow] = useState(true)

    return (
        <>
            <div className="flex overflow-x-auto overflow-y-hidden justify-center">
                <table className="table w-11/12 overflow-y-hidden">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            {renderCol()}
                        </tr>
                    </thead>
                    <motion.tbody
                        layout
                    >
                        <AnimatePresence>
                            {renderRow()}

                        </AnimatePresence>
                    </motion.tbody>
                </table>
            </div>

        </>
    )
}
