import React from "react";
import Image from "react-bootstrap/Image";
import Seat1 from "../../assets/img/seat/seat1.png";
import Seat2 from "../../assets/img/seat/seat2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Seat.styles.css";

const Seat = () => {
  return (
    <div id="Seat">
     <center><h1>Seat Matrix</h1></center>
      <Container>
        <Row>
          <Col sm={12} md={6}>
          <Image src={Seat1} fluid/>
          </Col>
          <Col sm={12} md={6}>
          <Image src={Seat2} fluid/>
          </Col>
        </Row>
      
      <br/>
      
      </Container>
    </div>
  );
};

export default Seat;
