import { BrandLogoOne } from "@components/BrandLogo";
import { BreadcrumbOne } from "@components/Breadcrumb";
import { LayoutTwo } from "@components/Layout";
import { TestimonialOne } from "@components/Testimonial";
import Anchor from "@components/anchor";
import brandLogoData from "@data/brand-logos/brand-logo-one.json";
import testimonialData from "@data/testimonials/testimonial-one.json";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";

const About = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="About"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>About</li>
        </ul>
      </BreadcrumbOne>
      {/* about content */}
      <div className="about-content space-mt--r130 space-mb--r130">
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto">
                {/* section title */}
                <div className="about-title-container text-center">
                  <p className="dark-title space-mb--35">SIMPLY OR WHITE</p>
                  <h2 className="title space-mb--15">
                    Clever &amp; unique ideas
                  </h2>
                  <p className="title-text">
                  En Wika, nos apasiona la creación y promoción de productos artesanales únicos y de alta calidad. Cada uno de nuestros artículos, desde ponchos tejidos a mano hasta tablas de cortar de madera fina y sales de baño aromáticas, es cuidadosamente elaborado para ofrecerte una experiencia auténtica y especial. Trabajamos con artesanos locales y seleccionamos materiales naturales para que puedas disfrutar de productos que no solo son funcionales, sino también reflejan la esencia de las tradiciones y el arte manual.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* about video content */}
        <div className="about-video-content space-mb--r100">
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                {/*=======  about video area  =======*/}
                <div
                  className="about-video-bg space-mb--60"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-video-bg.png"
                    })`
                  }}
                >
                  <p className="video-text video-text-start">
                    <Anchor path="/shop/left-sidebar">
                      LEZADA STORE
                    </Anchor>
                  </p>

                  <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                    <div className="play-icon text-center space-mb--40">
                      
                      <button onClick={() => isOpen(true)}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-play-100x100.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <h1>OUR STORY</h1>
                  </div>
                  <p className="video-text video-text-end">
                    <Anchor path="/other/about">
                      OUR STORY
                    </Anchor>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="mx-auto">
                <Row>
                  <Col md={6}>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">ADDRESS</h2>
                      <p className="widget-content">
                        1800 Abbot Kinney Blvd. Unit D &amp; E Venice
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">PHONE</h2>
                      <p className="widget-content">Mobile: (+88) – 1990</p>
                    </div>
                    <div className="about-widget">
                      <h2 className="widget-title space-mb--25">EMAIL</h2>
                      <p className="widget-content">contact@lezadastore.com</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="about-page-text">
                      <p className="space-mb--35">
                        Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                        ndisse suscipit sagittis leo sit estibulum issim Lorem
                        ipsum dolor sit amet, consectetur cing elit. ipsum dolor
                        sit amet, consectetur cing elit. Suspe ndisse suscipit
                        sagittis leo sit es
                      </p>
                      <Anchor path="/shop/left-sidebar" className="lezada-button lezada-button--medium lezada-button--icon--left">
                          <IoMdAdd /> online store
                      </Anchor>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* testimonial */}
        <TestimonialOne
          testimonialData={testimonialData}
          backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
        />
        <div className="space-mb--r100"></div>
        {/* brand logo */}
        <BrandLogoOne brandLogoData={brandLogoData} />
      </div>
    </LayoutTwo>
  );
};

export default About;
