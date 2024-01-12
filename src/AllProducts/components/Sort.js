import React from "react";
import "../css/sort.css";

function Sort({ handleSort }) {
  return (
    <div className="products__memory">
      <h2>Отсортировать</h2>
      <ul>
        <li
          className="products__memory-sort__list-item"
          onClick={() => handleSort("priceAscending")}
        >
          <p>По возрастанию</p>
        </li>
        <li
          className="products__memory-sort__list-item"
          onClick={() => handleSort("priceDescending")}
        >
          <p>По убыванию</p>
        </li>
        <li
          className="products__memory-sort__list-item"
          onClick={() => handleSort("stock")}
        >
          <p>Сначала акции</p>
        </li>
      </ul>
    </div>
  );
}

export default Sort;
