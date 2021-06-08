import React from "react";
import "./TPO.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assets/img/tpo/TPO_1.jpg";
import Profile2 from "../../assets/img/tpo/TPO_2.jpeg";
import Image from "react-bootstrap/Image";
const TPO = () => {
  return (
    <div id="TPO">
      <div className="Text pt-3 text-center font-details pb-3">
          <h1>
            Training Placement Officer's Message
          </h1>
        </div>
        
      <div className="body-text">
        <Container>
        <Row>
        <Col sm={12} md={6}>
        
                <div className="profile-div">
                  <center>
                <Image className="profile justify-content-end" alt="profile" src={Profile} fluid /></center></div>
             
        </Col>
          <Col sm={12} md={6}>
          The National Institute of Technology Patna, the eighteenth of the thirty member NIT fraternity started functioning in 2004. In this short span of time, NIT Patna has established itself as a premier technological institute in India. NIT Patna has an impeccable campus placement record. Our students have secured challenging and highly paid positions in top ranking companies/ organizations in India and abroad. Their abilities are well recognized as per the excellent reports from the esteemed recruiters.

The Institute has a very active linkage with industry from its inception.Different PSUs are also awarding scholarships to our

students.NIT Patna has been achieving & setting benchmarks not only for its excellent academic and extracurricular activities but also for its research, consultancy and developmental activities. We're happy that NIT Patna ranked 5 (five) among NITS & ranked 37 (thirty seven) among all Engineering Institutes in India by Times Engineering Survey (Source: http://www.times engineering-survey.com). Recently, NIT Patna ranked 92 as per National Institute Ranking Framework (NIRF) among Top Engineering Colleges in India (June, 2020) achieving an improvement of 42 places than NIRF 2019 ranking. NIT Patna has a full-fledged Training & Placement Cell with all modern facilities to conduct the campus placement activities. Our campus placement activities for the session 2020-2021 will begin from the first week of August, 2020 and the process will continue till May 2021. Since our students are in great demand, we will appreciate it if you would consider contacting us at an early date. We look forward to hearing from you soon.
         <br/> <div className="credit">Dr. Samrat Mukherjee<br/>
Professor – In charge,
<br/>
Training & Placement Cell<br/>
National Institute of Technology Patna<br/>
email: samrat@nitp.ac.in
<br/></div>
          </Col>
          
          <Col sm={12} md={6}>
          The National Institute of Technology Patna, the eighteenth of the thirty member NIT fraternity started functioning in 2004. In this short span of time, NIT Patna has established itself as a premier technological institute in India. NIT Patna has an impeccable campus placement record. Our students have secured challenging and highly paid positions in top ranking companies/ organizations in India and abroad. Their abilities are well recognized as per the excellent reports from the esteemed recruiters.

The Institute has a very active linkage with industry from its inception.Different PSUs are also awarding scholarships to our

students.NIT Patna has been achieving & setting benchmarks not only for its excellent academic and extracurricular activities but also for its research, consultancy and developmental activities. We're happy that NIT Patna ranked 5 (five) among NITS & ranked 37 (thirty seven) among all Engineering Institutes in India by Times Engineering Survey (Source: http://www.times engineering-survey.com). Recently, NIT Patna ranked 92 as per National Institute Ranking Framework (NIRF) among Top Engineering Colleges in India (June, 2020) achieving an improvement of 42 places than NIRF 2019 ranking. NIT Patna has a full-fledged Training & Placement Cell with all modern facilities to conduct the campus placement activities. Our campus placement activities for the session 2020-2021 will begin from the first week of August, 2020 and the process will continue till May 2021. Since our students are in great demand, we will appreciate it if you would consider contacting us at an early date. We look forward to hearing from you soon.
<div className="credit">Dr. Samrat Mukherjee<br/>
Professor – In charge,
<br/>
Training & Placement Cell<br/>
National Institute of Technology Patna<br/>
email: samrat@nitp.ac.in
<br/></div>
          </Col>
          <Col sm={12} md={6}>
                <div className="profile-div">
                  <center>
                <Image className="profile justify-content-end" alt="profile" src={Profile2} fluid /></center></div>
            
          </Col>
        
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default TPO;
