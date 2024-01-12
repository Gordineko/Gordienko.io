import React from "react";

function HomeDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Вес, кг</li>
        <li className="description__list_item">Комплект поставки</li>
        <li className="description__list_item">Цвет</li>
        <li className="description__list_item">Страна регистрации бренда</li>
        <li className="description__list_item">Гарантия</li>
        <li className="description__list_item">Страна-производитель товара</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.weight}</li>
          <li className="description_data__list_item">{product.set}</li>
          <li className="description_data__list_item">
            {product.registration}
          </li>
          <li className="description_data__list_item">{product.color}</li>
          <li className="description_data__list_item">{product.guarantee}</li>
          <li className="description_data__list_item">{product.origin}</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeDescript;
