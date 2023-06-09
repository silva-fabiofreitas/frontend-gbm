'use client'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Modal from '../template/Modal'
import { useState } from 'react'
import { putRegister, deleteRegister } from '@/service/address'
import { useRouter } from 'next/navigation'
import _Form from './_Form'

export default function Table(props) {
    const router = useRouter()
    const style = props.style
    const data = props.data
    const columns = props.columns

    const [modalOpen, setModalOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [register, setRegister] = useState({
        id: '', state: '', city: '', district: '', street: ''
    })

    const editRegister = (registro) => {
        setRegister(registro)
        setIsDelete(false)
        setModalOpen(true)
    }

    const openDeleteRegister = (registro) => {
        setRegister(registro)
        setModalOpen(true)
        setIsDelete(true)
    }

    const deleteRegisterConfirm = () => {
        deleteRegister(register.id)
        setModalOpen(false)
        router.refresh()
    }

    const handleSubimitEdit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        putRegister(data, register.id)
        setModalOpen(false)
        router.refresh()
    }

    function renderRow() {
        return data?.map((value, index) => (
            <tr key={value.id} className="hover hover:bg-sky-600">
                <th>{index}</th>
                <td>{value.state}</td>
                <td>{value.city}</td>
                <td>{value.district}</td>
                <td>{value.street}</td>
                <td className='flex gap-5 justify-center'>
                    <FiEdit className='transition hover:text-sky-800 hover:scale-125 ease-in-out duration-300' onClick={() => editRegister(value)} cursor='pointer' size={20} />
                    <FiTrash className='transition hover:duration-600 hover:text-orange-800 hover:scale-125 ease-in-out duration-300' onClick={() => openDeleteRegister(value)} cursor='pointer' size={20} />
                </td>
            </tr>
        ))
    }

    function renderDelete() {
        return (
            <>
                <div className='flex mt-20 justify-center  items-center'>
                    <h1 className='text-red-500 font-semibold text-2xl'>Realmente deseja apagar o registro</h1>
                    <FiTrash className='text-red-500' size={30} />
                </div>
                <div className='flex justify-center  items-center gap-4 mt-4'>
                    <button
                        onClick={() => deleteRegisterConfirm()}
                        type="button"
                        className="inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Sim
                    </button>
                    <button
                        onClick={() => setModalOpen(false)}
                        type="button"
                        className="inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Não
                    </button>
                </div>



            </>
        )
    }

    function renderCol() {
        return columns?.map((columns, index) => (
            <th key={index} className={columns.className}>{columns.name}</th>
        ))
    }

    return (
        <>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                {
                    isDelete ? renderDelete() : <_Form register={register} setRegister={setRegister} handleSubimit={handleSubimitEdit} />
                }
            </Modal>
            <div className="flex overflow-x-auto justify-center">
                {props.children}
                <table className="table w-11/12">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            {renderCol()}
                        </tr>
                    </thead>
                    <tbody>
                        {renderRow()}
                    </tbody>
                </table>
            </div>
        </>
    )
} 