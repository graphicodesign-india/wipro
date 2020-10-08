import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

import styles from './ResourcesDetails.module.css';
import Navigation from '../../component/Navigation';
import Footer from '../../component/Footer';
import Related from '../../component/Related';
import Videoplayer from '../../component/Videoplayer';
import Formmessage from '../../component/Formmessage';
import { AlignCenter, Bookmark, BookOpen, Share, ArrowUp, Video } from 'react-feather';



function ResourcesDetailsVideo() {
  return (
        <>
         <Navigation />
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={10}>
                        <div className={styles.banner}>
                            <Videoplayer className={styles.video} />
                            <Button variant="light" className={styles.category_name}><Video height={12} width={12} /> Video</Button>
                            <Button variant="light" className={styles.bookmark}><Bookmark /></Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        

                        <div className={styles.headers}>
                            <p className={styles.tag}>Therapy</p>
                            <h3>Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients</h3>
                            <hr />
                            <Row>
                                <Col xs={12} md className="col-md-auto">
                                    <p><BookOpen /> No of Reads: <strong>1450</strong></p>
                                </Col>
                                <Col xs={12} md={8}>
                                    <p>By: Dr Krishna Seshadhri • Aug 23, 2020</p>
                                </Col>
                            </Row>
                            <hr />
                        </div>

                        <div className={styles.content}>
                            <p>Earlier this summer, the Summit supercomputer at Oak Ridge National Lab in Tennessee set about crunching data on more than 40,000 genes from 17,000 genetic samples in an effort to better understand Covid-19. Summit is the second-fastest computer in the world, but the process — which involved analyzing 2.5 billion genetic combinations — still took more than a week. Jacobson’s group published their results in a paper in the journal eLife in early July. According to the team’s findings, a Covid-19 infection generally begins when the virus enters the body through ACE2 receptors in the nose, (The receptors, which the virus is known to target, are abundant there.) The virus then proceeds through the body, entering cells in other places where ACE2 is also present: the intestines, kidneys, and heart. According to the bradykinin hypothesis, it’s this storm that is ultimately responsible for many of Covid-19’s deadly effects.</p>
                            <p>This likely accounts for at least some of the disease’s cardiac and GI symptoms. (Sign up for Your Coronavirus Update, a biweekly newsletter with the latest news, expert advice, and analysis to keep you safe) But once Covid-19 has established itself in the body, things start to get really interesting. According to Jacobson’s group, the data Summit analyzed shows that Covid-19 isn’t content to simply infect cells that already express lots of ACE2 receptors. Instead, it actively hijacks the body’s own systems, tricking it into upregulating ACE2 receptors in places where they’re usually expressed at low or medium levels, including the lungs. In this sense, Covid-19 is like a burglar who slips in your unlocked second-floor window and starts to ransack your house. Once inside, though, they don’t just take your stuff — they also throw open all your doors and windows so their accomplices can rush in and help pillage more efficiently. The renin–angiotensin system (RAS) controls many aspects of the circulatory system, including the body’s levels of a chemical called bradykinin, which normally helps to regulate blood pressure. According to the team’s analysis, when the virus tweaks the RAS, it causes the body’s mechanisms for regulating bradykinin to go haywire. Bradykinin receptors are resensitized, and the body also stops effectively breaking down bradykinin. (ACE normally degrades bradykinin, but when the virus downregulates it, it can’t do this as effectively.) The end result, the researchers say, is to release a bradykinin storm — a massive, runaway buildup of bradykinin in the body.</p>
                            <p>When Summit was done, researchers analyzed the results. It was, in the words of Dr. Daniel Jacobson, lead researcher and chief scientist for computational systems biology at Oak Ridge, a “eureka moment.” The computer had revealed a new theory about how Covid-19 impacts the body: the bradykinin hypothesis. The hypothesis provides a model that explains many aspects of Covid-19, including some of its most bizarre symptoms. It also suggests 10-plus potential treatments, many of which are already FDA approved.</p>
                            <p>Jacobson’s team says in their paper that “the pathology of Covid-19 is likely the result of Bradykinin Storms rather than cytokine storms,” which had been previously identified in Covid-19 patients, but that “the two may be intricately linked.” Other papers had previously identified bradykinin storms as a possible cause of Covid-19’s pathologies.</p>
                        </div>

                        <div className={styles.footer}>
                            <hr />
                            <Row>
                                <Col xs={12} md={6}>
                                    <Button variant="none" className={styles.btnNone}><Share /> SHARE</Button>
                                    <Button variant="none" className={styles.btnNone}><Bookmark /> SAVE FOR LATER</Button>
                                </Col>
                                <Col xs={12} className="d-block d-md-none"><hr /></Col>
                                <Col xs={12} md={6}>

                                <Button variant="none" className={`${styles.btnNone} ${styles.upvote}`}><ArrowUp /> Upvote: <strong>200</strong></Button>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                        <ul className={styles.tags}>
                            <li><a href="#">Bradykinin</a></li>
                            <li><a href="#">Supercomputer analysis</a></li>
                            <li><a href="#">COVID-19</a></li>
                        </ul>
                        <div className={styles.credits}>

                        <hr />
                            <Row>
                                <Col xs={12} md className="col-md-auto">
                                    <p className={styles.eh}>ARTICLE BY</p>
                                    <p className={styles.auth}>Dr Krishna Seshadhri</p>
                                    <p className={styles.desi}>MBBS | MD</p>
                                </Col>
                                <Col xs={12} md className="col-md-auto">
                                    <p className={styles.eh}>CURATED BY</p>
                                    <p className={styles.auth}>Dr Krishna Seshadhri</p>
                                    <p className={styles.desi}>MBBS | MD</p>
                                </Col>
                            </Row>

                            <hr />
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className={styles.related}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <div className={styles.relatedTitle}>
                                <h4>Related Resources</h4>
                            </div>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Related />
                                </Col>

                                <Col xs={12} md={6}>
                                    <Related />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        <Footer />
                
        </>
        );
      }
      
export default ResourcesDetailsVideo;