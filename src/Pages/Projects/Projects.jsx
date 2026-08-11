import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Components/Particle";
import cheezious from "../../Assets/Projects/cheezious.png";
import fasset from "../../Assets/Projects/fasset.png";
import legacy from "../../Assets/Projects/legacy.png";
import tour from "../../Assets/Projects/tour.png";

const projects = [
  {
    imgPath: fasset,
    title: "Fasset",
    tagline: "FinTech · Digital & real-world asset platform",
    points: [
      "Secure digital and real-world asset management",
      "Multi-currency wealth access for global users",
      "Built for scale, trust, and financial compliance",
    ],
  },
  {
    imgPath: cheezious,
    title: "Cheezious",
    tagline: "Food Chain · National QSR growth platform",
    points: [
      "Supports 50+ restaurants across Pakistan",
      "Competes with established multinational brands",
      "High-traffic menus, ops, and growth workflows",
    ],
  },
  {
    imgPath: tour,
    title: "Tour De Amsterdam",
    tagline: "Travel · Cycling experiences across the city",
    points: [
      "Guided routes through canals and landmarks",
      "Engaging event experience for all skill levels",
      "Discovery-focused travel product flows",
    ],
  },
  {
    imgPath: legacy,
    title: "Legacy Suite",
    tagline: "Digital Assets · Estate planning & security",
    points: [
      "All-in-one estate planning workspace",
      "Protects critical files and documents",
      "Crypto-safe digital asset safeguards",
    ],
  },
];

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} xs={12} className='project-card' key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
