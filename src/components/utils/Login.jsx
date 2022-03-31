import React,{useState, useEffect} from 'react';
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css"


 const Login = (props) => {
  const [email, setEmail] = useState("");  
  const [senha, setSenha] = useState("");

  


 
  function mensagem(e) {
    console.log("#### Dados Recebidos ###");
    console.log(email);
    console.log(senha);


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
        clienteEmail: email,
      }),
    };
      fetch("http://localhost:5000/api/clientes", requestOptions)
      .then((response) => response.json())
      .then((data) => { console.table(data)})

    }



  return (
    
<div className="home">
    <div className="pesq" id="pesq">
          <Row id="pesq-login">
          <Col sm={12}>
              <h4 className='cad'>Login</h4>
            </Col>
            <Col sm={3}>
                </Col>
              <Col sm={6}>
              <div className="txtEmail">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  </Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                </Col>
                <Col sm={3}>
                </Col>
                <Col sm={3}>
                </Col>
              <Col sm={6}>
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

              <Col sm={3}>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
              <Button onClick={() => cadastrar()} size="xl" variant="success" className="btnpesquisar">
                Fazer Login
              </Button>
                </Col>

              </Row>

    </div>
</div>
  );
};

export default Login;