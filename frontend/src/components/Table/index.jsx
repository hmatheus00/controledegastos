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
                return 'Conexão não estabelecida!'
            }
        }
        getCompras();

    }
        , [refresh])

    const refreshPage = () => {
        setRefresh(refresh + 1);
    }



    return (
        <>
            <Row className="justify-content-center align-items-center">
                <Col sm={10} >
                    <h1>Extrato</h1>
                </Col>
                <Col>
                    <Button onClick={refreshPage} >Atualizar</Button>
                </Col>
            </Row>
            <Table responsive striped hover variant="dark">
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