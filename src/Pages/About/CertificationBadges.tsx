import React from "react";
import { Col, Row } from "react-bootstrap";
import AwsSaaC03BadgeImg from "../../Assets/aws_saa_c03_badge.png";

function CertificationBadges() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <img
          src={AwsSaaC03BadgeImg}
          alt='AWS Certified Solutions Architect'
          className='img-fluid'
        />
      </Col>
    </Row>
  );
}

export default CertificationBadges;
