import React, { useEffect } from "react";

import like from "../../image/icone/like (2).png";
import shop from "../../image/icone/shopping-cart.png";
import stat from "../../image/icone/statistics.png";
import serch from "../../image/icone/search.png";
import log from "../../image/icone/dominoes.png";
import menu from "../../image/icone/menu.png";
import "./style/content.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CustomContext } from "../../../utils/Context";

function Content({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearch, favored, count } = useContext(CustomContext);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState({});
  const [favoredLenght, setFavoredLenght] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    const products = JSON.parse(localStorage.getItem("search"));
    if (products) {
      setSearch(products);
    }
  }, []);

  useEffect(() => {
    setFavoredLenght(favored.length);
  }, [favored]);

  const fetchData = () => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setProducts([]);
      return;
    }

    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
  };
  const oppenSerchProduct = (catigory, name) => {
    navigate(`/${catigory}/${name}`);
    setSearchTerm("");
    setProducts([]);
  };

  function fetchProduct() {
    if (products.length > 0) {
      localStorage.removeItem("search");
      setSearch(products);
      setProducts([]);
      navigate(`/search/${searchTerm}`);
      localStorage.setItem("search", JSON.stringify(products));
    } else return;
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      fetchProduct();
    }
  }

  return (
    <section className="header-content-undrilne">
      {products.length > 0 && (
        <div
          onClick={() => {
            setProducts([]);
          }}
          className="overlay__inp"
        ></div>
      )}
      <div className="header__content container">
        <div
          className="header__logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="header__logo__burger-menu"
            onClick={handleClick}
            src={menu}
            alt="sd"
          />
          <span className="logo">DOM1STORE</span>
        </div>
        <div className="header__contact">
          <p>Бесплатно по УК</p>
          <p className="txt_bolt">+38 (067) 432-43 </p>
        </div>
        <div className="header__hours">
          <p>2018danil@gmail.com</p>
          <p className="txt_bolt">9:00 - 21:00</p>
        </div>
        <div className="header__search">
          <input
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" onClick={fetchProduct}>
            <img src={serch} alt="sd" />
          </button>

          {products.length > 0 && (
            <div className="header__search-products">
              {products.map((item) => {
                const costs = parseFloat(item.cost.replace(/[ ,]/g, ""));
                const buyin = Math.round(costs - costs * item.discount);
                const percent = item.discount * 100;
                return (
                  <div
                    className="search-product"
                    key={item.id}
                    onClick={() => {
                      oppenSerchProduct(item.catigory, item.name);
                    }}
                  >
                    <img
                      className="search-product__img"
                      src={item.img}
                      alt="404"
                    />
                    <div className="search-product__content">
                      <div className="search-product__txt-name">
                        <span>{item.name}</span>
                      </div>

                      <div className="search-product__cost">
                        <span className="search-product__txt-cost">
                          {item.cost}
                        </span>
                        <span className="search-product__txt-sell">
                          {percent === 0 ? "" : item.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="header__work">
          <button className="header__work__btn-stat">
            <img src={stat} alt="404" />
          </button>
          <button
            className="header__work__btn-shop"
            onClick={() => {
              navigate("/basket");
            }}
          >
            <img src={shop} alt="404" />
            <div
              className={
                count > 0
                  ? "header__work_shop-img-after"
                  : "header__work_shop-img-after off"
              }
            >
              {count}
            </div>
          </button>
          <button
            className="header__work__btn-like"
            onClick={() => {
              navigate("/like");
            }}
          >
            <img src={like} alt="404" />
            <div
              className={
                favoredLenght != ""
                  ? "header__work-img-after"
                  : "header__work-img-after off"
              }
            >
              {favoredLenght}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Content;
