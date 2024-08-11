import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Anchor path="/">
            Home
          </Anchor>

        </li>
        <li>
          <Anchor
            path="/shop/left-sidebar">
            Shop
          </Anchor>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title" >
              <Anchor
                path="/shop/left-sidebar">
                Categories
              </Anchor>
              <ul className="sub-menu--mega__list" >
                <li>
                  <Anchor
                    path="/shop/left-sidebar">
                    Category 1
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/right-sidebar">
                    Category 2
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/no-sidebar">
                    Category 3
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/fullwidth-no-space">
                    Category 4
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/megamenu-shop.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Anchor path="/other/about">
            About us
          </Anchor>
        </li>
        <li className="position-relative">
          <Anchor path="/other/contact">
            Contact
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
