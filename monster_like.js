// Variables
const numPersons = 12;
const likeCounts = Array.from({ length: numPersons }, () => 0);
let chart;

// Render the chart initially
renderChart();

// Update like count and chart for a specific person
function like(personIndex) {
    likeCounts[personIndex - 1]++;
    document.getElementById('likeCount' + personIndex).innerText = Math.round(likeCounts[personIndex - 1]) + ' likes';

    // Update chart data
    chart.data.datasets[0].data = likeCounts.map(count => Math.round(count));

    // Render or update chart
    chart.update();
}

// Render the chart using Chart.js library
function renderChart() {
    const ctx = document.getElementById('chartContainer').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: numPersons }, (_, i) => 'Person ' + (i + 1)),
            datasets: [{
                label: 'Likes Count',
                data: likeCounts.map(count => Math.round(count)),
                backgroundColor: 'orange'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

// Ensure the DOM content is fully loaded before rendering the chart
document.addEventListener('DOMContentLoaded', function () {
    renderChart();
});