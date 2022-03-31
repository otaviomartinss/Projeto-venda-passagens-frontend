import React,{useState, useEffect} from 'react';
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css"
import vooCard from "./vooCard.jsx"


export const dateMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1/$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

 const Home = (props) => {
  const [deInput, setSaida] = useState("");
  const [paraInput, setDest] = useState("");
  const [dtIda, setDtIda] = useState("");
  const [dtVolta, setDtVolta] = useState("");
  const [passageiros, setPassa] = useState("1");
  const [voos, setVoos] = useState([]);


 
  function mensagem(e) {
    console.log("#### Dados Recebidos ###");

    console.log(deInput);
    console.log(paraInput);
    console.log(dtIda);
    console.log(dtVolta);
    console.log(passageiros); 
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

  }, []) 
  */
    const pesquisas = () =>{
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
      fetch("http://localhost:5000/api/voos", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setVoos(data)
        console.table(data)
        console.log()
      })

    }
  
  
  
  
    
  const pesquisa = async() => {
    console.log("Estou no botão")
    console.log(deInput)
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(requestOptions)
    fetch("http://localhost:5000/api/voos/" + deInput)
    .then((response) => response.json())
    .then((data) => { console.table(data)})
    .catch((error) => {
      console.log(error)
    })

    }



  return (
    
<div className="home">
    <div className="pesq" id="pesq">
          <Row id="pesq">
        <Col sm={3}>
                <div className="deLocal">
                  <Form.Label className="text-left">
                    De:
                  </Form.Label>
                  <Form.Control as="select" value={deInput} onChange={(e) => setSaida(e.target.value) }>
                    <option>Escolha a cidade...</option>
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
                  <Form.Control as="select" value={paraInput} onChange={(e) => setDest(e.target.value)}>
                    <option>Escolha a cidade...</option>
                    <option>Belo Horizonte</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Uberlândia</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={2}>
              <div className="txtIda">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Data de ida:
                  </Form.Label>
                  <Form.Control
                    value={dtIda}
                    onChange={(e) => setDtIda(dateMask(e.target.value))}
                    placeholder="__/__/____"
                  />
                </div>
              </Col>
              <Col sm={2}>
              <div className="txtVolta">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Data de volta:
                  </Form.Label>
                  <Form.Control
                    value={dtVolta}
                    onChange={(e) => setDtVolta(dateMask(e.target.value))}
                    placeholder="__/__/____"
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="passageiros">
                  <Form.Label className="text-left" >
                    Passageiros:
                  </Form.Label>
                  <Form.Control as="select" value={passageiros} onChange={(e) => setPassa(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={5}>
                </Col>
                <Col sm={2}>
              <Button onClick={pesquisa} size="xl" variant="success" className="btnpesquisar">
                Pesquisar
              </Button>
              
                </Col>

                <Col sm={12}>
                  <div>
                    {/* <vooCard></vooCard> */}
                  </div>
                  
                  
                  
                  
                  
                  
                   {/* <Container>
                  <div className='voos-disp'>
                      <h2>voos disponíveis</h2>
                    {voos.length > 0 &&
                    voos.map((voo) => (
                    <vooCard
                    de={voo.de}
                    para={voo.para}
                    cia={voo.cia}
                    hora={voo.hora}
                    tempo={voo.tempo}
                    preco={voo.preco}
                    />))}
                  </div>
                  </Container> */}
                  
                
                </Col>
              </Row>

    </div>
</div>
  );
};

export default Home;