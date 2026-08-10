import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactMe() {
  return (
    <Container className="contact-me-section" id="contact-me">
      <Container>
        <Row>
          <Col className="contact-me">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's Connect Via <span className="purple">Email</span>
            </h1>
            <p>
              Feel free to email me at{" "}
              <a
                href="mailto:ubaid.umer55555@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <span className="purple">
                  <b>ubaid.umer55555@gmail.com</b>
                </span>
              </a>
              . I’ll get back to you as soon as I can.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;
