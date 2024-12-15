import { Container, Row, Col } from "react-bootstrap";
import { fetchProducts, getProducts } from "../../lib/product";
import { LayoutEight } from "../../components/Layout";
import { HeroSliderFour } from "../../components/HeroSlider";
import { ProductTabThree } from "../../components/ProductTab";
import { HoverBannerThree } from "../../components/Banner";
import heroSliderData from "../../data/hero-sliders/hero-slider-four.json";
import { useEffect, useState } from "react";

const Main = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const finalProducts = await fetchProducts();

        setNewProducts(getProducts(finalProducts, false, "new", 10));
        setPopularProducts(getProducts(finalProducts, false, "popular", 10));
        setSaleProducts(getProducts(finalProducts, false, "sale", 10));
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
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
