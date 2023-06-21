export default function Button({className, children, setModalOpen, setIsEdit, setIsDelete}){
    const control = () => {
        setModalOpen(true)
        setIsEdit(false)
        setIsDelete(false)
    }
    return (
        <button onClick={()=> control()} className={`${className}`}>
            {children}
        </button>
    )
}