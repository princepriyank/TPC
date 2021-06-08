import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./director.styles.css";
import Profile from "../../assets/img/profile/director.jpg";
import Image from "react-bootstrap/Image";

const Director = () => {
  return (
    <div id="director">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">Director's Message</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <div className="profile-div">
                <Image className="profile justify-content-end" alt="profile" src={Profile} fluid /><br/><center>Prof. Pradip Kumar Jain</center></div>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded main-cont">
              It is my pleasure to introduce one of the oldest Technological Institutes of NorthIndia National Institute of Technology Patna whose history goes back to 1876 when four Survey schools were established in Dacca, Hoogly, Cuttack and Patna.The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued to prosper. In 1882, a separate altogether, named as Bihar Industrial School, was opened in the premises of the survey school in Patna college campus. In July 1886, these two separate institutions were merged and given the name of Bihar School of Engineering under the leadership of Mr. A Ewbank, the then principal of Patna College. Between 1892 and 1902, a functional building which is at present the main administrative building of NIT Patna, was built. In 1924, the engineering school was upgraded to Bihar College of Engineering under Patna University.In 2004, MHRD, Government of India upgraded Bihar College of Engineering to National Institute of Technology Patna and in 2007 it came under the act "NIT Act 2007 and declared Institute of National Importance.<br/> At present NIT Patna is offering undergraduate programs (B. Tech & B. Arch) and Post graduate program (M. Tech & MRUP) along with Phd Programs. Total

number of students are nearly 3000. The institute has state-of-art laboratories, in each department. This great institute has produced a large number of alumni who served the nation with distinction like Mr. M. B. Verma, former Program Director of Prestigious LCA Project of DRDO, Dr. Ratan K. Sinha, Chairman Atomic Energy Commission of India, Mr. C. Prasad, Ex. D G CPWD to name a few. The Institute has a very active linkage with industry from its inception. Different PSUs are awarding scholarships to our students. The institute has established a Center of Excellence in Computer Engineering in collaboration with Hewlett Packard. All our passed out graduates are serving the Indian Industry and PSUs with distinction.I appreciate the efforts of our vibrant Training and Placement Cell who are constant ouch with industries for ing and placement of our students. I am sure our recruiters find our students very competent and they will be visiting us regularly. We look forward towards enduring and fruitful relationships with our esteemed recruiters.I wish Training & Placement Cell all the success.

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Director;
