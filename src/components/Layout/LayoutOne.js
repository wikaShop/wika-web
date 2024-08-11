import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutOne = ({ children, aboutOverlay }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutOne;
