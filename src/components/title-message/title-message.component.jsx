import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -200px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color:white;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 40px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
 
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <span>
            <strong>Training And Placement Cell, <br/>NIT Patna</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Learn", "Grow", "Evolve"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
        <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#footer">
                      <Button className="m-2" variant="outline-info">
                       Contact us
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1ak6N26arrYtVso0FZrlLJAv98lhSLKqC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Brochure
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1EqNnX3XcwNZha0Oipi0TgXP8eor6jUZy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Training letter II year
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1G3FdDJB2YqDximffgq2pT1zFGgkBOsof/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                      Training letter III year
                      </Button>
                    </a>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="https://drive.google.com/file/d/16vcA3Og3Nhzf5rdLQnvsBvfI4iN7jSyP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                      Job Notification Form
                      </Button>
                    </a>
                  </div>
                </Col>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
