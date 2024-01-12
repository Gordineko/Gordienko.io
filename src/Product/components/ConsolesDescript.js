import React from "react";

function ConsolesDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Процессор</li>
        <li className="description__list_item">Оперативная память</li>
        <li className="description__list_item">Видеопамять</li>
        <li className="description__list_item">Габариты</li>
        <li className="description__list_item">Платформа</li>
        <li className="description__list_item">Страна производитель</li>
        <li className="description__list_item">Игры в комплекте</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.CPU}</li>
          <li className="description_data__list_item">{product.RAM}</li>
          <li className="description_data__list_item">{product.storage}</li>
          <li className="description_data__list_item">{product.dimensions}</li>
          <li className="description_data__list_item">{product.model}</li>
          <li className="description_data__list_item">
            {product.manufacturer}
          </li>
          <li className="description_data__list_item">{product.games}</li>
        </ul>
      </div>
    </div>
  );
}

export default ConsolesDescript;
