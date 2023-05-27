'use client'
import { IoIosAdd, IoIosAddCircle } from 'react-icons/io'
import Modal from '../template/Modal'
import Button from './Button'
import { useState } from 'react'
import style from './AddRegister.module.css'

export default function AddRegister() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <div className='flex w-11/12 justify-end mt-4 m-auto'>
                <Button setModalOpen={setModalOpen} className={`${style.icon} btn btn-outline`}>
                    <IoIosAddCircle />
                    Cadastro
                </Button>
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                Modal para cadastro
            </Modal>
        </>
    )
}