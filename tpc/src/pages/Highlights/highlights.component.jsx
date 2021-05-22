import React from "react";
import "./highlights.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Highlights = () => {
  return (
    <div id="Highlights">
      <div className="Text pt-3 text-center font-details pb-3">
          <h1>
            Why Recruit at NITP?
          </h1>
        </div>
        <div className="body-text">Our Vision is to achive "World Class Excellence in Information and Communication Technology" . We've embarked on a mission to impart Information Technology education to students and future leaders and engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.</div>
      <br/>
      <div className="body-text">
        <Container>
        <Row>
          <Col sm={12} md={6}>
            <center><i class="fas fa-graduation-cap icon fa-4x"></i><br/>
            <h4 className="sub-heading">BEST OF THE BEST MAKE IT !!</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-code-branch icon fa-4x"></i><br/>
            <h4 className="sub-heading">OPEN SOURCE CULTURE</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-code icon fa-4x"></i><br/>
            <h4 className="sub-heading">CODING CULTURE</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-chart-line icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORKSHOP AND INDUSTRIAL LECTURE</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-university icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORLD CLASS FACULTY</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-redo icon fa-4x"></i><br/>
            <h4 className="sub-heading">ALL ROUND DEVELOPMENT</h4>

            </center>
            <div className="body-text-sub">
            The students are admitted through the esteemed JEE Mains and represents the <span className="high">Top 2%</span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.
              </div>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
