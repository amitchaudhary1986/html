document.addEventListener('DOMContentLoaded', () => {
    const ctxInterviews = document.getElementById('interviewsChart');
    if (ctxInterviews) {
        new Chart(ctxInterviews, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                datasets: [{
                    label: 'Interviews Started',
                    data: [150, 180, 220, 200, 240],
                    borderColor: 'rgb(54, 162, 235)', // Blue
                    backgroundColor: 'rgba(54, 162, 235, 0.1)', // Optional: for area fill
                    tension: 0.1
                }, {
                    label: 'Interviews Completed',
                    data: [120, 150, 190, 170, 210],
                    borderColor: 'rgb(255, 99, 132)', // Red
                    backgroundColor: 'rgba(255, 99, 132, 0.1)', // Optional: for area fill
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Add this to allow custom sizing via CSS
                plugins: {
                    title: {
                        display: true,
                        text: 'Interviews Started vs. Completed'
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Interviews'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time Period'
                        }
                    }
                }
            }
        });
    }

    const ctxPeakActivity = document.getElementById('peakActivityChart');
    if (ctxPeakActivity) {
        new Chart(ctxPeakActivity, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Activity Volume',
                    data: [60, 80, 70, 90, 75, 40, 30],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // Teal
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Peak Activity by Day'
                    },
                    legend: {
                        display: false // Often not needed for single dataset bar charts
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Activity Metric (e.g., Interviews)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Day of the Week'
                        }
                    }
                }
            }
        });
    }

    const ctxDeviceUsage = document.getElementById('deviceUsageChart');
    if (ctxDeviceUsage) {
        new Chart(ctxDeviceUsage, {
            type: 'bar', // For horizontal bar, type is still 'bar' but with indexAxis: 'y'
            data: {
                labels: ['Web', 'Android', 'iOS'],
                datasets: [{
                    label: 'Usage Percentage',
                    data: [60, 25, 15],
                    backgroundColor: [ // Can provide an array of colors for each bar
                        'rgba(255, 159, 64, 0.6)', // Orange
                        'rgba(75, 192, 192, 0.6)',  // Teal
                        'rgba(153, 102, 255, 0.6)' // Purple
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // This makes the bar chart horizontal
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Device / Platform Usage'
                    },
                    legend: {
                        display: false // Typically not needed for this type of chart
                    }
                },
                scales: {
                    x: { // For horizontal bar, X is the value axis
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentage (%)'
                        }
                    },
                    y: { // Y is the category axis
                         title: {
                            display: true,
                            text: 'Platform'
                        }
                    }
                }
            }
        });
    }

    const ctxDurationDist = document.getElementById('durationDistributionChart');
    if (ctxDurationDist) {
        new Chart(ctxDurationDist, {
            type: 'bar',
            data: {
                labels: ['<5 min', '5-10 min', '10-15 min', '15-20 min', '>20 min'],
                datasets: [{
                    label: 'Number of Interviews',
                    data: [10, 40, 60, 30, 15],
                    backgroundColor: 'rgba(153, 102, 255, 0.6)', // Purple
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Interview Duration Distribution'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Interviews'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Duration Range'
                        }
                    }
                }
            }
        });
    }
    // Other charts will be initialized here later
});
