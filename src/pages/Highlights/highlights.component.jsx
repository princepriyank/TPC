import React from "react";
import "./highlights.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Highlights = () => {
  return (
    <div id="Highlights">
      
      <div className="Text pt-3 text-center font-details pb-3">
      <hr color="white" width="100%"/>
          <h1>
            Why Recruit at NITP?
          </h1>
        </div>
        <div className="body-text">Our Vision is to achive <span className="high">"World Class Excellence in Technology" </span>. We've embarked on a mission to impart Technology education to students and future leaders and engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.</div>
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
            <center><i class="fas fa-code icon fa-4x"></i><br/>
            <h4 className="sub-heading">CODING CULTURE</h4>

            </center>
            <div className="body-text-sub">
            Students from NIT Patna dominate the leader boards of Codechef, Codeforces, Hackerrank, Leetcode etc. Our Coding clubs regularly organises coding competitions on various platforms to help the students strengthen their coding skills. The <span className="high">Google Developer Student Clubs (DSC)</span> of NIT Patna and the <span className="high">Hackslash Club</span> powered by Mozilla frequently organise workshops on trending technologies in Machine learning and Web/Android Development. 
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-code-branch icon fa-4x"></i><br/>
            <h4 className="sub-heading">Technical Clubs</h4>

            </center>
            <div className="body-text-sub">
            NIT Patna has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter college level. The <span className="high"> American Society of Student Section (ASME)</span> of NIT Patna and the<span className="high">  SAE club</span> hold regular training and workshops for mechanical engineering. The <span className="high"> IEEE student branch </span>regularly hosts distinguished lectures , hardware hackathons and problem solving using R&D, IoT etc. The ISIE (Imperial Society of Innovative Engineers ) India NIT Patna works on renewable sources of energy. The <span className="high">  CESC clubs </span>conducts AutoCAD, design and drafting etc workshops for Civil engineering students.
              </div>
          </Col>
         
          <Col sm={12} md={6}>
            <center><i class="fas fa-chart-line icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORKSHOP AND INDUSTRIAL LECTURE</h4>

            </center>
            <div className="body-text-sub">
            NIT Patna regularly conducts workshops, industrial lectures and Conferences for Mechanical, Civil, Electrical, Electronics and Computer Science Departments. Students get to interact with pioneers in the respective fields which not only helps them to find their interest but also helps them to choose better career options. Some of the latest workshops and conferences include<span className="high"> “Soft computing techniques”, “International Conference on renewable resources”, “Aatmanirbhar Bharat: A roadmap for inclusive growth” and “Deep learning and its applications”</span>.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-university icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORLD CLASS FACULTY</h4>

            </center>
            <div className="body-text-sub">
            NIT Patna is constituted by the best faculties of India who hold<span className="high"> exceptional teaching skills and methodologies</span>. Apart from delivering quality education, they motivate students to engage in cutting edge research and are highly inclined towards ideation and innovation.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-redo icon fa-4x"></i><br/>
            <h4 className="sub-heading">ALL ROUND DEVELOPMENT</h4>

            </center>
            <div className="body-text-sub">
            Participation in Extracurricular Activities throughout the year leads to 360 degree development of an individual. Our annual technical and cultural fest, <span className="high">Corona and Melange</span>, lets the students prepare hard and show their extra curricular skills.  Students also participate in<span className="high"> NSS and NCC</span> and spread awareness in the society.
              </div>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
