import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";
import "../css/Aluno.css";

export const cpfMask = (value) => {
  console.log("Dentro do CPF");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const cepMask = (value) => {
  console.log("Dentro do CEP");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const dateMask = (value) => {
  console.log("Dentro da DATA");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1/$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const telMask = (value) => {
  console.log("Dentro do TEL");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "($1) $2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

const Aluno = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCPF] = useState("");
  const [nasc, setNasc] = useState("");
  const [whats, setWhats] = useState("");



  function mensagem(e) {
    console.log("#### Dados Recebidos ###");
    console.log(nome);
    console.log(email);
    console.log(nasc);
    console.log(cep);
    console.log(endereco);
    console.log(cpf);
    console.log(whats);

  }

  function limpar(e) {
    setNome("");
    setEmail("");
    setEndereco("");
    setCPF("");
    setCep("");
    setNasc("");
    setWhats("");
  }

  return (
    <div>
      <div className="CadastroEmpresas">
        <div
          className="ContainerCadastro"
          style={({ marginTop: "10px" }, { marginLeft: "70px" })}
        >
          <h2>Cadastro de Alunos</h2>
        </div>
        <div
          className="Formulario"
          style={({ marginTop: "10px" }, { marginLeft: "80px" })}
        >
          <Form style={{ margin: "5px" }}>
            <Row>
              <Col sm={4}>
                <div className="txtDescricao">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Nome
                  </Form.Label>
                  <Form.Control
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="txtEmail">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    E-mail
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="comboSexo">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Sexo
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                  </Form.Control>
                </div>
              </Col>
              
              <Col sm={2}>
                <div className="dateNasc">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Data de Nascimento
                  </Form.Label>
                  <Form.Control
                    value={nasc}
                    onChange={(e) => setNasc(dateMask(e.target.value))}
                  />
                </div>
              </Col>
            </Row>
            <Row>
            <Col sm={1}>
                <div className="txtCep">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    CEP
                  </Form.Label>
                  <Form.Control
                    value={cep}
                    onChange={(e) => setCep(cepMask(e.target.value))}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="txtEndereco">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Endereço
                  </Form.Label>
                  <Form.Control
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div className="txtCPF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    CPF
                  </Form.Label>
                  <Form.Control
                    value={cpf}
                    onChange={(e) => setCPF(cpfMask(e.target.value))}
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtWhats">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    WhatsApp
                  </Form.Label>
                  <Form.Control
                    value={whats}
                    onChange={(e) => setWhats(telMask(e.target.value))}
                  />
                </div>
              </Col>
            </Row>

            <br></br>
            <div>
              <Button onClick={() => limpar()} size="xl" variant="danger">
                Excluir 
              </Button>{" "}
              <Button onClick={() => mensagem()} size="xl" variant="success">
                Salvar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Aluno;
