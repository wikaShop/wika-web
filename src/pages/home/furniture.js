import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { CountdownTimerFour } from "../../components/Countdown";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderFive } from "../../components/HeroSlider";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { TestimonialOne } from "../../components/Testimonial";
import { ImageCtaTwo } from "../../components/Cta";
import { HoverBannerOne } from "../../components/Banner";
import { getProducts } from "../../lib/product";

import heroSliderData from "../../data/hero-sliders/hero-slider-five.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const Furniture = () => {
    const { products } = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "furniture", "popular", 8);

    return (
        <LayoutTwo aboutOverlay={false}>
            {/* hero slider */}
            <HeroSliderFive
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--50"
            />

            {/* hover banner */}
            <HoverBannerOne spaceBottomClass="space-mb--r100" />

            {/* product grid */}
            <div className="section-title-container">
                <Container>
                    <Row className="space-mb--50">
                        <Col xs={6}>
                            <div className="section-title__label">
                            <p>
                                SS-2020 <span className="line">84</span>
                            </p>
                            </div>
                        </Col>
                        <Col xs={6} className="text-end">
                            <div className="section-title__label">
                            <p>
                                INNOVATIVE <br /> DESIGN
                            </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <SectionTitleOne title="Clever & unique ideas" />
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="product-grid-container space-mb--r100">
                <Container>
                    <Row className="space-mb--rm50">
                        <ProductGridWrapper
                            products={popularProducts}
                            bottomSpace="space-mb--r50"
                            column={4}
                        />
                    </Row>
                </Container>
            </div>

            {/* countdown timer */}
            <CountdownTimerFour
                title="Deal of the day"
                image="/assets/images/countdown/countdown-4.png"
                dateTime="July 07, 2023 12:12:00"
                url="/shop/left-sidebar"
                buttonText="Only $39"
                backgroundColorClass="bg-color--grey-two"
            />

            {/* testimonial */}
            <TestimonialOne
                testimonialData={testimonialOneData}
                spaceBottomClass="space-mb--r100"
            />

            {/* image cta */}
            <ImageCtaTwo spaceBottomClass="space-mb--r100" />
        </LayoutTwo>
    );
};

export default Furniture;