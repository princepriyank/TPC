import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Student.styles.css";

const Student = () => {
    return (
        <div id="Students">
            <center><h1>Students</h1></center>
            <Container>
                <br />
                <Row>
                    There are certain rules that every student must adhere to, for placement
                    <ul>
                        <li>
                        The resumes should be uploaded within the time allotted.
                        </li>
                        <li>
                        Once a student has applied for a company, he must attend the Pre-Placement event and once shortlisted, must attend the first phase of the process.
                        </li>
                        <li>
                        The students are expected to behave in a professional manner and speaking ill of the company, college or the placement team would invite serious penalties. Punctuality & formal dressing are expected as well.
                        </li>
                        <li>
                        At NIT Patna, ragging is taken very seriously, and any student indulging in any such activity would be debarred from the entire placement process.
                        </li>
                    </ul>
                    <br />
                    NIT Patna gives great emphasis on in situ industrial training. Practical Training for B Tech. students is an integral part of the curriculum and is in-built into the programs of study.
                    <br />
                    <ul>
                        <li>
                            Students have to undergo internship for duration of 4-6 weeks (June-July) during summer vacations, after sixth semester, for all branches of engineering.
                        </li>
                    </ul>
                </Row>

                <br />

            </Container>
        </div>
    );
};

export default Student;
