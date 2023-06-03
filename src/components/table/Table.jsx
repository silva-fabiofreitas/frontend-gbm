import {FiEdit, FiTrash, FiTrash2} from 'react-icons/fi'


export default function Table(props) {
    const style = props.style
    const data = props.data
    const columns = props.columns


    
    function renderRow(){
            return data?.map((value,index)=>(
                <tr key={index} className="hover hover:bg-sky-600">
                    <th>{index}</th>
                    <td>{value.state}</td>
                    <td>{value.city}</td>
                    <td>{value.district}</td>
                    <td>{value.street}</td>
                    <td className='flex gap-5 justify-center'>
                        <FiEdit cursor='pointer' size={20}/><FiTrash cursor='pointer' size={20}/>                        
                    </td>
                </tr>  
            ))    
    }

    function renderCol(){
        return columns?.map((columns,index)=>(
            <th className={columns.className}>{columns.name}</th>
        ))    
}

    return (
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
    )

} 