import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <TbBrandTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaAws />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;
