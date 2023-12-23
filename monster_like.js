// Variables
const numPersons = 12;
const hateCounts = Array.from({ length: numPersons }, () => 0);
let chart;

// Render the chart initially
renderChart();

// Update like count and chart for a specific person
function hate(personIndex) {
    hateCounts[personIndex - 1]++;
    document.getElementById('hateCount' + personIndex).innerText = Math.round(hateCounts[personIndex - 1]) + ' hates';

    // Update chart data
    chart.data.datasets[0].data = hateCounts.map(count => Math.round(count));

    // Render or update chart
    chart.update();
}

// Render the chart using Chart.js library
function renderChart() {
    const ctx = document.getElementById('chartContainer').getContext('2d');

    // Check if chart instance already exists
    if (chart) {
        // Destroy the existing chart instance
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: numPersons }, (_, i) => 'Person ' + (i + 1)),
            datasets: [{
                label: 'Hates Count',
                data: hateCounts.map(count => Math.round(count)),
                backgroundColor: 'orange'
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        fontSize: 16,  // 調整圖例字體大小
                    }
                }
            },    
            scales: {
                x: {
                    ticks: {
                        fontSize: 14,  // 調整 x 軸刻度字體大小
                    }
                },
                y: {
                    ticks: {
                        fontSize: 14,  // 調整 y 軸刻度字體大小
                    },
                    beginAtZero: true,
                    max: 10,
                }
            }
        }
    });
}

// Ensure the DOM content is fully loaded before rendering the chart
document.addEventListener('DOMContentLoaded', function () {
    renderChart();
});
