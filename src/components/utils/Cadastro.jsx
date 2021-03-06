import React,{useState, useEffect} from 'react';
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/cadastro.css"


export const dateMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
};
export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
export const cepMask = (value) => {
  return value
    .replace(/\D/g, "") 
    .replace(/(\d{2})(\d)/, "$1.$2") 
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};
export const telMask = (value) => {
  return value
    .replace(/\D/g, "") 
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

 const Cadastro = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");  
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCPF] = useState("");
  const [dtNasc, setDtNasc] = useState("");
  const [whats, setWhats] = useState("");
  const [sexo, setSexo] = useState("");
  const [senha, setSenha] = useState("");
 
  function mensagem(e) {
    console.log("#### Dados Recebidos ###");
    console.log(nome);
    console.log(email);
    console.log(sexo);
    console.log(dtNasc);
    console.log(cpf);
    console.log(whats);
    console.log(cep);
    console.log(endereco);

  }

/*   useEffect(() => {

    fetch("http://localhost:5000/api/voos",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setVoos(data)
        console.table(data)
        
    })

  }, []) */
    
  const cadastrar = () =>{
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clienteNome: nome,
        clienteEmail: email,
        clienteSexo: sexo,
        clienteDtNasc: dtNasc,
        clienteCpf: cpf,
        clientewhats: whats,
        clienteCep: cep,
        clienteEndereco: endereco,
        clienteSenha: senha,
      }),
    };
      fetch("http://localhost:5000/api/clientes", requestOptions)
      .then((response) => response.json())
      .then((data) => { console.table(data)})
    }



  return (
    
<div className="home">
    <div className="pesq" id="pesq">
          <Row id="pesq">
          <Col sm={12}>
              <h4 className='cad'>Cadastrar</h4>
            </Col>
            <Col sm={3}>
              <div className="txtNome">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                  />
                </div>
              </Col>
              <Col sm={3}>
              <div className="txtEmail">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </Col>
              <Col sm={2}>
              <div className="txtSenha">
                  <Form.Label  className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    type="password"
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="comboSexo">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control as="select" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option>G??nero</option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={2}>
              <div className="txtNasc">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={dtNasc}
                    onChange={(e) => setDtNasc(dateMask(e.target.value))}
                    placeholder="Data de Nascimento"
                  />
                </div>
              </Col>
              <Col sm={2}>
              <div className="txtCPF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={cpf}
                    onChange={(e) => setCPF(cpfMask(e.target.value))}
                    placeholder="CPF (N??o digite o seu)"
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtWhats">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={whats}
                    onChange={(e) => setWhats(telMask(e.target.value))}
                    placeholder="WhatsApp"
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtCep">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={cep}
                    onChange={(e) => setCep(cepMask(e.target.value))}
                    placeholder="CEP"
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="txtEndereco">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Endere??o"
                  />
                </div>
              </Col>
              <Col sm={5}>
              </Col>
                <Col sm={2}>
              <Button onClick={() => cadastrar()} size="xl" variant="success" className="btnpesquisar">
                Cadastrar
              </Button>
                </Col>
              </Row>

    </div>
</div>
  );
};

export default Cadastro