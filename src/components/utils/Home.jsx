import React,{useState} from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css"

function Home() {
  return (
<div class="home">
    <div className="pesq" id="pesq">
          <Row id="pesq">
        <Col sm={3}>
                <div className="deLocal">
                  <Form.Label className="text-left">
                    De:
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                    <option>Escolha a cidade</option>
                    <option>Belo Horizonte</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Uberlândia</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={3}>
                <div className="paraLocal">
                  <Form.Label className="text-left" >
                    Para:
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                    <option>Escolha a cidade</option>
                    <option>Belo Horizonte</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Uberlândia</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={3}>
             {/*  <FormGroup>
                <ControlLabel>Label</ControlLabel>
                <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
                <HelpBlock>Help</HelpBlock>
              </FormGroup>; */}
              </Col>

              </Row>
        

    </div>
    {/* <div>
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
              <Button onClick={() => buscar()} size="xl" variant="danger">
                Buscar
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div> */}





</div>
  );
};

export default Home;