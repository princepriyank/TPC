import React from "react";
import "./footer.style.css";
import {data} from "./tpc-data";
import Profile from "../../assets/img/tpo/tpo.jpg";
import Profile2 from "../../assets/img/tpo/tpo2.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FooterPanel = () => {
  return (
    <div className="footer" id="footer">
      <center><h1>Contact</h1>
      <h4 className="text-sub">Reach out to us via:</h4>
      <a  href="tel:8750111166">
      <i class="fas fa-phone-alt">   Phone: +91: 8750111166</i>
      </a><br/>
      <a href="mailto:tnp@nitp.ac.in">
      <i class="fas fa-envelope-open" >  Email: tnp@nitp.ac.in</i>
      </a><br/>
      <a href="https://www.linkedin.com/company/73066757">
      <i class="fab fa-linkedin">  Linkedin: placementnitp</i>
      </a><br/><br/>
      <h2>Our Team</h2>
      <Container>
        <Row><Col sm={12} md={6}>
        <Image className="justify-content-end avatar" alt="profile" src={Profile} fluid  />
      <h4>Dr. Samrat Mukherji</h4>
      <span>Training And Placement Officer<br/>
        Email: samrat@nitp.ac.in</span>
      <br/>
          </Col>
          <Col sm={12} md={6}>
        <Image className="justify-content-end avatar" alt="profile" src={Profile2} fluid  />
      <h4>Dr. Shailesh M. pandey</h4>
      <span>
      Training And Placement Officer<br/>  Email: smp.me@nitp.ac.in</span>
      <br/>
          </Col></Row>
          </Container>
      <br/>
      <h3>Training and Placement Coordinators:</h3>
      </center>
      <br/>
      <Container>
        <Row>
          {data.map((detail)=>(
            <Col xs={12} sm={6} md={4}>
              <div class="detail">
              <h5>{detail.name}</h5>
              <h6>{detail.branch}</h6>
              <h6>Email: {detail.email}</h6>
              <h6>Mobile: +91-{detail.mobile}</h6>
              </div>
            </Col>
          ))}
          
            </Row>
            </Container>
            <center>Made with love by Priyank</center>
    </div>
  );
};

export default FooterPanel;
