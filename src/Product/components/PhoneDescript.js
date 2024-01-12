import React from "react";
import "../style/description.css";
function PhoneDescript(props) {
  const { product } = props;

  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Серия</li>
        <li className="description__list_item">Диагональ экрана</li>
        <li className="description__list_item">Герцовка</li>
        <li className="description__list_item">Тип матрицы</li>
        <li className="description__list_item">Встроенная память</li>
        <li className="description__list_item">Процэссор</li>
        <li className="description__list_item">Основная камера</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.series}</li>
          <li className="description_data__list_item">{product.diagonal}</li>
          <li className="description_data__list_item">{product.hz}</li>
          <li className="description_data__list_item">{product.matrix}</li>
          <li className="description_data__list_item">{product.builtmemory}</li>
          <li className="description_data__list_item">{product.CPU}</li>
          <li className="description_data__list_item">{product.camera}</li>
        </ul>
      </div>
    </div>
  );
}

export default PhoneDescript;
