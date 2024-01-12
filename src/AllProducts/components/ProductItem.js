import React, { useEffect, useState } from "react";
import stat from "../../MainLanding/image/icone/statistic.png";
import blackLike from "../../MainLanding/image/icone/black-heart.png";
import purpLike from "../../MainLanding/image/icone/purp-heart.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";
import axios from "axios";

function ProductItem(props) {
  const { favored, setFavored, basket, setBasket } = useContext(CustomContext);
  const [isFavored, setisFavored] = useState(false);
  const [focus, setFocus] = useState();

  const { product } = props;

  const navigate = useNavigate();

  const costs = parseFloat(product.cost.replace(/[ ,]/g, ""));
  const buyin = Math.round(costs - costs * product.discount);
  const percent = product.discount * 100;

  useEffect(() => {
    const foundItem = favored.find((item) => item.id === product.id);
    setisFavored(foundItem !== undefined);
  }, [favored, product]);

  const handleButtonHover = (buttonIndex) => {
    setFocus(buttonIndex);
  };

  function handleClick(catigory, name) {
    navigate(`/${catigory}/${name}`);
  }

  function likeProduct(product, buttonIndex, e) {
    e.stopPropagation();
    setisFavored(buttonIndex);
    if (typeof product === "object" && product !== null) {
      const isAlreadyLiked = favored.some(
        (favProduct) => favProduct.id === product.id
      );

      if (!isAlreadyLiked) {
        setFavored([...favored, product]);
        localStorage.setItem("likes", JSON.stringify([...favored, product]));
      }
    }
  }
  function BuyProduct(product, buttonIndex, e) {
    e.stopPropagation();

    if (typeof product === "object" && product !== null) {
      const existingProductIndex = basket.findIndex(
        (basketProduct) => basketProduct.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedBasket = [...basket];
        updatedBasket[existingProductIndex].count += 1;
        setBasket(updatedBasket);
        localStorage.setItem("baskets", JSON.stringify(updatedBasket));
      } else {
        const newProduct = { ...product, count: 1 };
        setBasket([...basket, newProduct]);
        localStorage.setItem(
          "baskets",
          JSON.stringify([...basket, newProduct])
        );
      }
    }
  }

  return (
    <div
      className="prod"
      onClick={() => handleClick(product.catigory, product.name)}
      onMouseEnter={(e) => {
        handleButtonHover(product.id);
      }}
      onMouseLeave={(e) => {
        setFocus(!focus);
      }}
    >
      <div className="product__conteiner_img">
        <img
          src={focus === product.id ? product.img2 : product.img}
          alt="404"
        />
      </div>
      <div className="product__content">
        <div className="product__titles">
          <span>{product.name}</span>
        </div>
        <div className="product__costs">
          <p
            className={
              product.discount === ""
                ? "product__cost without-discount"
                : "product__cost with-discount"
            }
          >
            {product.cost + " ₴"}
          </p>
          <p className="product__discount">
            {product.discount === "" ? "" : buyin + " ₴"}
          </p>
        </div>
        <div className="product_item_do">
          <button
            className="product__btn"
            onClick={(e) => {
              if (BuyProduct(product, product.id, e) === false) {
                e.preventDefault();
              }
            }}
          >
            В корзину
          </button>
          <img src={stat} alt="404" />
          <img
            src={isFavored ? purpLike : blackLike}
            alt="404"
            onClick={(e) => {
              if (likeProduct(product, product.id, e) === false) {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div
        className={
          percent === 0 || focus === product.id
            ? "prod__description"
            : "prod__description hover"
        }
      >
        <span>{percent + "%"}</span>
      </div>
    </div>
  );
}

export default ProductItem;
