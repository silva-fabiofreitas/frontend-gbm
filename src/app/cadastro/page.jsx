import {getRegister} from '@/service/address'
import Table from '@/components/register/Table'
import AddRegister from '@/components/register/AddRegister'


export default async function Cadastro() {
    const columns = [{name:'Estado'}, {name:'Cidade', className:''}, {name:'Bairro', className:''}, {name:'Rua', className:''} , {name:'Ações', className:'flex justify-center'}]
    const data =  await getRegister()  
    
    return (
        <> 
           <h1 className='flex justify-center text-xl pt-6 font-bold '>Registro de Ocorrências</h1>
           <AddRegister />      
           <Table columns={columns} data={data}></Table>        
        </>
    )
}