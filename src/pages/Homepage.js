import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from './Homepage.module.css';
import Navigation from '../component/Navigation';
import Hero from '../component/Hero';
import Partners from '../component/Partners';
import Trending from '../component/Trending';
import Article from '../component/Article';
import Footer from '../component/Footer';



function Homepage() {
  return (
        <>
            <Navigation />
            <Hero />
            <Partners />

            <Container>
              <Row>
                <Col xs={12}>
                  <div className={styles.section_title}>
                    <h2>Trending</h2>
                  </div>
                  <Trending 
                  thumbnail="thumb-01.jpg"
                  category="Therapy"
                  title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                  author="Dr Krishna Seshadhri"
                  excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                  publishedOn="Aug 23, 2020"
                  />
                  <Trending 
                  thumbnail="thumb-02.jpg"
                  category="Therapy"
                  title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                  author="Dr Krishna Seshadhri"
                  excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                  publishedOn="Aug 23, 2020"
                  />
                </Col>
                <Col className="d-block d-md-none text-center">
                  <Button variant="link" className={styles.view_all}>View All</Button>
                </Col>
              </Row>
              <Row className="d-none d-md-flex">
                <Col xs={12}>
                  <div className={styles.section_title}>
                    <h2>Recently Added</h2>
                    <Button variant="link" className={styles.link}>View All</Button>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <Article 
                    category="Therapy"
                    title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                    author="Dr Krishna Seshadhri"
                    excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                    publishedOn="Aug 23, 2020"
                    />
                </Col>

                <Col xs={12} md={6}>
                  <Article 
                    category="Therapy"
                    title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                    author="Dr Krishna Seshadhri"
                    excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                    publishedOn="Aug 23, 2020"
                    />
                </Col>

                <Col xs={12} md={6}>
                  <Article 
                    category="Therapy"
                    title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                    author="Dr Krishna Seshadhri"
                    excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                    publishedOn="Aug 23, 2020"
                    />
                </Col>


                <Col xs={12} md={6}>
                  <Article 
                    category="Therapy"
                    title="Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients"
                    author="Dr Krishna Seshadhri"
                    excerpt="Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised to standard of care or 10 days of remdesivir. Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than those randomised."
                    publishedOn="Aug 23, 2020"
                    />
                </Col>
              </Row>
            </Container>
            <Footer />
        </>
  );
}

export default Homepage;