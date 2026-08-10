import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Components/Particle";
import AvatarBadge from "../../Components/AvatarBadge";
import Home2 from "./Home2";
import Type from "./Type";
import ContactMe from "./ContactMe";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                I'm
                <strong className="main-name"> Ubaid Umer</strong>
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello and welcome! Explore my portfolio to discover my passion
                and creativity.{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div className='home-typewriter'>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-badge-col">
              <AvatarBadge />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ContactMe />
    </section>
  );
}

export default Home;
