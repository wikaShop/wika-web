import { BreadcrumbOne } from "@components/Breadcrumb";
import { LayoutTwo } from "@components/Layout";
import Anchor from "@components/anchor";
import {
  cartItemStock,
  createStripeCheckoutSession,
  getDiscountPrice,
} from "@lib/product";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart
} from "@store/slices/cart-slice";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosClose, IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let cartTotalPrice = 0;

  const stripeCheckOut = async () => {
    try {
     
      // Llamar al servicio para obtener la URL de checkout
      const checkoutUrl = await createStripeCheckoutSession(cartItems);

      // Redirigir solo si la URL es válida
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error durante el checkout:", error);
      alert(
        "Hubo un problema al iniciar el proceso de pago. Inténtalo de nuevo."
      );
    }
  };

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Cart"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Home</Anchor>
          </li>

          <li>Cart</li>
        </ul>
      </BreadcrumbOne>

      {/* cart content */}
      <div className="cart-content space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col lg={12} className="space-mb--r100">
                {/* cart table */}
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th className="product-name" colSpan="2">
                        Product
                      </th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      cartTotalPrice += discountedPrice * product.quantity;
                      return (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Anchor
                              path={`/shop/product-basic/${product.code}`}
                            >
                              <img
                                src={product.images[0]?.url}
                                className="img-fluid"
                                alt=""
                              />
                            </Anchor>
                          </td>
                          <td className="product-name">
                            <Anchor
                              path={`/shop/product-basic/${product.code}`}
                            >
                              {product.name}
                            </Anchor>
                            {product.selectedProductColor &&
                            product.selectedProductSize ? (
                              <div className="product-variation">
                                <span>
                                  Color: {product.selectedProductColor}
                                </span>
                                <span>Size: {product.selectedProductSize}</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>

                          <td className="product-price">
                            <span className="price">${discountedPrice}</span>
                          </td>

                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <button
                                className="dec qtybutton"
                                onClick={() =>
                                  dispatch(decreaseQuantity(product))
                                }
                              >
                                -
                              </button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                className="inc qtybutton"
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      ...product,
                                      quantity: quantityCount,
                                    })
                                  )
                                }
                                disabled={
                                  product !== undefined &&
                                  product.quantity &&
                                  product.quantity >=
                                    cartItemStock(
                                      product,
                                      product.selectedProductColor,
                                      product.selectedProductSize
                                    )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="total-price">
                            <span className="price">
                              ${(discountedPrice * product.quantity).toFixed(2)}
                            </span>
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() =>
                                dispatch(deleteFromCart(product.cartItemId))
                              }
                            >
                              <IoIosClose />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
              <Col lg={5} className="ms-auto">
                <div className="cart-calculation-area">
                  <h2 className="space-mb--40">Cart totals</h2>
                  <table className="cart-calculation-table space-mb--40">
                    <tbody>
                      <tr>
                        <th>SUBTOTAL</th>
                        <td className="subtotal">
                          ${cartTotalPrice.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <th>TOTAL</th>
                        <td className="total">${cartTotalPrice.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-calculation-button text-center">
                    <Anchor
                      path="#"
                      className="lezada-button lezada-button--medium"
                      onClick={() => {
                        stripeCheckOut();
                      }}
                    >
                      proceed to checkout
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCart />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
                    <Anchor
                      path="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium"
                    >
                      Shop Now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutTwo>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (item, addToast, quantityCount) => {
//       dispatch(addToCart(item, addToast, quantityCount));
//     },
//     decreaseQuantity: (item, addToast) => {
//       dispatch(decreaseQuantity(item, addToast));
//     },
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     },
//     deleteAllFromCart: (addToast) => {
//       dispatch(deleteAllFromCart(addToast));
//     }
//   };
// };

export default Cart;
