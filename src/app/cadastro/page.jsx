import { getRegister } from '@/service/address'
import Table from '@/components/register/Table'
import AddRegister from '@/components/register/AddRegister'
import PageWrapper from "@/components/template/Wrapper";


export default async function Cadastro() {
    const columns = [
        { name: 'Estado' },
        { name: 'Cidade', className: '' },
        { name: 'Bairro', className: '' },
        { name: 'Rua', className: '' },
        { name: 'Idade', className: '' },
        { name: 'Genero', className: '' },
        { name: 'Risco', className: '' },
        { name: 'Ocorrência', className: '' },
        { name: 'Acidente de Trans.', className: '' },
        { name: 'Unidade', className: '' },
        { name: 'Data', className: 'flex justify-center' }



    
    ]
    const data = await getRegister()

    return (
        <>
            <PageWrapper>
                <h1 className='flex justify-center text-xl pt-6 font-bold '>Registro de Ocorrências</h1>
                <AddRegister />
                <Table columns={columns} data={data}></Table>
            </PageWrapper>
        </>
    )
}