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
      <a href="mailto:tpc.tnp@nitp.ac.in">
      <i class="fas fa-envelope-open" >  Email: tpc.tnp@nitp.ac.in</i>
      </a><br/>
      <a href="https://www.linkedin.com/company/73066757">
      <i class="fab fa-linkedin">  Linkedin: placementnitp</i>
      </a><br/><br/>
      <h2>Our Team</h2>
      <Container>
        <Row><Col sm={12} md={6}>
        <Image className="justify-content-end avatar" alt="profile" src={Profile} fluid  />
      <h4>Dr. Samrat Mukherjee</h4>
      <span>Training And Placement Officer<br/>
      <a href="mailto:samrat@nitp.ac.in"> Email: samrat@nitp.ac.in
      </a><br/>
      <a href="https://www.linkedin.com/in/samrat-mukherjee-9348b0124"> Linkedin: @samrat-mukherjee-9348b0124
      </a><br/>
      <a href="https://www.facebook.com/samrat.mukherjee.7737"> Facebook: @samrat.mukherjee.7737
      </a><br/>
      <a href="tel:9973791523"> Mobile No.: 9973791523
      </a><br/>
        </span>
      <br/><br/>
          </Col>
          <Col sm={12} md={6}>
        <Image className="justify-content-end avatar" alt="profile" src={Profile2} fluid  />
      <h4>Dr. Shailesh M. pandey</h4>
      <span>
      Training And Placement Officer<br/><a href="mailto:smp.me@nitp.ac.in"> Email: smp.me@nitp.ac.in
      </a><br/> <a href="https://www.linkedin.com/in/dr-shailesh-m-pandey-34961820"> Linkedin: @dr-shailesh-m-pandey-34961820
      </a><br/>
      <a href="https://www.facebook.com/shaileshmpandey"> Facebook: @shaileshmpandey
      </a><br/>
      <a href="tel:8750111166"> Mobile No.: 8750111166
      </a><br/>
       </span>
      <br/><br/>
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
                <center>
              <Image className="justify-content-end avatar" alt="profile" src={detail.image} fluid  /></center>
              <br/>
              <h5>{detail.name}</h5>
              <h6>{detail.branch}</h6>
              
              <h6>Mobile: +91-{detail.mobile}</h6>
              <h6>
              Email id: <a href={detail.email} className="link">{detail.emailid}       </a></h6>
              <h6>
              Linkedin id: <a href={detail.linkedin} className="link">{detail.linkedinid}</a></h6>
              </div>
            </Col>
          ))}
          
            </Row>
            </Container>
    </div>
  );
};

export default FooterPanel;
