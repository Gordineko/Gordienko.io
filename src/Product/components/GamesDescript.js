import React from "react";

function GamesDescript(props) {
  const { product } = props;
  return (
    <div className="product__description_info">
      <ul className="description__list">
        <li className="description__list_item">Платформа</li>
        <li className="description__list_item">Тип носителя</li>
        <li className="description__list_item">Жанр</li>
        <li className="description__list_item">Локализация</li>
        <li className="description__list_item">Особенности</li>
        <li className="description__list_item">Издатель</li>
      </ul>
      <div className="description_info_data">
        <ul className="description_data__list">
          <li className="description_data__list_item">{product.platform}</li>
          <li className="description_data__list_item">{product.carrier}</li>
          <li className="description_data__list_item">{product.genre}</li>
          <li className="description_data__list_item">
            {product.localization}
          </li>
          <li className="description_data__list_item">{product.publisher}</li>
        </ul>
      </div>
    </div>
  );
}

export default GamesDescript;
