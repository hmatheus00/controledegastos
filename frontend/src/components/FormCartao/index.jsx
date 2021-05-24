import { Button, Form } from "react-bootstrap";
import { useState } from 'react'
import axios from "axios";
import { BASE_URL } from "../../utils/request";

const initialValues = {
    nomeCartao: '',
    compras: []
}


export default function FormCartao() {

    const [cartao, setCartao] = useState(initialValues);

    function setInput(novosCampos) {
        setCartao(cartao => ({ ...cartao, ...novosCampos }));
    }
    async function onSubmit(evento){
        evento.preventDefault();
        const response = await axios.post(`${BASE_URL}/cartoes`, cartao);
        console.log(response);
        if(response && response.status === 201){
            setTimeout(()=> {
                alert("CADASTRADO COM SUCESSO!");
                window.location.reload();
            }, 1000);
        }else{
            setTimeout(() => alert("ERRO NO CADASTRO!"), 500);
            
        }

    }

    return (
        <>
            <Form className="px-5 py-2" >
                <Form.Group controlId="formBasicComprador">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" onChange={e => setInput({ nomeCartao: e.target.value })} />
                </Form.Group>
                <br />
                <Button className="py-1" variant="primary" type="submit" onClick={evento => onSubmit(evento)}>
                    Cadastrar
                </Button>
            </Form>

        </>
    );
}