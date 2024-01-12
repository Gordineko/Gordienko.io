import React, { useContext, useState } from "react";
import "../style/profile.css";
import avatar from "../../MainLanding/image/icone/avatar.png";
import product from "../../MainLanding/image/icone/product.png";
import mail from "../../MainLanding/image/icone/mail.png";
import bas from "../../MainLanding/image/icone/bus.png";
import lock from "../../MainLanding/image/icone/door-handle.png";
import bot from "../../MainLanding/image/icone/arrow.png";
import botpurp from "../../MainLanding/image/icone/bottom-purpur.png";
import { CustomContext } from "../../utils/Context";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(CustomContext);
  const [isOpen, setIsOper] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const logOutUser = () => {
    setUser({
      email: "",
    });
    localStorage.removeItem("user");
    navigate("/");
  };

  const openContent = (buttonIndex) => {
    setIsOper((prevState) => ({
      ...prevState,
      [buttonIndex]: !prevState[buttonIndex],
    }));
  };

  return (
    <section className="profile">
      <h1>Личные данные</h1>
      <ul className="profile__list">
        <li
          className={
            isOpen[1] ? "profile__list-item-open" : "profile__list-item "
          }
          onClick={() => {
            openContent(1);
          }}
        >
          <div className="list-item__content">
            <img src={avatar} alt="404" />
            <span>Личные данный</span>
          </div>
          <img src={bot} className="list-item__img-bot" alt="404" />
        </li>
        <div
          className={
            isOpen[1] ? "profile__item-content-open " : "profile__item-content "
          }
        >
          <ul className="item-content__list">
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Фамилия</span>
              <span>{user.surname}</span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Имя</span>
              <span>{user.name}</span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Отчество</span>

              <span>
                {user.secondname === undefined ? "-" : user.secondname}
              </span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Дата рождения</span>
              <span>{user.date === undefined ? "-" : user.date}</span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Пол</span>
              <span>{user.pol === undefined ? "-" : user.pol}</span>
            </li>
          </ul>
          <button className="item-content__list-button">Редактировать</button>
        </div>
        <li
          className={
            isOpen[2] ? "profile__list-item-open" : "profile__list-item "
          }
          onClick={() => {
            openContent(2);
          }}
        >
          <div className="list-item__content">
            <img src={product} alt="404" />
            <span>Мои полученые заказы</span>
          </div>
          <img src={bot} className="list-item__img-bot" alt="404" />
        </li>
        <div
          className={
            isOpen[2] ? "profile__item-content-open " : "profile__item-content "
          }
        >
          <ul className="item-content__list">
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                {user.name} {user.surname}
              </span>
              <span>{user.phoneNamber}</span>
            </li>
          </ul>
          <button className="item-content__list-button">Редактировать</button>
        </div>
        <li
          className={
            isOpen[3] ? "profile__list-item-open" : "profile__list-item "
          }
          onClick={() => {
            openContent(3);
          }}
        >
          <div className="list-item__content">
            <img src={mail} alt="404" />
            <span>Контакты</span>
          </div>
          <img src={bot} className="list-item__img-bot" alt="404" />
        </li>
        <div
          className={
            isOpen[3] ? "profile__item-content-open " : "profile__item-content "
          }
        >
          <ul className="item-content__list">
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                Подтверждённый телефон
              </span>
              <span>{user.phoneNamber}</span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                Дополнительный телефон
              </span>
              <span>
                {user.secondPhoneNamber === undefined
                  ? "-"
                  : user.secondPhoneNamber}
              </span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                электронная почта
              </span>
              <span>{user.email}</span>
            </li>
          </ul>
          <button className="item-content__list-button">Редактировать</button>
        </div>
        <li
          className={
            isOpen[4] ? "profile__list-item-open" : "profile__list-item "
          }
          onClick={() => {
            openContent(4);
          }}
        >
          <div className="list-item__content">
            <img src={bas} alt="404" />
            <span>Адрес доставки</span>
          </div>

          <img src={bot} className="list-item__img-bot" alt="404" />
        </li>
        <div
          className={
            isOpen[4] ? "profile__item-content-open " : "profile__item-content "
          }
        >
          <ul className="item-content__list">
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">Ваш адрес</span>
              <span>{user.adress === undefined ? "-" : user.adress}</span>
            </li>
          </ul>
          <button className="item-content__list-button">Редактировать</button>
        </div>
        <li
          className={
            isOpen[5] ? "profile__list-item-open" : "profile__list-item "
          }
          onClick={() => {
            openContent(5);
          }}
        >
          <div className="list-item__content">
            <img src={lock} alt="404" />
            <span>Логин</span>
          </div>
          <img src={bot} className="list-item__img-bot" alt="404" />
        </li>
        <div
          className={
            isOpen[5] ? "profile__item-content-open " : "profile__item-content "
          }
        >
          <ul className="item-content__list">
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                Логин (телефон)
              </span>
              <span>{user.phoneNamber}</span>
            </li>
            <li className="item-content__list-item">
              <span className="item-content__list-item-txt">
                Логин (электронная почта)
              </span>
              <span>{user.email}</span>
            </li>
          </ul>
          <button className="item-content__list-button">Редактировать</button>
        </div>
      </ul>
      <button className="item-content__list-button" onClick={logOutUser}>
        Выйти с аккаунта
      </button>
    </section>
  );
}

export default Profile;
