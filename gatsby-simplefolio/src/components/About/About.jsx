import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, resume } = about;
  // Deleted paragraphThree. In order to continue you must put the variable back

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I have experience with using Java for various means, integrating various APIs into a web application with Javascript, managing databases using MySQL, working in a team environment using Agile methodology in a remote environment, using various distributions of Linux to any end, and I am also fluent in HTML and CSS along with the Bootstrap Framework. At the moment I am looking to add React.js to that list.'}
                </p>

                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'As denizen of the web I watched internet develop from a place to share funny cat pictures to watching entire political ideologies unravel in real time on social media platforms. All of this insight has not only informed my aesthetical prowess but it also has informed me how people behave and interact with these technologies that society operates on. Each project I have worked on thus far I have seen to it that any average person could immediate recognize how to navigate through it. I am through and through a front end developer!'}
                </p>
                {/* <p className="about-wrapper__info-text"> */}
                {/*  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} */}
                {/* </p> */}
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
