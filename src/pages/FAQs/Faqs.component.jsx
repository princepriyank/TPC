import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import "./Faqs.styles.css";

const FAQs = () => {
    return (
        <div id="FAQs">
            <center><h1>FAQs</h1></center>
            <Container>
                <br />
                <Row>
                    <Accordion defaultActiveKey="0" className="accordion_class">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="toggle">
                                Q. Why should I recruit from NIT Patna?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Every year, more than 700 talented students pass out of NIT Patna. They enter various fields and excel in every role they take up. Along with this, some of the best companies recruit talent on-campus. Your organization is guaranteed to find students fit for the roles you offer, be it interns or Engineers.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="toggle">
                                Q. What sort of companies visit NIT Patna?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Companies of all domains visit NIT Patna. Whether it is consulting firms, PSU’s, Electronics companies or companies in the core engineering fields and start-up.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2" className="toggle">
                                Q. What are the courses offered at NIT Patna and what is the student strength available for placement?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                The courses at NIT Patna include B.Tech. in over 6 branches ranging from Computer Science engineering to Civil engineering. Along with this NIT Patna offers post graduation courses in MSc, M.Tech and PhD. You can request for more details at placement@nitp.ac.in     </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3" className="toggle">
                                Q. I want to visit NIT Patna for recruitment, how should I go about it?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    All you have to do is get in touch with one of our Placements Coordinators by sending in an email describing your company, role being offered and compensation to students. They will get in touch with you and tell you all about the further process. You also mail at placement@nitp.ac.in
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4" className="toggle">
                                Q. How can I reach the NIT Patna?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    NIT Patna is situated in Patna, Bihar. The area surrounding it is Ashok Rajpath. Once you have finalised the dates of visit, our placement coordinators can also send you the location of the University. This makes it easy to take a cab to the university.
                                    Small rickshaws ,autos or cabs can easily take you to the university from any of these metro stations. The locals are well acquainted with the College’s location .
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5" className="toggle">
                                Q. What if I need to stay at the university?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    HR’s are provided accommodation in the guest house. All you need to do is tell the placement coordinator you’re in contact with, a few days in advance and the TnP Cell will arrange proper accommodation for you if available.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6" className="toggle">
                                Q. How Can I be in contact with Training & Placement Cell of NITP?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    You can call or mail on the details below:
                                    <b>
                                    <br />
                                    Email: Placement@nitp.ac.in
                                    <br />
                                    Dr. Samrat Mukherjee
                                    <br />
                                    Professor Incharge
                                    <br />
                                    Moble: 9771005232	
                                    <br />
                                    <br />
                                    Dr. Shailesh M. Pandey
                                    <br />
                                    Training and Placement officer
                                    <br />
                                    Mobile: 8750111166
                                    </b>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>

                <br />

            </Container>
        </div>
    );
};

export default FAQs;
