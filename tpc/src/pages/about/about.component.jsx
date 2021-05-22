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
              National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924. This made this institute the 6th Oldest Engineering Institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. 
<br/>
National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities. It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph .D programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories . At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.

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
