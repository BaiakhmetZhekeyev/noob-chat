import Handlebars from "handlebars";
import tpl from "./register.hbs?raw";
import "./style.scss";
import { Button } from "../../components/button/index.js";
import { Input } from "../../components/input/index.js";
import { Navigation } from "../../helpers/navigation/index.js";

export const RegisterPage = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    EmailInput: Input({
      inputClass: "input-container-primary",
      labelText: "Email",
      inputType: "email",
      inputName: "email",
    }),
    LoginInput: Input({
      inputClass: "input-container-primary",
      labelText: "Login",
      inputType: "text",
      inputName: "login",
    }),
    FirstNameInput: Input({
      inputClass: "input-container-primary",
      labelText: "First name",
      inputType: "text",
      inputName: "first_name",
    }),
    SecondNameInput: Input({
      inputClass: "input-container-primary",
      labelText: "Second name",
      inputType: "text",
      inputName: "second_name",
    }),
    Phone: Input({
      inputClass: "input-container-primary",
      labelText: "Phone",
      inputType: "text",
      inputName: "phone",
    }),
    PasswordInput: Input({
      inputClass: "input-container-primary",
      labelText: "Password",
      inputType: "password",
      inputName: "password",
    }),
    RepeatPasswordInput: Input({
      inputClass: "input-container-primary",
      labelText: "Repeat password",
      inputType: "password",
      inputName: "repeat_password",
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
