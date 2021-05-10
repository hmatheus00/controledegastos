import Chart from 'react-apexcharts';

const mockData = {
    series: [ 500, 1500, 800],
    labels: ['DIGIO', 'NEXT', 'NUBANK']
}
const options = {
    legend: {
        show: true
    }
}



export default function PieChart() {
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="pie"
            height="450"
        />
    );
}