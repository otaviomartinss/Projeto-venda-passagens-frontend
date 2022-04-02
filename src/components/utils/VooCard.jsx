import "../css/voo_card.css"
import React,{useState, useEffect} from 'react';
import { Form, Col, Row, Button, Container } from "react-bootstrap";

const VooCard = ({idvoo, devoo, paravoo, ciavoo, horavoo, tempovoo, precovoo, dataida, datavolta}) => {

  const comprar = () =>{
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        compraVoo: idvoo,
        compraTotal: precovoo,
        compraIda: dataida,
        compraVolta: datavolta,
      }),
    };
      fetch("http://localhost:5000/api/compras", requestOptions)
      .then((response) => response.json())
      .then((data) => { console.table(data)})
    }

  return (
    <div className="card">
      <Row>
        <Col sm={2} id="infos">
        <h1>voo saindo de:</h1>
        <h2>{devoo}</h2>
        </Col>
        <Col sm={2} id="infos">
        <h1>para:</h1>
        <h2>{paravoo}</h2>
        </Col>
        <Col sm={1} id="infos">
        <h1>Companhia:</h1>
        <h2>{ciavoo}</h2>
        </Col>
        <Col sm={2} id="infos">
        <h1>Horario:</h1>
        <h2>{horavoo}</h2>
        </Col>
        <Col sm={2} id="infos">
        <h1>Tempo de viagem:</h1>
        <h2>{tempovoo}</h2>
        </Col>
        <Col sm={2} id="infos">
        <h1>Preço da passagem:</h1>
        <h2>{precovoo}</h2>
        </Col>
        <Col sm={5}></Col>
        <Col sm={2} id="esp">
        <Button onClick={comprar} size="xl" variant="success" className="btnpesquisar">
          Comprar
        </Button>
        </Col>
      </Row>
    </div>

    )
           
}


export default VooCard;