'use client'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Modal from '../template/Modal'
import { useState } from 'react'
import { putRegister, deleteRegister  } from '@/service/address'
import { SelectCity, SelectDistrict, SelectState } from './SelectRegister'
import { useRouter } from 'next/navigation'

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
                    <FiEdit  onClick={() => editRegister(value)} cursor='pointer' size={20} />
                    <FiTrash onClick={() => openDeleteRegister(value)} cursor='pointer' size={20} />
                </td>
            </tr>
        ))
    }

    function renderForm() {
        return (
            <form onSubmit={handleSubimitEdit}>
                <h1 className="font-semibold text-lg">Registros de ocorrências</h1>
                <div className="flex justify-around mt-10">
                    <div className="relative mb-6">
                        <label
                            htmlFor="stateID"
                            className="pointer-events-none"
                        >UF
                        </label>
                        <SelectState id='stateID' selected={register.state} />
                    </div>
                    <div className="relative mb-6">
                        <label
                            htmlFor="cityID"
                            className="pointer-events-none"
                        >Cidade
                        </label>
                        <SelectCity id='cityID' selected={register.city} />
                    </div>
                    <div className="relative mb-6">
                        <label
                            htmlFor="districtID"
                            className="pointer-events-none"
                        >Bairro
                        </label>
                        <SelectDistrict id='districtID' selected={register.district} />

                    </div>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="street" id="floating_street" defaultValue={register.street}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label
                        htmlFor="floating_street"
                        className="peer-focus:font-medium
                    absolute text-sm text-gray-500
                   dark:text-gray-400
                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">
                        Logradouro
                    </label>
                </div>

                <button
                    type="submit"
                    className="inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Editar
                </button>
            </form>
        )
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
                            onClick={()=>deleteRegisterConfirm()}
                            type="button"
                            className="inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                            Sim
                        </button>
                        <button
                            onClick={()=>setModalOpen(false)}
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
                {isDelete ? renderDelete() : renderForm()}
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