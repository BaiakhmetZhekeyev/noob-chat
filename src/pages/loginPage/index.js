import Handlebars from "handlebars";
import tpl from "./login.hbs?raw";
import "./style.scss";
import { Button } from "../../components/button/index.js";
import { Input } from "../../components/input/index.js";
import { Navigation } from "../../helpers/navigation/index.js";

export const LoginPage = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    LoginInput: Input({
      inputClass: "input-container-primary",
      labelText: "Login",
      inputType: "text",
    }),
    PasswordInput: Input({
      inputClass: "input-container-primary",
      labelText: "Password",
      inputType: "password",
    }),
    LoginBtn: Button({
      buttonText: "Login",
      buttonStyle: "button__contained",
    }),
    RegisterBtn: Button({
      buttonText: "Register",
      buttonStyle: "button__secondary",
    }),
  });
};
