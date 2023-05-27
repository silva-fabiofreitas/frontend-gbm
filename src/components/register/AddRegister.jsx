'use client'

import Modal from '../template/Modal'
import {useState} from 'react'

export default function AddRegister(){
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>  
            <button onClick={ ()=>setModalOpen(true)} className="btn btn-outline">Cadastro</button>   
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
                Modal para cadastro    
            </Modal>                
        </>
    )
}