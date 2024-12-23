import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import Anchor from "../../anchor";
import { getDiscountPrice } from "../../../lib/product";
import { deleteFromWishlist } from "../../../store/slices/wishlist-slice";

const WishlistOverlay = ({ activeStatus, getActiveStatus }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <div className={clsx("wishlist-overlay", activeStatus && "active")}>
      <div
        className="wishlist-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="wishlist-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="wishlist-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas wishlist content container  =======*/}
        <div className="wishlist-overlay__content-container">
          <h3 className="wishlist-title">Wishlist</h3>
          {wishlistItems.length >= 1 ? (
            <div className="wishlist-product-wrapper">
              <div className="wishlist-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {wishlistItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    return (
                      <div className="single-wishlist-product" key={i}>
                        <span className="wishlist-close-icon">
                          <button
                            onClick={() =>
                              dispatch(deleteFromWishlist(product.id))
                            }
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Anchor path={`/shop/product-basic/${product.code}`}>
                            <img
                              src={product.images[0]?.url}
                              className="img-fluid"
                              alt=""
                            />
                          </Anchor>
                        </div>
                        <div className="content">
                          <h5>
                            <Anchor
                              path={`/shop/product-basic/${product.code}`}
                            >
                              {product.name}
                            </Anchor>
                          </h5>
                          <p>
                            <span className="discounted-price">
                              ${discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CustomScroll>
              </div>
              {/*=======  wishlist buttons  =======*/}
              <div className="wishlist-buttons">
                <Anchor path="/other/wishlist">view wishlist</Anchor>
              </div>
            </div>
          ) : (
            "No items found in wishlist"
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistOverlay;
