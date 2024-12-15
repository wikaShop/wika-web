import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { SlideDown } from "react-slidedown";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import Anchor from "../../components/anchor";
import {
  ShopFilter,
  ShopHeader,
  ShopProducts,
  ShopSidebar,
} from "../../components/Shop";
import { fetchProducts, getSortedProducts } from "../../lib/product";

const LeftSidebar = () => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const [products, setProducts] = useState([]);
  //const  products  = []

  const pageLimit = 20;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const handlePageChange = ({ selected }) => {
    const offset = selected * pageLimit;
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  };
  // Primer useEffect: Llamado a la API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const finalProducts = await fetchProducts();
        setProducts(finalProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadProducts();
  }, []);

  // Segundo useEffect: Ordenamiento y filtrado
  useEffect(() => {
    let sorted = getSortedProducts(products, sortType, sortValue);
    sorted = getSortedProducts(sorted, filterSortType, filterSortValue);
    setSortedProducts(sorted);
    setCurrentData(sorted.slice(offset, offset + pageLimit));
  }, [
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    offset,
    pageLimit,
  ]);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Shop Left Sidebar"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Home</Anchor>
          </li>

          <li>Shop Left Sidebar</li>
        </ul>
      </BreadcrumbOne>
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          getFilterSortParams={getFilterSortParams}
          productCount={products.length}
          sortedProductCount={currentData.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
        />

        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown>

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container>
            <Row>
              <Col
                lg={3}
                className="order-2 order-lg-1 space-mt-mobile-only--50"
              >
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                />
              </Col>

              <Col lg={9} className="order-1 order-lg-2">
                {/* shop products */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <ReactPaginate
                    previousLabel={"«"}
                    nextLabel={"»"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(sortedProducts.length / pageLimit)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData,
  };
};

export default LeftSidebar;
