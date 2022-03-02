import Table from '../../components/Table';
import PieChart from "../../components/PieChart";

export default function Extrato() {

    return (
        <>
            <div className="row px-5 py-2">
                <div className="col-sm">
                    <Table />
                </div>
                <div className="col-sm py-5">
                    <PieChart />
                </div>
            </div>
        </>
    );
}