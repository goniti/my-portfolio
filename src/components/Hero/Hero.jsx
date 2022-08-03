import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import CvCarlos from '../../images/CV_Carlos.pdf';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, resume, networks } = hero;
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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}
            <span className="text-color-main">{name}</span>
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="hero-cta">
            {!resume && (
              <a
                className="cta-btn cta-btn--hero"
                target="_blank"
                rel="noopener noreferrer"
                href={CvCarlos}
              >
                {cta}
              </a>
            )}
            <div className="hero-social">
              {networks &&
                networks.map((network) => {
                  const { id, social, url } = network;
                  return (
                    <a
                      key={id}
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={social}
                    >
                      <i className={`fa fa-${social || 'refresh'} fa-hero `} />
                    </a>
                  );
                })}
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
