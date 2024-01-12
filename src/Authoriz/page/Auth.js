import React, { useState } from "react";
import "../style/auth.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import remove from "../../MainLanding/image/icone/remove.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Поле должно быть заполнено"),
  password: Yup.string()
    .min(6, "Короткий пароль!")
    .max(50, "Много символов!")
    .required("Поле должно быть заполнено"),
});

function Auth({ AuthActive, handleClick, RegActive }) {
  const { user, setUser } = useContext(CustomContext);
  const { error, setError } = useState(false);

  function loginUser(values) {
    let User = values;
    console.log(values);

    axios
      .post("http://localhost:3330/signin", User)
      .then(({ data }) => {
        setUser({
          token: data.accessToken,
          ...data.user,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.accessToken,
            ...data.user,
          })
        );
        handleClick();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={AuthActive ? "authoriz-active" : "authoriz"}>
      <div className="authoriz__form">
        <div className="authoriz__form-prew">
          <h1>Log in</h1>
          <img onClick={handleClick} src={remove} alt="404" />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SigninSchema}
          onSubmit={(values) => {
            loginUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="authoriz__form-content">
                <label className="authoriz__email-label" htmlFor="email">
                  Email
                </label>
                <Field
                  className="authoriz__input email"
                  name="email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="authoriz__email-msg">{errors.email}</div>
                ) : null}
                <label className="authoriz__password-label" htmlFor="email">
                  Password
                </label>
                <Field className="authoriz__input password" name="password" />
                {errors.password && touched.password ? (
                  <div className="authoriz__password-msg">
                    {errors.password}
                    {error ? "" : "asd"}
                  </div>
                ) : null}
                <button className="authoriz__button" type="submit">
                  Войти
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <span className="authoriz__register-btn" onClick={RegActive}>
          Зарегестрироваться
        </span>
      </div>
    </div>
  );
}

export default Auth;
