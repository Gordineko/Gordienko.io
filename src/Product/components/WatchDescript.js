import React from "react";

function WatchDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Серия</li>
        <li className="description__list_item">Размер корпуса, мм</li>
        <li className="description__list_item">Совместимые ОС</li>
        <li className="description__list_item">Материал корпуса</li>
        <li className="description__list_item">Встроенная память</li>
        <li className="description__list_item">Год</li>
        <li className="description__list_item">Тип зарядки</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.series}</li>
          <li className="description_data__list_item">{product.size}</li>
          <li className="description_data__list_item">{product.compatible}</li>
          <li className="description_data__list_item">{product.material}</li>
          <li className="description_data__list_item">{product.memory}</li>
          <li className="description_data__list_item">{product.year}</li>
          <li className="description_data__list_item">{product.charging}</li>
        </ul>
      </div>
    </div>
  );
}

export default WatchDescript;
