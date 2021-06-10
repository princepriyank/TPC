import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Procedure.styles.css";

const Procedure = () => {
    return (
        <div id="c" className="c">
            <center><h1 className="white">Recruiters</h1></center>
            <Container>
                <Row>
                Owing to its brand value and the performance of the several students recruited every year, it is no surprise that NIT Patna offers great placements. Some of the past recruiters are Amazon, Adobe, Oyo, Oracle, Samsung, Nokia, Sigmoid, Capgemini, Sabre,Infoedge, Infosys, TATA, Factset, Alstom, ZS, L & T,  CGI, Jio, Vedanta, Oneplus, Optum, Virtusa and many more.
                </Row>
            </Container>
            <br></br>


            <center><h2 className="white">Procedure</h2></center>
            <Container>
                <br />
                <Row>
                    The placement process follows a set of guidelines as mentioned below:
                    <ul>
                        <li>
                            The Training and Placement Department, NIT Patna sends invitations along with placement performa to organizations to participate in the campus placements.
                        </li>
                        <li>
                            Organization fills in the placement performa containing details of the job offer (pay package, place of posting, allowances and other bonuses). Placement performa can be sent either by post or email to T&P, NIT Patna(placement@nitp.ac.in).
                        </li>
                        <li>
                            The organization details along with job offer is made available to the students on resume manager, requesting them to apply.
                        </li>
                        <li>
                            The organization details along with job offer is made available to the students on resume manager, requesting them to apply.
                        </li>
                        <li>
                            The list of the students who have applied is provided to the organization along with their CV's.
                        </li>
                        <li>
                            Organizations can also view resumes of interested students and shortlist students using resume manager. Password provided on request.
                        </li>
                        <li>
                            Organizations come to campus on the allotted date(s) and conduct tests and/or interviews as per their recruitment process.
                        </li>
                        <li>
                            The organization is expected to furnish the list of selected students preferably on the day of campus visit.
                        </li>
                    </ul>
                </Row>

                <br />

            </Container>
        </div>
    );
};

export default Procedure;
