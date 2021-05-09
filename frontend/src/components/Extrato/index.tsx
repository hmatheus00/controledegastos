import { Table } from "react-bootstrap";

export default function Extrato() {
    return (
        <>
            <br />
            <h1>Extrato de compras</h1>
            <br />
            <Table responsive striped  hover variant="dark">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Comprador</th>
                        <th>Vendedor</th>
                        <th>Produto</th>
                        <th>Cartão</th>
                        <th>Parcelado</th>
                        <th>Parcelas</th>
                        <th>Pagas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/10/20</td>
                        <td>Matheus</td>
                        <td>Magalu</td>
                        <td>Samsung m31</td>
                        <td>Digio</td>
                        <td>Sim</td>
                        <td>10</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}