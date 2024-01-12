import React, { useEffect, useState } from "react";
import Header from "../MainLanding/pages/Header";
import "./css/products.css";
import Renge from "./components/Reng";
import Footer from "../MainLanding/pages/Footer";
import ProductItem from "./components/ProductItem";
import { useContext } from "react";
import { CustomContext } from "../utils/Context";
import Sort from "./components/Sort";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

function ProdListSerch() {
  const { inquiry } = useParams();
  const { search } = useContext(CustomContext);
  const [searchResults, setSearchResults] = useState([]);
  const [values, setValues] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const parsedSearch = JSON.parse(localStorage.getItem("search"));
    setSearchResults(parsedSearch);
  }, [search]);

  useEffect(() => {
    const filteredByValues = searchResults.filter((item) => {
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
    setSearchResults(sortedProducts);
  }, [values, sortBy]);
  const handleSort = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);
  return (
    <>
      <div className="products-list">
        <Header />
        <div className="container products_pad">
          <div className="products__sort">
            <Renge values={values} setValues={setValues} />
            <Sort handleSort={handleSort} />
          </div>
          <div className="products__catalog">
            <div className="products__sorting">
              <button className="products__sorting-btn">Отсортировать</button>
            </div>
            <div className="products__catalog-title">
              <h2>
                Все подходящие товары по вашему запросу "
                <span className="catalog-title-bold">{inquiry}</span>"
              </h2>
            </div>
            <ul className="products">
              {searchResults.map((product) => (
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

export default ProdListSerch;
