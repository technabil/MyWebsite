import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png";
import './Education.css'
export const Education = () => {
  const educationData = [
    {
        level: "B.Tech in Computer Science",
        institution: "K.K College of Engineering & Managment",
        year: "2022",
      },

    {
      level: "12th Grade",
      institution: "National High School +2",
      year: "Year of Completion",
    },
    {
        level: "10th Grade",
        institution: "National High School +2",
        year: "2015",

      },
   
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <h2 style={{marginTop:"40px",marginBottom:"30px"}}>Education</h2>
            <div className="education-content">
              {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.level}</h3>
                  <h4>{edu.institution}</h4>
                  <p><strong>Year of Completion:</strong> {edu.year}</p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
