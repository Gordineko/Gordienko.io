import React, { useContext, useState } from "react";
import PhoneDescript from "./PhoneDescript";
import LaptopaDescript from "./LaptopaDescript";
import TabletsDescript from "./TabletsDescript";
import HomeDescript from "./HomeDescript";
import ConsolesDescript from "./ConsolesDescript";
import WatchDescript from "./WatchDescript";
import GamesDescript from "./GamesDescript";
import PcDescript from "./PcDescript";
import { CustomContext } from "../../utils/Context";

function Presentation(props) {
  const { basket, setBasket } = useContext(CustomContext);
  const { product } = props;
  const [mainImage, setMainImage] = useState(product.img);

  const changeMainImage = (newImage) => {
    setMainImage(newImage);

    console.log("asd");
  };
  const costs = parseFloat(product.cost.replace(/[ ,]/g, ""));
  const buyin = Math.round(costs - costs * product.discount);

  console.log(buyin);
  function renderDescription() {
    switch (product.catigory) {
      case "phones":
        return <PhoneDescript product={product} />;
      case "laptops":
        return <LaptopaDescript product={product} />;
      case "tablets":
        return <TabletsDescript product={product} />;
      case "homes":
        return <HomeDescript product={product} />;
      case "consoles":
        return <ConsolesDescript product={product} />;
      case "clocks":
        return <WatchDescript product={product} />;
      case "games":
        return <GamesDescript product={product} />;
      case "computers":
        return <PcDescript product={product} />;

      default:
        return <p>Описание </p>;
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
    <section className="product__page">
      <div className="container">
        <div key={product.id} className="product__preview">
          <div className="product_photos">
            <div className="product__photo_group">
              <div
                className="product__photo usual"
                onClick={() => changeMainImage(product.img)}
              >
                <img src={product.img}></img>
              </div>
              <div
                className="product__photo usual"
                onClick={() => changeMainImage(product.img2)}
              >
                <img src={product.img2}></img>
              </div>
              <div
                className="product__photo usual"
                onClick={() => changeMainImage(product.img3)}
              >
                <img src={product.img3}></img>
              </div>
              <div
                className="product__photo usual"
                onClick={() => changeMainImage(product.img4)}
              >
                <img src={product.img4}></img>
              </div>
            </div>
            <div className="products__photo_preview">
              <img src={mainImage}></img>
            </div>
          </div>

          <div className="product__title_preview">
            <div className="product__title">
              <h2 className="product__title_name">{product.name}</h2>
              <div className="product__costs">
                <p
                  className={
                    product.discount === ""
                      ? "product__title_cost without-discount"
                      : "product__title_cost with-discount"
                  }
                >
                  {product.cost + " ₴"}
                </p>
                <p className="product__title_cost">
                  {product.discount === "" ? "" : buyin + " ₴"}
                </p>
              </div>

              <div className="product__btn_group">
                <button
                  className="product__btn basket"
                  onClick={(e) => {
                    if (BuyProduct(product, product.id, e) === false) {
                      e.preventDefault();
                    }
                  }}
                >
                  В корзину
                </button>
                <button className="product__btn buy">быстрый заказ</button>
              </div>
            </div>
            <div className="product_advert">
              <h3>Выбери сам !!!</h3>
              <span>в подарок при заказе</span>
              <div className="product_advert_btn_group">
                <button className="product__btn basket">Узнать больше</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__description">
        <div className="container">
          <div className="product__description_title">
            <span>Технические Характеристики</span>
          </div>
          {renderDescription(props)}
        </div>
      </div>
    </section>
  );
}

export default Presentation;
