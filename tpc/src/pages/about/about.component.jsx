import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/tandpcell.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT US</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
              National Institute of Technology, Patna, also known as NIT Patna, is an Institute of National Importance .
NIT Patna marked its humble beginning in 1886 and it is the 6th Oldest Engineering Institute of India. It is an autonomous institute functioning directly under Ministry of Human Resource Development, Government of India. 
It is one of the top 100 institutes (ranked 92) for engineering and technology in India  according to NIRF 2020 ranking.
<br/>The students are admitted through the esteemed JEE Mains and represent the Top 1% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.

<Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                       Contact US
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1ak6N26arrYtVso0FZrlLJAv98lhSLKqC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Brochure
                      </Button>
                    </a>
                  </div>
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
