'use client'
import React from 'react'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
Chart.register(ArcElement, Tooltip, Legend);

const DoghnutChart = () => {
    const data = {
        labels: [
          'Bank 1',
          'Bank 2',
          'Bank 3'
        ],
        datasets: [{
          label: 'Banks',
          data: [1250, 2050, 5000],
          backgroundColor: [
            '#0747b6',
            '#2265d8',
            '#3f91fa'
          ],
        }]
      };
  return (
    <Doughnut 
    data={data}
    options={{
        cutout: "60%",
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
  )
}

export default DoghnutChart