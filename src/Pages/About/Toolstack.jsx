import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaSlack, FaApple } from "react-icons/fa";
import TechIconCard from "../../Components/TechIconCard";

const tools = [
  { name: "macOS", icon: FaApple },
  { name: "VS Code", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
  { name: "Slack", icon: FaSlack },
  { name: "Vercel", icon: SiVercel },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className='tech-icons' key={tool.name}>
          <TechIconCard icon={tool.icon} name={tool.name} />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
