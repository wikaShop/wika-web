import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
  ImageGalleryRightThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
import Anchor from "../../../components/anchor";

const ProductFullwidthRightThumb = ({ product }) => {
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
        <Container className="wide">
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              {/* image gallery left thumb */}
              <ImageGalleryRightThumb
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

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths =[]

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter((single) => single.code === params.code)[0];

  return { props: {  } };
}

export default ProductFullwidthRightThumb;