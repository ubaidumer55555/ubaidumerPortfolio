import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import fintech from "../../Assets/Industries/fintech.png";
import food from "../../Assets/Industries/food.png";
import delivery from "../../Assets/Industries/delivery.png";
import ecommerce from "../../Assets/Industries/ecommerce.png";
import travel from "../../Assets/Industries/travel.png";
import digital from "../../Assets/Industries/digital.png";

const industries = [
  {
    title: "FinTech",
    description:
      "Digital assets, wealth platforms, and secure financial products.",
    image: fintech,
    bullet: (
      <>
        Building secure <span className="purple">FinTech</span> products wealth
        platforms, payments, and digital asset experiences
      </>
    ),
  },
  {
    title: "Food Chain",
    description: "QSR platforms, menus, and high-scale restaurant operations.",
    image: food,
    bullet: (
      <>
        Scaling <span className="purple">Food Chain</span> platforms for menus,
        operations, and high-traffic restaurant brands
      </>
    ),
  },
  {
    title: "Delivery Systems",
    description:
      "Order flow, logistics-ready web apps, and real-time experiences.",
    image: delivery,
    bullet: (
      <>
        Shipping reliable <span className="purple">Delivery Systems</span> with
        real-time order flow and logistics-ready apps
      </>
    ),
  },
  {
    title: "E-commerce",
    description:
      "Storefronts, checkout flows, and conversion-focused platforms.",
    image: ecommerce,
    bullet: (
      <>
        Crafting conversion-focused <span className="purple">E-commerce</span>{" "}
        storefronts and checkout experiences
      </>
    ),
  },
  {
    title: "Travel & Experiences",
    description:
      "Event and travel platforms built for engagement and discovery.",
    image: travel,
    bullet: (
      <>
        Creating engaging <span className="purple">Travel & Experience</span>{" "}
        platforms for discovery and events from scenic tour flows to memorable
        booking journeys
      </>
    ),
  },
  {
    title: "Digital Assets",
    description:
      "Estate planning, file security, and crypto-safe product suites.",
    image: digital,
    bullet: (
      <>
        Protecting <span className="purple">Digital Assets</span> with secure
        product suites for files, estates, and crypto
      </>
    ),
  },
];

function Home2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description home-about-centered">
            <h1 className="home-about-title" style={{ fontSize: "2.6em" }}>
              INDUSTRIES I'VE <span className="purple">BUILT</span>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-industry-col">
            <Carousel
              fade
              interval={3000}
              pause="hover"
              className="industry-carousel"
              indicators
              controls
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
              {industries.map((item) => (
                <Carousel.Item key={item.title}>
                  <div className="industry-slide">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="industry-slide-image"
                    />
                    <div className="industry-slide-caption">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div
              key={activeIndustry.title}
              className="industry-sync-bullet about-activity">
              <ImPointRight /> {activeIndustry.bullet}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="home-about-social-title">FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ubaidumer55555"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ubaid-umer-98b5b2203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
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
