'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IoIosAddCircle } from 'react-icons/io'

import Modal from '../template/Modal'
import Button from './Button'
import _Form from './_Form'
import style from './AddRegister.module.css'
import { addRegister } from '@/service/address'
import Table from './Table_'
import Delete from './Delete'
import { putRegister, deleteRegister } from '@/service/address'

export default function Register({ columns, data }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [register, setRegister] = useState({
        profile: {
            age: '',
            gender: ''
        },
        address: {
            street: '',
            district: '',
            city: '',
            state: ''
        },
        risk: '',
        type_of_occurrence: '',
        type_of_traffic_accident: '',
        unit_type: '',
        date: ''
    })

    const router = useRouter()

    const deleteRegisterConfirm = () => {
        deleteRegister(register.id)
        setModalOpen(false)
        router.refresh()
    }

    const handleSubimit = (e) => {
        e.preventDefault()
        addRegister(register)
        setModalOpen(false)
        router.refresh()
    }

    const handleSubimitEdit = (e) => {
        e.preventDefault()
        putRegister(register, register.id)
        setModalOpen(false)
        router.refresh()
    }

    return (
        <>
            <h1 className='flex justify-center text-xl pt-6 font-bold '>Registro de Ocorrências</h1>
            <div className='flex w-11/12 justify-end mt-4 m-auto'>
                <Button setModalOpen={setModalOpen} setIsEdit={setIsEdit} setIsDelete={setIsDelete} className={`${style.icon} btn btn-outline`}>
                    <IoIosAddCircle />
                    Cadastrar
                </Button>
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}  >
                {
                    isDelete ?
                        <Delete
                            deleteRegisterConfirm={deleteRegisterConfirm}
                            setModalOpen={setModalOpen} /> :
                        <_Form
                            register={register}
                            setRegister={setRegister}
                            handleSubimit={isEdit ? handleSubimitEdit : handleSubimit}
                            setModalOpen={setModalOpen}
                        />
                }
            </Modal>
            <Table
                columns={columns} data={data}
                setModalOpen={setModalOpen}
                setIsDelete={setIsDelete}
                setRegister={setRegister}
                setIsEdit={setIsEdit}
                register={register}
            />
        </>
    )
}
