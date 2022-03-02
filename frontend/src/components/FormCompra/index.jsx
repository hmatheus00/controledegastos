import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { BASE_URL } from "../../utils/request";

const initialValues = {
  comprador: "",
  vendedor: "",
  produto: "",
  data: new Date(),
  cartao: {
    id: 0,
  },
  parcelasPagas: 0,
  totalParcelas: 0,
  valor: 0,
  descricao: "",
};

export default function FormCompra() {
  const [compra, setCompra] = useState(initialValues);
  const [cartoes, setCartoes] = useState([]);

  const setInput = (novosCampos) => {
    setCompra((compra) => ({ ...compra, ...novosCampos }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    const data = await axios.post(`${BASE_URL}/compras`, compra);
    const status = data.status;
    console.log(status);
    if (status === 201) {
        alert("Compra cadastrada!");
        window.location.reload();
    }else{
        alert("Ocorreu algum erro! Tente novamente mais tarde!");
    }
  }

  useEffect(() => {
    async function getItems() {
      try {
        const data = await axios.get(`${BASE_URL}/cartoes`);
        setCartoes(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

  return (
    <>
      <h1 className="px-5 py-2">Cadastrar Compra</h1>
      <Form className="px-5 py-2">
        <Form.Group controlId="formBasicComprador">
          <Form.Label>Comprador</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comprador"
            onChange={(e) => setInput({ comprador: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicVendedor">
          <Form.Label>Vendedor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Vendedor"
            onChange={(e) => setInput({ vendedor: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicProduto">
          <Form.Label>Produto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do produto"
            onChange={(e) => setInput({ produto: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicValueProduct">
          <Form.Label>Valor(R$)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Valor do produto"
            onChange={(e) => setInput({ valor: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cartão</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setInput({ cartao: { id: parseFloat(e.target.value) } })
            }
          >
            <option>Selecione um cartão</option>
            {cartoes.map((cartao) => (
              <option key={cartao.id} value={cartao.id}>
                {cartao.nomeCartao}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantidade de parcelas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantidade de parcelas"
            onChange={(e) => setInput({ totalParcelas: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setInput({ data: e.target.value })}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setInput({ descricao: e.target.value })}
          />
        </Form.Group>
        <br />
        <Button
          className="py-1"
          variant="primary"
          type="submit"
          onClick={onSubmit}
        >
          Cadastrar
        </Button>
      </Form>
    </>
  );
}
