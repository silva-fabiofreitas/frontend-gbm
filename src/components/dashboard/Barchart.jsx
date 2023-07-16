'use client'
import React from "react";
import ReactEcharts from "echarts-for-react"; 

export default function Barchart(props) {
  const processData = ({data}) => {
    const dataMen = data?.filter(({profile__gender__name})=> profile__gender__name==='Masculino')
    const dataWomen = data?.filter(({profile__gender__name})=> profile__gender__name==='Feminino')
    const xAxisData = [ ...new Set(data?.map(({profile__age})=>profile__age))]
    const dataWomenNorm = []
    const dataMenNorm = []
    xAxisData.forEach((age)=>{
      const ageWomen = dataWomen.find(({ profile__age }) => profile__age === age) || 0
      const ageMen = dataMen.find(({ profile__age }) => profile__age === age) || 0
      dataWomenNorm.push(ageWomen.value) 
      dataMenNorm.push(ageMen.value)
    })
    return {dataWomenNorm, dataMenNorm, xAxisData}
  }

  const {dataWomenNorm, dataMenNorm, xAxisData} = processData(props)
  
  
  const optionAge = {
  xAxis: {
    type: 'category',
    data: xAxisData
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      stack:'total',
      name:'Masculino',
      data: dataMenNorm,
      type: 'bar'
    },
    {
      stack:'total',
      name:'Feminino',
      data: dataWomenNorm,
      type: 'bar'
    }
  ]

}  

return <ReactEcharts option={ optionAge } style={{position:'relative', top:'10%'}} />;
} 
