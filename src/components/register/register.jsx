'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IoIosAddCircle } from 'react-icons/io'
import ReactPaginate from 'react-paginate'

import Modal from '../template/Modal'
import Button from './Button'
import _Form from './_Form'
import style from './AddRegister.module.css'
import Table from './Table_'
import Delete from './Delete'
import { putRegister, deleteRegister, addRegister, BASEURL } from '@/service/address'

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
        handlePageClick({selected:currentPage-1})
        router.refresh()
    }

    const handleSubimit = (e) => {
        e.preventDefault()
        addRegister(register)
        setModalOpen(false)
        handlePageClick({selected:pageCount-1})
        router.refresh()
    }

    const handleSubimitEdit = (e) => {
        e.preventDefault()
        putRegister(register, register.id)
        setModalOpen(false)
        handlePageClick({selected:currentPage-1})
        router.refresh()
    }

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

    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [items, setItems] = useState([])
    const pageSize = 10
   
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage + 1)
    }

    useEffect(() => {
        async function getRegister() {
            const resp = await fetch(`${BASEURL}/registro-correncia/?page=${currentPage}`, {
                cache: 'no-store'
            })
            const register = await resp.json()
            setItems(register['results'])
            setPageCount(()=>(Math.ceil(register['count'] / pageSize)))
        }
        getRegister()
    }, [currentPage, modalOpen])
 

    return (
        <>
            <h1 className='flex justify-center text-xl pt-6 font-bold '>Registro de Ocorrências</h1>
            <div className='flex w-11/12 justify-end mt-4 m-auto'>
                <Button setModalOpen={setModalOpen} setIsEdit={setIsEdit} setIsDelete={setIsDelete} className={`${style.icon} btn btn-outline`}>
                    <IoIosAddCircle />
                    Cadastrar
                </Button>
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
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
                columns={columns} data={items}
                setModalOpen={setModalOpen}
                setIsDelete={setIsDelete}
                setRegister={setRegister}
                setIsEdit={setIsEdit}
                editRegister={editRegister}
                openDeleteRegister={openDeleteRegister}
                register={register}
            />

            <ReactPaginate
                previousLabel="< Anterior"
                nextLabel="Proximo >"
                pageCount={pageCount}
                forcePage={currentPage-1}
                onPageChange={handlePageClick}
                breakLabel='...'
                marginPagesDisplayed={4}
                pageRangeDisplayed={3}
                containerClassName={"join flex gap-8 justify-center mt-4"}
                previousLinkClassName="join-item btn btn-outline"
                nextLinkClassName="join-item btn btn-outline"
                disabledClassName="join-item btn-disabled"
                activeClassName="join-item btn btn-active"
            />
        </>
    )
}
