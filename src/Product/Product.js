import React, { useEffect, useState } from "react";
import "./product.css";
import Footer from "../MainLanding/pages/Footer";
import Header from "../MainLanding/pages/Header";
import { useParams } from "react-router-dom";
import Presentation from "./components/Presentation";
import Loader from "../MainLanding/Loader";

function Product() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("error fetch product data", error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredProducts(products.filter((item) => item.name === name));
  }, [products, name]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Header />

          {filteredProducts.map((product) => (
            <Presentation
              key={product.id}
              product={product}
              className="product"
            />
          ))}

          <Footer />
        </div>
      )}
    </>
  );
}

export default Product;
