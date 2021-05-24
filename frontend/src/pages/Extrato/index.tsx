import Table from '../../components/Table';
import PieChart from "../../components/PieChart";

export default function Extrato() {

    return (
        <>
            <div className="row mt-2 px-2">
                <div className="col-sm">
                    <Table />
                </div>
                <div className="col-sm px-2">
                    <h1>Porcentagem de compra</h1>
                    <PieChart />
                </div>
            </div>
        </>
    );
}