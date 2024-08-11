import { useSelector } from "react-redux";
import { Spectral } from "@next/font/google";
import { getProducts } from "../../lib/product";
import { LayoutTen } from "../../components/Layout";
import { HeroSliderEight } from "../../components/HeroSlider";
import { VideoIconContent, ImageTextContent } from "../../components/About";
import { ProductSliderThree } from "../../components/ProductSlider";
import { BrandLogoTwo } from "../../components/BrandLogo";
import { ImageCtaFour } from "../../components/Cta";
import { ImageSliderOne } from "../../components/ImageSlider";

import heroSliderData from "../../data/hero-sliders/hero-slider-eight.json";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";

const spectral = Spectral({
    weight: ["300", "400", "500", "600", "700"],
    style: ['normal'],
    subsets: ['latin'],
    display: "swap",
});

const Jewelry = () => {
    const { products } = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "jewelry", "popular", 9);
    return (
        <LayoutTen>
            <style jsx global>{`
                :root {
                --ff-spectral: ${spectral.style.fontFamily};
                }
            `}
            </style>
            {/* hero slider */}
            <HeroSliderEight
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--30"
            />
            {/* video icon content */}
            <VideoIconContent />

            {/* product slider */}
            <ProductSliderThree products={popularProducts} />

            {/* image text content */}
            <ImageTextContent />

            {/* brand logo */}
            <BrandLogoTwo brandLogoData={brandLogoData} />

            {/* cta */}
            <ImageCtaFour />

            {/* image slider */}
            <ImageSliderOne imageSliderData={imageSliderData} />
        </LayoutTen>
    );
};

export default Jewelry;