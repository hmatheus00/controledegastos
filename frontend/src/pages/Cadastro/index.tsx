import FormCadastro from "../../components/Form";
import Header from "../../components/Header";

export default function Cadastro() {
    return (
        <>
            <Header />
            <h1 className="px-5">Cadastrar compra</h1>
            <FormCadastro />
            
        </>
    );
}