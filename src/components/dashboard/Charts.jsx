import Barchart from './Barchart'
import Piechart from './Piechart'
import TreeMap from './TreeMap'
import TimeLineBarchart from './TimelineBarchart'
import { use } from 'react'

import { getPieCharts, getHistogramCharts, getThema } from '@/service/dashboard'

const typeOfOccurrencePromisse = getPieCharts()
const getHistogramChartsPromisse = getHistogramCharts()


export default function Charts() {

    const data = use(typeOfOccurrencePromisse)
    const dataAge = use(getHistogramChartsPromisse)



    return (
        <>
            <div className=" flex flex-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grow">
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Piechart data={data.type_of_occurrence} serieName={'Tipo de acidente'} />
                    </div>
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Piechart data={data.gender} serieName={'Tipo de acidente de transito'} />
                    </div>
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Piechart data={data.risk} serieName={'Nível de risco'} />
                    </div>
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Piechart data={data.unit_type} serieName={'Tipo de unidade'} />
                    </div>
                    <div className="col-span-full lg:col-span-4 shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Barchart data={dataAge}></Barchart>
                    </div>
                    <div className="col-span-full lg:col-span-2 shadow-md rounded-md border-neutral-100 border-[1px] ">
                        <TimeLineBarchart></TimeLineBarchart>
                    </div>
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <TreeMap data={data.type_of_traffic_accident}></TreeMap>
                    </div>
                    <div className="shadow-md rounded-md border-neutral-100 border-[1px]">
                        <Barchart data={dataAge}></Barchart>
                    </div>
                </div>
            </div>
        </>
    )
}