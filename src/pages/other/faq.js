import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import Anchor from "../../components/anchor";

const Faq = () => {
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="F.A.Q"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>F.A.Q</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="faq-wrapper">
                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    Shipping information
                  </h2>
                  <Accordion defaultActiveKey="0" className="ps-4">
                    <Accordion.Item eventKey="0" className="mb-4">
                      <Accordion.Header>What Shipping Methods are Available?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            Depending on the item(s) you purchase here and the
                            location to which the item(s) will be delivered,
                            different shipping methods will be available. At
                            checkout, you will be prompted to choose a variety
                            of shipping methods.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-4">
                      <Accordion.Header>What Shipping Methods are Available?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            Depending on the item(s) you purchase here and the
                            location to which the item(s) will be delivered,
                            different shipping methods will be available. At
                            checkout, you will be prompted to choose a variety
                            of shipping methods.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-4">
                      <Accordion.Header>Do You Ship Internationally?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            At the moment, we only ship to Canada and the United
                            States. For international orders, please contact
                            internationalorders@dynamite.ca. If you have any
                            questions, please don’t hesitate to contact our
                            Customer Experience Department by mail or by phone
                            at 1-888-882-1138 (Canada) and 1-888-342-7243 (USA).
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-4">
                      <Accordion.Header>How to Track My Order?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            Once your order has been shipped, you will receive
                            an email with your tracking and shipping
                            information. Simply click on the link in the email
                            or select the ‘track order’ option here and enter
                            your order number and email address or sign into
                            your account.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mb-4">
                      <Accordion.Header>How Long Will It Take To Get My Package?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            We ship only on business days. Business days are
                            from Monday to Friday, excluding holidays. Any order
                            placed after 12 P.M. ET will be processed the
                            following business day. Due to a high volume period,
                            your order may take longer than anticipated. For
                            remote locations, please add an additional 2-5
                            business day to each shipping method’s expected
                            delivery time. If you are not sure whether your
                            location is remote, please click here for all the
                            details.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    Payment information
                  </h2>
                  <Accordion defaultActiveKey="0" className="ps-4">
                    <Accordion.Item eventKey="0" className="mb-4">
                      <Accordion.Header>What Payment Methods Are Accepted?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            We gladly accept Visa, MasterCard and American
                            Express. If your card has been issued outside the
                            U.S. or Canada, please note that your order may need
                            additional verification before it can be processed.
                            Unfortunately, we cannot accept COD orders and all
                            orders must be paid in full once submitted online.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-4">
                      <Accordion.Header>What Happens If There Is A Pricing Error?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            We do our best to provide accuracy in the pricing
                            and other product information displayed on our
                            website, but mistakes sometimes happen. In such
                            cases, Furniture.ca expressly reserves the right not
                            to honor pricing errors found on this website when
                            accepting an online order. If an error occurs, we’ll
                            let you know and cancel the order. Any authorized
                            payments for that order will be immediately
                            refunded. If you find an error once your order is
                            delivered, please contact our Customer Care team or
                            refer to our return policy.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-4">
                      <Accordion.Header>What Do You Do With My Information?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            We use your info to fulfil your order accurately and
                            quickly and to improve your shopping experience. We
                            respect your privacy and never share this
                            information with anyone, except in connection with
                            your order. If you want to know more, take a look at
                            our Private Policy.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="single-faq">
                  <h2 className="faq-title space-mb--20">Orders and returns</h2>
                  <Accordion defaultActiveKey="0" className="ps-4">
                    <Accordion.Item eventKey="0" className="mb-4">
                      <Accordion.Header>How do I place an Order?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            Click on a Product Photo or Product Name to see more
                            detailed information. To place your order, choose
                            the specification you want and enter the quantity,
                            and click ‘Buy Now’.Please enter the required
                            information such as Delivery Address, Quantity Type
                            etc. Before clicking “Place Order”, please check
                            your Order Details carefully. If you want to add a
                            new Delivery Address, click ” Add a new address”. If
                            you want to edit a current Delivery Address, click
                            ‘Edit this address’. After confirming your Order,
                            you will be automatically taken to the Payment page
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-4">
                      <Accordion.Header>How Can I Cancel Or Change My Order?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            Go to Your Orders. Click Cancel Items. Note: Select
                            the checkbox next to each item you wish to remove
                            from the order. If you want to cancel the entire
                            order, select all of the items. Click Cancel checked
                            items when finished.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-4">
                      <Accordion.Header>Who Should I Contact If I Have Any Queries?</Accordion.Header>
                      <Accordion.Body>
                          <p>
                            You can contact our customer support team by
                            provided email or mobile phone. In case, it’s not
                            convenient to talk, you can come to our store to
                            make your request.
                          </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default Faq;
