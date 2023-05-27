export default function Button({className, children, setModalOpen}){
    return (
        <button onClick={()=>setModalOpen(true)} className={`${className}`}>
            {children}
        </button>
    )
}