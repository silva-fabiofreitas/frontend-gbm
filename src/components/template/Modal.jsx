
export default function Modal({modalOpen, setModalOpen, children}) {
    return (
        <div className={`modal ${modalOpen ? 'modal-open' : ''}  `}>
            <div className="modal-box relative  max-w-2xl h-[55%]">
                <label onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {children}
            </div>
        </div>
    )
}

