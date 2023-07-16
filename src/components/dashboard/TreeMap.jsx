'use client'
import React from "react";
import ReactEcharts from "echarts-for-react"; 

export default function Barchart(props) { 
  
  const optionAge = {
  tooltip: {
    
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Acidente e violencia',
      type: 'treemap',
      // visibleMin: 1000,
      label: {
        show: true,
        formatter: '{b}'
      },
      itemStyle: {
        borderColor: '#fff'
      },
      // levels: getLevelOption(),
      data: props.data
    }
  ]

}  

return <ReactEcharts option={ optionAge } style={{position:'relative', top:'10%'}} />;
} 
