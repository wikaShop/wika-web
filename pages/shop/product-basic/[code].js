import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutTwo } from "@components/Layout";
import { fetchProductById, getDiscountPrice } from "@lib/product";
import { BreadcrumbOne } from "@components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "@components/ProductDetails";
import Anchor from "@components/anchor";

const ProductBasic = ({ product }) => {
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle={product.name}
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>
          <li>
            <Anchor path="/shop/left-sidebar">
              Shop
            </Anchor>
          </li>
          <li>{product.name}</li>
        </ul>
      </BreadcrumbOne>

      {/* product details */}
      <div className="product-details space-mt--r100 space-mb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              {/* image gallery bottom thumb */}
              <ImageGalleryBottomThumb
                product={product}
                wishlistItem={wishlistItem}
              />
            </Col>

            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                productPrice={productPrice}
                discountedPrice={discountedPrice}
                cartItems={cartItems}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};


export default ProductBasic;

export async function getStaticProps({ params }) {
  try {
    // Usa la nueva función para obtener el producto
    const product = await fetchProductById(params.code);

    return {
      props: { product },
      revalidate: 10,  // (Opcional) Revalida cada 10 segundos
    };
  } catch (error) {
    return {
      notFound: true,  // Si ocurre un error, devuelve un 404
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],  // No defines caminos pre-renderizados
    fallback: 'blocking',  // Las rutas no pre-renderizadas se generarán bajo demanda
  };
}
