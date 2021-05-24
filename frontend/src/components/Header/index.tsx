import { Navbar } from "react-bootstrap"

export default function Header() {
    return (

        <>
            <Navbar className="px-3" bg="dark" variant="dark">
                <Navbar.Brand className="fw-bold" href="/">Home</Navbar.Brand>
                <Navbar.Brand className="fw-light" href="/cadastrar">Cadastrar compra</Navbar.Brand>
                <Navbar.Brand className="fw-light" href="/cadastrarCartao">Cadastrar cartão</Navbar.Brand>
                <Navbar.Brand className="fw-light" href="/extrato">Extrato</Navbar.Brand>
            </Navbar>
        </>
    );
}