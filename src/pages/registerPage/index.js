import Handlebars from "handlebars";
import tpl from "./register.hbs?raw";
import "./style.scss";
import { Button } from "../../components/button/index.js";
import { Input } from "../../components/input/index.js";
import { Navigation } from "../../helpers/navigation/index.js";

export const RegisterPage = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    email: Input({
      inputClass: "input-container-primary",
      labelText: "Email",
      inputType: "email",
    }),
    login: Input({
      inputClass: "input-container-primary",
      labelText: "Login",
      inputType: "text",
    }),
    first_name: Input({
      inputClass: "input-container-primary",
      labelText: "First name",
      inputType: "text",
    }),
    second_name: Input({
      inputClass: "input-container-primary",
      labelText: "Second name",
      inputType: "text",
    }),
    phone: Input({
      inputClass: "input-container-primary",
      labelText: "Phone",
      inputType: "text",
    }),
    password: Input({
      inputClass: "input-container-primary",
      labelText: "Password",
      inputType: "password",
    }),
    repeat_password: Input({
      inputClass: "input-container-primary",
      labelText: "Repeat password",
      inputType: "password",
    }),
    RegisterBtn: Button({
      buttonText: "Register",
      buttonStyle: "button__contained",
    }),
    LoginBtn: Button({
      buttonText: "Login",
      buttonStyle: "button__secondary",
    }),
  });
};
