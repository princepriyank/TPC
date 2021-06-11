import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Objective.styles.css";

const Objective = () => {
    return (
        <div id="Objective">
            
            <hr color="white"/>
            <Container>
                <center><h1 className="white">Vision</h1>
                <Row>
                <span className="high">Equipping the students with relevant and conceptualized professional skills and guiding them towards a bright future and career all around the world with the values of – Sincerity, Hard Work and Justice.</span>
                </Row></center>

                <br />
                <hr color="white" width="100%"/>
            </Container>
            
            <Container id="Mission">
                <br />
                <center><h1 className="white">Mission</h1></center>
                <Row>
                To achieve 100% placement for students through dedication, attitude and complete involvement is our mission. Training and Placement Cell NIT Patna arranges and coordinates various programmes that aim at moulding the students so as to meet the industry expectations in career building and in turn bring laurels to the parent institution. The Training and Placement Cell , guided by a set of rules and principles, strives to maintain good relationship with industries. Preparing the recruitment schedule for the year, inviting corporations for pre-placement talks on the campus followed by final placements, and overseeing the process to its end,is the responsibility of the Training and Placement Cell. The Cell endeavors to carry out successfully all the processes methodically throughout the year.</Row>

                <br />

            </Container>
            
            <hr color="white" width="100%"/>
        </div>
    );
};

export default Objective;
