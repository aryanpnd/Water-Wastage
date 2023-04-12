import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ['ocean', 'Other saline', 'Fresh water'],
  datasets: [
    {
      label: 'Available percentage',
      data: [96, 0.9, 2.5],
      backgroundColor: [
        '#64b67c9e',
        '#c17cc1',
        '#5c82d4c4',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data2 = {
  labels: ['Glaciers and ice caps', 'Ground water', 'surface water'],
  datasets: [
    {
      label: 'Available percentage',
      data: [68.7, 30.1, 1.2],
      backgroundColor: [
        '#a4b2e4',
        '#b4926c',
        '#5c82d4',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data3 = {
  labels: ['ground ice and permafrost', 'Lakes', 'Soil moisture','Swamps marshes','Rivers'],
  datasets: [
    {
      label: 'Available percentage',
      data: [69, 20.9, 3.8,2.6,0.49],
      backgroundColor: [
        '#3e539d',
        '#6c87a9',
        '#dca63c',
        '#3c8e64',
        '#6ca9ac',
        '#94826c'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Hero3() {
    return (
        <div style={{ height: "125%" }}>
            <div style={{ height: "25%" }}></div>

            <div style={{display:"flex",height:"60%",width:"100%"}}>

            <div style={{height:"100%",width:"32%"}}>
            <Pie data={data1} />
            </div>

            <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h3>{"->"}</h3>
            </div>

            <div style={{height:"100%",width:"32%"}}>
            <Pie data={data2} />
            </div>

            <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h3>{"->"}</h3>
            </div>

            <div style={{height:"100%",width:"32%"}}>
            <Pie data={data3} />
            </div>

            </div>
        </div>
    )
}

export default Hero3