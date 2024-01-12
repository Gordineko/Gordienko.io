import React, { useState } from "react";
import "./style/catalog.css";
import iphone from "../../image/products/iphone.png";
import mac from "../../image/products/mac.png";
import ipad from "../../image/products/ipad.png";
import game from "../../image/products/games.png";
import home from "../../image/products/home.png";
import xbox from "../../image/products/xbox.png";
import whatch from "../../image/products/whatch.png";
import pc from "../../image/products/pc.png";

function Сatalog() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(href) {
    window.location.href = `${href}`;
  }
  function openCatalog() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="catalog">
      <div className="catalog__title">
        <h2>Каталог товаров</h2>
        <span onClick={openCatalog}>{isOpen ? "Скрыть" : "Показать всё"}</span>
      </div>
      <div className={isOpen ? "catalog__list open" : "catalog__list close"}>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/phones")}
        >
          <span>Смартфоны</span>
          <img src={iphone} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/laptops")}
        >
          <div className="list_item-name">
            <span>Планшеты</span>
          </div>
          <img src={ipad} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/tablets")}
        >
          <div className="list_item-name">
            <span>Ноутбуки</span>
          </div>
          <img src={mac} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/homes")}
        >
          <div className="list_item-name">
            <span>Аксесуары</span>
          </div>
          <img src={home} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/consoles")}
        >
          <div className="list_item-name">
            <span>Игровые приставки</span>
          </div>
          <img src={xbox} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/clocks")}
        >
          <div className="list_item-name">
            <span>Умные часы</span>
          </div>
          <img src={whatch} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/games")}
        >
          <div className="list_item-name">
            <span>Игры</span>
          </div>
          <img src={game} alt="404" />
        </div>
        <div
          className="catalog__list_item"
          onClick={() => handleClick("/computers")}
        >
          <div className="list_item-name">
            <span>Компьютеры</span>
          </div>
          <img src={pc} alt="404" />
        </div>
      </div>
    </section>
  );
}

export default Сatalog;
