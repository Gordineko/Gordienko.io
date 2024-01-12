import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../MainLanding/pages/Header";
import "./css/products.css";
import Renge from "./components/Reng";
import Footer from "../MainLanding/pages/Footer";
import ProductItem from "./components/ProductItem";
import Sort from "./components/Sort";

function Prod() {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [values, setValues] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState(null);
  const [activeSort, setActiveSort] = useState(false);

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
    const filteredByCategory = products.filter(
      (item) => item.catigory === type
    );

    const filteredByValues = filteredByCategory.filter((item) => {
      const parsCost = parseFloat(item.cost.replace(/[ ,]/g, ""));
      const cost = Number(parsCost);
      return cost >= values[0] && cost <= values[1];
    });

    let sortedProducts = [...filteredByValues];

    if (sortBy === "priceAscending") {
      sortedProducts.sort((a, b) => {
        const costA = parseFloat(a.cost.replace(/[ ,]/g, ""));
        const costB = parseFloat(b.cost.replace(/[ ,]/g, ""));
        return costA - costB;
      });
    } else if (sortBy === "priceDescending") {
      sortedProducts.sort((a, b) => {
        const costA = parseFloat(a.cost.replace(/[ ,]/g, ""));
        const costB = parseFloat(b.cost.replace(/[ ,]/g, ""));
        return costB - costA;
      });
    } else if (sortBy === "stock") {
      sortedProducts.sort((a, b) => {
        if (a.discount === "" && b.discount !== "") {
          return 1;
        } else if (a.discount !== "" && b.discount === "") {
          return -1;
        }
      });
    }

    setFilteredProduct(sortedProducts);
  }, [products, type, values, sortBy]);

  const handleSort = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);
  const SortOpen = () => {
    setActiveSort(!activeSort);
  };

  return (
    <>
      {activeSort && <div className="overlay" onClick={SortOpen}></div>}
      <div className="products-list">
        <Header />
        <div className="container products_pad">
          <div className={activeSort ? "active-sort " : "products__sort"}>
            <div className="products_pad-prew">
              <h1>{type}</h1>
              <button
                className={
                  activeSort
                    ? "products_pad-prew_btn"
                    : "products_pad-prew_btn close "
                }
                onClick={SortOpen}
              >
                x
              </button>
            </div>

            <Renge values={values} setValues={setValues} />
            <Sort handleSort={handleSort} />
          </div>
          <div className="products__catalog">
            <div className="products__sorting">
              <button className="products__sorting-btn" onClick={SortOpen}>
                Отсортировать
              </button>
            </div>
            <ul className="products">
              {filteredProduct.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Prod;
