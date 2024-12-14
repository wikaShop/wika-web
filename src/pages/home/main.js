import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../../lib/product";
import { LayoutEight } from "../../components/Layout";
import { HeroSliderFour } from "../../components/HeroSlider";
import { ProductTabThree } from "../../components/ProductTab";
import { HoverBannerThree } from "../../components/Banner";
import heroSliderData from "../../data/hero-sliders/hero-slider-four.json";
import {useEffect, useState} from "react";
import apiClient from "../../axios/axios";

const Main = () => {
    const [newProducts, setNewProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);

    useEffect(() => {
        apiClient.get('/product')
            .then(response => {
                console.log(response.data.data)
                const finalProducts=response.data.data.map((product)=>({...product,category:[],discount:0,image:[]}))

                setNewProducts(getProducts(finalProducts, false, "new", 10))
                setPopularProducts(getProducts(finalProducts, false, "popular", 10));
                setSaleProducts(getProducts(finalProducts, false, "sale", 10));

            })
            .catch(error => console.error('Error fetching data:', error))
            .finally(()=> {

            })
    }, []);
    return (
        <LayoutEight>
            {/* hero slider with banner */}
            <div className="hero-slider-area space-mb--r100">
                <Container className="wide">
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--40">
                            {/* hero slider */}
                            <HeroSliderFour sliderData={heroSliderData} />
                        </Col>

                        <Col lg={6}>
                            {/* banner */}
                            <HoverBannerThree />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* product tab */}
            <ProductTabThree
                newProducts={newProducts}
                popularProducts={popularProducts}
                saleProducts={saleProducts}
            />

            {/* banner */}

        </LayoutEight>
    );
};

export default Main;
