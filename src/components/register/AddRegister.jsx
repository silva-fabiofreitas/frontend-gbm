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
        type_of_occurrence:'',
        type_of_traffic_accident:'',
        unit_type: '',
        date:''
    })
    console.log(register)

    const router = useRouter()
    const handleSubimit = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
   
        const body = {
            profile: {
                age: data.age,
                gender: data.gender
            },
            address: {
                street: data.street,
                district: data.district,
                city: data.city,
                state: data.state
            },
            risk: data.risk,
            type_of_occurrence:data.type_of_occurrence,
            type_of_traffic_accident:data.type_of_traffic_accident,
            unit_type: data.unit_type,
            date:data.date
        }
        addRegister(body)
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
                <_Form 
                setModalOpen={setModalOpen}
                 handleSubimit={handleSubimit}
                 setRegister={setRegister}
                 register={register}                
                />
            </Modal>
        </>
    )
}