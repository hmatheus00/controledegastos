import { Button, Form } from "react-bootstrap";

export default function Cadastro() {
    return (
        <>
            <h1 className="px-5">Cadastrar compra</h1>
            <Form className="px-5 py-2">
                <Form.Group controlId="formBasicComprador">
                    <Form.Label>Comprador</Form.Label>
                    <Form.Control type="text" placeholder="Comprador" />
                </Form.Group>
                <Form.Group controlId="formBasicVendedor">
                    <Form.Label>Vendedor</Form.Label>
                    <Form.Control type="text" placeholder="Vendedor" />
                </Form.Group>
                <Form.Group controlId="formBasicProduto">
                    <Form.Label>Produto</Form.Label>
                    <Form.Control type="text" placeholder="Nome do produto" />
                </Form.Group>
                <Form.Group controlId="formBasicValueProduct">
                    <Form.Label>Valor(R$)</Form.Label>
                    <Form.Control type="number" placeholder="Valor do produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cartão</Form.Label>
                    <Form.Control as="select">
                        <option>Selecione o cartão</option>
                        <option>Digio</option>
                        <option>Next</option>
                        <option>Nubank</option>
                    </Form.Control>
                </Form.Group>

                <Form>
                    <Form.Label>Parcelado</Form.Label>
                    <div key="inline-radio" className="mb-3">
                        <Form.Check inline label="Sim" type="radio" id="inline-radio-1" />
                        <Form.Check inline label="Não" type="radio" id="inline-radio-2" />
                    </div>
                </Form>
                <Form.Group>
                    <Form.Label>Quantidade de parcelas</Form.Label>
                    <Form.Control type="number" placeholder="Quantidade de parcelas" />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br />
                <Button className="py-1" variant="primary" type="submit">
                    Cadastrar
                 </Button>
            </Form>
        </>
    );
}