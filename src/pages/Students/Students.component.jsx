import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Student.styles.css";

const Student = () => {
    return (
        <div id="Students">
            
            <center><h1 className="white">Students</h1></center>
            <Container>
                <br />
                <Row>
                    There are certain rules that every student must adhere to, for placement
                    <ul>
                        <li>
                        The<span className="high">resumes should be uploaded</span>  within the time allotted.
                        </li>
                        <li>
                        Once a student has applied for a company, he<span className="high"> must attend the Pre-Placement event</span> and once shortlisted, <span className="high">must attend the first phase</span> of the process.
                        </li>
                        <li>
                        The students are expected to<span className="high"> behave in a professional manner</span> and speaking ill of the company, college or the placement team would invite serious penalties.<span className="high"> Punctuality & formal dressing are expected</span> as well.
                        </li>
                        <li>
                        At NIT Patna, <span className="high">ragging</span> is taken very seriously, and any student indulging in any such activity would be<span className="high"> debarred from the entire placement process</span>.
                        </li>
                   <li> NIT Patna gives great emphasis on in <span className="high">situ industrial training</span>. Practical Training for B Tech. students is an integral part of the curriculum and is in-built into the programs of study.
                   </li>
                        <li>
                            Students have to<span className="high">undergo internship for duration of 4-6 weeks (June-July) during summer vacations</span> , after sixth semester, for all branches of engineering.
                        </li>
                        <li>
                        Students need to <span className="high">download the template of Training letter for Industrial training/Internship</span> from this website and after duly filling it they have to apply it in placement cell . The training letter should be processed within a week.
                        </li>
                    </ul>
                </Row>

                <br />

            </Container>
        </div>
    );
};

export default Student;
