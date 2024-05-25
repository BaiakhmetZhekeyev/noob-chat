import Handlebars from "handlebars";
import tpl from "./button.hbs?raw";
import "./style.scss";

export const Button = (props) => {
  return Handlebars.compile(tpl)(props);
};
