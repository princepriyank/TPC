import React from "react";
import Image from "react-bootstrap/Image";
import Recruit from "../../assets/img/recruiter/recruiters.PNG";
import Recruit2 from "../../assets/img/recruiter/recruiters2.PNG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Recruiters = () => {
  return (
    <div id="Recruiters">
      <center><h1>Past Recruiters</h1></center>
      <Container>
        <Row>
          <Col sm={12} md={6}>
          <Image src={Recruit} fluid/>
          </Col>
          <Col sm={12} md={6}>
          <Image src={Recruit2} fluid/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recruiters;
