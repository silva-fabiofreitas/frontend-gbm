import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="h-full container  m-auto">
                <div className="flex h-3/4 items-center gap-10">
                    <div className="flex-1">
                        <div className="">
                            <small className="font-semibold">Apresentação</small>
                            <h1 className="font-semibold text-4xl my-6 text-center">Alocação de Unidades de Atendimento Móvel</h1>
                            <p className="text-lg font-normal indent-10 text-justify">
                                O software é um produto desenvolvido como parte de uma tese de doutorado com o objetivo de alocar unidades
                                de atendimento móvel utilizando métodos matemáticos e estatísticos. Além disso, o sistema permite o cadastro
                                padronizado de ocorrências e oferece visualização de dados consolidados por tipos de ocorrência, bem como recursos
                                de Business Intelligence (BI) e Inteligência Artificial (IA).
                            </p>
                            <p className="text-lg font-normal indent-10 text-justify">
                                A alocação eficiente de ambulâncias é de extrema importância para garantir uma resposta rápida e eficaz no atendimento de emergências médicas.
                                Uma alocação adequada das ambulâncias pode salvar vidas e minimizar o impacto de situações de emergência.
                            </p>
                        </div>
                        <div className="h-3/4 overflow-y-auto hidden">
                            <p className="text-lg font-normal indent-10 text-justify">
                                Através de métodos matemáticos e estatísticos, o software desenvolvido permite otimizar a alocação das unidades de atendimento móvel.
                                Isso significa que, com base em dados como localização geográfica, densidade populacional, histórico de ocorrências e tempo de resposta,
                                o software é capaz de determinar a melhor localização para cada ambulância.
                            </p>
                            <p className="text-lg font-normal indent-10 text-justify">
                                Ao otimizar a alocação das ambulâncias, é possível reduzir o tempo de resposta e aumentar a cobertura de atendimento.
                                Isso resulta em um atendimento mais rápido aos pacientes em situações de emergência, o que pode ser crucial para salvar vidas.
                                Além disso, uma alocação eficiente também pode ajudar a distribuir a carga de trabalho entre as ambulâncias de forma equilibrada,
                                evitando sobrecarga em determinadas regiões ou momentos.
                            </p>
                            <p className="text-lg font-normal indent-10 text-justify">
                                Além da alocação, o sistema também oferece a possibilidade de cadastrar as ocorrências de forma padronizada, o que contribui para a
                                coleta de dados precisos e consistentes. Esses dados são valiosos para análise posterior e tomada de decisões estratégicas.
                            </p>
                            <p className="text-lg font-normal indent-10 text-justify">
                                A visualização de dados consolidados por tipos de ocorrência, aliada às funcionalidades de Business Intelligence (BI) e Inteligência Artificial (IA),
                                permite uma análise mais aprofundada e identificação de padrões e tendências. Isso pode auxiliar na identificação de áreas com maior
                                incidência de determinados tipos de ocorrência, na criação de planos de ação para melhorar a eficiência do atendimento e na previsão de demanda futura.
                            </p>
                            <p className="text-lg font-normal indent-10 text-justify">
                                Portanto, a importância da alocação eficiente de ambulâncias reside em sua capacidade de melhorar a qualidade e a agilidade do atendimento médico de emergência,
                                garantindo que recursos valiosos sejam alocados de maneira estratégica, resultando em uma resposta mais rápida e eficaz para as situações de emergência.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex-col flex items-center h-3/6">
                        <Image
                            src={'/assets/images/ucam.png'}
                            width={500}
                            height={200}
                            alt='UCAM' />

                        <h1 className="font-semibold text-2xl my-6 text-center">Programa de Posgraduação em Planejamento Regional e Gestão da Cidade</h1>
                        <p className="text-lg font-normal indent-10 text-justify">
                            A parceria com a universidade desempenha um papel fundamental na utilização do software e na tomada de decisão baseada em seus resultados. A universidade
                            traz consigo expertise acadêmica e científica, bem como recursos de pesquisa e desenvolvimento, que agregam valor ao processo de tomada de decisão.
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}