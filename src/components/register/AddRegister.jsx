'use client'
import {IoIosAddCircle } from 'react-icons/io'
import Modal from '../template/Modal'
import Button from './Button'
import _Form from './_Form'
import style from './AddRegister.module.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {addRegister} from '@/service/address'

export default function AddRegister() {
    const [modalOpen, setModalOpen] = useState(false)    

    const router = useRouter()
    const handleSubimit = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        addRegister(data)
        setModalOpen(false)
        router.refresh()     
    }  

    return (
        <>  
            <div className='flex w-11/12 justify-end mt-4 m-auto'>
                <Button setModalOpen={setModalOpen} className={`${style.icon} btn btn-outline`}>
                    <IoIosAddCircle />
                    Cadastrar
                </Button>
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                {/* <Form setModalOpen={setModalOpen}/> */}
                <_Form setModalOpen={setModalOpen} handleSubimit={handleSubimit}/>
            </Modal>
        </>
    )
}