import { getRegister } from '@/service/address'
import Register from '@/components/register/register'
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
        { name: 'Data', className: '' },
        { name: 'Ação', className: 'flex justify-center' }
    ]
    const data = await getRegister()

    return (
        <>
            <PageWrapper>
            <Register columns={columns} data={data} ></Register>
            </PageWrapper>
        </>
    )
}