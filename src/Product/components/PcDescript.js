import React from "react";

function PcDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Видеокарта</li>
        <li className="description__list_item">Чипсет материнской платы</li>
        <li className="description__list_item">Объем оперативной памяти</li>
        <li className="description__list_item">Мощность БП</li>
        <li className="description__list_item">Размеры</li>
        <li className="description__list_item">Объем SSD</li>
        <li className="description__list_item">Гарантия</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.video}</li>
          <li className="description_data__list_item">{product.chipset}</li>
          <li className="description_data__list_item">{product.RAM}</li>
          <li className="description_data__list_item">{product.powerBP}</li>
          <li className="description_data__list_item">{product.dimensions}</li>
          <li className="description_data__list_item">
            {product.SSD}
          </li>
          <li className="description_data__list_item">{product.guarantee}</li>
        </ul>
      </div>
    </div>
  );
}

export default PcDescript;
