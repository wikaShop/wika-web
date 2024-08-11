import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutOne } from "../../components/Layout";
import { HeroSliderOne } from "../../components/HeroSlider";
import { ProductTab } from "../../components/ProductTab";
import { ImageCta } from "../../components/Cta";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import imageCtaData from "../../data/image-cta/image-cta-one.json";

const Decor = () => {
    const { products } = useSelector((state) => state.product);
    const newProducts = getProducts(products, "decor", "new", 9);
    const popularProducts = getProducts(products, "decor", "popular", 9);
    const saleProducts = getProducts(products, "decor", "sale", 9);

    return (
        <LayoutOne aboutOverlay={false}>
            {/* hero slider */}
            <HeroSliderOne sliderData={heroSliderData} />

            {/* product tab */}
            <ProductTab
                newProducts={newProducts}
                popularProducts={popularProducts}
                saleProducts={saleProducts}
            />

            {/* image cta */}
            <ImageCta
                image={imageCtaData.image}
                tags={imageCtaData.tags}
                title={imageCtaData.title}
                url={imageCtaData.url}
            />
        </LayoutOne>
    );
};

export default Decor;