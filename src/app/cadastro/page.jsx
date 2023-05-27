import {getRegister} from '@/service/address'
import Table from '@/components/table/Table'
import AddRegister from '@/components/register/AddRegister'


export default async function Cadastro() {
    const columns = ['Estado', 'Cidade', 'Bairro', 'Rua']
    const data =  await getRegister()  
    
    return (
        <> 
           <h1 className='flex justify-center text-xl pt-6 font-bold '>Cadastro</h1>
           <AddRegister />      
           <Table columns={columns} data={data}></Table>        
        </>
    )
}