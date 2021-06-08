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
                <Image className="profiletpo justify-content-end" alt="profile" src={Profile} fluid /><div className="credit">Dr. Samrat Mukherjee<br/>
Professor – In charge,
<br/>
Training & Placement Cell<br/>
National Institute of Technology Patna<br/>
Email: samrat@nitp.ac.in
<br/></div></center></div>
             
        </Col>
          <Col sm={12} md={6}>
          The National Institute of Technology Patna, the eighteenth of the thirty member NIT fraternity started functioning in 2004. In this short span of time, NIT Patna has established itself as a premier technological institute in India. NIT Patna has an impeccable campus placement record. Our students have secured challenging and highly paid positions in top ranking companies/ organizations in India and abroad. Their abilities are well recognized as per the excellent reports from the esteemed recruiters.

The Institute has a very active linkage with industry from its inception.Different PSUs are also awarding scholarships to our

students.NIT Patna has been achieving & setting benchmarks not only for its excellent academic and extracurricular activities but also for its research, consultancy and developmental activities. We're happy that NIT Patna ranked 5 (five) among NITS & ranked 37 (thirty seven) among all Engineering Institutes in India by Times Engineering Survey (Source: http://www.times engineering-survey.com). Recently, NIT Patna ranked 92 as per National Institute Ranking Framework (NIRF) among Top Engineering Colleges in India (June, 2020) achieving an improvement of 42 places than NIRF 2019 ranking. NIT Patna has a full-fledged Training & Placement Cell with all modern facilities to conduct the campus placement activities. Our campus placement activities for the session 2020-2021 will begin from the first week of August, 2020 and the process will continue till May 2021. Since our students are in great demand, we will appreciate it if you would consider contacting us at an early date. We look forward to hearing from you soon.
         <br/> <br/><br/>
          </Col>
          </Row>
          <hr color="white"></hr>
          <Row>
          <Col sm={12} md={6}>
                <div className="profile-div">
                  <center>
                <Image className="profiletpo justify-content-end" alt="profile" src={Profile2} fluid />
                <div className="credit">Dr. Shailesh M. pandey<br/>
Training Placement Officer
<br/>
Training & Placement Cell<br/>
National Institute of Technology Patna<br/>
Email: smp.me@nitp.ac.in
<br/></div></center>
          </div>  
          </Col>
          <Col sm={12} md={6}>
          The Institute has been making great efforts to face the challenges and opportunities presented by the current globalization scenario. The institute’s mission has always been to nurture the students into capable and innovative professionals who contribute to the growth of technology. The institute offers campus placements to students graduating with B.Tech and MTech in (Mechanical Engineering, Civil Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering and Computer Science and Engineering),BArch,IMSc in (Physics,Chemistry,Mathematics). I am confident that our students will make a mark wherever they go and make their alma mater proud of them. I must thank the companies that have displayed a strong faith in our students during and beyond the placement process. Also we extend a special invitation to the new recruiters who are yet to catch a glimpse of our students and the institute for the upcoming placements. The purpose of an institution of higher learning is to impart/inculcate the best of the academic experience in a chosen/specific/specialization whose pyramidal base, firmly rests on the strong core curriculum in the initial two years coupled with the specialized knowledge in the final two years. From day one, faculty in particular and all other staff emphasize on an all-round growth/development of the student with focus on academics.
<br/>
<br/>
          </Col>
        
        
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default TPO;
