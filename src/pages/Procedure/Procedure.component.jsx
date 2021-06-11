import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Procedure.styles.css";

const Procedure = () => {
    return (
        <div id="c" className="c">
            <center><h1 className="white">PROCEDURE</h1></center>
            <hr color="white" width="80%"/>
            <br></br>

            <center><h1 className="white">Recruiters</h1></center>
            <Container>
                <br />
                <Row>
                    The placement process follows a set of guidelines as mentioned below:
                    <ul>
                        <li>
                            The Training and Placement Department, NIT Patna <span className="high">sends invitations along with placement performa </span>to organizations to participate in the campus placements.
                        </li>
                        <li>
                            Organization <span className="high">fills in the placement performa </span>containing details of the job offer (pay package, place of posting, allowances and other bonuses). Placement performa can be sent either by<span className="high"> post or email to T&P, NIT Patna(placement@nitp.ac.in)</span>.
                        </li>
                        <li>
                            The organization details along with<span className="high"> job offer is made available to the students on resume manager</span>, requesting them to apply.
                        </li>
                        <li>
                            The list of the students who have applied is provided to the organization along with their<span className="high">CV's.</span> 
                        </li>
                        <li>
                            Organizations can also<span className="high"> view resumes of interested students and shortlist students using resume manager</span>. Password provided on request.
                        </li>
                        <li>
                            Organizations come to <span className="high">campus on the allotted date(s) and conduct tests and/or interviews</span> as per their recruitment process.
                        </li>
                        <li>
                            The organization is expected to<span className="high"> furnish the list of selected students </span>preferably on the day of campus visit.
                        </li>
                    </ul>
                </Row>

                <br />
                <hr color="white" width="100%"/>
            </Container>
        </div>
    );
};

export default Procedure;
