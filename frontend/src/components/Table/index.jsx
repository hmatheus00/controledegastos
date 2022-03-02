import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap';
import { BASE_URL } from '../../utils/request';

export default function TableExtract() {

    const [compras, setCompras] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        async function getCompras() {
            try {
                const data = await axios.get(`${BASE_URL}/compras`)
                const compras = data.data;
                setCompras(compras);
            } catch (error) {
                return 'Conexão não estabelecida!';
            }
        }
        getCompras();

    }
        , [refresh])

    const refreshTable = () => {
        setRefresh(refresh + 1);
    }

    async function updateParcelas() {
        try {
            const data = await axios.put(`${BASE_URL}/compras`);
            const compras = data.data;
            setCompras(compras);
            refreshTable();
        } catch (error) {
            return 'Conexão não estabelecida!';
        }
    }



    return (
        <>
            <Row className="justify-content-center">
                <Col sm={8}>
                    <h1 >Extrato</h1>
                </Col>
                <Col sm={4}>
                    <Button size="lg" onClick={updateParcelas}>Update Parcelas</Button>
                </Col>
            </Row>
            <Table responsive striped hover variant="dark" className="px-5 py-2">
                <thead>
                    <tr>
                        <th>Data</th>   
                        <th>Comprador</th>
                        <th>Vendedor</th>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Parcelas</th>
                        <th>Pagas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        compras.map(compra => {
                            return (
                                <tr key={compra.id}>
                                    <td>{compra.data}</td>
                                    <td>{compra.comprador}</td>
                                    <td>{compra.vendedor}</td>
                                    <td>{compra.produto}</td>
                                    <td>{`R$${compra.valor}`}</td>
                                    <td>{compra.totalParcelas}</td>
                                    <td>{compra.parcelasPagas}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>

    );

}