import { Fragment } from "react";
import { Allura } from "next/font/google";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderNine } from "../../components/HeroSlider";
import { getProducts } from "../../lib/product";
import { SectionTitleThree } from "../../components/SectionTitle";
import { CategoryGridFive } from "../../components/Category";
import { ImageTextContentTwo } from "../../components/About";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { TestimonialTwo } from "../../components/Testimonial";
import { ImageSliderTwo } from "../../components/ImageSlider";
import Anchor from "../../components/anchor";

import heroSliderData from "../../data/hero-sliders/hero-slider-nine.json";
import testimonialTwoData from "../../data/testimonials/testimonial-two.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";

const allura = Allura({
  weight: ["400"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
});

const Cosmetics = () => {
    const { products } = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "cosmetics", "popular", 8);

    return (
    <Fragment>
        <style jsx global>{`
            :root {
            --ff-allura: ${allura.style.fontFamily};
            }
        `}
        </style>
        {/* hero slider */}
        <HeroSliderNine sliderData={heroSliderData} />
        <LayoutTwo aboutOverlay={false}>
            {/* image text content */}
            <ImageTextContentTwo />
            {/* category */}
            <CategoryGridFive />
            {/* testimonial */}
            <TestimonialTwo
                testimonialData={testimonialTwoData}
                backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
            />
            {/* product grid */}
            <div className="element-wrapper space-mt--r130 space-mb--r130">
                <SectionTitleThree title="Customer favorites" />
                <Container>
                    <Row>
                        <ProductGridWrapper
                            products={popularProducts}
                            column={4}
                            bottomSpace="space-mb--r50"
                        />
                        <Col lg={12} className="text-center">
                            <Anchor
                                path="/shop/left-sidebar"
                                className="lezada-loadmore-button"
                            >
                                <IoIosAdd /> SEE MORE ...
                            </Anchor>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* image slider */}
            <ImageSliderTwo imageSliderData={imageSliderData} />
        </LayoutTwo>
    </Fragment>
    );
};


export default Cosmetics;