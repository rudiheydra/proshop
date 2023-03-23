import React, { useEffect, useState } from "react";

// import axios from "axios";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.name} sm={12} md={6} ld={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
