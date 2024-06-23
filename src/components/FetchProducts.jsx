import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../assets/image 13.png";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // const baseUrl = "http://localhost:8000/product/all";
  const baseUrl = "https://jan2024be.onrender.com/product/all";

  const fetchProducts = async (url) => {
    setLoading(true);
    const { data } = await axios.get(url);
    const products = data?.products;
    if (products && products.length > 0) {
      setProducts(products);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(baseUrl);
  }, []);

  const Loader = (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Products Loading...</h3>
    </div>
  );
  //   loading ? "Products loading" : console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {loading
        ? <>{Loader}</>
        : products.map((product) => {
            return (
              <div
                className=""
                key={product._id}
                style={{
                  width: "300px",
                  backgroundColor: "#eee",
                  height: "400px",
                  marginBottom: "1rem",
                }}
              >
                <div className="" style={{ width: "100%" }}>
                  <img src={img1} alt="" width="100%" height="200px" />
                </div>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <b>quantity: {product.quantity}</b>
              </div>
            );
          })}
    </div>
  );
};

export default FetchProducts;
