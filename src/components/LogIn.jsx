/* eslint-disable no-unused-vars */
import { Formik, Field, Form } from "formik";
import Styles from "./loginStyle.module.css";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  function handelValidate(values) {
    const errors = {};

    if (!values.username) {
      errors.username = "Username Is required";
    }
    if (!values.pass) {
      errors.pass = "Password Is required";
    }
    return errors;
  }
  const handelSubmit = (values) => {
    localStorage.setItem("username", values.username);
    navigate("/user");
  };
  return (
    <Formik
      initialValues={{ pass: "", username: "" }}
      validate={handelValidate}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={handelSubmit}
    >
      {({ errors }) => (
        <Form className={Styles.form}>
          <h1 style={{ color: "#9c27b0cf" }}>Welcome </h1>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className={Styles.field}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}

          <Field
            type="password"
            name="pass"
            placeholder="*******"
            className={Styles.field}
          />
          {errors.pass && <span style={{ color: "red" }}>{errors.pass}</span>}
          <input type="submit" value="Submit" className={Styles.submitBtn} />
        </Form>
      )}
    </Formik>
  );
}
