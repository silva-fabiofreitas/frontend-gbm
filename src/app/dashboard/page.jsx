import PageWrapper from "@/components/template/Wrapper";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Dashboard() {
    return (
        <PageWrapper>
            <div className="abosolute hero flex justify-center w-[80vw]">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Dashboards</h1>
                        <p className="py-6">
                            A análise de dados consiste em 3 tipos de visualização disponível na barra lateral. 
                                           
                        </p>
                        <p className="text-justify py-2">
                            A primeira representa os dados estratificados de acordo com o nível risco. 
                            A importância de observar esse painel é ...               
                        </p>
                        <p className="text-justify py-2">
                            A segunda representa os dados estratificados de acordo com o nível risco. 
                            A importância de observar esse painel é ...               
                        </p>
                        <p className="text-justify py-2">
                            A terceira representa os dados estratificados de acordo com o nível risco. 
                            A importância de observar esse painel é ...               
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )

} 