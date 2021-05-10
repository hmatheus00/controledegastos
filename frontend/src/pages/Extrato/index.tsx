import Table from '../../components/Table';
import PieChart from "../../components/PieChart";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Extrato() {
    return (
        <>
            <Header />
            <div className="row mt-2 px-2">
                <div className="col-sm">
                    <h1>Extrato de compras</h1>
                    <Table />
                </div>
                <div className="col-sm px-2">
                    <h1>Valor de compra por cartão</h1>
                    <PieChart />
                </div>
            </div>
        </>
    );
}