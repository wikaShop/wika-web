import { useEffect, useState } from "react";
import Anchor from "../../anchor"
import apiClient from "../../../axios/axios";

const MobileMenuNav = ({ getActiveStatus }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get("/category")
      .then((response) => {
        console.log("category", response.data.data);

        setCategories(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {});
  }, []);

  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item"> 
          <Anchor path="/">
            Home
          </Anchor>
        </li>

        <li className="menu-item-has-children">
          <Anchor path="/shop/left-sidebar">
            Shop
          </Anchor>
          
          <ul className="mobile-sub-menu">
          {categories.map((category)=>
            (<>
            <li className="menu-item-has-children">
              <Anchor path="/shop/left-sidebar">
                {category.name}
              </Anchor>
              </li>
            </>)
          )}
          </ul>
        </li>

        <li className="menu-item"> 
          <Anchor path="/">
            About us
          </Anchor>

        </li>

        <li className="menu-item"> 
          <Anchor path="/">
            Contact
          </Anchor>

        </li>

      </ul>
    </nav>
  );
};

export default MobileMenuNav;
