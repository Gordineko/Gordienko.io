import React from "react";

function TabletsDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Серия</li>
        <li className="description__list_item">Диагональ экрана</li>
        <li className="description__list_item">Объём SSD</li>
        <li className="description__list_item">Количество слотов M.2</li>
        <li className="description__list_item">Операционная система</li>
        <li className="description__list_item">Процэссор</li>
        <li className="description__list_item">Объем оперативной памяти</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.series}</li>
          <li className="description_data__list_item">{product.diagonal}</li>
          <li className="description_data__list_item">{product.SSD}</li>
          <li className="description_data__list_item">{product.Mslots}</li>
          <li className="description_data__list_item">{product.system}</li>
          <li className="description_data__list_item">{product.CPU}</li>
          <li className="description_data__list_item">{product.RAM}</li>
        </ul>
      </div>
    </div>
  );
}

export default TabletsDescript;
