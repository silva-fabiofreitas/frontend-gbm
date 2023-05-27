export default function Table(props) {
    const style = props.style
    const data = props.data
    const columns = props.columns


    
    function renderRow(){
            return data?.map((value,index)=>(
                <tr key={index} className="hover hover:bg-sky-700">
                    <th>{index}</th>
                    <td>{value.state}</td>
                    <td>{value.city}</td>
                    <td>{value.district}</td>
                    <td>{value.street}</td>
                </tr>  
            ))    
    }

    function renderCol(){
        return columns?.map((columns,index)=>(
            <th>{columns}</th>
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