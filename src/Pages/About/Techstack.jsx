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
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiExpress,
  SiNestjs,
  SiRedis,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import TechIconCard from "../../Components/TechIconCard";

const skills = [
  { name: "JavaScript", icon: DiJavascript1 },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Node.js", icon: DiNodejs },
  { name: "Express.js", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "React", icon: DiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Git", icon: DiGit },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Redis", icon: SiRedis },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={4} md={2} className="tech-icons" key={skill.name}>
          <TechIconCard
            icon={skill.icon}
            name={skill.name}
            frontIconColor={skill.frontIconColor}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
