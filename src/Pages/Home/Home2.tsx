import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I've grown to love programming and think I've learned a thing or
              two... 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className='purple'> Javascript </b>
              </i>
              and
              <i>
                <b className='purple'> Typescript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>
                  E-commerce, Fin-Tech, Food Chain Websites{" "}
                </b>{" "}
              </i>
              and also in areas related to{" "}
              <i>
                <b className='purple'>Product Based Companies.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className='purple'> Node.js</b>
              </i>{" "}
              and
              <i>
                <b className='purple'> Modern Javascript Library </b>
              </i>
              and Frameworks like
              <i>
                <b className='purple'>
                  {" "}
                  Express.js, Nest.js, React.js and Next.js
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/ubaidumer55555'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/ubaid-umer-98b5b2203/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
