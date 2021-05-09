import { Nav, Navbar } from "react-bootstrap"

export default function Header() {
    return (

        <>
            <Navbar className="px-3" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Cadastrar</Nav.Link>
                    <Nav.Link href="#pricing">Extrato</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}