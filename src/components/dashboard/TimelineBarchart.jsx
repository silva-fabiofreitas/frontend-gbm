'use client'
import React from "react";
import ReactEcharts from "echarts-for-react"; 
import theme from '../../../public/themas/custom.project.json'

export default function TimeLineBarchart(props) {
  
  
  const option = {
    // This is the properties of `baseOption`.
    timeline: {
      axisType: 'category',
      // realtime: false,
      // loop: false,
      autoPlay: true,
      // currentIndex: 2,
      playInterval: 1000,
        // each item in `timeline.data` corresponds to each
        // `option` in `options` array.
        data: ['2002', '2003', '2004']
    },
    title: {
        subtext: ' Data is from National Bureau of Statistics '
    },
    xAxis: {
      type: 'category',
      data: ['A', "B", "C", "D", "E"]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        // other configurations of series 1
        type: 'bar',
        data: [5,6,7,8,12]
    }],
    // `switchableOption`s:
    options: [{
        // it is an option corresponding to '2002-01-01'
        title: {
        text: 'the statistics of the year 2002'
        },
        series: [
            { data: [5,6,7,11,12] }, // the data of series 1
           
        ]
    }, {
        // it is an option corresponding to '2003-01-01'
        title: {
            text: 'the statistics of the year 2003'
        },
        series: [
          { data: [8,6,7,8,2] }, // the data of series 2
          
        ]
    }, {
        // it is an option corresponding to '2004-01-01'
        title: {
            text: 'the statistics of the year 2004'
        },
        series: [
          { data: [6,10,8,8,12] }  // the data of series 3
           
        ]
    }]
} 

return <ReactEcharts option={ option } style={{position:'relative', top:'10%'}} theme={theme.theme} />;
} 
