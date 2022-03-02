import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from '../../utils/request';
import { Compra } from '../../utils/types';

const options = {
    legend: {
        show: true
    }
}

export default function PieChart() {

    const [labels, setLabels] = useState([]);
    const [series, setSeries] = useState([]);
    
    useEffect(() => {

        axios.get(`${BASE_URL}/compras`)
            .then((res) => {
                const data = res.data;
                const namesLabels = data.map( (compra: Compra) => compra.produto);
                setLabels(namesLabels);
                const valueSeries = data.map((compra: Compra) => compra.valor);
                setSeries(valueSeries);
            })
    }, []);

    return (
        <Chart
            options={{ ...options, labels: labels }}
            series={series}
            type="pie"
            height="350"
        />
    );
}