'use client'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import _Form from './_Form'
import { motion, AnimatePresence } from 'framer-motion'

export default function Table(props) {
    const router = useRouter()
    const data = props.data
    const columns = props.columns

    const {setModalOpen, setRegister, setIsDelete, setIsEdit } = props
    
    
    const editRegister = (registro) => {
        setRegister(registro)
        setIsEdit(true)
        setIsDelete(false)
        setModalOpen(true)
    }

    const openDeleteRegister = (registro) => {
        setRegister(registro)
        setModalOpen(true)
        setIsDelete(true)
    }   

    function renderRow() {
        return data?.map((value, index) => (

            <motion.tr
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{
                    opacity:{ duration:0.3 },
                }}
                layout
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
            </motion.tr>

        ))
    }    

    function renderCol() {
        return columns?.map((columns, index) => (
            <th key={index} className={columns.className}>{columns.name}</th>
        ))
    }

    return (
        <>
            <div className="flex overflow-x-auto overflow-y-hidden justify-center">
                <table className="table w-11/12">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            {renderCol()}
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {renderRow()}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </>
    )
} 