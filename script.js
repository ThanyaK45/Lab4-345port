document.addEventListener('DOMContentLoaded', function () {
    new Chart('sleep', {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'],
            datasets: [{
                label: 'ชั่วโมง',
                data: [7, 6, 7, 6, 4, 9, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const talendata = {
        labels: ['Math', 'English', 'Science', 'Art'], 
        datasets: [{
            data: [2.5, 3.5, 3, 2.5],
            backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)', 'rgba(75,192,192,0.2)', 'rgba(153,102,255,0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)', 'rgba(75,192,192,1)', 'rgba(153,102,255,1)'],
            borderWidth: 1
        }]
    };

    new Chart('talen', {
        type: 'pie',
        data: talendata,
        options: {
            title: { display: true, text: 'ทักษะ' }
        }
    });
});
