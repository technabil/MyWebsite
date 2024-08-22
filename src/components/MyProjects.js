import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png";
export const MyProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",

      description: "Developed a scalable backend using Spring Boot and MySQL. Designed and implemented the database schema to support product catalogs, user management, and transaction processing. Ensured robust security measures and optimized performance for a seamless user experience.",
    },
    {
      title: "Blog Application",
    
      description: "Built the backend system using Node.js and Express.js, and created a well-structured database with MongoDB. Implemented features like user authentication, CRUD operations for blog posts, and comment management. Focused on delivering a fast and reliable backend to support high traffic.",
    },
    {
      title: "ChatBot",

      description: "Developed an intelligent chatbot using Dialogflow and integrated it with ChatGPT APIs to provide dynamic responses. Focused on natural language processing (NLP) capabilities to enhance user interaction. The chatbot is capable of handling a wide range of queries and providing accurate, context-aware responses.",
    },
  ];

  return (
    <section className="my-projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>My Projects</h2>
            <div className="projects-content">
              <Row>
                {projects.map((project, index) => (
                  <Col key={index} sm={12} md={6} lg={4}>
                    <Card className="project-card">
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{project.role}</Card.Subtitle>
                        <Card.Text>{project.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
