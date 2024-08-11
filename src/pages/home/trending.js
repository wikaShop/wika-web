import { Container, Row } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import { LayoutFive } from "../../components/Layout";
import { ShopInfo } from "../../components/Shop";
import { getProducts } from "../../lib/product";
import { HeroSliderTwo } from "../../components/HeroSlider";
import { CategorySlider } from "../../components/Category";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { BlogPostSlider } from "../../components/Blog";
import Anchor from "../../components/anchor";
import categoryData from "../../data/categories/category-one.json";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-two.json";

const Trending = () => {
    const { products } = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "fashion", "popular", 10);
    
    return (
        <LayoutFive>
        {/* hero slider */}
            <HeroSliderTwo
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--50"
            />
            {/* category slider */}
            <CategorySlider
                categoryData={categoryData}
                spaceBottomClass="space-mb--r100"
            />

            {/* products */}
            <SectionTitleOne
                title="Spring summer 2020"
                subtitle="Find your style. Fall fashion 20xx"
            />
            <div className="products-wrapper space-mb--r100">
                <Container className="wide">
                    <Row className="five-column">
                        <ProductGridWrapper
                            products={popularProducts}
                            bottomSpace="space-mb--r50"
                        />
                    </Row>
                    <div className="text-center">
                        <Anchor
                            path="/shop/left-sidebar"
                            className="lezada-loadmore-button"
                        >
                            <IoIosAdd /> SEE MORE ...
                        </Anchor>
                    </div>
                </Container>
            </div>

            {/* blog post slider */}
            <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--50" />

            {/*shop info*/}
            <ShopInfo />
        </LayoutFive>
    );
};

export default Trending;