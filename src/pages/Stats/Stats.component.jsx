import React from "react";
import Image from "react-bootstrap/Image";
import Placement1 from "../../assets/img/placement/placement.PNG";
import Placement2 from "../../assets/img/placement/placement2.PNG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Stats.styles.css";

const Stats = () => {
  return (
    <div id="Stats">
     <center><h1>Placement Statistics</h1></center>
      <Container>
        <Row>
          <Col sm={12} md={6}>
          <Image src={Placement1} fluid/>
          </Col>
          <Col sm={12} md={6}>
          <Image src={Placement2} fluid/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stats;
