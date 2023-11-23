import React, { useEffect, useRef } from "react";
import './StatsCard.css';
import Chart from 'chart.js/auto';

export default function StatsCard() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'line', // Zmiana typu na 'bar' dla wykresu słupkowego
            data: {
                labels: ["July", "August", "Semptember", "October", "November"],
                datasets: [
                    {
                        label: 'Your money',
                        data: [7900, 2400, 3900, 6300, 7100],
                        backgroundColor: '#fcba03',
                        borderColor: '#fcba03',
                        borderWidth: 3,
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: false,
                            text: 'money amount'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: false,
                            text: 'months list'
                        }
                    }
                },
            },
        });

    }, []);

    return (
        <section className="stats-card">
            <canvas ref={chartRef} width="400" height="200" />
        </section>
    )
}
