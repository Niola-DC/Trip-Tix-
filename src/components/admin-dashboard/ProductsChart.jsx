'use client'

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProductsChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: '# of Bookings',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 0, 221, 0.7)',
                    'rgba(0, 0, 235, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                    'rgba(2, 139, 71, 0.7)',
                    'rgba(131, 3, 182, 0.7)',
                    'rgba(255, 165, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 0, 221, 1)',
                    'rgba(0, 0, 235, 1)',
                    'rgba(255, 255, 0, 1)',
                    'rgba(2, 139, 71, 1)',
                    'rgba(131, 3, 182, 1)',
                    'rgba(255, 165, 0, 1)',
                ],
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bookings',
            },
        },
    };

    return (
        <div className='bg-white p-8 rounded-lg drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
            <h2 className='text-xl font-[590] mb-4'>Top Bookings</h2>
            <div className='p-4'>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
