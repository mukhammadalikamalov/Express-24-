import { Avatar, Box } from "@mui/material"; // assuming these are imported from Material-UI
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../../components/layout/layout";

function Product() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Layout>
      {product.map((product) => (
        <Box key={product.id} display="flex" gap={20} flexWrap="wrap">
          <Avatar src={product.image} />
          <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
        </Box>
      ))}
    </Layout>
  );
}

export default Product;
