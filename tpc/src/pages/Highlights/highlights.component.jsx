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
            Open Source Meetups like Ha[.sh] and Programs like Winter Of Code aim to promote participantion in Open Source Contribution and selection in programs like Google Summer of Code, Outreachy, RGSoC etc. Students actively participate in Open source programs and work on Open Source Projects of their own as well.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-code icon fa-4x"></i><br/>
            <h4 className="sub-heading">CODING CULTURE</h4>

            </center>
            <div className="body-text-sub">
            Not only the Students from IIITT dominate the leaderboard on CodeChef, Hackerrank, HackerEarth, Topcoder but also we organize Global Coding Competitions and take up learning initiatives at IIITT like [Dev Streak]:Monthly coding competitions hosted by IIIT Trichy,[Cypher Ball] The code party: A global coding competition hosted by IIIT Trichy which includes top participants from International institutes.[bit_by_bit:] A “zero to hero” program to help students learn coding from scratch by building solid foundation in Data Structures and Algorithms.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-chart-line icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORKSHOP AND INDUSTRIAL LECTURE</h4>

            </center>
            <div className="body-text-sub">
            Aimed at making the students learn and experience the latest technologies and modern trends, it consists of highly experienced speakers and organizers from top companies and firms. Not only it helps the students sync with the modern trends but also help in chosing a better career path. Some of the recent talks were focussed on [Kafka Technologies], [Architecture of IOT and applications of it in various Industries with focus on cloud computing], [Microservices], [Digital marketing], [Automation and Autonomy:Past, Present and Future].
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-university icon fa-4x"></i><br/>
            <h4 className="sub-heading">WORLD CLASS FACULTY</h4>

            </center>
            <div className="body-text-sub">
            IIIT Trichy is constituted by the best faculties of India who hold exceptional teaching skills and methodologies. Apart from delivering quality education, they motivate students to engage in cutting edge research and are highly inclined towards ideation and innovation.
              </div>
          </Col>
          <Col sm={12} md={6}>
            <center><i class="fas fa-redo icon fa-4x"></i><br/>
            <h4 className="sub-heading">ALL ROUND DEVELOPMENT</h4>

            </center>
            <div className="body-text-sub">
            Participation in Extracurricular Activities throughout the year lead to 360 degree development of an individual. Some of them include Prothymos[Sports fest], Aahladh[Cultural fest], Atrang[Literature fest], other festive celebrations and awareness drives.
              </div>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
